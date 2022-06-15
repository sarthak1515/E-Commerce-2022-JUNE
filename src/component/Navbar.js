import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  cursor: pointer;
  font-size: 14;
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
`;
const Center = styled.div`
  flex: 1;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
`;

const Right = styled.div`
  flex: 1;
  display:flex ;
  align-items:center ;
  justify-content:flex-end ;
`;
const MenuDiv = styled.div`
  font-size: 14;
  cursor: pointer;
  margin:25px
`;

export default function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input></Input>
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
