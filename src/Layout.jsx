import Nav from './components/layout/Nav';
import CartDrawer from './components/layout/CartDrawer';
import Footer from './components/layout/Footer';

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
