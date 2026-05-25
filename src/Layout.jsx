import React from 'react';
import { Toaster } from 'sonner';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased text-slate-900">
      <main>
        {children}
      </main>
      <Toaster position="top-center" expand={false} richColors />
    </div>
  );
};

export default Layout;
