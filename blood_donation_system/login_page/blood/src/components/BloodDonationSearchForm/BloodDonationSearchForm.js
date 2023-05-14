// BloodDonationSearchForm.js

import React, { useState } from 'react';
import './BloodDonationSearchForm.css';

const BloodDonationSearchForm = () => {
  const [bloodType, setBloodType] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    // Handle blood donation search logic here
  };

  return (
    <div className="bloodDonationSearchForm">
      <h2>Blood Donation Search</h2>
      <input type="text" value={bloodType} onChange={(e) => setBloodType(e.target.value)} placeholder="Blood Type" />
      <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default BloodDonationSearchForm;
