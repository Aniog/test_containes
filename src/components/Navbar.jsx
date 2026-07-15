import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, openCart } = useCart();
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

  const navBg =
    !isHome || scrolled
      ? "bg-velmora-cream/95 backdrop-blur-sm shadow-sm"
      : "bg-transparent";

  const textColor =
    !isHome || scrolled ? "text-velmora-dark" : "text-white";

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${navBg}`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link
          to="/"
          className={`font-serif text-xl font-semibold tracking-widest transition-colors ${textColor}`}
        >
          VELMORA
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {["Shop", "Collections", "About", "Journal"].map((label) => (
            <Link
              key={label}
              to={label === "Shop" ? "/shop" : "#"}
              className={`font-sans text-xs font-medium uppercase tracking-widest transition-colors hover:text-velmora-gold ${textColor}`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          <button
            className={`transition-colors hover:text-velmora-gold ${textColor}`}
            aria-label="Search"
          >
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button
            onClick={openCart}
            className={`relative transition-colors hover:text-velmora-gold ${textColor}`}
            aria-label="Cart"
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            {totalItems > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-velmora-gold text-[9px] font-semibold text-white">
                {totalItems}
              </span>
            )}
          </button>
          <button
            className={`md:hidden transition-colors ${textColor}`}
            onClick={() => setMobileOpen((s) => !s)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-velmora-hairline bg-velmora-cream px-5 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-4">
            {["Shop", "Collections", "About", "Journal"].map((label) => (
              <Link
                key={label}
                to={label === "Shop" ? "/shop" : "#"}
                className="font-sans text-sm font-medium uppercase tracking-widest text-velmora-dark"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
