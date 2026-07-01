import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/store/cart";
import { cn } from "@/lib/cn";

const navLinks = [
  { to: "/shop", label: "Shop" },
  { to: "/shop?category=earrings", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

function Logo({ tone = "light" }) {
  const color = tone === "light" ? "text-ivory-50" : "text-espresso-200";
  return (
    <Link
      to="/"
      aria-label="Velmora — Home"
      className={cn(
        "font-serif tracking-widest2 text-2xl sm:text-[28px] leading-none select-none",
        color,
      )}
    >
      VELMORA
    </Link>
  );
}

export default function Navbar() {
  const { count, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  // Solid background when scrolled OR when not on homepage
  const isHome = location.pathname === "/";
  const solid = scrolled || !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [location.pathname, location.search]);

  return (
    <>
      <div
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-editorial",
          solid
            ? "bg-ivory-50/95 backdrop-blur-sm border-b border-[rgba(168,130,80,0.18)] text-espresso-200"
            : "bg-transparent text-ivory-50",
        )}
      >
        <header className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-3 items-center h-16 sm:h-20">
            {/* Left: logo */}
            <div className="flex items-center justify-start">
              <Logo tone={solid ? "dark" : "light"} />
            </div>

            {/* Center: nav (desktop) */}
            <nav className="hidden md:flex items-center justify-center gap-10">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  className={({ isActive }) =>
                    cn(
                      "relative text-[11px] tracking-wider2 uppercase font-sans link-underline",
                      solid ? "text-espresso-200" : "text-ivory-50",
                      isActive && "after:scale-x-100",
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Right: search + cart + mobile menu */}
            <div className="flex items-center justify-end gap-4 sm:gap-5">
              <button
                type="button"
                aria-label="Search"
                onClick={() => setSearchOpen((v) => !v)}
                className={cn(
                  "p-2 transition-opacity hover:opacity-70",
                  solid ? "text-espresso-200" : "text-ivory-50",
                )}
              >
                <Search className="w-[18px] h-[18px]" strokeWidth={1.4} />
              </button>
              <button
                type="button"
                aria-label={`Open cart, ${count} item${count === 1 ? "" : "s"}`}
                onClick={openCart}
                className={cn(
                  "relative p-2 transition-opacity hover:opacity-70",
                  solid ? "text-espresso-200" : "text-ivory-50",
                )}
              >
                <ShoppingBag className="w-[18px] h-[18px]" strokeWidth={1.4} />
                {count > 0 && (
                  <span
                    className={cn(
                      "absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full text-[10px] leading-[18px] text-center font-sans",
                      solid ? "bg-espresso-200 text-ivory-50" : "bg-ivory-50 text-espresso-200",
                    )}
                  >
                    {count}
                  </span>
                )}
              </button>
              <button
                type="button"
                aria-label="Open menu"
                onClick={() => setMobileOpen(true)}
                className={cn(
                  "md:hidden p-2",
                  solid ? "text-espresso-200" : "text-ivory-50",
                )}
              >
                <Menu className="w-5 h-5" strokeWidth={1.4} />
              </button>
            </div>
          </div>
        </header>

        {/* Search bar drop-down */}
        <div
          className={cn(
            "overflow-hidden transition-all duration-500 ease-editorial border-t",
            solid ? "border-[rgba(168,130,80,0.15)]" : "border-white/10",
            searchOpen ? "max-h-32 opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12 py-4 flex items-center gap-3">
            <Search className="w-4 h-4 opacity-60" strokeWidth={1.4} />
            <input
              type="search"
              placeholder="Search for earrings, necklaces, huggies…"
              className="flex-1 bg-transparent border-0 outline-none text-sm placeholder:opacity-60 font-sans"
              aria-label="Search products"
            />
            <button
              type="button"
              onClick={() => setSearchOpen(false)}
              className="text-[11px] tracking-wider2 uppercase opacity-60 hover:opacity-100"
            >
              Close
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[60] md:hidden transition-opacity duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-espresso-300/60"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute top-0 right-0 h-full w-[82%] max-w-[360px] bg-ivory-50 text-espresso-200 shadow-soft-lg transition-transform duration-500 ease-editorial",
            mobileOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between px-6 h-16 border-b hairline-dark">
            <span className="font-serif tracking-widest2 text-xl">VELMORA</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="p-2"
            >
              <X className="w-5 h-5" strokeWidth={1.4} />
            </button>
          </div>
          <nav className="flex flex-col px-6 py-8 gap-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className="font-serif text-3xl tracking-tight link-underline self-start"
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-6 pt-6 border-t hairline-dark flex flex-col gap-3 text-sm tracking-wider2 uppercase">
              <Link to="/shop" className="opacity-80">Shop all</Link>
              <Link to="/about" className="opacity-80">Our story</Link>
              <Link to="/journal" className="opacity-80">Journal</Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
