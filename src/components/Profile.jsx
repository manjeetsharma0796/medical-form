import React from 'react';
import styled, { createGlobalStyle } from "styled-components";
import PoppinsBold from '/fonts/Poppins-Bold.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'PoppinsBold';
    src: url(${PoppinsBold}) format('truetype');
  }
`;

const Profile = ( {imgAdd, fullName} ) => {
  return (
    <>
      <GlobalStyle />
      <ProBack>
        {/* <img src={imgAdd} alt="Profile Image" /> */}
        <img id='profileimg' src="/images/profile.svg" alt="Profile Image" />
        {/* <p id='fullName'>{fullName}</p> */}
        <p id='fullName'>Thala 7</p>
      </ProBack>
    </>
  )
};

const ProBack = styled.div`
  background-color: #391AB7;
  height: 100vh;
  width: 20%;
  border-radius: 0 4rem 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20rem;
  gap: 3rem;

  #profileimg{
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    border: solid 1px #fff;
  }

  #fullName{
    font-size: 2rem;
    font-family: 'PoppinsBold';
  }  
`;

export default Profile;
