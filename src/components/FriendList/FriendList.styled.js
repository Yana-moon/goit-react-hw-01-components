import styled from 'styled-components'

export const FriendsListWrapper = styled.ul`
    margin-top: 50px;
    width:300px;
    margin-left:auto;
    margin-right:auto;
`;

export const FriendsListLi = styled.li`
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    padding-top:20px;
    padding-bottom:20px;
    margin-bottom:10px;
    border: 2px solid #FF69B4;
    border-radius: 3px;
    cursor: pointer;
    font-weight:500;
    font-size:18px
`;

export const FriendsStatusOnline = styled.div`
    width:30px;
    height:30px;
    background-color: #008000;
    border-radius:50%;
`;

export const FriendsStatusOffline = styled.div`
    width:30px;
    height:30px;
    background-color: #FF0000;
    border-radius:50%;
`;