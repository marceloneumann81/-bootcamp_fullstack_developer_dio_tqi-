import React, {Component} from 'react';
import Counter from './Counter';





const Buttons = ({increment, decrement, count}) => {
  return(
    <div>
      <div>
        <h4>Valor atual do contador: {count}</h4>
        <div>
          <button onClick={decrement} > Remover 1</button>          
        </div>
        <div>
          <button onClick={increment} > Adicionar 1</button>
        </div>
      </div>
    </div>
  )

}

class Topico6 extends Component {   

  render() {
    return(
      <div>
        <h3>Tópico 6 - Render Props</h3>         

        <Counter render={ 
          ({increment, decrement, count}) => (
            <Buttons 
              increment={increment}
              decrement={decrement}
              count = {count}
            />
          )         
        }>
        </Counter>        
      </div>
    )
  }
}

export default Topico6