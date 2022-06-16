// import { Button } from '@mui/material';
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive';
const Container=styled.div`
width:100vw ;
height:100vh ;
background-image:url("https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
background-repeat:no-repeat ;
background-size:cover ;
display:flex ;
align-items:center ;
justify-content:center ;
opacity:1 ;

`;
const Wrapper=styled.div`
padding:20px ;
width:40% ;
background-color:white ;
${mobile({
    width:"60%",

  })}

`;
const Form=styled.form`
display:flex ;
flex-wrap:wrap ;
flex-direction:column ;
justify-content:center ;
align-items:center ;

`;
const Title=styled.h1`

font-size: 24px;
font-weight: 300;
${mobile({
    textAlign:"center",
    fontSize:"18px"

  })}
`;
const Input=styled.input`
flex:1 ;
min-width:40% ;
max-width:40% ;
margin:20px 10px 0px 0px ;
padding:10px ;
${mobile({
    fontSize:"10px"

  })}

`;
const Agreement=styled.span`
font-size: 12px;
margin:20px 0px  ;

`;
const Button=styled.button`
width:30% ;
border:none ;
padding:5px 1px;
background-color:teal ;
color:white ;
${mobile({
    fontSize:"10px"

  })}
`;

export default function Register() {
  return (
<Container>
    <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
            <Input placeholder="First Name"/>
            <Input placeholder="Last Name"/>
            <Input placeholder="User Name"/>
            <Input placeholder="Email"/>
            <Input placeholder="Password"/>
            <Input placeholder="Confirm Password"/>
            <Agreement>
                By Creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button>CREATE</Button>
        </Form>
    </Wrapper>
</Container>
  )
}
