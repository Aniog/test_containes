import React from 'react';
import { Outlet } from 'react-router-dom';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Layout;
