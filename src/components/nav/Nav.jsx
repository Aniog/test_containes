import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { label: "Shop", to: "/shop" },
    { label: "Collections", to: "/shop" },
    { label: "About", to: "/#about" },
    { label: "Journal", to: "/#journal" },
  ];

  const solidNav = scrolled || !isHome || mobileOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          solidNav
            ? "bg-cream border-b border-divider shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl tracking-widest font-light transition-colors duration-300 ${
                solidNav ? "text-espresso" : "text-cream"
              }`}
            >
              VELMORA
            </Link>

            {/* Desktop nav links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`text-xs uppercase tracking-widest font-sans font-medium transition-colors duration-300 hover:text-gold ${
                    solidNav ? "text-charcoal" : "text-cream/90"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button
                aria-label="Search"
                className={`hidden md:flex transition-colors duration-300 hover:text-gold ${
                  solidNav ? "text-charcoal" : "text-cream"
                }`}
              >
                <Search size={18} strokeWidth={1.5} />
              </button>

              <button
                aria-label={`Cart (${totalItems} items)`}
                onClick={() => setIsOpen(true)}
                className={`relative transition-colors duration-300 hover:text-gold ${
                  solidNav ? "text-charcoal" : "text-cream"
                }`}
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-gold text-espresso text-[10px] font-sans font-semibold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                aria-label="Menu"
                onClick={() => setMobileOpen((v) => !v)}
                className={`md:hidden transition-colors duration-300 hover:text-gold ${
                  solidNav ? "text-charcoal" : "text-cream"
                }`}
              >
                {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-cream border-t border-divider">
            <nav className="flex flex-col px-6 py-6 gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-xs uppercase tracking-widest font-sans font-medium text-charcoal hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 border-t border-divider">
                <button className="flex items-center gap-2 text-xs uppercase tracking-widest font-sans text-charcoal hover:text-gold transition-colors">
                  <Search size={14} strokeWidth={1.5} />
                  Search
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
