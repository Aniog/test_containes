import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { cn } from "@/lib/utils";
import Container from "@/components/ui/Container";

const links = [
  { to: "/shop", label: "Shop" },
  { to: "/shop?category=earrings", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export default function Nav() {
  const { itemCount, openCart } = useCart();
  const scrolled = useScrollPosition(40);
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.search]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out-soft",
          scrolled || mobileOpen
            ? "bg-ivory/95 backdrop-blur-md border-b border-hairline py-3"
            : "bg-transparent py-5"
        )}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Left: mobile menu + (desktop) primary nav */}
            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={() => setMobileOpen((v) => !v)}
                className="md:hidden p-1 -ml-1 text-espresso"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
              <nav className="hidden md:flex items-center gap-8">
                {links.map((l) => (
                  <NavLink
                    key={l.label}
                    to={l.to}
                    className={({ isActive }) =>
                      cn(
                        "label text-espresso/80 hover:text-espresso transition-colors duration-300",
                        isActive && "text-espresso"
                      )
                    }
                  >
                    {l.label}
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* Center: logo */}
            <Link
              to="/"
              className={cn(
                "absolute left-1/2 -translate-x-1/2 font-serif text-2xl md:text-[28px] tracking-[0.32em] font-light",
                "text-espresso transition-colors duration-300"
              )}
              aria-label="Velmora — home"
            >
              VELMORA
            </Link>

            {/* Right: search + cart */}
            <div className="flex items-center gap-2 md:gap-4">
              <button
                type="button"
                onClick={() => setSearchOpen((v) => !v)}
                className="p-2 text-espresso/80 hover:text-espresso transition-colors"
                aria-label="Search"
              >
                <Search size={18} strokeWidth={1.4} />
              </button>
              <button
                type="button"
                onClick={openCart}
                className="relative p-2 text-espresso/80 hover:text-espresso transition-colors"
                aria-label="Open cart"
              >
                <ShoppingBag size={18} strokeWidth={1.4} />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 min-w-[16px] h-4 px-1 bg-espresso text-ivory text-[9px] font-medium tracking-normal rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Search overlay */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-[60] bg-espresso/30 backdrop-blur-sm animate-fade-in-soft"
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="bg-ivory border-b border-hairline pt-24 pb-8 animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <Container>
              <div className="flex items-center gap-4 border-b border-espresso/15 pb-3">
                <Search size={20} strokeWidth={1.4} className="text-taupe" />
                <input
                  autoFocus
                  type="text"
                  placeholder="Search jewelry, materials, or stories…"
                  className="flex-1 bg-transparent text-2xl md:text-3xl font-serif font-light text-espresso placeholder:text-taupe/60 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  className="text-taupe hover:text-espresso"
                  aria-label="Close search"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {["Earrings", "Necklaces", "Huggies", "Gifts under $60", "New arrivals"].map(
                  (t) => (
                    <button
                      key={t}
                      type="button"
                      className="label border border-hairline hover:border-espresso px-4 py-2 text-espresso/80 hover:text-espresso transition-colors"
                    >
                      {t}
                    </button>
                  )
                )}
              </div>
            </Container>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-ivory pt-24">
            <Container>
              <nav className="flex flex-col gap-6 mt-4">
                {links.map((l) => (
                  <NavLink
                    key={l.label}
                    to={l.to}
                    className="font-serif text-4xl text-espresso"
                  >
                    {l.label}
                  </NavLink>
                ))}
                <div className="hairline mt-4" />
                <div className="flex flex-col gap-3 text-taupe label">
                  <Link to="/account">Account</Link>
                  <Link to="/wishlist">Wishlist</Link>
                  <Link to="/contact">Contact</Link>
                </div>
              </nav>
            </Container>
          </div>
        </div>
      )}
    </>
  );
}
