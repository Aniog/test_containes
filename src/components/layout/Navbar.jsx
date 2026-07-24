import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Logo from "@/components/common/Logo";
import Container from "@/components/common/Container";

const NAV_LINKS = [
  { to: "/shop",     label: "Shop" },
  { to: "/shop?cat=earrings",  label: "Collections" },
  { to: "/journal",  label: "Journal" },
  { to: "/about",    label: "About" },
];

export default function Navbar() {
  const { itemCount, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.search]);

  // Solid on shop/product/journal/about, transparent on home (until scroll)
  const isHome = location.pathname === "/";
  const solid = !isHome || scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out ${
        solid
          ? "bg-cream/95 backdrop-blur-md border-b border-hairline"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <Container className="flex items-center justify-between h-16 sm:h-20">
        {/* Mobile menu trigger */}
        <button
          className="md:hidden -ml-2 p-2"
          onClick={() => setMobileOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Logo */}
        <Link to="/" className="md:flex-none md:absolute md:left-1/2 md:-translate-x-1/2" aria-label="Velmora home">
          <Logo invert={!solid} size="md" />
        </Link>

        {/* Center links */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `label-eyebrow transition-colors duration-300 ${
                  isActive ? "text-gold" : solid ? "text-ink hover:text-gold" : "text-cream/85 hover:text-cream"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Right icons */}
        <div className="flex items-center gap-1 sm:gap-3">
          <button
            className={`hidden sm:inline-flex p-2 transition-colors ${solid ? "text-ink hover:text-gold" : "text-cream/85 hover:text-cream"}`}
            aria-label="Search"
          >
            <Search size={18} strokeWidth={1.5} />
          </button>
          <Link
            to="/account"
            className={`hidden sm:inline-flex p-2 transition-colors ${solid ? "text-ink hover:text-gold" : "text-cream/85 hover:text-cream"}`}
            aria-label="Account"
          >
            <User size={18} strokeWidth={1.5} />
          </Link>
          <button
            onClick={openCart}
            className={`relative p-2 transition-colors ${solid ? "text-ink hover:text-gold" : "text-cream/85 hover:text-cream"}`}
            aria-label={`Open cart, ${itemCount} items`}
          >
            <ShoppingBag size={18} strokeWidth={1.5} />
            {itemCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-gold text-ink text-[10px] font-medium flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </Container>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-cream border-t border-hairline`}
      >
        <Container className="py-6 flex flex-col gap-5">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              className="font-serif text-2xl text-ink"
            >
              {l.label}
            </NavLink>
          ))}
          <div className="flex items-center gap-4 pt-2">
            <button className="p-2" aria-label="Search"><Search size={18} /></button>
            <Link to="/account" className="p-2" aria-label="Account"><User size={18} /></Link>
          </div>
        </Container>
      </div>
    </header>
  );
}
