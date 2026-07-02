import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
];

export function Navbar() {
  const { openCart, count } = useCart();
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
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled || !isHome
          ? "bg-velmora-bg/95 py-3 shadow-sm backdrop-blur"
          : "bg-transparent py-5",
        scrolled || !isHome ? "text-velmora-fg" : "text-white"
      )}
    >
      <nav className="container-velmora flex items-center justify-between">
        <Link
          to="/"
          className="font-serif text-xl tracking-[0.18em] md:text-2xl"
        >
          VELMORA
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className="text-xs uppercase tracking-widest transition-opacity hover:opacity-70"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            type="button"
            className="rounded p-1 transition-colors hover:bg-white/10"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={openCart}
            className="relative rounded p-1 transition-colors hover:bg-white/10"
            aria-label="Cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-velmora-accent text-[9px] font-semibold text-white">
                {count}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded p-1 transition-colors hover:bg-white/10 md:hidden"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden bg-velmora-bg transition-all duration-300 md:hidden",
          mobileOpen ? "max-h-96 border-b border-velmora-border" : "max-h-0"
        )}
      >
        <ul className="container-velmora flex flex-col gap-4 py-6 text-velmora-fg">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className="block text-sm uppercase tracking-widest"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
