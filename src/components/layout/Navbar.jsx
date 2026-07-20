import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/#about' },
  { label: 'Journal', to: '/' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, setIsOpen } = useCart();
  const location = useLocation();

  const isHomepage = location.pathname === '/';
  const solid = !isHomepage || scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          solid ? 'bg-velvet shadow-[0_2px_20px_rgba(0,0,0,0.25)]' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl tracking-widest2 font-light transition-colors duration-300 ${
                solid ? 'text-champagne' : 'text-mist'
              }`}
            >
              VELMORA
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`font-sans text-xs tracking-widest uppercase font-medium transition-colors duration-300 hover:text-champagne ${
                    solid ? 'text-smoke' : 'text-mist/80'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button
                aria-label="Search"
                className={`transition-colors duration-300 hover:text-champagne ${
                  solid ? 'text-smoke' : 'text-mist/80'
                }`}
              >
                <Search size={18} />
              </button>
              <button
                aria-label="Cart"
                onClick={() => setIsOpen(true)}
                className={`relative transition-colors duration-300 hover:text-champagne ${
                  solid ? 'text-smoke' : 'text-mist/80'
                }`}
              >
                <ShoppingBag size={18} />
                {count > 0 && (
                  <span className="absolute -top-2 -right-2 bg-champagne text-velvet text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center font-sans">
                    {count}
                  </span>
                )}
              </button>
              <button
                aria-label="Menu"
                onClick={() => setMobileOpen(true)}
                className={`md:hidden transition-colors duration-300 hover:text-champagne ${
                  solid ? 'text-smoke' : 'text-mist/80'
                }`}
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-velvet flex flex-col">
          <div className="flex items-center justify-between px-6 h-16">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="font-serif text-xl tracking-widest2 text-champagne font-light"
            >
              VELMORA
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="text-smoke hover:text-champagne transition-colors"
            >
              <X size={22} />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="font-serif text-3xl text-mist tracking-widest font-light hover:text-champagne transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="pb-12 flex justify-center gap-8 text-stone text-xs tracking-widest uppercase font-sans">
            <span>Instagram</span>
            <span>Pinterest</span>
            <span>TikTok</span>
          </div>
        </div>
      )}
    </>
  );
}

