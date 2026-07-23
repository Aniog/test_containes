import { Outlet } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import CartDrawer from './components/cart/CartDrawer';

const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
      <CartDrawer />
    </>
  );
};

export default Layout;
