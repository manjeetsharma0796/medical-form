import React from 'react';
import styled, { createGlobalStyle } from "styled-components";
import PoppinsBold from "/fonts/Poppins-Bold.ttf";
import InputArea from '../miniCompo/InputArea';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'PoppinsBold';
    src: url(${PoppinsBold}) format('truetype');
  }
`;

const PDetails = () => {
  
  return (
    <>
      <PDetailsArea>
        <div className="PheadArea">
          <h2 id='Phead'>Patient Details</h2>
          <img src="/images/PdetailLogo.svg" alt="" id="PheadLogo" />
        </div>

        <InputArea />

        {/* <div className="PDButtonArea">
          <button id="PDsubmit" onClick={handleSubmit}>Submit</button>
        </div> */}
      </PDetailsArea>
    </>
  )
};

const PDetailsArea = styled.div`

  width: 80%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  .PheadArea{
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  #Phead{
    font-family: 'PoppinsBold';
    font-size: 2.6rem;
    color: #062DB7;
  }

  #PheadLogo{
    width: 4rem;
  }

  #PDsubmit{
    background-color: #062DB7;
    font-weight: 500;
    padding: .8rem 2rem;
    border: none;
    border-radius: 2rem;
    box-shadow: 0 5px 10px rgba(0,0,0,0.3);
    cursor: pointer;
    transition: all 0.15s ease;
    
    &:hover{
      box-shadow: 0 5px 10px rgba(0,0,0,0.5);
      scale: 0.98;      
    }
  }
`;

export default PDetails;
