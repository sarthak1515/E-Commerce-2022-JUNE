import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import React from 'react'
import styled from "styled-components";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
const Info = styled.div`
width:100% ;
height:100% ;
position: absolute ;
top:0 ;
left:0 ;
background-color:rgba(0,0,0,0.2) ;
z-index:3 ;
display:flex ;
align-items:center ;
justify-content:center ;
opacity:0 ;
transition:all 0.5s ease ;
cursor: pointer;

`;
const Container = styled.div`
flex:1 ;
margin:5px ;
min-width:280px ;
height: 350px;
display:flex ;
align-items:center ;
justify-content:center ;
background-color:#f5fbfd ;
position:relative ;
&:hover ${Info}{
    opacity:1 ;

}
`;
const Circle = styled.div`
width:200px ;
height:200px ;
border-radius:50% ;
background-color:white ;
position:absolute ;

`;
const Image = styled.img`
height:75% ;
z-index:2 ;
`;

const Icon = styled.div`

width:40px ;
height:40px ;
background-color:white ;
display:flex ;
align-items:center ;
justify-content:center ;
margin:10px ;
border-radius:50% ;
transition:all 0.5s ease ;
&:hover{
background-color:#e9f5f5 ;
transform:scale(1,1.2) ;
}
`;
export default function Product(props) {
  return (
    <Container>
        <Circle>
        </Circle>
        <Image src={props.item.img} />
        <Info>
            <Icon>
                <ShoppingCartOutlined></ShoppingCartOutlined>
            </Icon>
            <Icon>
                <SearchOutlinedIcon></SearchOutlinedIcon>
            </Icon>
            <Icon>
                <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
            </Icon>
        </Info>
    </Container>
  )
}
