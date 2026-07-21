import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

const centerLinks = [
  { to: "/shop", label: "Shop" },
  { to: "/shop?category=earrings", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, openCart } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  // Navbar sits over the hero only on the homepage. On every other route it's
  // always solid. The scroll listener turns the homepage nav solid once the
  // user moves past the hero.
  const isHome = location.pathname === "/";
  const solid = !isHome || scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.search]);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [mobileOpen]);

  const onSearchClick = (e) => {
    e.preventDefault();
    navigate("/shop");
  };

  return (
    <>
      <header
        className={[
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          solid
            ? "bg-ivory-100/95 backdrop-blur-sm border-b border-hairline"
            : "bg-transparent border-b border-transparent",
        ].join(" ")}
      >
        <div className="max-w-9xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="h-16 sm:h-20 flex items-center justify-between">
            {/* Mobile burger */}
            <button
              type="button"
              className="lg:hidden -ml-2 p-2"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="w-5 h-5" strokeWidth={1.25} />
            </button>

            {/* Left: logo */}
            <Link
              to="/"
              className="font-serif tracking-widest3 text-[20px] sm:text-[22px] font-medium"
              aria-label="Velmora home"
            >
              VELMORA
            </Link>

            {/* Center links */}
            <nav className="hidden lg:flex items-center gap-10">
              {centerLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    [
                      "nav-link relative",
                      isActive ? "text-espresso" : "",
                    ].join(" ")
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-1 sm:gap-3">
              <button
                type="button"
                onClick={onSearchClick}
                aria-label="Search"
                className="p-2 hover:text-gold-500 transition-colors"
              >
                <Search className="w-[18px] h-[18px]" strokeWidth={1.25} />
              </button>
              <Link
                to="/account"
                aria-label="Account"
                className="hidden sm:inline-flex p-2 hover:text-gold-500 transition-colors"
              >
                <User className="w-[18px] h-[18px]" strokeWidth={1.25} />
              </Link>
              <button
                type="button"
                onClick={openCart}
                aria-label={`Open cart, ${itemCount} ${itemCount === 1 ? "item" : "items"}`}
                className="relative p-2 hover:text-gold-500 transition-colors"
              >
                <ShoppingBag className="w-[18px] h-[18px]" strokeWidth={1.25} />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-espresso text-ivory-50 text-[9px] font-sans w-4 h-4 rounded-full flex items-center justify-center tabular-nums">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu sheet */}
      <div
        className={[
          "fixed inset-0 z-[60] transition-opacity duration-300 lg:hidden",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-espresso/40"
          onClick={() => setMobileOpen(false)}
        />
        <aside
          className={[
            "absolute inset-y-0 left-0 w-[85%] max-w-sm bg-ivory-100 shadow-soft-lg transition-transform duration-500",
            mobileOpen ? "translate-x-0" : "-translate-x-full",
          ].join(" ")}
        >
          <div className="flex items-center justify-between px-5 h-16 border-b border-hairline">
            <span className="font-serif tracking-widest3 text-lg">VELMORA</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="p-2"
            >
              <X className="w-5 h-5" strokeWidth={1.25} />
            </button>
          </div>
          <nav className="flex flex-col px-5 py-8 gap-1">
            {centerLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  [
                    "py-3 font-serif text-2xl tracking-wide border-b border-hairline",
                    isActive ? "text-gold-500" : "text-espresso",
                  ].join(" ")
                }
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/account"
              className="py-3 font-serif text-2xl tracking-wide border-b border-hairline text-espresso"
            >
              Account
            </NavLink>
          </nav>
          <div className="px-5 mt-6 space-y-2 text-sm text-taupe-500">
            <p>Free worldwide shipping over $80</p>
            <p>30-day returns on unworn pieces</p>
          </div>
        </aside>
      </div>
    </>
  );
}
