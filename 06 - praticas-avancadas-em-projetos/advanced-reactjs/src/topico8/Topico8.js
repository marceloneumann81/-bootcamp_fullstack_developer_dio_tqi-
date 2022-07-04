import React, {useEffect, useRef, useState} from 'react';


function Topico8(){

  const inputRef = useRef()
  const count = useRef(1)
  const [value, setValue] = useState(false)

  const handleClick = () => {
    inputRef.current.focus()  
    console.log('inputRef.current ', inputRef.current)
  }


   useEffect(() => {
     setTimeout(() => {
      count.current = 300
      setValue(true)
     },3000)
   })

  return(
    <div>
      <h3>Tópico 8 - Refs e DOM</h3>  

      <h4>Valor de count: {count.current}</h4>
      Foco: <input ref={inputRef} />
      <br />
      <br />
      <br />
      <button onClick={handleClick} >Focar</button>
        
        
    </div>
  )

}

  

export default Topico8