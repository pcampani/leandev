import React from 'react';
import styled from "styled-components";
import img from "../../build/assets/tweet.jpg";

const Index = styled.div`
  position: absolute;
  display: grid;
  align-content: center;
  text-align: center;
  top: 0;
  left: 0%;
  width: 100vw;
  height: 100vh;
  background: url(${img}) no-repeat;
  background-size: cover;
  z-index: -1;

  span {
    display: block;
  }

  h1 {
    font-size: 8rem;
    color:#fff;
    transition: .2s ease-in;
    opacity: 1;
    text-shadow: 2px 10px 5px rgba(0,0,0,.5);
  }

  .hide {
    opacity: 0;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
  }

  @media screen and (max-width:560px) {
    h1 {
      font-size: 5rem;
    }
  }

`
export default function Welcome() {

    return (
      <div>
        <Index>
          <h1>FRONTEND CODING<span>CHALLENGE</span></h1>
        </Index>
      </div>
    )
}
  