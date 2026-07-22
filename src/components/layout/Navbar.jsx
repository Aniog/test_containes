import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

const LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, openCart } = useCart();
  const location = useLocation();
  const onHero = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const transparent = onHero && !scrolled && !mobileOpen;

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-500 ${
        transparent
          ? "bg-transparent text-ivory"
          : "bg-ivory/95 backdrop-blur-md text-espresso border-b border-hairline shadow-[0_8px_30px_-20px_rgba(29,22,16,0.35)]"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="relative flex h-16 md:h-20 items-center justify-between">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 -ml-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className="font-serif text-2xl md:text-3xl tracking-[0.35em] font-medium pl-1 md:pl-0"
          >
            VELMORA
          </Link>

          {/* Center links */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-10">
            {LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-[13px] tracking-[0.22em] uppercase transition-colors duration-300 hover:text-gold ${
                    isActive ? "text-gold" : ""
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-1 md:gap-3">
            <button
              className="p-2 transition-colors duration-300 hover:text-gold"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button
              className="relative p-2 transition-colors duration-300 hover:text-gold"
              onClick={openCart}
              aria-label="Open cart"
            >
              <ShoppingBag size={20} />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4.5 min-w-[18px] items-center justify-center rounded-full bg-gold px-1 text-[10px] font-semibold text-ivory">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-hairline py-4 bg-ivory text-espresso animate-fade-in">
            <div className="flex flex-col gap-1">
              {LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `px-2 py-3 text-sm tracking-[0.22em] uppercase border-b border-hairline/60 last:border-0 ${
                      isActive ? "text-gold" : ""
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
