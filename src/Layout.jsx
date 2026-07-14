import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <header className="border-b py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 bg-white/90 backdrop-blur z-50">
        <Link to="/" className="text-xl font-bold font-inter tracking-tight flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2z"></path><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path></svg>
          </div>
          ContactFlow
        </Link>
        <nav className="flex gap-4 items-center">
          <Link to="/" className="text-sm font-medium hover:text-blue-600 transition-colors">Home</Link>
          <Link to="/contacts" className="text-sm font-medium hover:text-blue-600 transition-colors">Admin Dashboard</Link>
        </nav>
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="py-8 bg-slate-50 border-t border-slate-200 text-center text-slate-500 text-sm">
        <p>&copy; 2026 ContactFlow. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
