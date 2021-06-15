import React, { useEffect, useRef, useState } from "react";

const FormCreateUser = ({ addUser }) => {
  let userNameRef = useRef(null);
  let firstNameRef = useRef(null);
  let lastNameRef = useRef(null);
  let emailRef = useRef(null);
  let passwordRef = useRef(null);
  let typeRef = useRef(null);

  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState();

  const [userNameDirty, setUserNameDirty] = useState(false);
  const [firstNameDirty, setFirstNameDirty] = useState(false);
  const [lastNameDirty, setLastNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);

  const [userNameError, setUserNameError] = useState(
    "Username cannot be empty"
  );
  const [firstNameError, setFirstNameError] = useState(
    "First name cannot be empty"
  );
  const [lastNameError, setLastNameError] = useState(
    "Last name cannot be empty"
  );
  const [emailError, setEmailError] = useState("Email cannot be empty");
  const [passwordError, setPasswordError] = useState(
    "Password cannot be empty"
  );

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (
      userNameError ||
      firstNameError ||
      lastNameError ||
      emailError ||
      passwordError
    ) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [userNameError, firstNameError, lastNameError, emailError, passwordError]);

  const userNameHandler = () => {
    setUserName(userNameRef.current.value);
    if (userNameRef.current.value) {
      setUserNameError("");
    }
  };

  const firstNameHandler = () => {
    setFirstName(firstNameRef.current.value);
    if (firstNameRef.current.value) {
      setFirstNameError("");
    }
  };

  const lastNameHandler = () => {
    setLastName(lastNameRef.current.value);
    if (lastNameRef.current.value) {
      setLastNameError("");
    }
  };

  const emailHandler = () => {
    setEmail(emailRef.current.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(String(emailRef.current.value).toLowerCase())) {
      setEmailError("Некоректный имейл");
      return;
    }
    setEmailError("");
  };

  const passwordHandler = () => {
    setPassword(passwordRef.current.value);
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!re.test(String(passwordRef.current.value).toLowerCase())) {
      setPasswordError("Password must be longer than 8");
      if (!passwordRef.current.value) {
        setPasswordError("Password cannot be empty");
      }
    } else {
      setPasswordError("");
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "username":
        setUserNameDirty(true);
        break;
      case "firstname":
        setFirstNameDirty(true);
        break;
      case "lastname":
        setLastNameDirty(true);
        break;
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
      default:
        break;
    }
  };

  return (
    <div className="container">
      <form className="form">
        <div className="form__title">Create user</div>
        <div className="form__inputs">
          <div className="row">
            <div className="col-25">
              <label htmlFor="username">username</label>
            </div>
            <div className="col-75">
              <input
                onChange={userNameHandler}
                ref={userNameRef}
                onBlur={(e) => blurHandler(e)}
                value={userName}
                type="text"
                id="username"
                name="username"
                placeholder="Your username.."
              />
              {userNameDirty && userNameError && (
                <div style={{ color: "red" }}>{userNameError}</div>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="fname">First Name</label>
            </div>
            <div className="col-75">
              <input
                onChange={firstNameHandler}
                ref={firstNameRef}
                value={firstName}
                onBlur={(e) => blurHandler(e)}
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
              />
              {firstNameDirty && firstNameError && (
                <div style={{ color: "red" }}>{firstNameError}</div>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="lname">Last Name</label>
            </div>
            <div className="col-75">
              <input
                onChange={lastNameHandler}
                ref={lastNameRef}
                value={lastName}
                onBlur={(e) => blurHandler(e)}
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
              />
              {lastNameDirty && lastNameError && (
                <div style={{ color: "red" }}>{lastNameError}</div>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="email">email</label>
            </div>
            <div className="col-75">
              <input
                onChange={emailHandler}
                ref={emailRef}
                value={email}
                onBlur={(e) => blurHandler(e)}
                type="text"
                id="email"
                name="email"
                placeholder="Your email.."
              />
              {emailDirty && emailError && (
                <div style={{ color: "red" }}>{emailError}</div>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="password">password</label>
            </div>
            <div className="col-75">
              <input
                onChange={passwordHandler}
                ref={passwordRef}
                value={password}
                onBlur={(e) => blurHandler(e)}
                type="text"
                id="password"
                name="password"
                placeholder="Your password.."
              />
              {passwordDirty && passwordError && (
                <div style={{ color: "red" }}>{passwordError}</div>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="type">Type*</label>
            </div>
            <div className="col-75">
              <select ref={typeRef} id="type" name="type">
                <option value="Administrator">Administrator</option>
                <option value="Driver">Driver</option>
              </select>
            </div>
          </div>
          <div className="row">
            <button
              onClick={(e) => {
                e.preventDefault();
                const type = "Admin";
                addUser(userName, firstName, lastName, email, password, type);
              }}
              disabled={!formValid}
              className="create__button"
            >
              Create
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormCreateUser;
