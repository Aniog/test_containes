import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const links = [
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/shop" },
  { label: "About", href: "/" },
  { label: "Journal", href: "/" },
];

export default function Navbar({ onCartOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useCart();
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

  const showSolid = scrolled || !isHome;

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          showSolid
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="max-w-content mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 -ml-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>

            {/* Center nav - desktop */}
            <div className="hidden md:flex items-center gap-10">
              {links.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={cn(
                    "text-xs uppercase tracking-[0.1em] font-medium transition-colors duration-300",
                    showSolid
                      ? "text-primary hover:text-accent"
                      : "text-white/90 hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Logo */}
            <Link
              to="/"
              className={cn(
                "font-serif text-xl md:text-2xl tracking-[0.15em] font-semibold transition-colors duration-300 absolute left-1/2 -translate-x-1/2 md:relative md:left-auto md:translate-x-0",
                showSolid ? "text-primary" : "text-white"
              )}
            >
              VELMORA
            </Link>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button
                aria-label="Search"
                className={cn(
                  "p-2 transition-colors duration-300",
                  showSolid
                    ? "text-primary hover:text-accent"
                    : "text-white/90 hover:text-white"
                )}
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                aria-label="Open cart"
                onClick={onCartOpen}
                className={cn(
                  "p-2 relative transition-colors duration-300",
                  showSolid
                    ? "text-primary hover:text-accent"
                    : "text-white/90 hover:text-white"
                )}
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="bg-white/95 backdrop-blur-md border-t border-border px-4 py-6 space-y-4">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="block text-sm uppercase tracking-[0.1em] text-primary hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      {/* Spacer for fixed nav */}
      <div className={cn("h-16 md:h-20", !isHome && "block")} />
    </>
  );
}