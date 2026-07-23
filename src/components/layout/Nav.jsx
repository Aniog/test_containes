import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const links = [
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openCart, summary } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // On hero, nav is transparent with ivory text. After scroll, solid ivory.
  const transparent = !scrolled && !mobileOpen;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-500 ease-smooth",
          transparent
            ? "bg-transparent text-ivory"
            : "bg-ivory/95 text-espresso backdrop-blur-md border-b border-line/60"
        )}
      >
        <div className="mx-auto flex h-16 w-full max-w-editorial items-center justify-between px-5 sm:h-20 sm:px-8 lg:px-12">
          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="lg:hidden p-1 -ml-1"
            aria-label="Open menu"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>

          {/* Logo */}
          <Link
            to="/"
            id="nav-logo"
            className="font-serif text-2xl sm:text-[28px] tracking-[0.32em] font-light select-none"
            aria-label="Velmora — Home"
          >
            VELMORA
          </Link>

          {/* Center links */}
          <nav className="hidden lg:flex items-center gap-10" aria-label="Primary">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "relative text-[11px] uppercase tracking-widest font-medium transition-colors duration-300",
                    "after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300",
                    "hover:after:w-full",
                    isActive && "after:w-full"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              type="button"
              className="hidden sm:inline-flex p-1 hover:opacity-70 transition-opacity"
              aria-label="Search"
            >
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={openCart}
              className="relative p-1 hover:opacity-70 transition-opacity"
              aria-label={`Open cart with ${summary.count} item${summary.count === 1 ? "" : "s"}`}
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {summary.count > 0 && (
                <span className="absolute -right-1.5 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-medium text-espresso">
                  {summary.count}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden transition-opacity duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-espresso/50"
          onClick={() => setMobileOpen(false)}
        />
        <aside
          className={cn(
            "absolute inset-y-0 left-0 w-[85%] max-w-sm bg-ivory text-espresso shadow-lift transition-transform duration-500 ease-smooth",
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between px-6 h-16 border-b border-line">
            <span className="font-serif text-xl tracking-[0.32em]">VELMORA</span>
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="p-1">
              <X size={22} strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex flex-col p-6 gap-1" aria-label="Mobile">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "py-3 text-2xl font-serif border-b border-line/70",
                    isActive && "text-gold-dark"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </aside>
      </div>
    </>
  );
}
