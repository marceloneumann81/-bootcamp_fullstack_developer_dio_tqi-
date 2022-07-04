import React, {useState} from 'react';
import Button from '../components/Button'
import Calc from '../components/Calc';


function Topico9(){  

  const [value,setValue] = useState(0)
  const [min,setMin] = useState(0)
  const [max,setMax] = useState(30)

  const handleClick = () => {
    setMin(10)
    
  }

  const handleCalc = ({target}) => {
    const value = target.value
    setValue (min + max + value)
  }

  return(
    <div>
      
      <h3>Tópico 9 - Dumb Components</h3>        
      
      <div>
        <Button onClick={handleClick} >
          Adicionar ao carrinho
        </Button>
      </div>
      
      <div>
        <h4>Valor calculado: {value}</h4>
        <Calc
            min={min}
            max={max}
            onChange={handleCalc}
        />
        
      </div>


        
    </div>
  )

}  

export default Topico9