import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

const centerLinks = [
  { to: "/shop", label: "Shop" },
  { to: "/shop?collection=earrings", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export default function Navbar({ transparent = false }) {
  const { openCart, itemCount } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (!transparent) {
      setScrolled(true);
      return undefined;
    }
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparent]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.search]);

  const isTransparent = transparent && !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-editorial",
          isTransparent
            ? "bg-transparent text-ivory"
            : "bg-ivory/95 backdrop-blur-sm text-espresso border-b border-line"
        )}
      >
        <div className="mx-auto max-w-editorial px-5 sm:px-8 lg:px-12">
          <div className="flex h-16 md:h-20 items-center justify-between">
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden -ml-2 p-2"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            <div className="hidden md:block w-24" />

            <Link
              to="/"
              className="font-serif text-xl md:text-2xl tracking-widest2"
              aria-label="Velmora home"
            >
              VELMORA
            </Link>

            <nav className="hidden md:flex items-center gap-10">
              {centerLinks.map((l) => (
                <NavLink
                  key={l.label}
                  to={l.to}
                  className={({ isActive }) =>
                    cn("nav-link", isActive && "text-gold")
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-3 md:gap-5">
              <button
                type="button"
                aria-label="Search"
                className="p-2 hover:opacity-70 transition"
              >
                <Search size={18} strokeWidth={1.5} />
              </button>
              <button
                type="button"
                aria-label={`Open cart, ${itemCount} item${itemCount === 1 ? "" : "s"}`}
                onClick={openCart}
                className="relative p-2 hover:opacity-70 transition"
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                {itemCount > 0 && (
                  <span
                    className={cn(
                      "absolute -top-0.5 -right-0.5 min-w-[16px] h-[16px] px-1 rounded-full text-[10px] flex items-center justify-center font-medium",
                      isTransparent
                        ? "bg-ivory text-espresso"
                        : "bg-gold text-espresso"
                    )}
                  >
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-30 md:hidden transition-opacity duration-300",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-espresso/30"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute top-16 left-0 right-0 bg-ivory border-b border-line shadow-soft transition-transform duration-500 ease-editorial",
            mobileOpen ? "translate-y-0" : "-translate-y-2"
          )}
        >
          <nav className="px-6 py-6 flex flex-col gap-5">
            {centerLinks.map((l) => (
              <NavLink
                key={l.label}
                to={l.to}
                className={({ isActive }) =>
                  cn(
                    "font-serif text-2xl tracking-wide",
                    isActive ? "text-gold" : "text-espresso"
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
            <div className="hairline mt-2" />
            <NavLink to="/about" className="font-serif text-2xl text-espresso">
              Our Story
            </NavLink>
          </nav>
        </div>
      </div>
    </>
  );
}
