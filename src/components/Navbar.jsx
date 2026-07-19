import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { itemCount, setIsOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === "/";
  const transparent = isHome && !scrolled && !mobileOpen;

  const navLinks = [
    { label: "Shop", to: "/shop" },
    { label: "Collections", to: "/shop" },
    { label: "About", to: "/#story" },
    { label: "Journal", to: "/#journal" },
  ];

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-30 transition-all duration-300 ${
          transparent
            ? "bg-transparent text-white"
            : "bg-velmora-cream/95 text-velmora-espresso shadow-sm backdrop-blur"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-8">
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-xs uppercase tracking-widest transition-opacity hover:opacity-60"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/"
            className="absolute left-1/2 -translate-x-1/2 font-serif text-2xl tracking-widest md:text-3xl"
          >
            VELMORA
          </Link>

          <div className="flex items-center gap-5">
            <button aria-label="Search" className="transition-opacity hover:opacity-60">
              <Search size={20} />
            </button>
            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open cart"
              className="relative transition-opacity hover:opacity-60"
            >
              <ShoppingBag size={20} />
              {itemCount > 0 && (
                <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-velmora-gold text-[10px] text-white">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-velmora-cream px-6 py-5 md:hidden">
          <div className="flex items-center justify-between">
            <span className="font-serif text-2xl tracking-widest">VELMORA</span>
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <X size={24} />
            </button>
          </div>
          <nav className="mt-12 flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="font-serif text-3xl text-velmora-espresso"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
