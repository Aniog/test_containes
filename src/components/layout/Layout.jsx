import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { CartDrawer } from '../cart/CartDrawer';

export function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <CartDrawer />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}