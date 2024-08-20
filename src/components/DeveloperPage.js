import React from 'react';
import { useParams } from 'react-router-dom';

const DeveloperPage = ({ developers }) => {
  const { name } = useParams();
  const developer = developers.find(dev => dev.name === name);

  if (!developer) {
    return <h2>Developer not found</h2>;
  }

  return (
    <div>
      <h1>{developer.name}</h1>
      <p>Registration Number: {developer.regNo}</p>
      <p>Phone: {developer.phone}</p>
      
    </div>
  );
};

export default DeveloperPage;
