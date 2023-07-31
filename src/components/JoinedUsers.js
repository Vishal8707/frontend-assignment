import React from 'react';

const JoinedUsers = () => {
  // Sample data for joined users (replace it with actual data)
  const joinedUsers = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    { id: 3, name: 'User 3' },
    // Add more user data as needed
  ];

  return (
    <div className="joined-users">
      <h2>Joined Users</h2>
      <ul>
        {joinedUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default JoinedUsers;
