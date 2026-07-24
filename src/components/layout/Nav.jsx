import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/#story' },
  { label: 'Journal', href: '/' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { totalItems, setIsOpen } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-velmora-obsidian shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl font-light tracking-[0.25em] uppercase transition-colors duration-300 ${
                scrolled ? 'text-velmora-cream' : 'text-velmora-cream'
              }`}
            >
              Velmora
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-xs font-sans font-medium tracking-[0.15em] uppercase text-velmora-cream/80 hover:text-velmora-gold transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSearchOpen(s => !s)}
                className="text-velmora-cream/80 hover:text-velmora-gold transition-colors duration-300 p-1"
                aria-label="Search"
              >
                <Search size={18} strokeWidth={1.5} />
              </button>

              <button
                onClick={() => setIsOpen(true)}
                className="relative text-velmora-cream/80 hover:text-velmora-gold transition-colors duration-300 p-1"
                aria-label="Cart"
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-velmora-gold text-velmora-obsidian text-[10px] font-sans font-medium w-4 h-4 rounded-full flex items-center justify-center leading-none">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileOpen(s => !s)}
                className="md:hidden text-velmora-cream/80 hover:text-velmora-gold transition-colors duration-300 p-1"
                aria-label="Menu"
              >
                {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
              </button>
            </div>
          </div>

          {/* Search Bar */}
          {searchOpen && (
            <div className="pb-4 animate-fadeIn">
              <form onSubmit={handleSearch} className="flex items-center gap-3 border-b border-velmora-gold/30">
                <Search size={16} className="text-velmora-gold/60 flex-shrink-0" strokeWidth={1.5} />
                <input
                  autoFocus
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search jewelry..."
                  className="flex-1 bg-transparent text-velmora-cream placeholder-velmora-cream/40 text-sm font-sans py-2 outline-none tracking-wide"
                />
                <button type="submit" className="text-xs font-sans font-medium tracking-widest uppercase text-velmora-gold hover:text-velmora-gold-light transition-colors">
                  Search
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-velmora-obsidian border-t border-velmora-gold/10 animate-fadeIn">
            <nav className="flex flex-col px-6 py-6 gap-5">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-sans font-medium tracking-[0.15em] uppercase text-velmora-cream/80 hover:text-velmora-gold transition-colors duration-300"
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
