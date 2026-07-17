import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import CartDrawer from '../cart/CartDrawer';

const Layout = () => {
  return (
    <div className="min-h-screen bg-velmora-cream">
      <Navigation />
      <main>
        <Outlet />
      </main>
      <CartDrawer />
    </div>
  );
};

export default Layout;