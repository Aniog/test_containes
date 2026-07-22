import Navigation from './Navigation';
import CartDrawer from './CartDrawer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <main>{children}</main>
      <CartDrawer />
    </div>
  );
}
