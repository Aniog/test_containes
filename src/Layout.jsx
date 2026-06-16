import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-800 selection:bg-amber-100 selection:text-blue-900 overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;