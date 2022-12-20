import React from 'react'

import Item from './Item/Item'
import { Container } from './styles'

const Navbar = () => {
  return (
    <Container>
      <Item title="Cokbook" />
      <Item title="Cookbook" />
      <Item title="Cookbook" />
      <Item title="Cookbook" />
      <Item title="Cookbook" />
    </Container>
  )
}

export default Navbar
