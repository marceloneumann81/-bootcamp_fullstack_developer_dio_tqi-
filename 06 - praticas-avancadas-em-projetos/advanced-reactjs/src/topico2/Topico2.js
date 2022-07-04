import React, {Component} from 'react';
import Twitter2 from '../topico2/Twitter2';



class Topico2 extends Component { 

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
        <h3>Tópico 2 - Hooks</h3>
        <button onClick={this.onRemove}>Remover componente</button>
        {this.state.actived && (
          <Twitter2 posts={post} loading={this.state.loading}/>
        )}        
      </div>      
    )
  }
}

export default Topico2