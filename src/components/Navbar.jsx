import { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, toggleCart } = useCart();
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const textColor = isHome && !scrolled ? "text-ivory" : "text-espresso";
  const bg = isHome && !scrolled ? "bg-transparent" : "bg-ivory/95 backdrop-blur-sm shadow-sm";

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
          bg
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8 lg:px-12">
          <Link
            to="/"
            className={cn(
              "font-serif text-xl uppercase tracking-[0.25em] transition-colors",
              textColor
            )}
          >
            Velmora
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={cn(
                    "relative text-xs uppercase tracking-widest transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all hover:after:w-full",
                    textColor
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className={cn("flex items-center gap-4", textColor)}>
            <button
              type="button"
              aria-label="Search"
              className="p-1 transition-opacity hover:opacity-70 focus-visible:outline-none"
            >
              <Search size={20} />
            </button>
            <button
              type="button"
              onClick={toggleCart}
              aria-label="Open cart"
              data-testid="open-cart"
              className="relative p-1 transition-opacity hover:opacity-70 focus-visible:outline-none"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span
                  data-testid="cart-count"
                  className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[9px] font-medium text-ivory"
                >
                  {totalItems}
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="p-1 transition-opacity hover:opacity-70 focus-visible:outline-none md:hidden"
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-cream transition-transform duration-300 md:hidden",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between px-4 py-4">
          <span className="font-serif text-xl uppercase tracking-[0.25em] text-espresso">
            Velmora
          </span>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="p-1 text-espresso focus-visible:outline-none"
          >
            <X size={24} />
          </button>
        </div>
        <ul className="flex flex-col items-center gap-8 pt-16">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className="font-serif text-2xl text-espresso"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
