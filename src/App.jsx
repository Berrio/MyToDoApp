import { useState } from 'react'
import StoreProvider from './components/StoreProvider'
import './App.css'
import ListOfToDo from './components/ListOfToDo'

function App() {

  return (
    <StoreProvider>
     <p>hello </p> 
     <ListOfToDo />


    </StoreProvider>
  )
}

export default App
