import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: "Shop", to: "/shop" },
    { label: "Collections", to: "/shop" },
    { label: "About", to: "/about" },
    { label: "Journal", to: "/journal" },
  ];

  const solid = scrolled || !isHome || mobileOpen;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-400",
          solid
            ? "bg-cream/95 backdrop-blur-sm shadow-sm shadow-ink/5 border-b border-hairline"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="font-serif text-xl md:text-2xl tracking-widest2 transition-colors duration-300"
              style={{ color: solid ? "#1C1410" : "#FAF8F5" }}
            >
              VELMORA
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="font-sans text-xs tracking-widest uppercase transition-colors duration-200 hover:text-gold"
                  style={{ color: solid ? "#1C1410" : "rgba(250,248,245,0.9)" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button
                aria-label="Search"
                className="hidden md:flex transition-colors duration-200 hover:text-gold"
                style={{ color: solid ? "#1C1410" : "#FAF8F5" }}
              >
                <Search className="w-4 h-4" />
              </button>

              <button
                aria-label={`Cart (${totalItems} items)`}
                onClick={() => setIsOpen(true)}
                className="relative transition-colors duration-200 hover:text-gold"
                style={{ color: solid ? "#1C1410" : "#FAF8F5" }}
              >
                <ShoppingBag className="w-4 h-4" />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-gold text-ink text-[9px] font-sans font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                aria-label="Menu"
                onClick={() => setMobileOpen((v) => !v)}
                className="md:hidden transition-colors duration-200 hover:text-gold"
                style={{ color: solid ? "#1C1410" : "#FAF8F5" }}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 bg-cream border-t border-hairline",
            mobileOpen ? "max-h-64" : "max-h-0"
          )}
        >
          <nav className="flex flex-col px-4 py-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="font-sans text-xs tracking-widest uppercase text-ink hover:text-gold transition-colors duration-200 py-1"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
