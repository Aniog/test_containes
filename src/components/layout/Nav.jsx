import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { count, setIsOpen } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  const navLinks = [
    { label: 'Shop', to: '/shop' },
    { label: 'Collections', to: '/shop' },
    { label: 'About', to: '/#about' },
    { label: 'Journal', to: '/#journal' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 ${
          scrolled
            ? 'bg-cream/95 backdrop-blur-sm shadow-sm border-b border-mist'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-xl lg:text-2xl font-light tracking-widest2 transition-colors duration-300 ${
                scrolled ? 'text-velvet' : 'text-cream'
              }`}
            >
              VELMORA
            </Link>

            {/* Center nav — desktop */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`font-sans text-xs tracking-widest3 uppercase transition-colors duration-300 hover:text-gold ${
                    scrolled ? 'text-charcoal' : 'text-cream/90'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSearchOpen(true)}
                className={`transition-colors duration-300 hover:text-gold ${
                  scrolled ? 'text-charcoal' : 'text-cream'
                }`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                onClick={() => setIsOpen(true)}
                className={`relative transition-colors duration-300 hover:text-gold ${
                  scrolled ? 'text-charcoal' : 'text-cream'
                }`}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {count > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gold text-cream text-xs w-4 h-4 rounded-full flex items-center justify-center font-sans font-medium leading-none">
                    {count}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileOpen(true)}
                className={`lg:hidden transition-colors duration-300 hover:text-gold ${
                  scrolled ? 'text-charcoal' : 'text-cream'
                }`}
                aria-label="Menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Search overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-velvet/90 backdrop-blur-sm flex items-start justify-center pt-32 px-6">
          <div className="w-full max-w-xl">
            <form onSubmit={handleSearch} className="relative">
              <input
                autoFocus
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search jewelry..."
                className="w-full bg-transparent border-b-2 border-sand text-cream font-serif text-2xl pb-3 outline-none placeholder:text-stone"
              />
              <button type="submit" className="absolute right-0 bottom-3 text-sand hover:text-champagne">
                <Search className="w-6 h-6" />
              </button>
            </form>
            <button
              onClick={() => setSearchOpen(false)}
              className="mt-8 text-stone hover:text-cream font-sans text-sm tracking-widest3 uppercase flex items-center gap-2"
            >
              <X className="w-4 h-4" /> Close
            </button>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-espresso flex flex-col">
          <div className="flex items-center justify-between px-6 h-16">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="font-serif text-xl text-cream tracking-widest2"
            >
              VELMORA
            </Link>
            <button onClick={() => setMobileOpen(false)} className="text-cream hover:text-sand">
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center flex-1 gap-8">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="font-serif text-3xl text-cream/90 hover:text-sand transition-colors tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="px-6 pb-10 text-center">
            <p className="font-sans text-xs text-stone tracking-widest3 uppercase">Free Worldwide Shipping</p>
          </div>
        </div>
      )}
    </>
  );
}
