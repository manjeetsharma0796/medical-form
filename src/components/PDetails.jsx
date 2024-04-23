import React from 'react'
import styled, { createGlobalStyle } from "styled-components";
import NotoSansRegular from "/fonts/noto-sans.regular.ttf"
import InputArea from '../miniCompo/InputArea';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Noto Sans';
    src: url(${NotoSansRegular}) format('truetype');
  }
`;

const PDetails = () => {
  return (
    <DetailArea>
      <div className="headingD">
        <p>Patient Details</p>
      </div>
      <InputArea />
    </DetailArea>
  )
};

const DetailArea = styled.div`
  padding: 0 2rem;
  width: 70%;
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;

  .headingD{
    display: inline-block;
    padding : 1rem 2rem;
    border: solid 2px #000000;
    border-radius: 1.2rem;
    box-shadow: 0 7px 10px rgba(0,0,0,0.3);
  }

  .headingD p{
    font-family: 'Noto Sans';
    font-weight: 700;
    font-size: 1.6rem;
    color: #000000;
  }
`;

export default PDetails
