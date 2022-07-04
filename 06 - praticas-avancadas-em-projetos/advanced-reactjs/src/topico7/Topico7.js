import React from 'react';
import PetShop from './PetShop';

function Topico7(){

  const handleClick = () => {
    console.log('Iniciando o banho!!!')
  }

  return(
    <div>
        <h3>Tópico 7 - Typechecking</h3>  

        <PetShop  
          customerName='Marcelo'
          onClick={handleClick}
        />
        
    </div>
  )

}

  

export default Topico7