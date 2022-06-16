import React from 'react'
import styled from 'styled-components'
import Announcement from '../component/Announcement';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';
import Newsletter from '../component/Newsletter';
import Products from '../component/Products';
const Container=styled.div``;
const Title=styled.h1`
text-align:center;
margin:20px
`;
const FilterContiner=styled.div`
display:flex;
justify-content:space-between ;
`;
const Filter=styled.div`
margin: 20px;
`;
const FilteTextr=styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
`;
const Select=styled.select`
padding:10px ;
margin-right: 20px;
`;
const Option=styled.option`
padding:10px ;
`;

export default function Productlist() {
  return (
   <Container>
    <Navbar/>
    <br></br>
    <Announcement/>
    <Title>Dresses</Title>
    <FilterContiner>
        <Filter>
            <FilteTextr>Filter Products:</FilteTextr>
            <Select>
            <Option disabled selected>Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            </Select>
            <Select>
            <Option disabled selected>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            </Select>
        </Filter>
        <Filter>
        <FilteTextr>Sort Products:</FilteTextr>
        <Select>
            {/* <Option disabled selected></Option> */}
            <Option>Newest</Option>
            <Option>Price low to high</Option>
            <Option>Price high to low</Option>
            {/* <Option>Blue</Option>
            <Option>Yellow</Option> */}
            </Select>
        {/* <Filter>filter3</Filter> */}
        </Filter>
    </FilterContiner>
    <Products/>
    <Newsletter/>
    <Footer/>
   </Container>
  )
}
