import styled from 'styled-components'

import { device } from '@/theme/media'

export const Container = styled.div`
  width: 100%;

  display: grid;
  grid-gap: 15px;
  grid-template-rows: repeat(8, 5vh);
  grid-template-columns: repeat(8, 1fr);

  @media ${device.tablet} {
    max-width: 1440px;
  }
`
