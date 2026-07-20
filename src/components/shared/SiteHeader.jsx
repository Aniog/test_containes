import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useStorefront } from "../../hooks/useStorefront.jsx";

const links = [
  { label: "Shop", to: "/shop" },
  { label: "Collections", to: "/#collections" },
  { label: "About", to: "/#story" },
  { label: "Journal", to: "/#journal" },
];

const SiteHeader = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cartCount, openCart, openSearch, isCartOpen, isSearchOpen } = useStorefront();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.hash]);

  const isTransparent =
    location.pathname === "/" &&
    !scrolled &&
    !mobileOpen &&
    !isCartOpen &&
    !isSearchOpen;

  const headerClassName = useMemo(
    () =>
      isTransparent
        ? "border-transparent bg-transparent text-stone-50"
        : "border-stone-200 bg-stone-50/95 text-stone-950 shadow-sm backdrop-blur",
    [isTransparent],
  );

  return (
    <header className={`fixed inset-x-0 top-0 z-[90] border-b transition-all duration-300 ${headerClassName}`}>
      <div className="container-shell">
        <div className="flex h-20 items-center justify-between gap-4">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/20 md:hidden"
            aria-label="Toggle navigation"
            onClick={() => setMobileOpen((value) => !value)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <Link to="/" className="logo-mark flex-1 md:flex-none">
            Velmora
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.label}
                className="text-sm font-medium tracking-[0.18em] uppercase transition hover:text-amber-500"
                to={link.to}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-2 sm:gap-3">
            <button
              type="button"
              aria-label="Search"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/20 transition hover:border-amber-500 hover:text-amber-500"
              onClick={openSearch}
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Open cart"
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/20 transition hover:border-amber-500 hover:text-amber-500"
              onClick={openCart}
            >
              <ShoppingBag className="h-4 w-4" />
              {cartCount > 0 ? (
                <span className="absolute -right-1 -top-1 inline-flex min-h-5 min-w-5 items-center justify-center rounded-full bg-amber-500 px-1 text-[10px] font-semibold text-stone-950">
                  {cartCount}
                </span>
              ) : null}
            </button>
          </div>
        </div>

        {mobileOpen ? (
          <div className="border-t border-current/10 pb-6 pt-4 md:hidden">
            <nav className="flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.label}
                  className="rounded-2xl bg-stone-50/10 px-4 py-3 text-sm font-medium uppercase tracking-[0.18em]"
                  to={link.to}
                >
                  {link.label}
                </Link>
              ))}
              <Link className="button-primary mt-2 w-full" to="/shop">
                Shop the Collection
              </Link>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default SiteHeader;
