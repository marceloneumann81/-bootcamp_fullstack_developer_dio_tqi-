import Styled from 'styled-components';
import { string, func } from 'prop-types';
import { Button } from '../button';

export const Quotes = ({quote, speaker, onUpdate}) => {
    return (
        <Wrapper>
            <Quote>{quote}</Quote>
            <Speaker>{speaker}</Speaker>
            <Button onClick={onUpdate}>Quote No Jutsu</Button>
        </Wrapper>
    )
}

Quotes.propTypes = {
    quote: string,
    speaker: string,
    onUpdate: func
};

const Wrapper = Styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Quote = Styled.p`
    font-size: 2em;    
    margin: 0
`;

const Speaker = Styled(Quote)`
    text-align: right;
    margin-bottom: 50px;
`;