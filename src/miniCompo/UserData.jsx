import React from "react";

const UserData = ({ users }) => {
  return (
    <>
      {users.map((curUser) => {
        const { name, phone, dib, smo, hp, cbg, ecg } = curUser;

        return (
          <tr>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{dib ? "yes" : "no"}</td>
            <td>{smo ? "yes" : "no"}</td>
            <td>{hp ? "yes" : "no"}</td>
            <td>{cbg ? "yes" : "no"}</td>
            <td>{ecg ? "yes" : "no"}</td>
          </tr>
        );
      })}
    </>
  );
};

export default UserData;
