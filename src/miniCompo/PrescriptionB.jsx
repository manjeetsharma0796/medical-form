import React from 'react';
import styled, { createGlobalStyle } from "styled-components";

const PrescriptionB = () => {
  return (
    <>
        <Bperi>
            <button id='addPres'>Add a Prescription?</button>
        </Bperi>
    </>
  )
};

const Bperi = styled.div`
    width: 124rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    #addPres{
        border: solid 2px #1553BB;
        border-radius: 2rem;
        padding: .7rem 2rem;
        background: transparent;
        color: #000000;
        box-shadow: 0 5px 10px rgba(0,0,0,0.3);
        cursor: pointer;
        transition: all 0.13s ease-in;
    }
    
    #addPres:hover{
        scale: 0.98;
        box-shadow: 0 5px 10px rgba(0,0,0,0.4);

    }
`;


export default PrescriptionB
