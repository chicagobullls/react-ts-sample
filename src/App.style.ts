import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  div[tabindex='-1'] {
    flex: 1;
    height: 100%;
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1;
`
