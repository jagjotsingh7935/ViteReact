import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter,setCounter] = useState(10)

  // let counter = 15

  const addValue = () => {
    // console.log("Clicked",counter)
    // counter = counter + 1;
    if(counter<20){
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)
    //Jinni mrji vaar likh do pathes hi chlu ga ikk ikk kr ke


    // Ehda likhn naal 3 values ikk vrr ch vdhn giyan ----
    // setCounter(prevcounter => prevcounter+1)
    // setCounter(prevcounter => prevcounter+1)
    // setCounter(prevcounter => prevcounter+1)
    }
  }

  const removeValue = () =>{

    if(counter >0){

    setCounter(counter-1);
    }

  }
 

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}>
        Add Value</button>
      <br />
      <button
      onClick={removeValue}>
        Remove Value</button>
    </>
  )
}

export default App


