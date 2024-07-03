import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  const [userId, setUserId] = useState('');
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setUserInfo(null);

    try {
      const response = await fetch(`http://51.83.77.248:8090/users/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setUserInfo(data);
    } catch (error) {
      setError('Failed to fetch user information');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h1 className="text-center">Login</h1>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="userId">User ID:</label>
                  <input
                    type="text"
                    id="userId"
                    className="form-control"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-success btn-block mt-3">Get User Info</button>
              </form>
              {error && <p className="text-danger mt-3">{error}</p>}
              {userInfo && (
                <div className="mt-3">
                  <h2>User Information</h2>
                  <pre className="bg-dark text-white p-3 rounded">{JSON.stringify(userInfo, null, 2)}</pre>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
