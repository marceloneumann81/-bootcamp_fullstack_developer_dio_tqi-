import Styled from 'styled-components';
import { string } from 'prop-types';

export const Button = Styled.button`
    background: #DC872C;
    color: #fff;
    border: none;
    border-size: 1,5em;
    padding: 10px 20px;
    font-family: 'New Tegomin', serif;
    cursor: pointer;
    box-shadow: #333 3px 3px;

    &:hover {
        background: #a40000;
    }
`;



