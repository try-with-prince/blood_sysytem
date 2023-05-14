import React from "react";
import "./homepage.css";


import { Link } from "react-router-dom";

// let Appointment =(AppointmentSchedulingForm )=>{<AppointmentSchedulingForm />}
const Homepage = ({ setLoginUser }) => {
  return (
    <span className="homepage">
      <h1> Hello Homepage</h1>

    {/* It is same as <a href="/AppointmentSchedulingForm">Appointment</a>   Here routing is import */}
    <Link to="/AppointmentSchedulingForm"> Appointment</Link> 
    <Link to="/BloodDonationSearchForm"> BloodDonationSearch</Link> 

      {/* <div className="appoint" onClick={Appointment=>Appointment( )}>
        Click Here for Appointment{""}
      </div> */}
      <div className="button" onClick={() => setLoginUser({})}>
        Logout{" "}
      </div>
    </span>
  );
};

export default Homepage;
