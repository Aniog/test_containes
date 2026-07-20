import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import { Toaster } from 'sonner';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-black selection:bg-[#D4AF37] selection:text-white">
      <Navbar />
      <CartDrawer />
      <main className="flex-grow">{children}</main>
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
};

export default Layout;
EOF > /workspace/my-app/src/Layout.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import { Toaster } from 'sonner';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-black selection:bg-[#D4AF37] selection:text-white">
      <Navbar />
      <CartDrawer />
      <main className="flex-grow">{children}</main>
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
};

export default Layout;
