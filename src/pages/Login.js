import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive';
const Container=styled.div`
width:100vw ;
height:100vh ;
background-image:url("https://img.freepik.com/free-photo/beautiful-smiling-young-blonde-woman-pointing-sunglasses-holding-shopping-bags-credit-card-pink-wall_496169-1506.jpg?w=996&t=st=1655380046~exp=1655380646~hmac=7fa35348eac66d6c91efb7083545c2bc2e64bb253108ad108071b7fc530429e1");
background-repeat:no-repeat ;
background-size:cover ;
display:flex ;
align-items:center ;
justify-content:center ;
opacity:1 ;

`;
const Wrapper=styled.div`
padding:20px ;
width:25% ;
background-color:white ;
${mobile({
    width:"40%",

  })}

`;
const Form=styled.form`
display:flex ;
flex-wrap:wrap ;
flex-direction:column ;

`;
const Title=styled.h1`

font-size: 24px;
font-weight: 300;
`;
const Input=styled.input`
flex:1 ;
min-width:40% ;
margin:10px 0px;
padding:10px ;
${mobile({
    padding:"3px",
    maxWidth:"80%"
  })}

`;
const  Link=styled.a`
display:block ;
text-decoration:underline ;
margin:5px 0px ;
cursor: pointer;
font-size: 12px;

`;
const Button=styled.button`
margin:20px 0px ;
width:30% ;
border:none ;
padding:5px 1px;
background-color:teal ;
color:white ;
cursor: pointer;
`;

export default function Login() {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="User Name"/>
                    <Input placeholder="Password"/>
                    <Button>LOGIN</Button>
                    
                </Form>
                <Link>FORGOT PASSWORD ?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
            </Wrapper>
        </Container>
          )
}
