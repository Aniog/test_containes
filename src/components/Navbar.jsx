import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleCart, totalItems } = useCart();
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

  const bgClass = scrolled
    ? "bg-velmora-surface/95 backdrop-blur shadow-sm"
    : isHome
    ? "bg-transparent"
    : "bg-velmora-surface/95 backdrop-blur shadow-sm";

  const textClass = scrolled || !isHome ? "text-velmora-text" : "text-white";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgClass}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            to="/"
            className={`font-serif text-xl tracking-widest uppercase transition-colors ${textClass}`}
          >
            Velmora
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "Shop", to: "/shop" },
              { label: "Collections", to: "/shop" },
              { label: "About", to: "/#story" },
              { label: "Journal", to: "/" },
            ].map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`text-xs uppercase tracking-wide font-medium transition-colors hover:opacity-70 ${textClass}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              aria-label="Search"
              className={`p-1 transition-colors hover:opacity-70 ${textClass}`}
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              aria-label="Cart"
              onClick={toggleCart}
              className={`relative p-1 transition-colors hover:opacity-70 ${textClass}`}
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex min-w-[1.125rem] h-[1.125rem] items-center justify-center rounded-full bg-velmora-accent text-[10px] font-semibold text-white px-1">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              aria-label="Menu"
              onClick={() => setMobileOpen((s) => !s)}
              className={`md:hidden p-1 transition-colors hover:opacity-70 ${textClass}`}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-velmora-surface border-t border-velmora-hairline px-4 py-6 space-y-4">
          {[
            { label: "Shop", to: "/shop" },
            { label: "Collections", to: "/shop" },
            { label: "About", to: "/#story" },
            { label: "Journal", to: "/" },
          ].map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="block text-sm uppercase tracking-wide font-medium text-velmora-text hover:text-velmora-accent"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
