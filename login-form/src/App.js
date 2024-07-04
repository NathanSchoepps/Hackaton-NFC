import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './js/HomePage';
import LoginForm from './js/LoginForm';
import UserList from './js/UserList';
import './App.css';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/user" element={<UserList />} />
        </Routes>
    </Router>
  );
}

export default App;
