import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { useCart, useCartDispatch } from "@/hooks/useCart";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const cart = useCart();
  const dispatch = useCartDispatch();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const cartCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button
            className="md:hidden p-2 -ml-2 text-current"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <Link to="/" className="hidden md:block">
            <span className="font-serif text-xl tracking-[0.25em] font-semibold text-current">
              VELMORA
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {[
              { to: "/shop", label: "Shop" },
              { to: "/shop?category=earrings", label: "Earrings" },
              { to: "/shop?category=necklaces", label: "Necklaces" },
              { to: "/shop?category=huggies", label: "Huggies" },
              { to: "/about", label: "About" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`text-xs tracking-[0.2em] uppercase transition-colors duration-300 hover:text-amber-700 ${
                  location.pathname === item.to ? "text-amber-800" : "text-current"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:text-amber-700 transition-colors" aria-label="Search">
              <Search className="h-5 w-5" />
            </button>
            <button
              className="relative p-2 hover:text-amber-700 transition-colors"
              onClick={() => dispatch({ type: "TOGGLE_CART" })}
              aria-label="Open cart"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-amber-800 text-white text-[10px] flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-stone-200">
          <div className="px-4 py-6 space-y-4">
            <Link to="/" className="block font-serif text-2xl tracking-[0.25em] font-semibold text-stone-900">
              VELMORA
            </Link>
            {[
              { to: "/shop", label: "Shop" },
              { to: "/shop?category=earrings", label: "Earrings" },
              { to: "/shop?category=necklaces", label: "Necklaces" },
              { to: "/shop?category=huggies", label: "Huggies" },
              { to: "/about", label: "About" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="block text-sm tracking-[0.2em] uppercase text-stone-700 hover:text-amber-800"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
