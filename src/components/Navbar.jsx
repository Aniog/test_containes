import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext.jsx";

const links = [
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
  const isHome = location.pathname === "/";
  const transparent = isHome && !scrolled && !mobileOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        transparent
          ? "bg-transparent text-ivory"
          : "bg-ivory/95 text-ink shadow-[0_1px_0_rgba(28,25,23,0.08)] backdrop-blur"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-10">
        <Link
          to="/"
          className="font-serif text-xl font-semibold tracking-[0.35em] md:text-2xl"
        >
          VELMORA
        </Link>

        <ul className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `text-xs font-medium uppercase tracking-luxe transition-colors duration-300 hover:text-gold ${
                    isActive ? "text-gold" : ""
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 md:gap-6">
          <button
            aria-label="Search"
            className="transition-colors duration-300 hover:text-gold"
          >
            <Search className="h-5 w-5" strokeWidth={1.5} />
          </button>
          <button
            aria-label="Open cart"
            onClick={openCart}
            className="relative transition-colors duration-300 hover:text-gold"
          >
            <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-semibold text-ivory">
                {count}
              </span>
            )}
          </button>
          <button
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="transition-colors duration-300 hover:text-gold lg:hidden"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" strokeWidth={1.5} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-ink/10 bg-ivory text-ink lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-5 py-4">
            {links.map((link) => (
              <li key={link.to} className="border-b border-ink/5 last:border-0">
                <NavLink
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `block py-4 text-xs font-medium uppercase tracking-luxe ${
                      isActive ? "text-gold" : "text-ink"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
