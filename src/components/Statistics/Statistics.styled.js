import styled from 'styled-components'

export const StatisticsWrapper = styled.div`
display:flex;
align-items:center;
flex-direction:column;
margin-left:auto;
margin-right:auto;
margin-top: 50px;
width: 300px;
height: max-content;
border: 2px solid #FF69B4;
border-radius: 3px;
cursor: pointer;
`;
export const StatisticsTitle = styled.h2`
color:#808080;
margin-top:20px;
text-transform:uppercase;
`;
export const Statisticsdiv = styled.ul`
display:flex;
width:100%;
margin-top:20px;
justify-content:space-between;
`;
export const StatisticsList = styled.li`
display:flex;
flex-direction:column;
align-items:center;
width:100%;
padding-top:20px;
padding-bottom:20px;
background-color: ${getRandomHexColor};
font-weight:500;
border-radius:3px;
color: #FFFFFF;
`;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};