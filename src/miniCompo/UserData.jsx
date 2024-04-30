import React from "react";

const UserData = ({ users }) => {
  return (
    <>
      {users.map((curUser) => {
        const { name, phone, diab, smok, hyper, cbg, ecg } = curUser;

        return (
          <tr>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{diab ? "yes" : "no"}</td>
            <td>{smok ? "yes" : "no"}</td>
            <td>{hyper ? "yes" : "no"}</td>
            <td>{cbg ? "yes" : "no"}</td>
            <td>{ecg ? "yes" : "no"}</td>
          </tr>
        );
      })}
    </>
  );
};

export default UserData;
