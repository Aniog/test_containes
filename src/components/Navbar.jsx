import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext.jsx';
import { ALL_PRODUCTS, formatPrice } from '@/data/products.js';
import { StrkImg, ImageScope } from '@/components/StrkImage.jsx';

const NAV_LINKS = [
  { to: '/shop', label: 'Shop' },
  { to: '/collections', label: 'Collections' },
  { to: '/about', label: 'About' },
  { to: '/journal', label: 'Journal' },
];

function SearchOverlay({ open, onClose }) {
  const [query, setQuery] = useState('');
  const results = query.trim()
    ? ALL_PRODUCTS.filter((p) =>
        `${p.name} ${p.tagline} ${p.category}`.toLowerCase().includes(query.toLowerCase()),
      ).slice(0, 5)
    : [];

  useEffect(() => {
    if (!open) setQuery('');
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-espresso/40 backdrop-blur-[2px]" onClick={onClose} />
      <div className="relative mx-auto mt-24 max-w-xl px-5 animate-fade-up">
        <div className="bg-ivory shadow-[0_24px_60px_rgba(32,25,20,0.25)]">
          <div className="flex items-center gap-3 border-b border-linen px-5">
            <Search className="h-4 w-4 text-mink" />
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search earrings, huggies, necklaces…"
              className="w-full bg-transparent py-4 text-sm text-espresso placeholder:text-ash focus:outline-none"
            />
            <button onClick={onClose} aria-label="Close search" className="text-mink hover:text-espresso">
              <X className="h-4 w-4" />
            </button>
          </div>
          {results.length > 0 && (
            <ImageScope className="max-h-[50vh] overflow-y-auto" deps={[query]}>
              {results.map((p) => (
                <Link
                  key={p.id}
                  to={`/product/${p.id}`}
                  onClick={onClose}
                  className="flex items-center gap-4 px-5 py-3 transition-colors hover:bg-cream"
                >
                  <StrkImg
                    imgId={`search-${p.id}`}
                    query={`gold jewelry product photography, ${p.tagline}, warm neutral background`}
                    ratio="1x1"
                    width={120}
                    alt={p.name}
                    className="h-12 w-12 object-cover"
                  />
                  <div className="min-w-0">
                    <p className="truncate font-serif text-sm uppercase tracking-[0.14em] text-espresso">
                      {p.name}
                    </p>
                    <p className="text-xs text-mink">{p.tagline}</p>
                  </div>
                  <span className="ml-auto text-sm text-espresso">{formatPrice(p.price)}</span>
                </Link>
              ))}
            </ImageScope>
          )}
          {query.trim() && results.length === 0 && (
            <p className="px-5 py-6 text-sm text-mink">No pieces found for “{query}”.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { count, openCart } = useCart();
  const location = useLocation();

  const onHeroPage = location.pathname === '/' || location.pathname === '/about';
  const transparent = onHeroPage && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const linkClass = ({ isActive }) =>
    `relative text-[11px] font-medium uppercase tracking-luxe transition-colors duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-current after:transition-all after:duration-300 ${
      isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
    }`;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          transparent
            ? 'bg-transparent text-ivory'
            : 'border-b border-linen/70 bg-ivory/95 text-espresso shadow-[0_8px_30px_rgba(32,25,20,0.06)] backdrop-blur-md'
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-[72px] md:px-10">
          {/* Left: logo */}
          <Link
            to="/"
            className="font-serif text-xl font-medium uppercase tracking-[0.3em] md:text-[22px]"
          >
            Velmora
          </Link>

          {/* Center links */}
          <div className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((l) => (
              <NavLink key={l.to} to={l.to} className={linkClass}>
                {l.label}
              </NavLink>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-1 md:gap-2">
            <button
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 hover:bg-current/10"
            >
              <Search className="h-[18px] w-[18px]" strokeWidth={1.5} />
            </button>
            <button
              aria-label="Open cart"
              onClick={openCart}
              className="relative flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 hover:bg-current/10"
            >
              <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.5} />
              {count > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-bronze px-1 text-[10px] font-semibold text-ivory">
                  {count}
                </span>
              )}
            </button>
            <button
              aria-label="Menu"
              onClick={() => setMobileOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 hover:bg-current/10 lg:hidden"
            >
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[70] transition-opacity duration-300 lg:hidden ${
          mobileOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-espresso/50" onClick={() => setMobileOpen(false)} />
        <div
          className={`absolute right-0 top-0 flex h-full w-[300px] flex-col bg-ivory transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-linen px-6 py-5">
            <span className="font-serif text-lg uppercase tracking-[0.3em] text-espresso">Velmora</span>
            <button aria-label="Close menu" onClick={() => setMobileOpen(false)} className="text-espresso">
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex flex-col px-6 py-8">
            {[{ to: '/', label: 'Home' }, ...NAV_LINKS].map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className="border-b border-linen/70 py-4 font-serif text-2xl text-espresso transition-colors hover:text-bronze"
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <p className="mt-auto px-6 pb-8 text-xs leading-relaxed text-mink">
            Demi-fine gold jewelry, crafted to be treasured. Free worldwide shipping on every order.
          </p>
        </div>
      </div>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
