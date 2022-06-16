
import { height } from "@mui/system";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
flex:1;
margin:3px ;
height:70vh ;
position:relative ;

`;
const Image = styled.img`
width:100%;
height:100%;
border:0.5px solid black ;

`;
const Info = styled.div`
width:100%;
height:100% ;
/* background-color:yellow ; */
position:absolute;
top:0 ;
left:0 ;
display:flex ;
justify-content:center ;
align-content:center ;
flex-direction:column ;
padding:50px ;

`;
const Title = styled.h1`
font-size:1.6rem ;
color:gray;
margin-bottom:20px;
`;

const Button = styled.button`
width:10rem;
background-color:black ;
border:none;
padding:10px ;
/* background-color:white; */
cursor: pointer;
color:gray ;
font-weight:600 ;
border-radius:16px ;
`;
export default function Categoryitem(props) {
  return (
    <Container>
      <Image src={props.item.img} />
      <Info>
        <Title>{props.item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
}
