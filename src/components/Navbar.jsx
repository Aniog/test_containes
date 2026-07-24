import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { label: "Shop", to: "/shop" },
  { label: "Collections", to: "/collections" },
  { label: "About", to: "/about" },
  { label: "Journal", to: "/journal" },
];

export default function Navbar({ transparent = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isTransparent = transparent && !scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
          isTransparent
            ? "bg-transparent text-white"
            : "bg-background/95 backdrop-blur text-foreground border-b border-border shadow-sm"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 h-16 md:h-20 flex items-center justify-between">
          <Link
            to="/"
            className="font-serif text-2xl md:text-3xl tracking-[0.25em] uppercase font-medium"
          >
            Velmora
          </Link>

          <ul className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `text-xs tracking-widest uppercase font-medium transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-current after:transition-all after:duration-300 ${
                      isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 md:gap-5">
            <button
              aria-label="Search"
              className="p-2 hover:opacity-70 transition-opacity"
            >
              <Search size={20} />
            </button>
            <button
              onClick={openCart}
              aria-label="Open cart"
              className="relative p-2 hover:opacity-70 transition-opacity"
            >
              <ShoppingBag size={20} />
              {count > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-accent text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="md:hidden p-2 hover:opacity-70 transition-opacity"
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-50 bg-charcoal/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-background z-50 shadow-2xl transform transition-transform duration-300 ease-out md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <span className="font-serif text-2xl tracking-[0.25em] uppercase">Menu</span>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 hover:bg-border rounded-full transition-colors"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>
        <ul className="flex flex-col p-6 gap-6">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="font-serif text-3xl tracking-wide hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
