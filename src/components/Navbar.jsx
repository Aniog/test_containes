import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useScrollHeader } from "@/hooks/use-scroll-header";
import { useCart } from "@/hooks/use-cart";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Shop", href: "/shop" },
  { name: "Collections", href: "/shop?category=sets" },
  { name: "About", href: "/about" },
  { name: "Journal", href: "/journal" },
];

export function Navbar() {
  const scrolled = useScrollHeader(40);
  const { count, openCart } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";
  const overHero = isHome && !scrolled;

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          overHero
            ? "bg-transparent text-white"
            : "bg-cream/95 text-espresso backdrop-blur-md shadow-sm"
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <button
            className="p-2 md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>

          <Link
            to="/"
            className="font-serif text-xl font-semibold uppercase tracking-[0.18em]"
          >
            Velmora
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "relative text-xs font-medium uppercase tracking-[0.16em] transition-colors",
                  "after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-current after:transition-all hover:after:w-full"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <button
              className="p-2 transition-opacity hover:opacity-70"
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              className="relative p-2 transition-opacity hover:opacity-70"
              onClick={openCart}
              aria-label="Open cart"
            >
              <ShoppingBag className="h-5 w-5" />
              {count > 0 && (
                <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[10px] font-semibold text-white">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-cream md:hidden">
          <div className="flex h-16 items-center justify-between px-4">
            <span className="font-serif text-xl font-semibold uppercase tracking-[0.18em]">
              Velmora
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="p-2"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col items-center gap-6 pt-12">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-serif text-2xl font-light uppercase tracking-[0.12em]"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {searchOpen && (
        <div className="fixed inset-0 z-[60] bg-cream/98 backdrop-blur-sm">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
            <span className="font-serif text-xl font-semibold uppercase tracking-[0.18em]">
              Search
            </span>
            <button
              onClick={() => setSearchOpen(false)}
              aria-label="Close search"
              className="p-2"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <form
            onSubmit={handleSearchSubmit}
            className="mx-auto max-w-2xl px-4 pt-12"
          >
            <input
              autoFocus
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search jewelry..."
              className="w-full border-b-2 border-espresso bg-transparent pb-3 font-serif text-3xl font-light text-espresso placeholder:text-taupe focus:outline-none sm:text-4xl"
            />
            <p className="mt-4 text-sm text-mocha">
              Press Enter to search products
            </p>
          </form>
        </div>
      )}
    </>
  );
}
