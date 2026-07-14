import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { count, setIsOpen } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === '/';
  const isSolid = scrolled || !isHome;

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

  const navLinks = [
    { label: 'Shop', href: '/shop' },
    { label: 'Collections', href: '/shop' },
    { label: 'About', href: '/#about' },
    { label: 'Journal', href: '/#journal' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isSolid
            ? 'bg-velmora-obsidian shadow-[0_2px_20px_rgba(26,23,20,0.3)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className={`font-cormorant text-xl md:text-2xl tracking-widest2 font-medium transition-colors duration-300 ${
                scrolled ? 'text-velmora-text-light' : 'text-velmora-text-light'
              }`}
            >
              VELMORA
            </Link>

            {/* Center nav — desktop */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="font-inter text-xs uppercase tracking-widest text-velmora-sand hover:text-velmora-gold transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSearchOpen(s => !s)}
                className="text-velmora-sand hover:text-velmora-gold transition-colors duration-300"
                aria-label="Search"
              >
                <Search size={18} />
              </button>
              <button
                onClick={() => setIsOpen(true)}
                className="relative text-velmora-sand hover:text-velmora-gold transition-colors duration-300"
                aria-label="Cart"
              >
                <ShoppingBag size={18} />
                {count > 0 && (
                  <span className="absolute -top-2 -right-2 bg-velmora-gold text-velmora-obsidian text-[10px] font-inter font-medium w-4 h-4 rounded-full flex items-center justify-center">
                    {count}
                  </span>
                )}
              </button>
              {/* Mobile menu toggle */}
              <button
                className="md:hidden text-velmora-sand hover:text-velmora-gold transition-colors duration-300"
                onClick={() => setMobileOpen(s => !s)}
                aria-label="Menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Search bar */}
          {searchOpen && (
            <div className="pb-4 animate-slideDown">
              <form onSubmit={handleSearch} className="flex items-center gap-3 border-b border-velmora-stone/50">
                <Search size={16} className="text-velmora-mist" />
                <input
                  autoFocus
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search jewelry..."
                  className="flex-1 bg-transparent font-inter text-sm text-velmora-text-light placeholder-velmora-mist outline-none py-2"
                />
              </form>
            </div>
          )}
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-velmora-obsidian border-t border-velmora-stone/30 animate-slideDown">
            <nav className="flex flex-col px-6 py-6 gap-5">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-inter text-xs uppercase tracking-widest text-velmora-sand hover:text-velmora-gold transition-colors duration-300"
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
