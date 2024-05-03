import React from 'react'
import styled, { createGlobalStyle } from "styled-components";
import NotoSansRegular from "/fonts/noto-sans.regular.ttf"

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Noto Sans';
    src: url(${NotoSansRegular}) format('truetype');
  }
`;

const DetailBox = ({ Title, type, placeholder, nm, func, idd, value }) => {

  return (
    <>
      <GlobalStyle />
      <Detail>
        <h3 id='title'>{Title} :</h3>
        <input type={type} id={idd} className='inputText' placeholder={placeholder} name={nm} onChange={func}
        value={value} required />
      </Detail>
    </>
  )
};

const Detail = styled.div`
    width: 70%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    
    #title{
        font-family: 'Noto Sans';
        color: #1553BB;
        font-size: 1.6rem;
    }
    
    .inputText{
        width: 100%;
        font-family: 'Noto Sans';
        color: #000000;
        background-color: #ffffff;
        font-size: 1.3rem;
        padding: .8rem 1rem;
        border: solid 1px #cccccc;
        border-radius: 5px;
        outline: none;
    }
`;

export default DetailBox;
