import React from 'react';
import JoinedUsers from './JoinedUsers';
import PopularCommunities from './PopularCommunities';

const RightSection = () => {
  return (
    <div className="right-section">
      <JoinedUsers />
      <PopularCommunities />
    </div>
  );
};

export default RightSection;
