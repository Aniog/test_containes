import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <CartDrawer />
      {children}
      <Footer />
    </>
  );
}
