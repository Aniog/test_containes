import { CartProvider } from './context/CartContext';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import CartDrawer from './components/ui/CartDrawer';

export default function Layout({ children }) {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
