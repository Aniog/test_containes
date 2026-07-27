import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <header className="border-b border-slate-200 py-4 shadow-sm bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">SSourcing China</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="/" className="font-medium hover:text-secondary">Home</a>
            <a href="#services" className="font-medium hover:text-secondary">Services</a>
            <a href="#how-it-works" className="font-medium hover:text-secondary">How It Works</a>
            <a href="#contact" className="px-4 py-2 bg-secondary text-white rounded-md font-semibold hover:bg-secondary/90 transition">Free Quote</a>
          </nav>
        </div>
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white font-bold mb-4">SSourcing China</p>
          <p className="mb-4">Your reliable sourcing partner in Mainland China.</p>
          <p>&copy; 2026 SSourcing China. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
