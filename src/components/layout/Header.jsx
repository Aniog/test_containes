import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/components/cart/CartContext";

const links = [
  { label: "Shop", to: "/shop" },
  { label: "Collections", to: "/shop?category=Huggies" },
  { label: "About", to: "/#story" },
  { label: "Journal", to: "/#journal" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, openCart } = useCart();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const solid = scrolled || !isHome || mobileOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location.pathname, location.search]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 border-b transition duration-500 ${
        solid
          ? "border-velmora-linen bg-velmora-ivory/95 text-velmora-espresso shadow-sm backdrop-blur-xl"
          : "border-transparent bg-transparent text-velmora-ivory"
      }`}
    >
      <nav className="velmora-container flex h-20 items-center justify-between">
        <Link to="/" className="font-serifDisplay text-3xl font-semibold tracking-[0.18em]">
          VELMORA
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className="text-xs font-bold uppercase tracking-nav transition hover:text-velmora-gold"
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="rounded-full p-2.5 transition hover:bg-velmora-gold/15"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={openCart}
            className="relative rounded-full p-2.5 transition hover:bg-velmora-gold/15"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-velmora-gold px-1 text-[10px] font-bold text-velmora-espresso">
                {count}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="rounded-full p-2.5 transition hover:bg-velmora-gold/15 md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden border-t border-velmora-linen bg-velmora-ivory text-velmora-espresso transition-all duration-500 md:hidden ${
          mobileOpen ? "max-h-80" : "max-h-0 border-transparent"
        }`}
      >
        <div className="velmora-container flex flex-col py-5">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="border-b border-velmora-linen py-4 text-sm font-bold uppercase tracking-nav"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
