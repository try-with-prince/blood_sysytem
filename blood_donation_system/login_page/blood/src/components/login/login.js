import React, { Component, useState } from "react";
import "./login.css";
import axios from "axios";
import {Navigate, useNavigate } from "react-router-dom"

// useHistory() is replaced with useNavigate()
const Login = ({setLoginUser}) => {

  const navigator =useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login =() => {
    axios.post("http://localhost:9802/login",user)
    .then(res =>
      {alert(res.data.message)
    setLoginUser(res.data.user)
    // history.push("/")
    navigator("/")
      })
  }
  return (
    <div className="login">
      {/* {console.log(user)} */}
      <h1>Login</h1>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Enter your Email"
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Enter your password"
      ></input>
      <div className="button" onClick={login}> Login</div>
      <div>or</div>
      <div className="button" onClick={() =>navigator("/register")}>Register </div>
    </div>
  );
};
export default Login;
