import React, {useState, useEffect} from 'react';
import Form from './Form';
import { ThemeContext, themes } from './Theme';

function Topico3() {   
  
  const [token, setToken] = useState()

  useEffect(() => {
    setTimeout(() => {
      setToken('ads987fa98sd7f989887ddd')
    }, 4000)
  },[setToken])

    return (
      <div style={{padding: '50px'}} >
        <h3>Tópico 3 - Context API</h3>
        <ThemeContext.Provider value={{...themes.primary, token}}>
            
          <Form />          

        </ThemeContext.Provider> 
      </div>
      
        
    )
}


export default Topico3