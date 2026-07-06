import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/shop?category=sets" },
  { label: "About", href: "/#story" },
  { label: "Journal", href: "/#journal" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { setIsOpen, count } = useCart();
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
  }, [location.pathname, location.search]);

  const navClasses = cn(
    "fixed top-0 left-0 right-0 z-30 transition-all duration-500",
    scrolled || !isHome
      ? "bg-cream/95 py-4 shadow-sm backdrop-blur"
      : "bg-transparent py-5"
  );

  const textColor =
    scrolled || !isHome ? "text-espresso" : "text-cream";

  return (
    <>
      <header className={navClasses}>
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">
          <button
            type="button"
            className={cn("p-2 md:hidden", textColor)}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>

          <Link
            to="/"
            className={cn(
              "font-serif text-xl uppercase tracking-widest md:text-2xl",
              textColor
            )}
          >
            Velmora
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className={cn(
                    "text-[11px] uppercase tracking-widest transition-colors hover:text-gold",
                    textColor
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className={cn("flex items-center gap-3 md:gap-5", textColor)}>
            <button
              type="button"
              aria-label="Search"
              className="p-1 transition-colors hover:text-gold"
            >
              <Search size={20} />
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="relative p-1 transition-colors hover:text-gold"
              aria-label="Open cart"
            >
              <ShoppingBag size={20} />
              {count > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[9px] font-semibold text-espresso">
                  {count}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-cream transition-transform duration-500 ease-out md:hidden",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between px-4 py-5">
          <span className="font-serif text-xl uppercase tracking-widest">Menu</span>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <ul className="flex flex-col gap-6 px-8 pt-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className="font-serif text-3xl uppercase tracking-widest hover:text-gold"
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
