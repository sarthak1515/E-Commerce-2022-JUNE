import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MapIcon from '@mui/icons-material/Map';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Email from "@mui/icons-material/Email";
import { mobile } from "../Responsive";
const Container = styled.div`
  display: flex;
  
  justify-content: space-between;
  background-color:teal ;
  ${mobile({
    flexDirection:"column" 
  })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1`
  align-self: center;
`;
const Desc = styled.p`
margin:20px 0px`;

const SocialContainer = styled.div`
display:flex;

`;
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius:50% ;
color:white ;
background-color:#${props=>props.color} ;
display:flex ;
align-items:center ;
justify-content:center ;
margin:25px ;


`;
const Center = styled.div`
  flex: 1;
  padding:20px ;
`;
const Title = styled.h1`
margin-bottom:30px;
`;
const List = styled.ul`
margin:0 ;
padding:0 ;
list-style:none ;
display:flex ;
flex-wrap:wrap ;

`;
const ListItem = styled.li`
width:50% ;
margin-bottom:10px ;
`;


const Right = styled.div`
  flex: 1;
  padding:20px ;
`;
const Contactitem=styled.div`
margin-bottom:20px ;
display:flex ;
align-items:center ;
`;
const Payment=styled.img`
width:100% ;
`;
export default function Footer() {
  return (
    <Container>
      <Left>
        <Logo>NAZRANA</Logo>
        <Desc>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis
          numquam vero error deleniti earum repellendus tenetur iste eveniet
          quam quibusdam quis sit temporibus necessitatibus fuga maxime iusto,
          soluta officiis eius.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon></FacebookIcon>
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon></InstagramIcon>
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <LinkedInIcon></LinkedInIcon>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms And Conditions</ListItem>

        </List>
      </Center>
      <Right>
      <Title>
        Contact
      </Title>
      <Contactitem><MapIcon style={{marginRight:"10px"}}/>3/3 road, Dehradun</Contactitem>
      <Contactitem><PhoneIcon style={{marginRight:"10px"}}/>+91 9138707080</Contactitem>
      <Contactitem><Email style={{marginRight:"10px"}}/>contact@nazrana.dev</Contactitem>
      <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
     
    </Container>
  );
}
