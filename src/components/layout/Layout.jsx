import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import CartDrawer from '../cart/CartDrawer';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Layout;