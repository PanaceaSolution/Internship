import React, { useState } from 'react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Data:', { email, password });
 
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center">
        <img
          src="/login-illustration.png" 
          alt="Login Illustration"
          className="max-w-full h-auto"
        />
      </div>

      {/* Right Side Form */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white">
        <form
          onSubmit={handleSubmit}
          className="w-80 space-y-6"
        >
          <h1 className="text-3xl font-bold mb-6">Login</h1>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
          >
            Login
          </button>

          <p className="text-sm text-gray-600 text-center">
            Don't have an account yet?{' '}
            <a href="/signup" className="text-blue-500 hover:underline">Sign Up</a>{' '}
            <a href="/" className="text-blue-500 hover:underline">Back to page</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;