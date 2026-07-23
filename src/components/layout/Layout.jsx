import Nav from './Nav';
import CartDrawer from './CartDrawer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-ivory">
      <Nav />
      <CartDrawer />
      <main>{children}</main>
    </div>
  );
}
