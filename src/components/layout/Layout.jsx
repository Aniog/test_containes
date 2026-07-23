import Navbar from './Navbar';
import CartDrawer from './CartDrawer';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <CartDrawer />
      <main>{children}</main>
      <Footer />
    </div>
  );
}