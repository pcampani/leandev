import styled from "styled-components";

export const Heading = styled.h1`
  font-size: 6rem;
  text-shadow: 2px 2px 2px rgba(0,0,0,.2), 2px 2px 2px rgba(0,0,0,.2);
  text-align: center;
  margin-top: 8rem;
`
export const Wrapper = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap:3rem;
  padding: 2rem;
  transition: .2s ease-in;

  @media screen and (max-width: 780px) {
    grid-template-columns: 420px;
    justify-content: center;
  }
`
