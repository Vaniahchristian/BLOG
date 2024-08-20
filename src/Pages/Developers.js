import React from 'react';
import { Link } from 'react-router-dom';

const DeveloperCard = ({ name, regNo, phone }) => {
  return (
    <div className="developer-card">
      <h3>
        <Link to={`/developers/${name}`}>
          {name}
        </Link>
      </h3>
      <p>Registration No: {regNo}</p>
      <p>Phone: {phone}</p>
    </div>
  );
};



const Developers = () => {
  const developers = [
    { name: 'ACAN BRENDA', regNo: '21/U/05295/EVE', phone: '0764801783' },
    { name: 'Aheebwomugisha Sasha Ana', regNo: '21/U/12223/PS', phone: '0702932328' },
    { name: 'Nalugya Merisa', regNo: '21/U/17292/PS', phone: '0703844581' },
    { name: 'MUKISA VANIAH CHRISTIAN', regNo: '21/U/13176/EVE', phone: '0754092850' },
  ];

  return (
    <div>
      <h1>Meet the Developers</h1>
      {developers.map((dev, index) => (
        <DeveloperCard key={index} {...dev} />
      ))}
    </div>
  );
};

export default Developers;
