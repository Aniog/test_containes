import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const transparent = isHome && !scrolled && !mobileOpen;

  const navLinks = [
    { label: 'Shop', to: '/shop' },
    { label: 'Collections', to: '/shop' },
    { label: 'About', to: '/#story' },
    { label: 'Journal', to: '/' },
  ];

  return (
    <>
      <nav className={cn(
        'fixed top-0 left-0 right-0 z-30 transition-all duration-400',
        transparent
          ? 'bg-transparent'
          : 'bg-velmora-linen/95 backdrop-blur-sm border-b border-velmora-sand shadow-[0_1px_20px_rgba(0,0,0,0.06)]'
      )}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <span className={cn(
                'font-cormorant text-2xl md:text-3xl font-light tracking-[0.15em] transition-colors duration-300',
                transparent ? 'text-velmora-linen' : 'text-velmora-obsidian'
              )}>
                VELMORA
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={cn(
                    'font-inter text-[11px] tracking-widest uppercase transition-colors duration-200',
                    transparent
                      ? 'text-velmora-linen/80 hover:text-velmora-gold'
                      : 'text-velmora-stone hover:text-velmora-gold'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button className={cn(
                'transition-colors duration-200 hidden md:block',
                transparent ? 'text-velmora-linen/80 hover:text-velmora-gold' : 'text-velmora-stone hover:text-velmora-gold'
              )}>
                <Search size={18} />
              </button>

              <button
                onClick={() => setIsOpen(true)}
                className={cn(
                  'relative transition-colors duration-200',
                  transparent ? 'text-velmora-linen/80 hover:text-velmora-gold' : 'text-velmora-stone hover:text-velmora-gold'
                )}
              >
                <ShoppingBag size={18} />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-velmora-gold text-velmora-obsidian text-[9px] font-inter font-medium rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileOpen(v => !v)}
                className={cn(
                  'md:hidden transition-colors duration-200',
                  transparent ? 'text-velmora-linen/80 hover:text-velmora-gold' : 'text-velmora-stone hover:text-velmora-gold'
                )}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          'md:hidden overflow-hidden transition-all duration-300 bg-velmora-linen border-t border-velmora-sand',
          mobileOpen ? 'max-h-80' : 'max-h-0'
        )}>
          <div className="px-6 py-4 space-y-4">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.to}
                className="block font-inter text-xs tracking-widest uppercase text-velmora-stone hover:text-velmora-gold transition-colors py-1"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-velmora-sand">
              <button className="flex items-center gap-2 font-inter text-xs tracking-widest uppercase text-velmora-stone hover:text-velmora-gold transition-colors">
                <Search size={14} /> Search
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
