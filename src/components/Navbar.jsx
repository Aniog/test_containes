import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { to: "/shop", label: "Shop" },
  { to: "/shop", label: "Collections", state: { fromNav: "collections" } },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { count, openCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  const solid = scrolled || searchOpen || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        solid
          ? "border-b border-line bg-ivory/95 text-espresso shadow-[0_8px_30px_-18px_rgba(43,33,24,0.4)] backdrop-blur"
          : "border-b border-transparent bg-transparent text-ivory"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-10">
        {/* Left: logo */}
        <Link
          to="/"
          className="font-serif text-2xl font-semibold tracking-[0.28em] md:text-[1.7rem]"
          aria-label="Velmora home"
        >
          VELMORA
        </Link>

        {/* Center: links */}
        <nav className="hidden items-center gap-10 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              state={link.state}
              className={({ isActive }) =>
                `group relative text-[11px] font-medium uppercase tracking-[0.25em] transition-colors duration-300 ${
                  isActive && link.label === "Shop"
                    ? "text-bronze"
                    : solid
                      ? "text-espresso/80 hover:text-espresso"
                      : "text-ivory/85 hover:text-ivory"
                }`
              }
            >
              {link.label}
              <span
                className={`absolute -bottom-1.5 left-0 h-px w-0 bg-bronze transition-all duration-300 group-hover:w-full ${
                  link.label === "Shop" && location.pathname === "/shop"
                    ? "w-full"
                    : ""
                }`}
              />
            </NavLink>
          ))}
        </nav>

        {/* Right: icons */}
        <div className="flex items-center gap-1 md:gap-2">
          <button
            type="button"
            onClick={() => setSearchOpen((v) => !v)}
            aria-label="Search"
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 ${
              solid ? "hover:bg-sand/60" : "hover:bg-ivory/10"
            }`}
          >
            <Search className="h-[18px] w-[18px]" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={openCart}
            aria-label={`Open cart, ${count} items`}
            className={`relative flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 ${
              solid ? "hover:bg-sand/60" : "hover:bg-ivory/10"
            }`}
          >
            <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.5} />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-bronze px-1 text-[10px] font-semibold text-ivory">
                {count}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 md:hidden ${
              solid ? "hover:bg-sand/60" : "hover:bg-ivory/10"
            }`}
          >
            {menuOpen ? (
              <X className="h-5 w-5" strokeWidth={1.5} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {/* Expanding search bar */}
      <div
        className={`overflow-hidden border-line transition-all duration-500 ${
          searchOpen ? "max-h-24 border-t bg-ivory" : "max-h-0"
        }`}
      >
        <form
          className="mx-auto flex max-w-3xl items-center gap-4 px-5 py-5 md:px-10"
          onSubmit={(e) => e.preventDefault()}
        >
          <Search className="h-4 w-4 shrink-0 text-cocoa" strokeWidth={1.5} />
          <input
            type="search"
            placeholder="Search huggies, necklaces, gifts..."
            className="w-full bg-transparent font-serif text-xl italic text-espresso placeholder:text-cocoa/60 focus:outline-none"
            aria-label="Search products"
          />
          <button
            type="button"
            onClick={() => setSearchOpen(false)}
            className="text-[11px] uppercase tracking-[0.25em] text-cocoa transition-colors hover:text-espresso"
          >
            Close
          </button>
        </form>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-ivory transition-all duration-500 md:hidden ${
          menuOpen ? "max-h-80 border-t border-line" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-5 py-6" aria-label="Mobile">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              state={link.state}
              className="border-b border-line py-4 font-serif text-2xl text-espresso transition-colors last:border-b-0 hover:text-bronze"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
