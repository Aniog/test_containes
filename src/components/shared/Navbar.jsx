import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openCart, totalItems } = useCart();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navTransparent = isHome && !scrolled;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          navTransparent
            ? "bg-transparent text-white"
            : "bg-velmora-cream/95 backdrop-blur-sm text-velmora-ink border-b border-velmora-stone/40"
        }`}
      >
        <div className="section-padding flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 -ml-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Logo */}
          <Link
            to="/"
            className="font-heading text-xl md:text-2xl tracking-widester font-medium"
          >
            VELMORA
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { to: "/shop", label: "Shop" },
              { to: "/shop?cat=collections", label: "Collections" },
              { to: "/about", label: "About" },
              { to: "/journal", label: "Journal" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-xs tracking-widester uppercase font-medium opacity-80 hover:opacity-100 transition-opacity"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button aria-label="Search" className="p-1 hover:opacity-70 transition-opacity">
              <Search className="w-5 h-5" />
            </button>
            <button
              aria-label="Cart"
              className="p-1 hover:opacity-70 transition-opacity relative"
              onClick={openCart}
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-velmora-gold text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-velmora-cream transition-transform duration-400 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="section-padding pt-6 flex items-center justify-between">
          <span className="font-heading text-xl tracking-widester">VELMORA</span>
          <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="section-padding mt-12 flex flex-col gap-6">
          {[
            { to: "/shop", label: "Shop" },
            { to: "/shop?cat=collections", label: "Collections" },
            { to: "/about", label: "About" },
            { to: "/journal", label: "Journal" },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="font-heading text-2xl tracking-wide"
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
