import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Layout;
