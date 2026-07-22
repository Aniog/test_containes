import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Layout;
