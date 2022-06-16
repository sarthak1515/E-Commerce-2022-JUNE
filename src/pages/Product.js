import React from "react";
import styled from "styled-components";
import Announcement from "../component/Announcement";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Newsletter from "../component/Newsletter";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { mobile } from "../Responsive";
const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;

  /* background-color:red ; */
  padding: 50px;
  ${mobile({
    flexDirection:"column"

  })}
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({
    height:"40vh"

  })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({
    fontSize:"20px",
    padding:"0px 5px"

  })}
`;
const Title = styled.h1`
  font-weight: 200;
  ${mobile({
    fontSize:"20px",
   

  })}
`;
const Desc = styled.p`
  margin: 20px 0px;
  letter-spacing: 2px;
  ${mobile({
    fontSize:"10px"

  })}
`;
const Price = styled.h5`
  font-weight: 100;
  font-size: 40px;
  ${mobile({
    fontSize:"20px",
   

  })}
`;
const FilterContainer = styled.div`
display:flex ;
justify-content:space-between ;
width: 50%;
${mobile({
   flexDirection:"column"


  })}

`;
const Filter= styled.div`
display:flex;
align-items:center ;
${mobile({
    padding:"10px 0px"

  })}

`;
const FilterTitle = styled.span`
font-weight: 200;
font-size: 20px;
${mobile({
    fontSize:"15px",
   

  })}
`;
const FilterColor=styled.div`
width:20px ;
height:20px;
border-radius:50% ;
background-color:${props=>props.color} ;
margin: 0px 5px;
cursor:pointer ;

`;
const FilterSize = styled.select`
margin-left:10px ;
padding: 5px;
cursor: pointer;
`;
const FilterSizeOption=styled.option``
const AddContainer=styled.div`
display:flex ;
align-items:center ;
width:50% ;
justify-content:space-between ;
margin-top:100px ;
${mobile({
    flexDirection:"column",
    marginTop:"20px",
    justifyContent:"center",
    alignItems:"center"

  })}
`;
const AmountContainer=styled.div`
display:flex;
align-items:center ;
font-weight: 700;
${mobile({
    fontSize:"20px",
    padding:"0px 5px",
   width:"80%"

  })}


`;
const Amount=styled.span`
width:30px ;
height:30px ;
border-radius:10px ;
border:1px solid teal ;
display:flex;
align-items:center ;
margin:0px 5px ;
justify-content:center ;
${mobile({
    
    margin:"10px 0px",
   

  })}



`;
const Button = styled.button`
padding:15px;
border:2px solid teal ;
background-color:white ;
cursor:pointer ;
font-weight: 500;
&:hover{
    background-color :#f8f4f4 ;
}
${mobile({
    fontSize:"10px",
    padding:"10px" 


  })}
`;

export default function Product() {
  return (
    <Container>
      <Navbar />
      <br></br>
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src="https://img101.urbanic.com/goods-pic/7c7dab27b55f405bb996067e3e0948af_w1000_q90"></Image>
        </ImageContainer>
        <InfoContainer>
          <Title>Split Pant Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            delectus quod necessitatibus, explicabo ipsum accusantium dicta
            obcaecati dolores reprehenderit officiis ratione ad at pariatur
            dolorum sunt vitae alias, ullam est.
          </Desc>
          <Price>Rs-1000</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
                <RemoveCircleIcon/>
                <Amount>1</Amount>
                <AddCircleIcon/>
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
}
