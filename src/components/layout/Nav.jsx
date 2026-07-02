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
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { label: "Shop", href: "/shop" },
    { label: "Collections", href: "/shop" },
    { label: "About", href: "/about" },
    { label: "Journal", href: "/journal" },
  ];

  const isTransparent = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          isTransparent
            ? "bg-transparent"
            : "bg-velmora-cream border-b border-velmora-sand shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              to="/"
              className={`font-cormorant text-xl lg:text-2xl font-medium tracking-widest-lg transition-colors duration-300 ${
                isTransparent ? "text-velmora-text-light" : "text-velmora-obsidian"
              }`}
            >
              VELMORA
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`font-manrope text-xs tracking-widest-md uppercase transition-colors duration-200 hover:text-velmora-gold ${
                    isTransparent ? "text-velmora-text-light/90" : "text-velmora-text-mid"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button
                aria-label="Search"
                className={`hidden lg:flex transition-colors duration-200 hover:text-velmora-gold ${
                  isTransparent ? "text-velmora-text-light" : "text-velmora-text-mid"
                }`}
              >
                <Search size={18} strokeWidth={1.5} />
              </button>

              <button
                aria-label={`Cart (${totalItems} items)`}
                onClick={() => setIsOpen(true)}
                className={`relative transition-colors duration-200 hover:text-velmora-gold ${
                  isTransparent ? "text-velmora-text-light" : "text-velmora-text-mid"
                }`}
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-velmora-gold text-velmora-obsidian text-[10px] font-manrope font-600 w-4 h-4 rounded-full flex items-center justify-center leading-none">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                aria-label="Toggle menu"
                onClick={() => setMobileOpen((v) => !v)}
                className={`lg:hidden transition-colors duration-200 ${
                  isTransparent ? "text-velmora-text-light" : "text-velmora-text-mid"
                }`}
              >
                {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-velmora-cream border-t border-velmora-sand">
            <nav className="flex flex-col px-6 py-6 gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="font-manrope text-xs tracking-widest-md uppercase text-velmora-text-mid hover:text-velmora-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 border-t border-velmora-sand">
                <button className="flex items-center gap-2 font-manrope text-xs tracking-widest-md uppercase text-velmora-text-mid hover:text-velmora-gold transition-colors">
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
