import React, { Fragment } from 'react';

function Topico4() {   

  const store = ['','','']

  const renderColumns = (element, key) => {
    return (
      <Fragment key={`column.${key}`}>
        <Column />
      </Fragment>
    )
  } 
    

  function Column() {
    return(
      <tbody>
        <tr>
          <td>Tênis</td>
          <td>Roupa</td>      
        </tr>
      </tbody>      
    )
  }
  
  return (
  
    <>
      
      <h3>Tópico 4 - Fragments</h3>

      <table>        
        {store.map(renderColumns)}        
      </table>
        
    </>        
    )
}

export default Topico4