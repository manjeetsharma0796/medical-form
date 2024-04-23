import React from 'react'
import styled, { createGlobalStyle } from "styled-components";
import NotoSansRegular from "/fonts/noto-sans.regular.ttf"

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Noto Sans';
    src: url(${NotoSansRegular}) format('truetype');
  }
`;

const DetailBox = ({ Title,type, placeholder, nm, func, idd}) => {

  return (
    <>
        <GlobalStyle />
        <Detail>
            <h3 id='title'>{Title} :</h3>
            <input type={type} id={idd} className='inputText' placeholder={placeholder} name={nm} onChange={func} required />
        </Detail>
    </>
  )
};

const Detail = styled.div`
    width: 70%;
    height: 10%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: .7rem;
    
    #title{
        font-family: 'Noto Sans';
        color: #666666;
        font-size: 1.6rem;
    }
    
    .inputText{
        width: 80%;
        font-family: 'Noto Sans';
        color: #000000;
        background-color: #ffffff;
        font-size: 1rem;
        padding: .8rem 1rem;
        border: solid 1px #cccccc;
        border-radius: 5px;
        outline: none;
    }
`;

export default DetailBox;
