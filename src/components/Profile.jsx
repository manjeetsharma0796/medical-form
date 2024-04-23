import React from 'react'
import styled, { createGlobalStyle } from "styled-components";
import NotoSansRegular from "/fonts/noto-sans.regular.ttf"
import DetailBox from '../miniCompo/DetailBox';
import InputArea from '../miniCompo/InputArea';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Noto Sans';
    src: url(${NotoSansRegular}) format('truetype');
  }
`;

const Profile = () => {

    const fname = document.getElementById('fullname');
    const ag = document.getElementById('age');

  return (
    <>
        <GlobalStyle />
        <ProfileArea id="profileArea">
            <div className="imageCont">
                <img id='profieImg' src="/images/profile.svg" alt="" />
            </div>
            <div className="profileDetails">
                <h4 id='fullName'>{fname}</h4>
                <p id='gender'>Gender: </p>
                <p id='age'>Age: {ag}</p>
                <p id='blood'>Blood Group: </p>
            </div>
        </ProfileArea>
    </>
  )
};

const ProfileArea = styled.div`
    width: 30%;
    height: 85vh;
    border: solid 2px #000000;
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding-top: 3rem;

    *{
        font-family: 'Noto Sans';
    }

    .imageCont{
        width: 70%;
        height: 38%;
        border-radius: 50%;
        border: solid 2px #000000;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .imageCont img{
        width: 50%;
    }

    .profileDetails{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }
    
    .profileDetails h4{
        font-size: 2rem;
        font-weight: 700;
        text-shadow: 0 5px 10px rgba(0,0,0,0.2);
        margin-bottom: 0.3rem;
    }
    
    .profileDetails p{
        font-size: 1.2rem;
        text-shadow: 0 5px 10px rgba(0,0,0,0.2); 
    }
`;

export default Profile;

