// src/components/Settings.tsx
import React, { useState } from 'react';

const Settings: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform settings update logic here
    // This could be an API call to update user settings in your backend
    console.log('Settings updated:', formData);

    // Simulating success or error response
    if (formData.username && formData.email) {
      setSuccess('Settings updated successfully!');
      setError(null);
    } else {
      setError('Please fill out all fields.');
      setSuccess(null);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Settings</h2>
      {error && <div className="text-red-600 mb-4">{error}</div>}
      {success && <div className="text-green-600 mb-4">{success}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block font-medium mb-1">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}
            className="border rounded w-full p-2"
            placeholder="Enter your username"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded w-full p-2"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="password" className="block font-medium mb-1">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="border rounded w-full p-2"
            placeholder="Enter a new password"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Update Settings
        </button>
      </form>
    </div>
  );
};

export default Settings;