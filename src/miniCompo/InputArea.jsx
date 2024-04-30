import React, { useState } from 'react'
import styled, { createGlobalStyle } from "styled-components";
import DetailBox from './DetailBox';

const InputArea = () => {

  const [details, setDetails] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    email: "",
    bp: "",
    pr: "",
    temp: "",
    spo2: "",
    ecg: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  }

  const isAnyDetailEmpty = (details) => {
    return Object.values(details).some((value) => value === "")
  }

  const insertUserDetails = (details) => {
    console.log(details)
    console.log(isAnyDetailEmpty(details))
    if (isAnyDetailEmpty(details))
      return

    console.log(details)
    fetch("/client", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(details)
    }).then(res => { console.log(res) })

  }
  return (
    <>
      <AreaI id='scrollInputArea'>
        <DetailBox Title="Name" type="text" idd="name" placeholder="John Doe" nm="name" func={handleChange} />
        <DetailBox Title="Age" type="number" idd="age" placeholder="20+" nm="age" func={handleChange} />
        <DetailBox Title="Gender" type="text" idd="gender" placeholder="M/F/Other" nm="gender" func={handleChange} />
        <DetailBox Title="Phone" type="number" idd="phone" placeholder="9999999990" nm="phone" func={handleChange} />
        <DetailBox Title="Email" type="email" idd="email" placeholder="abc@gmail.com" nm="email" func={handleChange} />

        <div className="headingD">
          <p>Medical History</p>
        </div>

        <DetailBox Title="Blood Pressure" type="number" idd="bp" placeholder="120-140" nm="bp" func={handleChange} />
        <DetailBox Title="Pulse Rate" type="number" idd="pr" placeholder="60-100" nm="pr" func={handleChange} />
        <DetailBox Title="Temperature in f" type="number" idd="temp" placeholder="Example : 97" nm="temp" func={handleChange} />
        <DetailBox Title="Oxygen Saturation in %" type="number" idd="spo2" placeholder="=96>" nm="spo2" func={handleChange} />
        <DetailBox Title="ECG" type="number" placeholder="Enter ECG" idd="ecg" nm="ecg" func={handleChange} />
        <ButtonArea>
          <button id='button' type="button" onClick={() => {
            console.log("899999999")
            insertUserDetails(details)
          }}>Submit</button>
        </ButtonArea>
      </AreaI>
    </>
  )
}

const ButtonArea = styled.div`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #fff;
  font-size: 1.5rem;
`;

const AreaI = styled.form`
  background: linear-gradient(to top right, #5b98f2, #ffffff);
  height: 85%;
  width: 100%;
  border-radius: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4rem;

  overflow-y: scroll;
  overflow-x: hidden;
  padding: 2rem;
  padding-bottom: 5rem;

  &::-webkit-scrollbar{
    display: none;
  }

  .headingD{
    margin-top: 2rem;
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

export default InputArea;