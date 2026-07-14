import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Contacts from './pages/Contacts.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">
              <Link to="/">My Landing Page</Link>
            </h1>
            <nav className="flex space-x-4">
              <Link to="/" className="text-gray-500 hover:text-gray-900">Home</Link>
              <Link to="/contacts" className="text-gray-500 hover:text-gray-900">View Contacts</Link>
            </nav>
          </div>
        </header>
        <main className="flex-1 w-full flex flex-col items-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App
