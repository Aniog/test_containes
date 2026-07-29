import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="page-wrapper">
      <header className="border-b bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold text-slate-900">My App</h1>
          <nav className="flex items-center gap-4 text-sm text-slate-600">
            <a href="/" className="hover:text-slate-900">Home</a>
          </nav>
        </div>
      </header>
      <main className="main-content">{children}</main>
      <footer className="border-t bg-white/60">
        <div className="mx-auto max-w-6xl px-4 py-4 text-center text-sm text-slate-500">
          Built with React + Tailwind + shadcn/ui
        </div>
      </footer>
    </div>
  );
};

export default Layout;
