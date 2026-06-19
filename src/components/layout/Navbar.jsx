import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, User, Menu, X, Heart } from "lucide-react";
import Logo from "./Logo";
import { useCart, useUI } from "@/context/CartContext";
import { cn } from "@/lib/cn";

const NAV_LINKS = [
  { to: "/shop",         label: "Shop"       },
  { to: "/collections",  label: "Collections"},
  { to: "/about",        label: "About"      },
  { to: "/journal",      label: "Journal"    },
];

export default function Navbar() {
  const { count } = useCart();
  const { setCartOpen, setSearchOpen, setMenuOpen, menuOpen } = useUI();
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Reset scroll state on route change so non-home pages render the solid bar.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  // Home page gets the transparent→solid transition. Other pages are always solid.
  const isHome = location.pathname === "/";
  const transparent = isHome && !scrolled;
  const tone = transparent ? "cream" : "ink";

  return (
    <>
      {/* Announcement strip */}
      <div
        className={cn(
          "w-full text-center text-[10.5px] tracking-[0.28em] uppercase py-2.5 transition-colors duration-500",
          transparent ? "bg-transparent text-cream/80" : "bg-ink text-cream/80"
        )}
      >
        Complimentary worldwide shipping on orders over $80
      </div>

      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-500",
          transparent
            ? "bg-transparent"
            : "bg-cream/95 backdrop-blur-md border-b border-ink/10"
        )}
      >
        <nav className="mx-auto max-w-page px-5 md:px-10 h-16 md:h-20 flex items-center justify-between">
          {/* Mobile burger */}
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className={cn(
              "md:hidden -ml-1 p-2 transition-colors",
              tone === "cream" ? "text-cream hover:text-gold-soft" : "text-ink hover:text-gold-dark"
            )}
          >
            <Menu className="w-5 h-5" strokeWidth={1.4} />
          </button>

          {/* Logo (desktop centered, mobile left of icons) */}
          <div className="md:flex-1 flex md:justify-start">
            <Link to="/" aria-label="Velmora home" className="block">
              <Logo tone={tone} size="md" />
            </Link>
          </div>

          {/* Center links (desktop) */}
          <ul className="hidden md:flex items-center gap-9 absolute left-1/2 -translate-x-1/2">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    cn(
                      "vm-eyebrow transition-colors duration-300",
                      tone === "cream"
                        ? "text-cream/85 hover:text-gold-soft"
                        : "text-ink/85 hover:text-gold-dark",
                      isActive && (tone === "cream" ? "text-gold-soft" : "text-gold-dark")
                    )
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right icons */}
          <div className="flex items-center gap-1 md:gap-2 md:flex-1 md:justify-end">
            <IconButton onClick={() => setSearchOpen(true)} tone={tone} label="Search">
              <Search className="w-[18px] h-[18px]" strokeWidth={1.4} />
            </IconButton>
            <Link
              to="/account"
              aria-label="Account"
              className={cn(
                "hidden md:inline-flex p-2 transition-colors",
                tone === "cream" ? "text-cream hover:text-gold-soft" : "text-ink hover:text-gold-dark"
              )}
            >
              <User className="w-[18px] h-[18px]" strokeWidth={1.4} />
            </Link>
            <button
              type="button"
              aria-label={`Cart, ${count} item${count === 1 ? "" : "s"}`}
              onClick={() => setCartOpen(true)}
              className={cn(
                "relative inline-flex p-2 transition-colors",
                tone === "cream" ? "text-cream hover:text-gold-soft" : "text-ink hover:text-gold-dark"
              )}
            >
              <ShoppingBag className="w-[18px] h-[18px]" strokeWidth={1.4} />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[16px] h-4 px-1 grid place-items-center text-[9px] font-semibold rounded-full bg-gold text-cream">
                  {count}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

function IconButton({ children, onClick, tone, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={cn(
        "p-2 transition-colors",
        tone === "cream" ? "text-cream hover:text-gold-soft" : "text-ink hover:text-gold-dark"
      )}
    >
      {children}
    </button>
  );
}

function MobileMenu({ open, onClose }) {
  const { setSearchOpen } = useUI();
  return (
    <div
      aria-hidden={!open}
      className={cn(
        "fixed inset-0 z-50 md:hidden transition-opacity duration-500",
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
    >
      <div
        className="absolute inset-0 bg-ink/60"
        onClick={onClose}
      />
      <aside
        className={cn(
          "absolute left-0 top-0 h-full w-[88%] max-w-sm bg-cream shadow-lift transition-transform duration-500 ease-editorial",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-ink/10">
          <Logo size="sm" />
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="p-2 text-ink hover:text-gold-dark"
          >
            <X className="w-5 h-5" strokeWidth={1.4} />
          </button>
        </div>
        <nav className="px-6 py-8">
          <ul className="space-y-5">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  onClick={onClose}
                  className="vm-serif text-3xl text-ink hover:text-gold-dark transition-colors"
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-4">
              <button
                type="button"
                onClick={() => { onClose(); setTimeout(() => setSearchOpen(true), 200); }}
                className="vm-serif text-2xl text-ink/80 hover:text-gold-dark transition-colors flex items-center gap-3"
              >
                <Search className="w-5 h-5" strokeWidth={1.4} /> Search
              </button>
            </li>
            <li>
              <NavLink to="/account" onClick={onClose} className="vm-serif text-2xl text-ink/80 hover:text-gold-dark transition-colors flex items-center gap-3">
                <User className="w-5 h-5" strokeWidth={1.4} /> Account
              </NavLink>
            </li>
            <li>
              <NavLink to="/wishlist" onClick={onClose} className="vm-serif text-2xl text-ink/80 hover:text-gold-dark transition-colors flex items-center gap-3">
                <Heart className="w-5 h-5" strokeWidth={1.4} /> Wishlist
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="absolute bottom-8 left-6 right-6">
          <p className="vm-eyebrow text-ink-muted">Customer Care</p>
          <p className="vm-serif text-xl mt-2 text-ink">care@velmora.co</p>
        </div>
      </aside>
    </div>
  );
}
