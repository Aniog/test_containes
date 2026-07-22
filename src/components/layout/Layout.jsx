import Navbar from './Navbar';
import Footer from './Footer';
import CartDrawer from './CartDrawer';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <CartDrawer />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </>
  );
}