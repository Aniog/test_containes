import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleDrawer, totalItems } = useCart();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || !isHome;

  const links = [
    { label: "Shop", to: "/shop" },
    { label: "Collections", to: "/collections" },
    { label: "About", to: "/about" },
    { label: "Journal", to: "/journal" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          solid
            ? "bg-[#FDFCFA] shadow-[0_1px_0_rgba(232,221,208,0.5)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Mobile menu toggle */}
            <button
              className="lg:hidden p-2 -ml-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className={`w-5 h-5 ${solid ? "text-velmora-charcoal" : "text-white"}`} />
              ) : (
                <Menu className={`w-5 h-5 ${solid ? "text-velmora-charcoal" : "text-white"}`} />
              )}
            </button>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm tracking-wider uppercase font-sans font-medium transition-colors duration-300 ${
                    solid
                      ? "text-velmora-charcoal-light hover:text-velmora-charcoal"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-2xl tracking-widest font-semibold transition-colors duration-300 ${
                solid ? "text-velmora-charcoal" : "text-white"
              }`}
            >
              VELMORA
            </Link>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button
                className={`p-2 transition-colors duration-300 ${
                  solid
                    ? "text-velmora-charcoal-light hover:text-velmora-charcoal"
                    : "text-white/90 hover:text-white"
                }`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                className={`relative p-2 transition-colors duration-300 ${
                  solid
                    ? "text-velmora-charcoal-light hover:text-velmora-charcoal"
                    : "text-white/90 hover:text-white"
                }`}
                onClick={toggleDrawer}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-velmora-gold text-white text-[10px] font-sans font-medium w-4 h-4 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-400 ease-in-out ${
            mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-[#FDFCFA] border-t border-velmora-sand/50 px-4 py-6 space-y-5">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="block text-sm tracking-wider uppercase font-sans font-medium text-velmora-charcoal-light hover:text-velmora-charcoal"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      {/* Spacer for non-home pages */}
      {!isHome && <div className="h-[72px]" />}
    </>
  );
}