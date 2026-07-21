import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/shop" },
  { label: "About", href: "/#story" },
  { label: "Journal", href: "/#journal" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, setIsOpen } = useCart();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navBackground =
    isHome && !scrolled
      ? "bg-transparent text-white"
      : "bg-parchment/95 text-charcoal shadow-sm backdrop-blur";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          navBackground
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 md:h-20">
            <button
              className="md:hidden p-2 -ml-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="font-sans text-xs uppercase tracking-widest hover:text-bronze transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <Link
              to="/"
              className="absolute left-1/2 -translate-x-1/2 font-serif text-2xl md:text-3xl tracking-widest font-medium"
            >
              VELMORA
            </Link>

            <div className="flex items-center gap-4 md:gap-6">
              <button aria-label="Search" className="p-1 hover:text-bronze transition-colors">
                <Search size={20} />
              </button>
              <button
                onClick={() => setIsOpen(true)}
                aria-label="Open cart"
                className="relative p-1 hover:text-bronze transition-colors"
              >
                <ShoppingBag size={20} />
                {count > 0 && (
                  <span className="absolute -top-1 -right-1 bg-bronze text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                    {count}
                  </span>
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-parchment transition-transform duration-300 md:hidden",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-4 flex justify-between items-center border-b border-soft-taupe">
          <span className="font-serif text-xl tracking-widest">VELMORA</span>
          <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col p-6 gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="font-serif text-2xl tracking-wide text-charcoal"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
