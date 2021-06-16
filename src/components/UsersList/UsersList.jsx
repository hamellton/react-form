import React, { useState } from "react";
import ButtonOpenFormCreate from "./Button/ButtonOpenFormCreate";

const UsersList = ({
  users,
  onVisible,
  visibleFormCreate,
  visibleUpdateUser,
}) => {
  const [userMenu] = useState([
    "Username",
    "First name",
    "Last name",
    "Email",
    "Type",
  ]);

  return (
    <>
      <ButtonOpenFormCreate
        visibleFormCreate={visibleFormCreate}
        onVisible={onVisible}
      />
      <table className="table">
        <tbody>
          <tr className="table__menu">
            {userMenu.map((el, index) => {
              return <th key={`${el}__${index}`}>{el}</th>;
            })}
          </tr>
        </tbody>
        {users.map((el) => {
          return (
            <tbody
              onClick={() =>
                visibleUpdateUser(
                  el.id,
                  el.username,
                  el.firstName,
                  el.lastName,
                  el.email,
                  el.password,
                  el.type
                )
              }
              key={el.id}
            >
              <tr className="table__list active">
                <td>{el.username}</td>
                <td>{el.firstName}</td>
                <td>{el.lastName}</td>
                <td>{el.email}</td>
                <td>{el.type}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
};

export default UsersList;
