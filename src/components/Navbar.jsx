import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, toggleCart } = useCart();
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

  const bgClass = scrolled || !isHome
    ? "bg-[#F5F0EB]/95 backdrop-blur-md shadow-sm"
    : "bg-transparent";

  const textClass = scrolled || !isHome ? "text-[#1A1816]" : "text-white";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bgClass}`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl tracking-[0.18em] font-medium transition-colors duration-500 ${textClass}`}
            >
              VELMORA
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {["Shop", "Collections", "About", "Journal"].map((item) => (
                <Link
                  key={item}
                  to={item === "Shop" ? "/shop" : "/"}
                  className={`text-xs tracking-[0.14em] uppercase font-medium transition-colors duration-300 hover:opacity-70 ${textClass}`}
                >
                  {item}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button
                className={`p-1 transition-colors duration-300 hover:opacity-70 ${textClass}`}
                aria-label="Search"
              >
                <Search size={20} strokeWidth={1.5} />
              </button>
              <button
                className={`relative p-1 transition-colors duration-300 hover:opacity-70 ${textClass}`}
                aria-label="Cart"
                onClick={() => toggleCart(true)}
              >
                <ShoppingBag size={20} strokeWidth={1.5} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#B8966A] text-white text-[10px] font-semibold rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
              <button
                className={`md:hidden p-1 transition-colors duration-300 hover:opacity-70 ${textClass}`}
                aria-label="Menu"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#F5F0EB] pt-20 px-6 pb-8 flex flex-col gap-6 animate-in slide-in-from-top-5 duration-300">
          {["Shop", "Collections", "About", "Journal"].map((item) => (
            <Link
              key={item}
              to={item === "Shop" ? "/shop" : "/"}
              className="font-serif text-2xl tracking-wide text-[#1A1816] border-b border-[#1A1816]/10 pb-4"
              onClick={() => setMobileOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
