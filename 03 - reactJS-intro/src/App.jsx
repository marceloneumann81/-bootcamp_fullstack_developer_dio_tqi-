import React, {Component} from "react";

const buttonA = <button>Histórico</button>

const buttonB = <button>Cadastrar cliente</button>

const hasCustomer = false;

const listCustomer = [
    {
        id: 1,
        name: 'Marcelo Neumann',
        skills: ['React', 'Node', 'CSS']
    },{
        id: 2,
        name: 'Amanda Cominese',
        skills: ['HTML', 'Java']
    },{
        id: 3,
        name: 'Alicia Grisoski',
        skills: ['Roblox', 'The Sims', 'Tabuada']
    },{
        id: 4,
        name: 'Uber Khaleesi',
        skills: ['Comer', 'Beber', 'Dormir']
    }
]



const App_condicional = () => {  

    const renderShowHistory = () => {        
        return(
            <div>
                <p>Clique no botão abaixo para visualizar o histórico de clientes</p>
                { buttonA }    
            </div> 
        )              
    }

    const renderAddCustomer = () => {
        return(
            <div>
                <p>Clique abaixo para cadastrar o cliente</p>
                { buttonB }
            </div>
        )
    }   

        
    const showCustomer = () => {
        if (!hasCustomer) return null

        return(
            <div>
                <h5>Nome do Cliente: Marcelo Neumann</h5>
            </div>
        )
    }
    
    return(
        <div>
            <h2>Renderização condicional</h2>             
            {hasCustomer ? renderShowHistory() : renderAddCustomer()}
            <div>
                {showCustomer()}
            </div>
            
        </div>
    )
    
}

const App_listasEchaves = () => {

    const renderCustomers = (customer, index) =>{
        return(
            <div key={`customer=${customer.id}`}>
                <b><li >{customer.name}</li></b>
                {customer.skills.map(renderSkills)}
            </div>            
        )
    }

    const renderSkills = (skill, index) => {
        return(
            <div style={{paddingLeft: '30px'}}key={`skill=${index}`}>
                <li >{skill}</li>            
            </div>
        )
    }

    return(
        <div>
            <h2>Listas e Chaves</h2>
            <div>
                <p><b>Imprimir lista</b></p>
                <ul>{listCustomer.map(renderCustomers)}</ul>                   
            </div>
        </div>
    )
}

const App = () => {

    const name = 'Marcelo Neumann'

    const Button = <button onClick={() => showEvent()}>Mostrar evento</button>

    const deleteButton = <button onClick={() => showEvent()}>Mostrar evento</button>

    const handleChange = (e) => {
        const {value} = e.target
        console.log(value)
        
    }
    
    const showEvent = () => {
        console.log("evento clicado")          
        alert(name)
        
    }
    
    
    const renderCustomers2 = (customer, index) =>{
        return(
            <div key={`customer=${customer.id}`}>
                <b><li >{customer.name}<button onClick={(e) => handleClick(e,customer.id)} >Deletar Cliente x</button></li></b>
                {customer.skills.map(renderSkills2)}
            </div>            
        )
    }

    const renderSkills2 = (skill, index) => {
        return(
            <div style={{paddingLeft: '30px'}}key={`skill=${index}`}>
                <li >{skill}</li>            
            </div>
        )
    }

    const handleClick = (e,id) => {
        console.log('deletar cliente')
        alert(`ID do cliente: ${id}`)
    }    

    return(
        <div>
            <h2>Manipulando eventos</h2>
            <div>
                  <input onChange={handleChange} />
                  {Button}  
                  {deleteButton}
                  <ul>{listCustomer.map(renderCustomers2)}</ul> 

            </div>
        </div>
    )
}

export default App;