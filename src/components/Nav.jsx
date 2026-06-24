import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totals, open: openCart } = useCart();
  const location = useLocation();

  // On non-home routes, default to "solid" so nav is always readable
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isSolid = !isHome || scrolled;

  const linkBase = "text-[12px] uppercase tracking-[0.2em] font-medium transition-colors duration-200";
  const linkColor = isSolid
    ? "text-[#2A211B] hover:text-[#B8935C]"
    : "text-white hover:text-[#D9B380]";
  const overHeroShadow = !isSolid ? { textShadow: "0 1px 20px rgba(0,0,0,0.5)" } : undefined;

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isSolid
            ? "bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E5DCCD]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-10 h-16 lg:h-20 flex items-center justify-between">
          {/* Mobile menu trigger */}
          <button
            type="button"
            className={`lg:hidden w-9 h-9 flex items-center justify-center -ms-2 ${isSolid ? "text-[#2A211B]" : "text-white"}`}
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={20} strokeWidth={1.5} />
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-2xl lg:text-3xl tracking-[0.25em] font-medium ${
              isSolid ? "text-[#13100E]" : "text-white"
            }`}
            style={overHeroShadow}
            aria-label="Velmora — home"
          >
            VELMORA
          </Link>

          {/* Center nav (desktop) */}
          <nav className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            <NavLink to="/shop" className={`${linkBase} ${linkColor}`} style={overHeroShadow}>
              Shop
            </NavLink>
            <NavLink to="/shop?view=collections" className={`${linkBase} ${linkColor}`} style={overHeroShadow}>
              Collections
            </NavLink>
            <NavLink to="/about" className={`${linkBase} ${linkColor}`} style={overHeroShadow}>
              About
            </NavLink>
            <NavLink to="/journal" className={`${linkBase} ${linkColor}`} style={overHeroShadow}>
              Journal
            </NavLink>
          </nav>

          {/* Right icons */}
          <div className={`flex items-center gap-1 lg:gap-2 ${isSolid ? "text-[#2A211B]" : "text-white"}`}>
            <button
              type="button"
              aria-label="Search"
              className="w-9 h-9 flex items-center justify-center hover:opacity-70 transition"
            >
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={openCart}
              aria-label={`Cart, ${totals.itemCount} items`}
              className="w-9 h-9 flex items-center justify-center hover:opacity-70 transition relative"
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              {totals.itemCount > 0 && (
                <span
                  className="absolute top-1 right-0 min-w-[16px] h-[16px] px-1 rounded-full bg-[#B8935C] text-white text-[10px] font-medium flex items-center justify-center tabular-nums"
                  aria-hidden="true"
                >
                  {totals.itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
            className="absolute inset-0 bg-[#13100E]/40 fade-in"
          />
          <aside className="absolute left-0 top-0 h-full w-[82%] max-w-[340px] bg-[#FAF7F2] flex flex-col slide-in-right" style={{ animation: "slideInLeft 280ms ease-out both" }}>
            <div className="flex items-center justify-between px-5 h-16 border-b border-[#E5DCCD]">
              <span className="font-serif text-xl tracking-[0.25em] font-medium text-[#13100E]">VELMORA</span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
                className="w-9 h-9 flex items-center justify-center"
              >
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>
            <nav className="flex flex-col p-5 gap-1">
              {[
                { to: "/shop", label: "Shop" },
                { to: "/shop?view=collections", label: "Collections" },
                { to: "/about", label: "About" },
                { to: "/journal", label: "Journal" },
              ].map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="font-serif text-2xl text-[#13100E] py-3 hover:text-[#B8935C] transition"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto p-5 border-t border-[#E5DCCD]">
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#8A7A66] mb-3">Crafted to be Treasured</p>
              <p className="text-sm text-[#2A211B]">Free worldwide shipping. 30-day returns.</p>
            </div>
          </aside>
          <style>{`@keyframes slideInLeft { from { transform: translateX(-100%); } to { transform: translateX(0); } }`}</style>
        </div>
      )}
    </>
  );
}
