import { Outlet } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CartDrawer from './components/layout/CartDrawer';
import { ScrollRestoration } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col relative w-full">
      <ScrollRestoration />
      <Header />
      <main className="flex-1 w-full relative">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Layout;
