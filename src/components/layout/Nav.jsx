import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Nav() {
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
    { label: 'Shop', to: '/shop' },
    { label: 'Collections', to: '/shop' },
    { label: 'About', to: '/#story' },
    { label: 'Journal', to: '/' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? 'bg-obsidian shadow-md'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl tracking-widest font-medium transition-colors duration-300 ${
                scrolled ? 'text-ivory' : 'text-ivory'
              }`}
            >
              VELMORA
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`font-sans text-xs uppercase tracking-widest font-medium transition-colors duration-300 hover:text-gold ${
                    scrolled ? 'text-taupe-light' : 'text-ivory/80'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className={`p-1 transition-colors duration-300 hover:text-gold ${
                  scrolled ? 'text-taupe-light' : 'text-ivory/80'
                }`}
                aria-label="Search"
              >
                <Search size={18} />
              </button>
              <button
                onClick={() => setIsOpen(true)}
                className={`p-1 relative transition-colors duration-300 hover:text-gold ${
                  scrolled ? 'text-taupe-light' : 'text-ivory/80'
                }`}
                aria-label="Cart"
              >
                <ShoppingBag size={18} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gold text-obsidian text-[10px] font-sans font-semibold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                    {totalItems}
                  </span>
                )}
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`md:hidden p-1 transition-colors duration-300 hover:text-gold ${
                  scrolled ? 'text-taupe-light' : 'text-ivory/80'
                }`}
                aria-label="Menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Search Bar */}
          {searchOpen && (
            <div className="pb-4 border-t border-white/10">
              <form onSubmit={handleSearch} className="flex items-center gap-3 pt-4">
                <input
                  autoFocus
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search jewelry..."
                  className="flex-1 bg-transparent border-b border-taupe text-ivory placeholder-taupe font-sans text-sm py-1 outline-none focus:border-gold transition-colors"
                />
                <button type="submit" className="text-gold hover:text-gold-light transition-colors">
                  <Search size={16} />
                </button>
              </form>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-obsidian flex flex-col pt-20 px-8">
          <nav className="flex flex-col gap-6 mt-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="font-serif text-2xl text-ivory hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto pb-12 border-t border-white/10 pt-8">
            <p className="font-sans text-xs uppercase tracking-widest text-taupe">
              Free Worldwide Shipping · 30-Day Returns
            </p>
          </div>
        </div>
      )}
    </>
  );
}
