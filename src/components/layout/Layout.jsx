import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <Navbar cartCount={cartCount} />
      <main className="flex-1">
        <Outlet context={{ cartCount, setCartCount }} />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
