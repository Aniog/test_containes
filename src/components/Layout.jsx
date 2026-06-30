import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, cartCount, onCartClick }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header cartCount={cartCount} onCartClick={onCartClick} />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
