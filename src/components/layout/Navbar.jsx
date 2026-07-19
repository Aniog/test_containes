import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, openCart } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  // Home page gets the transparent-over-hero treatment; all other pages get the
  // solid bar by default.
  const isHome = location.pathname === "/";

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.search]);

  const transparent = isHome && !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          transparent
            ? "bg-transparent text-ivory"
            : "bg-ivory/95 backdrop-blur-md text-espresso border-b border-hairline"
        )}
      >
        <div className="container-wide flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="md:hidden -ml-2 p-2"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" strokeWidth={1.5} />
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={cn(
              "font-serif text-xl md:text-2xl tracking-widest2 absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:mr-8",
              "font-medium"
            )}
            aria-label="Velmora home"
          >
            VELMORA
          </Link>

          {/* Center nav */}
          <nav className="hidden md:flex items-center gap-10 flex-1">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} className="nav-link">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-1 md:gap-3">
            <button
              type="button"
              onClick={() => navigate("/shop")}
              className="p-2 hover:opacity-70 transition-opacity"
              aria-label="Search"
            >
              <Search className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={openCart}
              className="relative p-2 hover:opacity-70 transition-opacity"
              aria-label="Open cart"
            >
              <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
              {itemCount > 0 && (
                <span
                  className={cn(
                    "absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full text-[10px] font-medium flex items-center justify-center",
                    transparent
                      ? "bg-ivory text-espresso"
                      : "bg-gold text-white"
                  )}
                >
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div
            className="absolute inset-0 bg-espresso/40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-0 left-0 right-0 bg-ivory text-espresso animate-fade-in">
            <div className="flex items-center justify-between h-16 px-6 border-b border-hairline">
              <span className="font-serif text-xl tracking-widest2">VELMORA</span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="p-2 -mr-2"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" strokeWidth={1.5} />
              </button>
            </div>
            <nav className="flex flex-col p-6 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="font-serif text-2xl py-3 border-b border-hairline"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/about"
                className="font-serif text-2xl py-3 border-b border-hairline"
              >
                About
              </Link>
              <Link
                to="/journal"
                className="font-serif text-2xl py-3 border-b border-hairline"
              >
                Journal
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
