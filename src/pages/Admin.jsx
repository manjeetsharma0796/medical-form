import React from 'react';
import DetailTable from '../components/DetailTable';
import './pageCss/Admin.css';

const Admin = () => {
  return (
    <>
      <div className="adminArea">
        <div id="adminHeader">
          <p className="headingAdmin">ADMIN PANEL</p>
          <img src="/images/adminLogo.svg" alt="" />
        </div>
        <div className="searchArea">
          <input type="text" id="searchBox" placeholder='Search here' required />
          <img src="/images/searchIcon.svg" alt="" />
        </div>
        <div id="patientDetailsAdmin">
          <DetailTable />
        </div>
      </div>
    </>
  )
};

export default Admin
