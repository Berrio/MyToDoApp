import React from "react";

function reducer(state,action){
    switch(action.type){
        case 'add-note':
            const newNote={
                id:Math.floor(Math.random()*100),
                message:action.payload.message,
                title:action.payload.title,
                done:false
            }
            const newListOfNotesAddedOne=[...state.listOfNotes,newNote]
            const newStateAddNote={
                ...state,listOfNotes:newListOfNotesAddedOne
            }
            return newStateAddNote
        case 'remove-note':
            const newListofNotesWithoutPayloadNote = state.listOfNotes.filter(note => note.id !== action.payload.id)
            const newStateWithNoteDeleted = { ...state, listOfNotes: newListofNotesWithoutPayloadNote}
            return newStateWithNoteDeleted
        case 'update-note':
            const newListofNotes = state.listOfNotes.filter(note=>note.id !== action.payload.id)
            const newListofNoteswithModification=[...newListofNotes,action.payload]
            const newStateModifiedCheckbox = { ...state, listOfNotes: newListofNoteswithModification }
            return newStateModifiedCheckbox
            
    }
}

export default reducer;