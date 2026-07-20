import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-cream text-charcoal">
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
