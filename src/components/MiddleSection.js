import React from 'react';
import Posts from './Posts';
import Announcements from './Announcements';

const MiddleSection = () => {
  return (
    <div className="middle-section">
      <Posts />
      <Announcements />
    </div>
  );
};

export default MiddleSection;
