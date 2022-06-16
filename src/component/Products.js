import React from 'react'
import styled from "styled-components";
import { popProducts } from '../data';
import Product from './Product';
const Container = styled.div`
display:flex ;
padding: 20px;
flex-wrap:wrap ;
justify-content:space-between ;
`;
export default function Products() {
  return (
    <Container>
    {popProducts.map(item=><Product item={item}  key={item.id} />)}
</Container>
  )
}
