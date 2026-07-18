import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, setDrawerOpen } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);

  const navClass = `fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
    scrolled || !isHome
      ? 'bg-white/95 backdrop-blur-sm shadow-sm'
      : 'bg-transparent'
  }`;

  const linkClass = `text-xs uppercase tracking-widest transition-colors duration-300 ${
    scrolled || !isHome ? 'text-espresso hover:text-gold' : 'text-white/90 hover:text-white'
  }`;

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile menu button */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-espresso">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className={`w-5 h-5 ${scrolled || !isHome ? 'text-espresso' : 'text-white'}`} />}
          </button>

          {/* Center links — desktop */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/shop" className={linkClass}>Shop</Link>
            <Link to="/shop?category=Earrings" className={linkClass}>Earrings</Link>
            <Link to="/shop?category=Necklaces" className={linkClass}>Necklaces</Link>
            <Link to="/shop?category=Huggies" className={linkClass}>Huggies</Link>
          </div>

          {/* Logo */}
          <Link to="/" className={`absolute left-1/2 -translate-x-1/2 font-serif text-xl lg:text-2xl tracking-[0.2em] transition-colors duration-300 ${
            scrolled || !isHome ? 'text-espresso' : 'text-white'
          }`}>
            VELMORA
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-4 lg:gap-5">
            <button className={`transition-colors duration-300 ${scrolled || !isHome ? 'text-espresso hover:text-gold' : 'text-white/90 hover:text-white'}`}>
              <Search className="w-4 h-4 lg:w-5 lg:h-5" />
            </button>
            <button
              onClick={() => setDrawerOpen(true)}
              className={`relative transition-colors duration-300 ${scrolled || !isHome ? 'text-espresso hover:text-gold' : 'text-white/90 hover:text-white'}`}
            >
              <ShoppingBag className="w-4 h-4 lg:w-5 lg:h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-hairline py-6 space-y-4 animate-fade-in">
            <Link to="/shop" className="block px-2 text-sm uppercase tracking-widest text-espresso hover:text-gold transition-colors">Shop All</Link>
            <Link to="/shop?category=Earrings" className="block px-2 text-sm uppercase tracking-widest text-espresso hover:text-gold transition-colors">Earrings</Link>
            <Link to="/shop?category=Necklaces" className="block px-2 text-sm uppercase tracking-widest text-espresso hover:text-gold transition-colors">Necklaces</Link>
            <Link to="/shop?category=Huggies" className="block px-2 text-sm uppercase tracking-widest text-espresso hover:text-gold transition-colors">Huggies</Link>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fadeIn 0.2s ease-out; }
      `}</style>
    </nav>
  );
}
