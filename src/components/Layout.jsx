import { useCart } from '../hooks/useCart';
import Navbar from './Navbar';
import Footer from './Footer';
import CartDrawer from './CartDrawer';

export default function Layout({ children }) {
  const { isOpen, closeCart } = useCart();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <CartDrawer isOpen={isOpen} onClose={closeCart} />
    </div>
  );
}