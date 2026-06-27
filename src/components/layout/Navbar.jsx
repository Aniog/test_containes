import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, toggleDrawer } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  const navLinks = [
    { to: "/shop", label: "Shop" },
    { to: "/collections", label: "Collections" },
    { to: "/about", label: "About" },
    { to: "/journal", label: "Journal" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-velmora-bg/95 backdrop-blur-md shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-[1400px] mx-auto px-5 md:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className="md:hidden text-velmora-text p-1"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Desktop nav links - left */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm tracking-[0.15em] uppercase text-velmora-text-secondary hover:text-velmora-gold transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Logo - center */}
          <Link
            to="/"
            className="font-serif text-2xl md:text-3xl tracking-[0.2em] text-velmora-cream font-light absolute left-1/2 -translate-x-1/2"
          >
            VELMORA
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-5">
            <button className="text-velmora-text-secondary hover:text-velmora-gold transition-colors" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button
              className="relative text-velmora-text-secondary hover:text-velmora-gold transition-colors"
              onClick={() => toggleDrawer(true)}
              aria-label="Open cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-velmora-gold text-velmora-bg text-[10px] font-semibold w-4.5 h-4.5 rounded-full flex items-center justify-center leading-none">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-velmora-surface z-[70] transition-transform duration-300 ease-out ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-velmora-border">
          <span className="font-serif text-xl tracking-[0.2em] text-velmora-cream">VELMORA</span>
          <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <X className="w-5 h-5 text-velmora-text-secondary" />
          </button>
        </div>
        <div className="flex flex-col px-6 py-8 gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-base tracking-[0.15em] uppercase text-velmora-text-secondary hover:text-velmora-gold transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
