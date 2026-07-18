import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-cream text-charcoal font-sans">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Layout;
