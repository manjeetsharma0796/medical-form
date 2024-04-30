import React, { useState } from "react";
import Profile from "../components/Profile";
import PDetails from "../components/PDetails";
import styled, { createGlobalStyle } from "styled-components";
import "./pageCss/client.css";

const Client = () => {
  return (
    <>
      <ClientArea>
        <Profile />
        <PDetails />
      </ClientArea>
    </>
  );
};

const ClientArea = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  gap: 2rem;
`;

export default Client;
