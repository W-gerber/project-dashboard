import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/auth/login', {
        username,
        password,
      });
      localStorage.setItem('token', response.data);
      navigate('/');
    } catch (error) {
      alert('Login failed!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <motion.div
        className="bg-white rounded-lg shadow-xl flex w-full max-w-4xl"
        style={{ height: '534px' }}
        initial={{ rotateY: -90, opacity: 0 }}
        animate={{ rotateY: 0, opacity: 1 }}
        exit={{ rotateY: 90, opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
              Welcome Back to the Project Dashboard
            </h1>
            <p className="text-center text-sm text-gray-600 mb-8">
              Don't have an account?
            </p>
          </div>
          <form onSubmit={handleLogin}>
            <div className="mb-5">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Enter your username"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors mb-4"
            >
              Login
            </button>
            <p className="text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <Link
                to="/register"
                className="font-medium text-blue-600 hover:underline transition duration-300 ease-in-out"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
        <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-blue-500 to-indigo-600 p-10 rounded-r-lg flex-col justify-between">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Start your journey with the Project Dashboard
            </h2>
            <p className="text-white mb-8">
              Organize your projects, collaborate with your team, and track your progress all in one place.
            </p>
          </div>
          <div className="bg-white bg-opacity-20 p-4 rounded-lg">
            <p className="text-white">
              Get started with managing your projects effectively from day one!
            </p>
            <div className="flex items-center mt-4">
              <img
                src="https://source.unsplash.com/random/50x50"
                alt="User"
                className="w-10 h-10 rounded-full mr-4"
              />
              <div>
                <p className="text-white font-bold">Jane Smith</p>
                <p className="text-white text-sm">
                  Published 10+ projects successfully
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;
