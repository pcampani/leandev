import React from 'react';
import styled from "styled-components";

const Footer = styled.div`
  margin-top: 3rem;
  color: #fff;
  display:grid;
  place-content: center;
  height: 50px;
  background: #3c52aa;
  box-shadow: 2px -5px 20px rgba(0,0,0,.2), 2px -15px 20px rgba(0,0,0,.2);

  h4 {
    font-size: 14px;
    font-weight: lighter;
  }
  `

const Bottom = () => (
  <Footer>
    <h4>Frontend Coding Challenge - Philip Campani &copy; 2020</h4>
  </Footer>
)

export default Bottom;