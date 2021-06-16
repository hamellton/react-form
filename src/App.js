import UsersList from "./components/UsersList/UsersList";
import { useEffect, useState } from "react";
import FormCreateUser from "./components/FormCreateUser/FormCreateUser";
import FormUpdateUser from "./components/FormUpdateUser/FormUpdateUser";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("users") || "[]");
    setUsers(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const [updateUser, setUpdateUser] = useState([]);

  const [visibleFormCreate, setVisibleFormCreate] = useState(false);
  const [visibleFormUpdate, setVisibleFormUpdate] = useState(false);

  const visibleCreateUser = () => {
    setVisibleFormCreate(!visibleFormCreate);
  };

  const visibleUpdateUser = (
    id,
    userName,
    firstName,
    lastName,
    email,
    password,
    type
  ) => {
    const updateUser = {
      id: id,
      username: userName,
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      type: type,
    };
    setUpdateUser([updateUser]);
    setVisibleFormUpdate(!visibleFormUpdate);
  };

  const updateUserToggle = (
    id,
    userName,
    firstName,
    lastName,
    email,
    password,
    type
  ) => {
    setUsers((prevState) =>
      prevState.map((el) => {
        if (el.id === id) {
          return {
            id: id,
            username: userName,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            type: type,
          };
        }
        return el;
      })
    );
  };

  const removeUser = (id) => {
    setUsers((prevState) => prevState.filter((el) => el.id !== id));
    setVisibleFormUpdate(false);
  };

  const addUser = (username, firstName, lastName, email, password, type) => {
    const newUser = {
      id: Date.now(),
      username: username,
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      type: type,
    };
    setUsers((prevState) => [newUser, ...prevState]);
    setVisibleFormCreate(false);
  };

  return (
    <>
      <UsersList
        visibleUpdateUser={visibleUpdateUser}
        visibleFormCreate={visibleFormCreate}
        onVisible={visibleCreateUser}
        users={users}
      />
      {visibleFormCreate && <FormCreateUser users={users} addUser={addUser} />}
      {visibleFormUpdate && (
        <FormUpdateUser
          setVisibleFormUpdate={setVisibleFormUpdate}
          onRemove={removeUser}
          updateUserToggle={updateUserToggle}
          updateUser={updateUser}
          users={users}
        />
      )}
      {/*<Route*/}
      {/*  exact*/}
      {/*  path="/"*/}
      {/*  render={() => (*/}
      {/*    <UsersList*/}
      {/*      visibleUpdateUser={visibleUpdateUser}*/}
      {/*      visibleFormCreate={visibleFormCreate}*/}
      {/*      onVisible={visibleCreateUser}*/}
      {/*      users={users}*/}
      {/*    />*/}
      {/*  )}*/}
      {/*/>*/}
      {/*<Route*/}
      {/*  exact*/}
      {/*  path="/form-create"*/}
      {/*  render={() => <FormCreateUser users={users} addUser={addUser} />}*/}
      {/*/>*/}
      {/*<Route*/}
      {/*  path="/form-update"*/}
      {/*  render={() => (*/}
      {/*    <FormUpdateUser*/}
      {/*      onRemove={removeUser}*/}
      {/*      updateUserToggle={updateUserToggle}*/}
      {/*      updateUser={updateUser}*/}
      {/*      users={users}*/}
      {/*    />*/}
      {/*  )}*/}
      {/*/>*/}
    </>
  );
};

export default App;
