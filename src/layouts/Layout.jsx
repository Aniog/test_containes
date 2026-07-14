import { CartProvider } from '../context/CartContext';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CartDrawer } from '../components/cart/CartDrawer';

export function Layout({ children }) {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}