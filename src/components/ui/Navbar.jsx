import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/hooks/useCart';

const navLinks = [
  { name: 'Shop', href: '/shop' },
  { name: 'Collections', href: '/shop' },
  { name: 'About', href: '/about' },
  { name: 'Journal', href: '/journal' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toggleCart, count } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarBg = isHome
    ? scrolled
      ? 'bg-velmora-cream/95 backdrop-blur-md shadow-soft'
      : 'bg-transparent'
    : 'bg-velmora-cream/95 backdrop-blur-md shadow-soft';

  const textColor = isHome && !scrolled ? 'text-velmora-cream' : 'text-velmora-espresso';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navbarBg}`}
      >
        <nav className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex items-center justify-between h-16 md:h-20">
            <button
              type="button"
              className={`md:hidden p-2 -ml-2 transition-colors ${textColor}`}
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>

            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl tracking-widest-xl uppercase transition-colors ${textColor}`}
            >
              Velmora
            </Link>

            <ul className="hidden md:flex items-center gap-8 lg:gap-10">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className={`text-xs uppercase tracking-widest font-medium transition-colors hover:text-velmora-gold ${textColor}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className={`flex items-center gap-4 md:gap-5 transition-colors ${textColor}`}>
              <button
                type="button"
                className="p-1 hover:text-velmora-gold transition-colors"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <button
                type="button"
                onClick={toggleCart}
                className="relative p-1 hover:text-velmora-gold transition-colors"
                aria-label="Open cart"
              >
                <ShoppingBag size={20} />
                {count > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-velmora-gold text-velmora-espresso text-[10px] font-semibold rounded-full flex items-center justify-center">
                    {count}
                  </span>
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] bg-velmora-cream transform transition-transform duration-500 md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-velmora-taupe/30">
          <span className="font-serif text-xl tracking-widest-xl uppercase text-velmora-espresso">
            Velmora
          </span>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 -mr-2 text-velmora-espresso"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col p-8 gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-serif text-2xl text-velmora-espresso hover:text-velmora-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
