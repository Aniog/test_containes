import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext.jsx';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleCart, itemCount } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Shop', href: '/shop' },
    { label: 'Collections', href: '/shop' },
    { label: 'About', href: '/about' },
    { label: 'Journal', href: '/journal' },
  ];

  const navClasses = isHome
    ? `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-background/95 backdrop-blur-md border-b border-hairline py-4' : 'bg-transparent py-5'
      }`
    : 'sticky top-0 z-50 border-b border-hairline bg-background/95 backdrop-blur-md py-4';

  return (
    <>
      <header className={navClasses}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            className="p-2 lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>

          <Link
            to="/"
            className="font-serif text-2xl tracking-[0.18em] text-foreground md:text-3xl"
          >
            VELMORA
          </Link>

          <nav className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="relative text-xs font-medium uppercase tracking-[0.16em] text-foreground/90 transition-colors hover:text-accent after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1 md:gap-3">
            <button
              type="button"
              className="p-2 text-foreground/90 transition-colors hover:text-accent"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button
              type="button"
              onClick={toggleCart}
              className="relative p-2 text-foreground/90 transition-colors hover:text-accent"
              aria-label="Cart"
            >
              <ShoppingBag size={20} />
              {itemCount > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[9px] font-semibold text-white">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[80] bg-background transition-transform duration-500 lg:hidden ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-hairline px-4 py-5">
          <span className="font-serif text-2xl tracking-[0.18em]">VELMORA</span>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="p-2"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col px-8 py-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              className="border-b border-hairline py-5 font-serif text-2xl text-foreground/90 transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
