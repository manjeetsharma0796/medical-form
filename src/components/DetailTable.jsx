import React, { useState, useEffect } from "react";
import UserData from "../miniCompo/UserData";
import "./componentsCss/DetailTable.css";

class ObjectId {
}
// Now you can use ObjectId

// import { celling } from "../server/db.js";
// const API = "#";

// const allUser = getUsersInfo();
// console.log(allUser);

const DetailTable = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const fetchOptions = {
      method: "POST",
    };
    fetch("/users", fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("-==========================");
        console.log(data);
        if (data.length > 0) {
          setUsers(data);
        }
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <table className="detailTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone No.</th>
            <th>Diabetic</th>
            <th>Smoker</th>
            <th>Hypertension</th>
            <th>CBG</th>
            <th>ECG</th>
          </tr>
        </thead>
        <tbody>
          <UserData users={users} />
        </tbody>
      </table>
    </>
  );
};

export default DetailTable;
