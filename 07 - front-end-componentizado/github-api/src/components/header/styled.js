import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 4px;

    input {
        border: 1px solid #ccc;
        border-radius: 8px;
        width: 100%;
        height: 44px;
        margin-right: 8px;
        padding: 8px;
        font-weight: 300;
    }

    button {
        background-color: #236ed8;
        padding: 8px 16px;
        margin: 0 8px;
        border-radius: 8px;
        
        font-size: 16px;

        &:hover {
            background-color: #236fa2;
            box-shadow: 3px 2px 8px rgba(0, 0, 0, 0.3);
        }

        span{
            font-weight: bold;
            color: #ffff;
        }

    }



    
    

`;