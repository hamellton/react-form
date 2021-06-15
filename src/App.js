import UsersList from "./components/UsersList/UsersList";
import { useState } from "react";
import FormCreateUser from "./components/FormCreateUser/FormCreateUser";

const App = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "mperry1992",
      firstName: "Matthew",
      lastName: "Perry",
      email: "matthew@mail.com",
      password: "12345678w",
      type: "Administrator",
    },
    {
      id: 2,
      username: "mperry1992",
      firstName: "Matthew",
      lastName: "Perry",
      email: "matthew@mail.com",
      password: "12345678w",
      type: "Driver",
    },
  ]);

  const [visibleFormCreate, setVisibleFormCreate] = useState(false);

  const visibleCreateUser = () => {
    setVisibleFormCreate(!visibleFormCreate);
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
        visibleFormCreate={visibleFormCreate}
        onVisible={visibleCreateUser}
        users={users}
      />
      {visibleFormCreate && <FormCreateUser addUser={addUser} />}
    </>
  );
};

export default App;
