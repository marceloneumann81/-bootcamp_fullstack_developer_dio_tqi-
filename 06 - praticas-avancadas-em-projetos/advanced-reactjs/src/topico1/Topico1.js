import React, {Component} from 'react';
import Twitter from './Twitter1';



class Topico1 extends Component { 

  state = {
    loading: false,
    actived: true
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading:true
      })      
    }, 3000);
  }
  
  onRemove = () =>{
    this.setState({
      actived: false
    })
  }
    
  
   
  render() {
    
    const post = [
      {
      title: 'xpto',
      description: 'foo'
      },{
      title: 'xpto1',
      description: 'foo1'
      }
    ]    
    
    return (
      <div>
        <h3>Tópico 1 - Ciclos de vida</h3>
        <button onClick={this.onRemove}>Remover componente</button>
        {this.state.actived && (
          <Twitter posts={post} loading={this.state.loading}/>
        )}        
      </div>      
    )
  }
}

export default Topico1