import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-emerald-500/30">
      {children}
    </div>
  );
};

export default Layout;
