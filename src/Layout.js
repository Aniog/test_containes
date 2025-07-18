import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Todo Application</h1>
        </div>
      </header>
      
      <main>
        {children}
      </main>
      
      <footer className="py-4 text-center text-gray-500 text-sm mt-8">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Todo App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;