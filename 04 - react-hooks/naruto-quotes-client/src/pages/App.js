import { useState, useEffect, useRef } from 'react';
import Styled from 'styled-components';
import narutoImg from '../images/naruto.png';
import { Quotes } from '../components/quotes';
import {getQuote} from '../services/quotesService';
import jutsoSound from '../sounds/jutso.mp3';

const audio = new Audio(jutsoSound);

function App() {

  const isMounted = useRef(true);  

  const [quoteState, setQuoteState] = useState({
    quote: 'loading quote...', 
    speaker: 'loading speaker'
  });

  const OnUpdate = async () => {
    
    const quote =  await getQuote();  
    
    if(!isMounted.current) {
      audio.play();    
      setQuoteState(quote);
    }    
  };

   useEffect( () =>{
    OnUpdate(); 
    
    return() => {
      isMounted.current = false;      
    };
  }, []);

  return (
    <Content>      
      <Quotes 
        quote={quoteState.quote} 
        speaker={quoteState.speaker} 
        onUpdate={OnUpdate} 
      />
      <NarutoImg src={narutoImg} alt="Naruto with a kunai" />
    </Content>    
  );
}



const Content = Styled.div`
  height 100vh;
  padding: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NarutoImg = Styled.img`
  max-width: 50vw;
  align-self: flex-end;
`;

export default App;
