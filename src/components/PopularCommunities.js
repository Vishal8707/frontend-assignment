import React from 'react';

const PopularCommunities = () => {
  // Sample data for popular communities (replace it with actual data)
  const popularCommunities = [
    { id: 1, name: 'Community 1', members: 1000 },
    { id: 2, name: 'Community 2', members: 800 },
    { id: 3, name: 'Community 3', members: 750 },
    // Add more community data as needed
  ];

  return (
    <div className="popular-communities">
      <h2>Popular Communities</h2>
      <ul>
        {popularCommunities.map((community) => (
          <li key={community.id}>
            {community.name} - {community.members} Members
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularCommunities;
