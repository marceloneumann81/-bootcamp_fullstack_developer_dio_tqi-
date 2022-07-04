import React, {Component} from "react"
import ReactDom from "react-dom"
import "./styles.css"
import Button  from "./Button"
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";


function sum(a,b){
    alert(a + b);
}

function primeiroJSX() {
    return (
        <div className="teste">
            <h3>Marcelo Neumann - Introdução ao ReactJS</h3>
            <h5>soma: { sum(2,3) } </h5>
        </div>
    )
}

const App = () => {
    return (

        <div className="App">
            { primeiroJSX() }
        </div>
    )
}

const element = 'Digital Innovation';
const element2 = <h3>Olá Turma =D</h3>

const App1 = () => {
    return(
        <div>
            {element}
            {element2}
            <Button onClick={() => sum(10,20)} name='Clique para somar' />
            <ComponentA>
                <ComponentB>
                    <Button onClick={() => sum(50,50)} name="Soma dentro do componentB" />
                </ComponentB>
            </ComponentA>
        </div>        
    )
}

class App2 extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            clock: 1000,
            copo: 'água'
        }
    }

    componentDidMount(){
        window.setTimeout(() => {
            this.setState({
                copo: 'suco'
            })
        }, 3000)
        
    }

    alterarCopo = () => {
        this.setState({
            copo: 'refrigerante'
        })
    }

    render(){
        const { clock, copo } = this.state;
        return(
            <div>
                <h1>{clock}</h1>
                <button onClick={() => this.alterarCopo()} ><h1>{copo}</h1></button>
            </div>
        )
    }
}

const rootElement = document.getElementById("root")
//ReactDom.render(<App/>, rootElement);
//ReactDom.render(element, rootElement);
//ReactDom.render(<App1/>, rootElement);
ReactDom.render(<App2/>, rootElement);