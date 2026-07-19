import { Navigation } from './Navigation';
import { Footer } from './Footer';
import CartDrawer from '../CartDrawer';

export const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <CartDrawer />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};