import React, {Fragment} from 'react';

function Topico5() {   

  const store = [{
      type: 'Roupa'
    },{
      type: 'Calçado'
    },{
      type: 'Camiseta'
    }
  ]

  function Column({type}){ //simular erro para acionar o ErrorBoundary em {type}
    
    return(
      <tbody>
        <tr>
          <td>{type.valorQue.naoExiste}</td> 
        </tr>      
      </tbody>
    )
  }

  const renderColumns = (element, key) => {    
    return(
      <Fragment key={`column.${key}`}>
        <Column type={element.type} />
      </Fragment>    

    )
  }

  
  
  return (
  
    <>
      <h3>Tópico 5 - Error Boundaries</h3>
      
      <table>
      
        {store.map(renderColumns)}
          
      </table>        
    </>
    )
}

export default Topico5