
import React from 'react';

const DeveloperCard = ({ name, regNo, phone }) => {
    //console.log("Developer card rendered");
  return (
    <div className="developer-card">
      <h3>{name}</h3>
      <p>Registration No: {regNo}</p>
      <p>Phone: {phone}</p>
    </div>
  );
};

export default DeveloperCard;
