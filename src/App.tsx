// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import { Navigate } from 'react-router-dom';
import Home from './pages/Home';
import { getAuth } from 'firebase/auth';
import Settings from './components/Settings';
const App: React.FC = () => {
  const handleAuthSubmit = (formData: { email: string, password: string }) => {
    console.log("Form submitted:", formData);
  };

 const isAuthenticated: boolean = !!getAuth;
  return (
    <Router>
      
      <Routes>
<Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<Login onSubmit={handleAuthSubmit} />} />
        <Route path="/signup" element={<Signup onSubmit={handleAuthSubmit} />} />
        <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />

        <Route path="/settings" element = {<Settings/>}/>
      </Routes>
    </Router>
  );
};

export default App;