import React from 'react'
import styled from 'styled-components'
import { categories } from '../data'
import Categoryitem from './Categoryitem'
import { mobile } from '../Responsive'
const Container=styled.div`
display:flex ;
padding: 20px;
justify-content:space-between ;
${mobile({
    flexDirection:"column"
  })}
`
export default function Categories() {
  return (
    <Container>
         {categories.map(item=><Categoryitem item={item} key={item.id}/>)}
    </Container>
  )
}
