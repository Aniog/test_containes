import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { toggleCart, totalItems } = useCart();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  const bgClass =
    isHome && !scrolled
      ? "bg-transparent text-cream"
      : "bg-cream/95 backdrop-blur-md text-charcoal shadow-sm";

  const linkHover = isHome && !scrolled ? "hover:text-accent-light" : "hover:text-accent";

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${bgClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className={`md:hidden p-2 ${linkHover}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Logo */}
            <Link to="/" className="serif text-xl md:text-2xl font-semibold tracking-[0.2em] uppercase">
              Velmora
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/shop" className={`text-sm font-medium uppercase tracking-widest ${linkHover}`}>Shop</Link>
              <Link to="/shop?category=Necklaces" className={`text-sm font-medium uppercase tracking-widest ${linkHover}`}>Collections</Link>
              <Link to="/" className={`text-sm font-medium uppercase tracking-widest ${linkHover}`}>About</Link>
              <Link to="/" className={`text-sm font-medium uppercase tracking-widest ${linkHover}`}>Journal</Link>
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className={`p-2 ${linkHover}`}
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <button
                onClick={toggleCart}
                className={`p-2 relative ${linkHover}`}
                aria-label="Cart"
              >
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-accent text-cream text-[10px] font-medium rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-cream text-charcoal border-t border-divider"
            >
              <div className="px-6 py-4 space-y-4">
                <Link to="/shop" className="block text-sm font-medium uppercase tracking-widest">Shop</Link>
                <Link to="/shop?category=Necklaces" className="block text-sm font-medium uppercase tracking-widest">Collections</Link>
                <Link to="/" className="block text-sm font-medium uppercase tracking-widest">About</Link>
                <Link to="/" className="block text-sm font-medium uppercase tracking-widest">Journal</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Search overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-16 md:top-20 left-0 right-0 z-30 bg-cream border-b border-divider shadow-lg"
          >
            <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-3">
              <Search size={18} className="text-warm-gray flex-shrink-0" />
              <input
                type="text"
                placeholder="Search products..."
                className="flex-1 bg-transparent outline-none text-sm placeholder:text-warm-gray-light"
                autoFocus
              />
              <button onClick={() => setSearchOpen(false)} className="text-warm-gray hover:text-charcoal">
                <X size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
