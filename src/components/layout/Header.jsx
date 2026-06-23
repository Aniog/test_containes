import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Heart, Menu, X, User } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false);
  const { setIsOpen, itemCount } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setCollectionsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const headerBg = isHome && !scrolled
    ? 'bg-transparent'
    : 'bg-cream border-b border-cream-dark';

  const textColor = 'text-ink';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${headerBg}`}
        style={{ transition: 'background-color 0.4s ease, border-color 0.4s ease' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
          {/* Left nav */}
          <nav className="hidden md:flex items-center gap-8 flex-1">
            <div
              className="relative group"
              onMouseEnter={() => setCollectionsOpen(true)}
              onMouseLeave={() => setCollectionsOpen(false)}
            >
              <button
                className={`label-caps ${textColor} hover:text-gold transition-colors duration-300`}
              >
                Collections
              </button>
              {collectionsOpen && (
                <div className="absolute top-full left-0 pt-4 z-50">
                  <div className="bg-cream border border-cream-dark py-4 px-6 min-w-[180px]">
                    {[
                      { name: 'The Night Shift', slug: 'night-shift' },
                      { name: 'Dawn Light', slug: 'dawn-light' },
                      { name: 'Quiet Hours', slug: 'quiet-hours' },
                    ].map(c => (
                      <Link
                        key={c.slug}
                        to={`/collections/${c.slug}`}
                        className="block py-2 label-caps text-ink hover:text-gold transition-colors duration-300"
                      >
                        {c.name}
                      </Link>
                    ))}
                    <div className="border-t border-cream-dark mt-2 pt-2">
                      <Link
                        to="/shop"
                        className="block py-2 label-caps text-ink hover:text-gold transition-colors duration-300"
                      >
                        Shop All
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link
              to="/story"
              className={`label-caps ${textColor} hover:text-gold transition-colors duration-300`}
            >
              Story
            </Link>
            <Link
              to="/journal"
              className={`label-caps ${textColor} hover:text-gold transition-colors duration-300`}
            >
              Journal
            </Link>
          </nav>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-xl md:text-2xl tracking-widest ${textColor} hover:text-gold transition-colors duration-300 flex-1 md:flex-none text-center`}
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, letterSpacing: '0.2em' }}
          >
            Small Hours
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-4 flex-1 justify-end">
            <Link
              to="/wishlist"
              className={`hidden md:flex ${textColor} hover:text-gold transition-colors duration-300`}
              aria-label="Wishlist"
            >
              <Heart size={18} strokeWidth={1.5} />
            </Link>
            <Link
              to="/account"
              className={`hidden md:flex ${textColor} hover:text-gold transition-colors duration-300`}
              aria-label="Account"
            >
              <User size={18} strokeWidth={1.5} />
            </Link>
            <button
              onClick={() => setIsOpen(true)}
              className={`relative ${textColor} hover:text-gold transition-colors duration-300`}
              aria-label="Cart"
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              {itemCount > 0 && (
                <span
                  className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-gold text-ink text-center flex items-center justify-center"
                  style={{ fontSize: '9px', fontFamily: 'Inter, sans-serif' }}
                >
                  {itemCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMenuOpen(true)}
              className={`md:hidden ${textColor} hover:text-gold transition-colors duration-300`}
              aria-label="Menu"
            >
              <Menu size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <div
        className={`fixed inset-0 z-[100] bg-cream flex flex-col items-center justify-center transition-all duration-400 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-ink hover:text-gold transition-colors duration-300"
          aria-label="Close menu"
        >
          <X size={22} strokeWidth={1.5} />
        </button>

        <Link
          to="/"
          className="font-serif text-2xl tracking-widest text-ink mb-12"
          style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: '0.2em' }}
        >
          Small Hours
        </Link>

        <nav className="flex flex-col items-center gap-8">
          {[
            { label: 'Collections', to: '/shop' },
            { label: 'The Night Shift', to: '/collections/night-shift', sub: true },
            { label: 'Dawn Light', to: '/collections/dawn-light', sub: true },
            { label: 'Quiet Hours', to: '/collections/quiet-hours', sub: true },
            { label: 'Story', to: '/story' },
            { label: 'Journal', to: '/journal' },
            { label: 'Wishlist', to: '/wishlist' },
            { label: 'Account', to: '/account' },
          ].map(item => (
            <Link
              key={item.to}
              to={item.to}
              className={`label-caps text-ink hover:text-gold transition-colors duration-300 ${
                item.sub ? 'text-muted text-[9px]' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
