import Nav from './Nav';
import Footer from './Footer';
import CartDrawer from '@/components/cart/CartDrawer';

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
      <CartDrawer />
    </>
  );
}
