import Navigation from '@/components/Navigation';
import CartDrawer from '@/components/CartDrawer';
import Footer from '@/components/Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-cream text-charcoal font-sans">
      <Navigation />
      <CartDrawer />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
