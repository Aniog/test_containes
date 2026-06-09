import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import { Toaster } from 'sonner';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <Toaster position="top-center" richColors closeButton />
    </div>
  );
};

export default Layout;