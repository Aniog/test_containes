import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
];

export default function Navbar() {
  const { count, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          scrolled || !isHome
            ? "bg-brand-ivory/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-10">
          <button
            className="lg:hidden p-2 -ml-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu
              className={cn(
                "h-5 w-5 transition-colors",
                scrolled || !isHome ? "text-brand-charcoal" : "text-brand-ivory"
              )}
            />
          </button>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-[11px] font-medium uppercase tracking-widest transition-colors hover:text-brand-rose-dark",
                  scrolled || !isHome ? "text-brand-charcoal" : "text-brand-ivory"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            to="/"
            className={cn(
              "font-serif text-2xl tracking-[0.18em] font-semibold transition-colors",
              scrolled || !isHome ? "text-brand-charcoal" : "text-brand-ivory"
            )}
          >
            VELMORA
          </Link>

          <div className="flex items-center gap-4 lg:gap-6">
            <button
              aria-label="Search"
              className={cn(
                "p-2 transition-colors hover:text-brand-rose-dark",
                scrolled || !isHome ? "text-brand-charcoal" : "text-brand-ivory"
              )}
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={openCart}
              aria-label={`Cart with ${count} items`}
              className={cn(
                "relative p-2 transition-colors hover:text-brand-rose-dark",
                scrolled || !isHome ? "text-brand-charcoal" : "text-brand-ivory"
              )}
            >
              <ShoppingBag className="h-5 w-5" />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-brand-rose text-[9px] font-medium text-white">
                  {count}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-brand-warm-black/40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-4/5 max-w-xs bg-brand-ivory p-6 shadow-2xl">
            <button
              onClick={() => setMobileOpen(false)}
              className="mb-10 p-2 text-brand-charcoal"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="font-serif text-2xl text-brand-charcoal hover:text-brand-rose-dark"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
