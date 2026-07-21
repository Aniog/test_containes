import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CartDrawer from '../cart/CartDrawer';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <CartDrawer />
      <div className="pt-20 lg:pt-24">
        {children || <Outlet />}
      </div>
      <Footer />
    </>
  );
}
