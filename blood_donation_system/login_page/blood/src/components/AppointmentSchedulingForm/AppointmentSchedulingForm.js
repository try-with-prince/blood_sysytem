

import React, { useState } from 'react';
import './AppointmentSchedulingForm.css';

const AppointmentSchedulingForm = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleScheduling = () => {
     // Validate form inputs before scheduling
     if (date.trim() === '' || time.trim() === '') {
      alert('Please enter a valid date and time');
      return;
    }

    // Perform scheduling logic here
    const appointment = {
      date,
      time,
    };

    // Example: Display appointment details
    console.log('Scheduled appointment:', appointment);
    alert(`Your appoinment is fixed on ${appointment.date} at ${appointment.time} `);

    // Reset form fields
    setDate('');
    setTime('');
  };



  return (
    <div className="appointmentSchedulingForm">
      <h2>Appointment Scheduling</h2>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
      <button onClick={handleScheduling}>Schedule</button>
    </div>
  );
  };

export default AppointmentSchedulingForm;
