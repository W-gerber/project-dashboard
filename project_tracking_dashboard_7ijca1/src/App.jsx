import React from 'react';
    import { Routes, Route, Link } from 'react-router-dom';
    import './index.css'; // Import Tailwind CSS
    import Dashboard from './components/Dashboard';
    import Login from './components/Login';
    import Register from './components/Register';

    function App() {
      return (
        <div className="bg-gray-100 min-h-screen">
          <nav className="bg-white shadow-md p-4">
            <div className="container mx-auto flex justify-between items-center">
              <Link to="/" className="text-2xl font-bold text-gray-800">Project Dashboard</Link>
              <div>
                <Link to="/login" className="text-gray-600 hover:text-gray-800 mr-4">Login</Link>
                <Link to="/register" className="text-gray-600 hover:text-gray-800">Register</Link>
              </div>
            </div>
          </nav>

          <div className="container mx-auto py-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
        </div>
      );
    }

    export default App;
