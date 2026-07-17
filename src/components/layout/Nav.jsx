import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "../../context/CartContext";

const navLinks = [
  { label: "Shop", to: "/shop" },
  { label: "Collections", to: "/shop" },
  { label: "About", to: "/about" },
  { label: "Journal", to: "/journal" },
];

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

  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          transparent
            ? "bg-transparent"
            : "bg-obsidian/95 backdrop-blur-sm shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-xl lg:text-2xl tracking-widest2 font-light transition-colors duration-300 ${
                transparent ? "text-ivory" : "text-ivory"
              }`}
            >
              VELMORA
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="font-sans text-xs tracking-widest uppercase text-taupe-light hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Icons */}
            <div className="flex items-center gap-5">
              <button
                aria-label="Search"
                className="text-taupe-light hover:text-gold transition-colors duration-300 hidden lg:block"
              >
                <Search size={18} strokeWidth={1.5} />
              </button>
              <button
                aria-label={`Cart (${totalItems} items)`}
                onClick={() => setIsOpen(true)}
                className="relative text-taupe-light hover:text-gold transition-colors duration-300"
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gold text-obsidian text-[10px] font-sans font-600 w-4 h-4 rounded-full flex items-center justify-center leading-none">
                    {totalItems}
                  </span>
                )}
              </button>
              <button
                aria-label="Menu"
                onClick={() => setMobileOpen((v) => !v)}
                className="lg:hidden text-taupe-light hover:text-gold transition-colors duration-300"
              >
                {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-400 bg-obsidian ${
            mobileOpen ? "max-h-96 border-t border-gold/10" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col px-6 py-6 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="font-sans text-sm tracking-widest uppercase text-taupe-light hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-gold/10 pt-4">
              <button className="flex items-center gap-2 text-taupe-light hover:text-gold transition-colors duration-300 font-sans text-sm">
                <Search size={16} strokeWidth={1.5} />
                Search
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
