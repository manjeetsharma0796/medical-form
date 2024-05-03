import React, { useState } from 'react'
import DetailBox from './DetailBox';
import './miniCompoCss/InputArea.css';
import DropDown from './DropDown';

const InputArea = () => {

  const [selectedS, setSelectedS] = useState("");
  const [selectedD, setSelectedD] = useState("");
  const [selectedH, setSelectedH] = useState("");

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
    smo: "",
    dib: "",
    hp: "",
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

  const updateDropdownValues = () => {
    const smokerValue = selectedS === 'Yes' ? 1 : selectedS === 'No' ? 0 : '';
    const diabeticValue = selectedD === 'Yes' ? 1 : selectedD === 'No' ? 0 : '';
    const hyperTensionValue = selectedH === 'Yes' ? 1 : selectedH === 'No' ? 0 : '';

    setDetails(prevDetails => ({
      ...prevDetails,
      smo: smokerValue,
      dib: diabeticValue,
      hp: hyperTensionValue
    }));
  };

  const handleSubmit = () => {
    console.log(details, "====SENDING TO SERVER====");
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(details)
    }
    fetch("/client", requestOptions)
      .then(res => console.log(res))
      .then(alert("SUBMIT"))
    setDetails({
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
      smo: "",
      dib: "",
      hp: "",
    })
  }

  return (
    <form className="InputDA">
      <div className="Pinfo">
        <h3 className="PHead">Personal Info</h3>
        <div className="PInputs">
          <DetailBox Title="Name" type="text" placeholder="Type here..." nm="name" func={handleChange} idd="name" value={details.name} required />
          <DetailBox Title="Age" type="number" idd="age" placeholder="20+" nm="age" func={handleChange} value={details.age} required />
          <DetailBox Title="Gender" type="text" idd="gender" placeholder="M/F/Other" nm="gender" func={handleChange} value={details.gender} required />
          <DetailBox Title="Phone" type="number" idd="phone" placeholder="9999999990" nm="phone" func={handleChange} value={details.phone} required />
          <DetailBox Title="Email" type="email" idd="email" placeholder="abc@gmail.com" nm="email" func={handleChange} value={details.email} required />
        </div>
      </div>
      <div className="Mhistory">
        <h3 className="PHead">Medical History</h3>
        <div className="MInputs">
          <div className="M1">
            <DetailBox Title="Blood Pressure" type="number" placeholder="Type here..." nm="bp" func={handleChange} idd="bp" value={details.bp} required />
            <DetailBox Title="Pulse Rate" type="number" placeholder="Type here..." nm="pr" func={handleChange} idd="pr" value={details.pr} required />
            <DetailBox Title="Temperature" type="number" placeholder="Type here..." nm="temp" func={handleChange} idd="temp" value={details.temp} required />
            <DetailBox Title="Oxygen Saturation" type="number" placeholder="Type here..." nm="spo2" func={handleChange} idd="spo2" value={details.spo2} required />
            <DetailBox Title="ECG" type="number" placeholder="Type here..." nm="ecg" func={handleChange} idd="ecg" value={details.ecg} required />
          </div>
          <div className="M2">
            <DropDown Title='Smoker?' selected={selectedS} setSelected={value => { setSelectedS(value); updateDropdownValues(); }} />
            <DropDown Title='Diabetic?' selected={selectedD} setSelected={value => { setSelectedD(value); updateDropdownValues(); }} />
            <DropDown Title='Hyper-Tension?' selected={selectedH} setSelected={value => { setSelectedH(value); updateDropdownValues(); }} />
            <DetailBox Title="CBG" type="number" placeholder="Type here..." nm="cbg" func={handleChange} idd="cbg" value={details.cbg} required />
          </div>
        </div>
      </div>
      <div className="PDButtonArea">
        <button id="PDsubmit" onClick={handleSubmit}>Submit</button>
      </div>
    </form>
  );
};

export default InputArea;