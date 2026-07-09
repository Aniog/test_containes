import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { Sheet, SheetHeader, SheetContent } from "./ui/Sheet";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/shop" },
  { label: "About", href: "/#story" },
  { label: "Journal", href: "/#journal" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleCart, count } = useCart();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDark = isHome && !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-cream/95 py-3 shadow-sm backdrop-blur"
            : "bg-transparent py-5"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className={cn(
              "font-serif text-xl font-medium tracking-[0.18em] transition-colors",
              isDark ? "text-white" : "text-base-800"
            )}
          >
            VELMORA
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className={cn(
                    "font-sans text-xs font-medium uppercase tracking-widest transition-colors hover:text-gold",
                    isDark ? "text-white/90" : "text-base-800"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <button
              className={cn(
                "transition-colors hover:text-gold",
                isDark ? "text-white/90" : "text-base-800"
              )}
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button
              onClick={toggleCart}
              className={cn(
                "relative transition-colors hover:text-gold",
                isDark ? "text-white/90" : "text-base-800"
              )}
              aria-label="Cart"
            >
              <ShoppingBag size={20} />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[10px] font-semibold text-base">
                  {count}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileOpen(true)}
              className={cn(
                "transition-colors hover:text-gold md:hidden",
                isDark ? "text-white/90" : "text-base-800"
              )}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </header>

      <Sheet open={mobileOpen} onClose={() => setMobileOpen(false)} side="left">
        <SheetHeader onClose={() => setMobileOpen(false)}>
          <span className="font-serif text-lg tracking-[0.18em] text-base-800">
            VELMORA
          </span>
        </SheetHeader>
        <SheetContent className="px-6 py-8">
          <ul className="space-y-6">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block font-serif text-2xl text-base-800 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </>
  );
}
