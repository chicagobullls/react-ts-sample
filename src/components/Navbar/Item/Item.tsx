import React from 'react'

import { Container, Image, Text } from './styles'

type ItemType = {
  title: string
}

const Item = ({ title }: ItemType) => {
  return (
    <Container>
      <Image />
      <Text>{title}</Text>
    </Container>
  )
}

export default Item
