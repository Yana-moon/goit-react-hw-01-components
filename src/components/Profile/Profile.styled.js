import styled from 'styled-components'

export const ProfileWrapper=styled.div`
margin: 50px auto 0 auto;
    width: 300px;
    height: max-content;
    border: 2px solid #FF69B4;
    border-radius: 3px;
    cursor: pointer;
    img {
        display: block;
        heigth: 100px;
        width: 100px;
        border-radius: 50%;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 6px, rgba(0, 0, 0, 0.20) 0px 3px 6px;
}
`;

export const UserWrapper=styled.div`
display:flex;
    flex-direction:column;
    width:auto;
    align-items:center;
    gap:25px;
    margin-top: 40px;
    margin-left:auto;
    margin-right:auto;
}
`;

export const ListWrapper=styled.div`
display: flex;
    justify-content:center;
    margin-top:20px;
    margin-bottom:60px;
    align-items:center;
`;

export const ProfileName=styled.p`
font-weight: 700;
font-size: 18px;
`;