import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/cart-context';
import IconButton from '@/components/ui/IconButton';

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/#story' },
  { label: 'Journal', href: '/#' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleCart, count } = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const handleNav = (href) => {
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '');
      if (location.pathname !== '/') {
        navigate(`/${id ? `#${id}` : ''}`);
      } else if (id) {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
    }
    setMobileOpen(false);
  };

  const overDark = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        overDark
          ? 'bg-transparent text-white'
          : 'bg-cream/95 text-espresso backdrop-blur-md border-b border-stoneborder/60'
      }`}
    >
      <nav className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Mobile menu button */}
        <div className="flex w-1/3 md:hidden">
          <IconButton
            onClick={() => setMobileOpen(true)}
            ariaLabel="Open menu"
            className={overDark ? 'text-white hover:bg-white/10' : 'text-espresso'}
          >
            <Menu size={22} strokeWidth={1.5} />
          </IconButton>
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex w-1/3 items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              className={`text-sm font-medium tracking-wide transition-opacity duration-300 hover:opacity-70 ${
                overDark ? 'text-white' : 'text-espresso'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Logo */}
        <div className="flex w-1/3 justify-center">
          <Link
            to="/"
            className="font-serif text-2xl md:text-3xl font-medium tracking-widest uppercase"
          >
            Velmora
          </Link>
        </div>

        {/* Right icons */}
        <div className="flex w-1/3 justify-end items-center gap-1 md:gap-3">
          <IconButton
            ariaLabel="Search"
            className={overDark ? 'text-white hover:bg-white/10' : 'text-espresso'}
          >
            <Search size={20} strokeWidth={1.5} />
          </IconButton>
          <IconButton
            onClick={toggleCart}
            ariaLabel="Cart"
            badge={count || undefined}
            className={overDark ? 'text-white hover:bg-white/10' : 'text-espresso'}
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
          </IconButton>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 md:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setMobileOpen(false)}
        />
        <aside
          className={`absolute left-0 top-0 h-full w-[80%] max-w-xs bg-cream p-6 shadow-2xl transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between mb-10">
            <span className="font-serif text-xl tracking-widest uppercase">Menu</span>
            <IconButton onClick={() => setMobileOpen(false)} ariaLabel="Close menu">
              <X size={22} strokeWidth={1.5} />
            </IconButton>
          </div>
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="text-left font-serif text-2xl text-espresso hover:text-gold transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </aside>
      </div>
    </header>
  );
}