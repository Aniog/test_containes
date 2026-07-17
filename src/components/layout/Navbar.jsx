import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);

  const links = [
    { to: '/shop', label: 'Shop' },
    { to: '/collections', label: 'Collections' },
    { to: '/about', label: 'About' },
    { to: '/journal', label: 'Journal' },
  ];

  const isHome = location.pathname === '/';
  const transparent = isHome && !scrolled;

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${transparent ? 'bg-transparent' : 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm'}`}>
        <nav className="max-w-[1440px] mx-auto flex items-center justify-between h-16 md:h-20 px-4 md:px-8 lg:px-16">
          <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            {mobileOpen
              ? <X className={`w-5 h-5 ${transparent ? 'text-[#FAF8F5]' : 'text-[#1A1A1A]'}`} />
              : <Menu className={`w-5 h-5 ${transparent ? 'text-[#FAF8F5]' : 'text-[#1A1A1A]'}`} />}
          </button>

          <Link to="/" className="flex-shrink-0">
            <span className={`font-serif text-2xl md:text-3xl font-semibold tracking-[0.2em] transition-colors duration-300 ${transparent ? 'text-[#FAF8F5]' : 'text-[#1A1A1A]'}`}>
              VELMORA
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {links.map(link => (
              <Link key={link.to} to={link.to} className={`font-sans text-xs uppercase tracking-[0.2em] transition-colors duration-300 hover:opacity-70 ${transparent ? 'text-[#FAF8F5]' : 'text-[#1A1A1A]'} ${location.pathname === link.to ? 'opacity-100' : 'opacity-80'}`}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button className={`p-2 transition-colors duration-300 ${transparent ? 'text-[#FAF8F5]' : 'text-[#1A1A1A]'}`} aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button className={`p-2 relative transition-colors duration-300 ${transparent ? 'text-[#FAF8F5]' : 'text-[#1A1A1A]'}`} onClick={() => setIsOpen(true)} aria-label="Cart">
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-[18px] h-[18px] bg-[#C5A572] text-[#FAF8F5] text-[10px] font-medium rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-[#1A1A1A]/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-16 left-0 right-0 bg-[#FAF8F5] shadow-xl">
            <div className="flex flex-col py-6 px-6">
              {links.map(link => (
                <Link key={link.to} to={link.to} className="font-sans text-sm uppercase tracking-[0.2em] py-4 text-[#1A1A1A] border-b border-[#E5DED5]/50 hover:text-[#C5A572] transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
