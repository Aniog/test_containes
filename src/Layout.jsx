import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
