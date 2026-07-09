import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { totalItems, setIsOpen } = useCart();
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
    { label: 'Shop', href: '/shop' },
    { label: 'Collections', href: '/shop' },
    { label: 'About', href: '/#about' },
    { label: 'Journal', href: '/#journal' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? 'bg-cream/95 backdrop-blur-sm border-b border-border shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl font-light tracking-widest uppercase transition-colors duration-300 ${
                scrolled ? 'text-ink' : 'text-cream'
              }`}
            >
              Velmora
            </Link>

            {/* Center nav — desktop */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-xs uppercase tracking-widest font-medium transition-colors duration-200 hover:text-gold ${
                    scrolled ? 'text-ink' : 'text-cream'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSearchOpen(v => !v)}
                className={`transition-colors duration-200 hover:text-gold ${
                  scrolled ? 'text-ink' : 'text-cream'
                }`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                onClick={() => setIsOpen(true)}
                className={`relative transition-colors duration-200 hover:text-gold ${
                  scrolled ? 'text-ink' : 'text-cream'
                }`}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-gold text-cream text-[10px] font-medium w-4 h-4 rounded-full flex items-center justify-center leading-none">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileOpen(v => !v)}
                className={`md:hidden transition-colors duration-200 hover:text-gold ${
                  scrolled ? 'text-ink' : 'text-cream'
                }`}
                aria-label="Menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Search bar */}
          {searchOpen && (
            <div className="border-t border-border/50 py-3 animate-fadeIn">
              <form onSubmit={handleSearch} className="flex items-center gap-3">
                <Search className="w-4 h-4 text-taupe flex-shrink-0" />
                <input
                  autoFocus
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search jewelry..."
                  className="flex-1 bg-transparent text-sm text-ink placeholder-muted outline-none font-sans"
                />
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  className="text-taupe hover:text-ink transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden bg-cream border-t border-border animate-fadeIn">
            <nav className="flex flex-col px-6 py-6 gap-5">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-xs uppercase tracking-widest font-medium text-ink hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
