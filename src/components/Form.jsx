import React, { useContext, useState, useRef } from "react";
import { Store } from './StoreProvider'

const Form = () => {

    const formRef = useRef(null)

  
    const onAdd = async (event) => {
        event.preventDefault();
        console.log(title)
        console.log(message)
        if (title && message) {
            const noteFromForm={
                title,
                message,
                done:false
            }
            let noteSavePromise = await fetch(`http://localhost:8081/api/save/note`,
                {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body:JSON.stringify(noteFromForm)
        })

        let noteSaved = await noteSavePromise.json();
        console.log(noteSaved)
            dispatch({
                type: 'add-note',
                payload: noteSaved
            })
            formRef.current.reset();
        }
    }

    const { state, dispatch } = useContext(Store)

    const [title, setTitle] = useState('');

    const [message, setMessage] = useState('');

    const addingTitle = (e) => {
        setTitle(e.target.value)
    }
    const addingMessage = (e) => {
        setMessage(e.target.value)
    }


    return (
        <form ref={formRef}>
            <label >title</label>
            <input onChange={addingTitle} type="text" name="title" />
            <label >Message</label>
            <input onChange={addingMessage} type="text" name="message" />
            <button onClick={onAdd}>Add note</button>
        </form>
    )
}

export default Form;