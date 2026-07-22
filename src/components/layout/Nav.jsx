import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, openDrawer } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    scrolled || !isHome
      ? 'bg-velmora-cream/95 backdrop-blur-md shadow-[0_1px_0_#EDE4D8]'
      : 'bg-transparent'
  }`;

  const isLinkActive = (path) => {
    if (path === '/shop') return location.pathname === '/shop';
    const search = location.pathname + location.search;
    return search === path || (path.startsWith('/shop?') && search === path);
  };

  const linkClass = (path) =>
    `text-xs tracking-superwide uppercase font-medium transition-colors duration-300 ${
      isLinkActive(path)
        ? 'text-velmora-golddark'
        : scrolled || !isHome
        ? 'text-velmora-charcoal hover:text-velmora-golddark'
        : 'text-white/90 hover:text-white'
    }`;

  const navLinks = [
    { label: 'Shop', to: '/shop' },
    { label: 'Earrings', to: '/shop?category=Earrings' },
    { label: 'Necklaces', to: '/shop?category=Necklaces' },
    { label: 'Huggies', to: '/shop?category=Huggies' },
  ];

  return (
    <nav className={navClass}>
      <div className="container-wide section-padding flex items-center justify-between h-16 md:h-20">
        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 -ml-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className={`w-5 h-5 ${scrolled || !isHome ? 'text-velmora-charcoal' : 'text-white'}`} />
          ) : (
            <Menu className={`w-5 h-5 ${scrolled || !isHome ? 'text-velmora-charcoal' : 'text-white'}`} />
          )}
        </button>

        {/* Center nav links (desktop) */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className={linkClass(link.to)}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Logo — center */}
        <Link
          to="/"
          className={`font-serif text-xl md:text-2xl tracking-superwide font-semibold transition-colors duration-300 absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 ${
            scrolled || !isHome ? 'text-velmora-charcoal' : 'text-white'
          }`}
        >
          VELMORA
        </Link>

        {/* Right icons */}
        <div className="flex items-center gap-1 md:gap-4">
          <button
            className={`p-2 transition-colors duration-300 ${
              scrolled || !isHome ? 'text-velmora-charcoal hover:text-velmora-golddark' : 'text-white/90 hover:text-white'
            }`}
            aria-label="Search"
          >
            <Search className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          <button
            onClick={openDrawer}
            className={`p-2 relative transition-colors duration-300 ${
              scrolled || !isHome ? 'text-velmora-charcoal hover:text-velmora-golddark' : 'text-white/90 hover:text-white'
            }`}
            aria-label="Cart"
          >
            <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
            {itemCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-velmora-gold text-[10px] font-sans font-semibold text-white flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-velmora-cream border-t border-velmora-sand animate-fade-in">
          <div className="section-padding py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} className="text-xs tracking-superwide uppercase font-medium text-velmora-charcoal">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
