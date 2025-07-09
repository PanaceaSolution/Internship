import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {

    navigate('/signin');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-400 to-blue-500 text-white">
      <header className="flex justify-between items-center p-6 shadow-md bg-black bg-opacity-30">
        <h1 className="text-2xl font-bold">MyApp</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md transition"
        >
          Logout
        </button>
      </header>

      <main className="flex-grow flex flex-col justify-center items-center px-4">
        <h2 className="text-4xl font-semibold mb-4">Welcome to the Homepage!</h2>
        <p className="text-lg max-w-xl text-center">
          You are successfully logged in. This is a simple homepage component with a
          clean design. You can customize it as per your needs.
        </p>
      </main>

      <footer className="p-4 text-center text-sm bg-black bg-opacity-20">
        &copy; 2025 MyApp. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
