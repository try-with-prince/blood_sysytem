import "./App.css";
import Homepage from "./components/homepage/homepage";
import Login from "./components/login/login";
import Register from "./components/register/register";
import AppointmentSchedulingForm from "./components/AppointmentSchedulingForm/AppointmentSchedulingForm"
import BloodDonationSearchForm from "./components/BloodDonationSearchForm/BloodDonationSearchForm"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
// Don't forget to go on correct path

// Switch is replaced by Routes

//Routes pages ko route krega jese /about aaya to yha chale jao .(route per Routes karna)
// Route -> kis page per jana h jese /register per kya show karna h
// Router -> like a box, jo bhi kaam hoga bo isme hoga , Routes and route both
// now no need exact 

function App() {

  const[user,setLoginUser]= useState({})
  return (
    <div className="App">
      <Router>
        <Routes>
         
      {/* Can't open Homepage untill you had logged in */}
          <Route path="/"   element=
         { user && user._id ? <Homepage setLoginUser={setLoginUser}/> : <Login setLoginUser={setLoginUser}/>}
          />
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login setLoginUser={setLoginUser}/>}/>
          <Route path="/AppointmentSchedulingForm" element={<AppointmentSchedulingForm/>}/>
          <Route path="/BloodDonationSearchForm" element={<BloodDonationSearchForm/>}/>
          
          {/* <Route path="/login">Login</Route>
          <Route path="/register">Register</Route> */}

          {/* path aagar /login h to Login per per le jao */}
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
