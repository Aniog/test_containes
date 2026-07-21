import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CartDrawer } from './CartDrawer';

export function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-18 md:pt-22">
        {children}
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
