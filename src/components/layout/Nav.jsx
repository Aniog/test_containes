import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';

const navLinks = [
  { to: '/shop', label: 'Shop' },
  { to: '/shop?category=earrings', label: 'Collections' },
  { to: '/about', label: 'About' },
  { to: '/journal', label: 'Journal' },
];

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, openCart, isCartOpen, closeCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="section-container flex h-16 items-center justify-between">
        <Link to="/" className="font-serif text-xl tracking-wide-custom text-[#1c1917]">
          VELMORA
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-xs uppercase tracking-wide-custom transition-colors duration-300 ${
                location.pathname === link.to || location.pathname.startsWith(link.to.split('?')[0])
                  ? 'text-[#1c1917]'
                  : 'text-[#5c5650] hover:text-[#1c1917]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden md:inline-flex rounded-full p-2 text-[#5c5650] hover:text-[#1c1917] transition-colors">
            <Search className="h-5 w-5" />
          </button>

          <button
            onClick={openCart}
            className="relative rounded-full p-2 text-[#5c5650] hover:text-[#1c1917] transition-colors"
          >
            <ShoppingBag className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -right-0.5 -top-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#b8860b] text-[10px] font-semibold text-white">
                {totalItems}
              </span>
            )}
          </button>

          <button className="md:hidden rounded-full p-2 text-[#5c5650]" onClick={() => setMobileOpen(true)}>
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side="left" className="w-full max-w-sm">
          <div className="mt-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="font-serif text-2xl text-[#1c1917] hover:text-[#b8860b] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Nav;
