// import { useState } from 'react'
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(1);
  // Nyoba useEffect Fuction
  useEffect(() => {
    console.log("Compoment meng mount");
    // Nyoba Cleanup Function
    return () => {
      console.log("Meng Clean Up");
    }
  }, [counter]);

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter+1)}> Tambah </button>
    </>
  )
}

export default App
