import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/shop", label: "Shop" },
  { to: "/shop?category=earrings", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { summary, openCart } = useCart();
  const location = useLocation();

  // The home hero needs a transparent nav; other pages get a solid bar.
  const isHome = location.pathname === "/";
  const transparent = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.search]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out-soft",
        transparent
          ? "bg-transparent text-ivory"
          : "bg-ivory/95 backdrop-blur text-espresso border-b border-taupe"
      )}
    >
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        {/* Mobile menu trigger */}
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
          className="md:hidden p-2 -ml-2"
        >
          <Menu className="w-5 h-5" strokeWidth={1.4} />
        </button>

        {/* Logo */}
        <Link
          to="/"
          className="font-serif text-xl md:text-2xl tracking-wider-2"
        >
          VELMORA
        </Link>

        {/* Center nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  "font-sans text-[12px] uppercase tracking-wider-2 font-medium relative",
                  "after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 after:ease-out-soft",
                  "hover:after:w-full",
                  isActive && "after:w-full"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Right icons */}
        <div className="flex items-center gap-3 md:gap-5">
          <button
            type="button"
            aria-label="Search"
            className="p-2 hover:opacity-70 transition-opacity"
          >
            <Search className="w-[18px] h-[18px]" strokeWidth={1.4} />
          </button>
          <button
            type="button"
            aria-label={`Cart, ${summary.itemCount} items`}
            onClick={openCart}
            className="relative p-2 hover:opacity-70 transition-opacity"
          >
            <ShoppingBag className="w-[18px] h-[18px]" strokeWidth={1.4} />
            {summary.itemCount > 0 && (
              <span
                className={cn(
                  "absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 grid place-items-center text-[10px] font-medium rounded-full",
                  transparent
                    ? "bg-ivory text-espresso"
                    : "bg-espresso text-ivory"
                )}
              >
                {summary.itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-ivory text-espresso animate-fade-in">
          <div className="container-x flex items-center justify-between h-16 border-b border-taupe">
            <span className="font-serif text-xl tracking-wider-2">VELMORA</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="p-2 -mr-2"
            >
              <X className="w-5 h-5" strokeWidth={1.4} />
            </button>
          </div>
          <nav className="container-x py-10 flex flex-col gap-6">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className="font-serif text-3xl"
              >
                {l.label}
              </NavLink>
            ))}
            <div className="mt-8 pt-8 border-t border-taupe flex flex-col gap-3">
              <Link to="/shop" className="eyebrow">All Products</Link>
              <Link to="/shop?category=earrings" className="eyebrow">Earrings</Link>
              <Link to="/shop?category=necklaces" className="eyebrow">Necklaces</Link>
              <Link to="/shop?category=huggies" className="eyebrow">Huggies</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
