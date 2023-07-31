import React from 'react';
import ProfileCard from './ProfileCard';
import Navbar from './Navbar';
import FollowSection from './FollowSection';

const LeftSection = () => {
  return (
    <div className="left-section">
      <ProfileCard />
      <Navbar />
      <FollowSection />
    </div>
  );
};

export default LeftSection;
