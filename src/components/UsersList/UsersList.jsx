import React, { useState } from "react";
import ButtonOpenFormCreate from "./Button/ButtonOpenFormCreate";

const UsersList = ({ users, onVisible, visibleFormCreate }) => {
  const [userMenu] = useState([
    "Username",
    "First name",
    "Last name",
    "Email",
    "Type",
  ]);

  return (
    <div>
      <ButtonOpenFormCreate
        visibleFormCreate={visibleFormCreate}
        onVisible={onVisible}
      />
      <table className="table">
        <tr className="table__menu">
          {userMenu.map((el, index) => {
            return <th key={`${el}__${index}`}>{el}</th>;
          })}
        </tr>
        {users.map((el, index) => {
          return (
            <tr className="table__list active" key={index}>
              <td>{el.username}</td>
              <td>{el.firstName}</td>
              <td>{el.lastName}</td>
              <td>{el.email}</td>
              <td>{el.type}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default UsersList;
