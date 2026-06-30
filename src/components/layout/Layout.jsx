import Header from './Header';
import Footer from './Footer';
import CartDrawer from '../cart/CartDrawer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-cream-50">
      <Header />
      <main className="flex-grow pt-16 md:pt-20">
        {children}
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
