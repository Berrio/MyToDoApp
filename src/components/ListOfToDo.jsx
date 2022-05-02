import React, { useContext } from "react";
import { Store } from "./StoreProvider";

const ListOfToDo =()=>{

    const {state,dispatch}= useContext(Store)
    return(
        <div>
            <ul>
            {state.listOfNotes.map(note =>{
                return <li style={note.done? {textDecoration: 'line-through'}:{}}key={note.id}>
                    {note.title}<br />
                    {note.message}<br />
                </li>
            })}
            </ul>
        </div>
    )
}

export default ListOfToDo   