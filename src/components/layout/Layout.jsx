import Navbar from '../navbar/Navbar';
import Footer from '../home/Footer';
import CartDrawer from '../cart/CartDrawer';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <CartDrawer />
    </>
  );
}