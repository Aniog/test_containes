import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleCart, count } = useCart();
  const { pathname } = useLocation();
  const isHero = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const solid = scrolled || !isHero;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
        solid
          ? "bg-[#fbfaf9]/95 shadow-sm backdrop-blur-md"
          : "bg-transparent text-white",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link
          to="/"
          className={cn(
            "font-serif text-xl font-medium uppercase tracking-[0.25em] transition-colors duration-300",
            solid ? "text-stone-900" : "text-white",
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
                  "text-xs font-medium uppercase tracking-[0.18em] transition-colors duration-300 hover:text-amber-700",
                  solid ? "text-stone-900" : "text-white/90",
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Search"
            className={cn(
              "transition-colors duration-300 hover:text-amber-700",
              solid ? "text-stone-900" : "text-white",
            )}
          >
            <Search size={20} />
          </button>
          <button
            type="button"
            onClick={toggleCart}
            aria-label="Cart"
            className={cn(
              "relative transition-colors duration-300 hover:text-amber-700",
              solid ? "text-stone-900" : "text-white",
            )}
          >
            <ShoppingBag size={20} />
            {count > 0 && (
              <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-amber-700 text-[10px] font-medium text-white">
                {count}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
            className={cn(
              "transition-colors duration-300 hover:text-amber-700 md:hidden",
              solid ? "text-stone-900" : "text-white",
            )}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="absolute left-0 right-0 top-16 border-t border-stone-100 bg-[#fbfaf9] px-5 py-6 shadow-lg md:hidden">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block font-serif text-lg uppercase tracking-[0.2em] text-stone-900"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
