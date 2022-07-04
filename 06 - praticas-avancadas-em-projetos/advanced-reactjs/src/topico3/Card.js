import React from "react";
import {useContext} from 'react'
import { ThemeContext } from "./Theme";

function Card(){

    const theme = useContext(ThemeContext)
    console.log('theme:values ', theme)

    return(
        <div>
            <button style={{background: theme.background, color: theme.color}} >Exemplo button</button>
        </div>    
    )
}

export default Card;