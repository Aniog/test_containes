import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

const NAV_LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/shop?collection=earrings", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

function Logo({ tone = "ivory" }) {
  return (
    <Link
      to="/"
      className={`font-serif tracking-[0.32em] text-[18px] sm:text-[20px] ${
        tone === "ivory" ? "text-ivory" : "text-ink"
      }`}
      aria-label="Velmora — Home"
    >
      VELMORA
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, openCart } = useCart();
  const location = useLocation();
  const isHome = location.pathname === "/";

  // "Solid" state is forced on non-home pages (e.g. /shop, /product/:id).
  const showSolid = scrolled || !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const tone = showSolid ? "ink" : "ivory";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        showSolid
          ? "bg-ivory/95 backdrop-blur border-b border-line/60"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-shell flex items-center justify-between h-16 md:h-20">
        {/* Mobile burger */}
        <button
          type="button"
          aria-label="Open menu"
          className={`md:hidden -ml-2 p-2 ${tone === "ivory" ? "text-ivory" : "text-ink"}`}
          onClick={() => setMobileOpen(true)}
        >
          <Menu size={22} strokeWidth={1.5} />
        </button>

        {/* Logo (mobile center) */}
        <div className="md:hidden flex-1 flex justify-center">
          <Logo tone={tone} />
        </div>

        {/* Logo (desktop left) */}
        <div className="hidden md:flex flex-1">
          <Logo tone={tone} />
        </div>

        {/* Center links */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `text-[12px] uppercase tracking-[0.22em] font-medium transition-colors duration-300 ${
                  tone === "ivory" ? "text-ivory/90 hover:text-ivory" : "text-ink/80 hover:text-ink"
                } ${isActive ? "underline underline-offset-[10px] decoration-1" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right actions */}
        <div className={`flex items-center gap-4 md:gap-5 flex-1 justify-end ${tone === "ivory" ? "text-ivory" : "text-ink"}`}>
          <button
            type="button"
            aria-label="Search"
            className="hidden sm:inline-flex p-1 hover:opacity-70 transition-opacity"
          >
            <Search size={18} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label={`Open cart, ${count} item${count === 1 ? "" : "s"}`}
            onClick={openCart}
            className="relative p-1 hover:opacity-70 transition-opacity"
          >
            <ShoppingBag size={18} strokeWidth={1.5} />
            {count > 0 && (
              <span
                className={`absolute -top-1 -right-2 min-w-[16px] h-[16px] px-1 rounded-full text-[10px] font-medium flex items-center justify-center ${
                  tone === "ivory" ? "bg-ivory text-ink" : "bg-ink text-ivory"
                }`}
              >
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-cocoa/40"
          onClick={() => setMobileOpen(false)}
        />
        <aside className="absolute top-0 left-0 h-full w-[78%] max-w-[360px] bg-ivory shadow-lift flex flex-col">
          <div className="flex items-center justify-between px-6 h-16 border-b border-line/60">
            <Logo tone="ink" />
            <button
              type="button"
              aria-label="Close menu"
              className="p-2 -mr-2 text-ink"
              onClick={() => setMobileOpen(false)}
            >
              <X size={22} strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex flex-col px-6 py-8 gap-6">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className="font-serif text-2xl text-ink"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-auto px-6 py-6 border-t border-line/60 text-sm text-muted">
            Free worldwide shipping on orders over $80.
          </div>
        </aside>
      </div>
    </header>
  );
}
