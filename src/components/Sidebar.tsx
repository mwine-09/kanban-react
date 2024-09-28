// src/components/Sidebar.tsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true); // State to control sidebar visibility
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(getAuth());
      navigate('/login');
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle the sidebar visibility
  };

  return (
    <aside className={`bg-gray-200 min-h-screen p-4 transition-width duration-300 ${isOpen ? 'w-64' : 'w-16'}`}>
      <button onClick={toggleSidebar} className="mb-4">
        {isOpen ? 'Collapse' : 'Expand'} {/* Change button text based on sidebar state */}
      </button>
      <h2 className={`font-bold ${isOpen ? 'block' : 'hidden'}`}>Menu</h2>
      <ul className="mt-4">
        <li>
          <Link to="/home" className={`block p-2 hover:bg-gray-300 rounded ${isOpen ? 'block' : 'hidden'}`}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/settings" className={`block p-2 hover:bg-gray-300 rounded ${isOpen ? 'block' : 'hidden'}`}>
            Settings
          </Link>
        </li>
        <li>
          <button 
            onClick={handleLogout} 
            className={`block w-full text-left p-2 hover:bg-gray-300 rounded ${isOpen ? 'block' : 'hidden'}`}
          >
            Logout
          </button>
        </li>
        {/* Add more links as needed */}
      </ul>
    </aside>
  );
};

export default Sidebar;