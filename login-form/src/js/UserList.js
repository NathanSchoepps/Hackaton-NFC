// src/UserList.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/UserList.css';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://51.83.77.248:8090/users', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError('Failed to fetch users');
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="user-list-container">
      <div className="user-list-card">
        <div className="user-list-header">
          <h1>User List</h1>
        </div>
        <div className="user-list-body">
          {error && <p className="error-message">{error}</p>}
          {users.length > 0 ? (
            <table className="user-list-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Token</th>
                  <th>Registration Date</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td className="token-column" data-full-token={user.token}>
                      {user.token}
                    </td>
                    <td>{new Date(user.iat * 1000).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No users found</p>
          )}
        </div>
        <div className="button-container">
          <button onClick={() => navigate('/')}>HomePage</button>
          <button onClick={() => navigate('/login')}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default UserList;
