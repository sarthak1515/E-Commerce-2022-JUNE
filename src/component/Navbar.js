import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { mobile } from "../Responsive";
const Container = styled.div`
  height: 60px;
  ${mobile({
    height:"50px"
  })}
 
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({
    padding:"10px 0px"
  })}
  
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  
  ${mobile({
    display:"flex",
    justifyContent:"flex-start"
  })}
`;
const Language = styled.span`
  cursor: pointer;
  font-size: 14;
  ${mobile({
    display:"none"
  })}
  
`;
const SearchContainer = styled.div`
  border: 0.5px solid gray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  border-radius: 16px;
`;
const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({
    width:"50px"
  })}
`;
const Center = styled.div`
  flex: 1;
  
`;

const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
  ${mobile({
    fontSize:"15px"
  })}
`;

const Right = styled.div`
  flex: 1;
  display:flex ;
  align-items:center ;
  justify-content:flex-end ;
  ${mobile({
    justifyContent:"space-around",
    flex:2
  })}
`;
const MenuDiv = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin:25px
  ${mobile({
    fontSize:"2px"
  })}
`;

export default function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search"></Input>
            <SearchIcon style={{color:"grey",fontSize:16}}></SearchIcon>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Nazrana</Logo>
        </Center>
        <Right>
          <MenuDiv>Register</MenuDiv>
          <MenuDiv>Signin</MenuDiv>
          <MenuDiv>
            <Badge color="primary" badgeContent={4}>
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuDiv>
        </Right>
      </Wrapper>
    </Container>
  );
}
