import styled from 'styled-components'

export const TransactionsWrapper = styled.table`
    margin-top: 40px;
    margin-left:auto;
    margin-right:auto;
    margin-bottom:40px;
    width:800px;  
    border: 2px solid #FF69B4;
    border-radius: 3px;
    cursor: pointer; 
    `;

    export const TransnactionsHeader = styled.tr`
    padding-block: 20px;
    color:#FFFFFF;
    text-align: center;
    font-size: 18px;
    background-color: #00eaff;
    height:50px;
    `;

    export const TransactionsTable = styled.tr`
    text-align: center;
    height: 50px;
    :nth-of-type(2n) {
    border: 2px solid #FF69B4;
    border-top: none;
    background-color: #C0C0C0;
    }
    `;

    export const TransactionsType = styled.td`
    ::first-letter {
        text-transform: uppercase;
    }
    `;