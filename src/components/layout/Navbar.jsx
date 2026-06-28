import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/shop?category=collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export default function Navbar({ transparent = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, openCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    if (!transparent) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparent]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.search]);

  const solid = scrolled || mobileOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-500",
        solid
          ? "bg-velmora-cream/95 backdrop-blur-md border-b border-velmora-ink/10"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 md:px-10 md:py-6 lg:px-16">
        {/* Logo */}
        <Link
          to="/"
          className={cn(
            "font-serif text-2xl tracking-[0.18em] md:text-[28px]",
            solid ? "text-velmora-ink" : "text-velmora-cream",
          )}
          aria-label="Velmora Fine Jewelry — Home"
        >
          VELMORA
        </Link>

        {/* Desktop links */}
        <nav className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "link-underline text-[12px] uppercase tracking-[0.24em] transition-colors duration-300",
                  solid ? "text-velmora-ink" : "text-velmora-cream",
                  isActive && "text-velmora-gold-deep",
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right icons */}
        <div className="flex items-center gap-2 md:gap-4">
          <button
            type="button"
            aria-label="Search"
            className={cn(
              "p-2 transition-colors duration-300 hover:text-velmora-gold-deep",
              solid ? "text-velmora-ink" : "text-velmora-cream",
            )}
          >
            <Search className="h-[18px] w-[18px]" strokeWidth={1.4} />
          </button>
          <button
            type="button"
            aria-label={`Open cart with ${count} items`}
            onClick={openCart}
            className={cn(
              "relative p-2 transition-colors duration-300 hover:text-velmora-gold-deep",
              solid ? "text-velmora-ink" : "text-velmora-cream",
            )}
          >
            <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.4} />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-velmora-gold px-1 text-[10px] font-medium leading-none text-velmora-ink">
                {count}
              </span>
            )}
          </button>
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((o) => !o)}
            className={cn(
              "p-2 md:hidden",
              solid ? "text-velmora-ink" : "text-velmora-cream",
            )}
          >
            {mobileOpen ? <X className="h-5 w-5" strokeWidth={1.4} /> : <Menu className="h-5 w-5" strokeWidth={1.4} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-velmora-ink/10 bg-velmora-cream md:hidden">
          <nav className="flex flex-col px-5 py-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="border-b border-velmora-ink/10 py-4 text-[13px] uppercase tracking-[0.24em] text-velmora-ink last:border-b-0"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
