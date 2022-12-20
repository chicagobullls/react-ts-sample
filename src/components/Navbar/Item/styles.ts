import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;

  overflow: hidden;

  width: 100%;
  height: 100%;

  border-radius: 0.8rem;

  box-shadow: 0 0.5rem 1rem 0.2rem rgba(82, 138, 182, 0.2);

  &:nth-child(1) {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 5;
  }

  &:nth-child(2) {
    grid-column-start: 3;
    grid-column-end: 6;
    grid-row-start: 1;
    grid-row-end: 9;
  }

  &:nth-child(3) {
    grid-column-start: 6;
    grid-column-end: 9;
    grid-row-start: 1;
    grid-row-end: 4;
  }

  &:nth-child(4) {
    grid-column-start: 6;
    grid-column-end: 9;
    grid-row-start: 4;
    grid-row-end: 9;
  }

  &:nth-child(5) {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 5;
    grid-row-end: 9;
  }
`

export const Text = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;

  margin: 0 0 2rem 2rem;

  font-size: 1.8rem;
  font-weight: bold;
  text-shadow: 0.5rem 0.2rem 0.5rem black;

  color: white;
`

export const Image = styled.div`
  width: 100%;
  height: 100%;

  filter: blur(0.1rem);

  cursor: pointer;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-repeat: no-repeat;
  background-image: url(https://images.wallpaperscraft.ru/image/single/kukuruza_pochatki_gril_142619_1920x1080.jpg);

  transition: filter 0.3s ease-in-out;

  &:hover {
    filter: blur(0);

    transition: filter 0.3s ease-in-out;
  }
`
