import Nav from './Nav';
import Footer from './Footer';
import CartDrawer from '@/components/cart/CartDrawer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-ivory flex flex-col">
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
