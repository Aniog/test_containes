import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { navLinks } from "@/data/site";
import { Hairline } from "@/components/ui/Hairline";
import { cn } from "@/lib/utils";

const SCROLL_THRESHOLD = 24;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openCart, itemCount } = useCart();
  const location = useLocation();

  // Solid background once user has scrolled past the hero, OR
  // immediately when we are not on the home page.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === "/";
  const transparent = isHome && !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-colors duration-500",
          transparent
            ? "bg-transparent text-paper"
            : "bg-ivory/95 text-ink backdrop-blur supports-[backdrop-filter]:bg-ivory/80 border-b border-hairline"
        )}
      >
        <div className="container-luxe flex h-16 items-center justify-between md:h-20">
          {/* Mobile menu trigger */}
          <button
            type="button"
            aria-label="Open menu"
            className="md:hidden p-2 -ml-2"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={22} strokeWidth={1.4} />
          </button>

          {/* Logo */}
          <Link
            to="/"
            aria-label="Velmora home"
            className={cn(
              "font-serif text-xl tracking-ui-wide uppercase md:text-2xl",
              "absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:flex-1 md:justify-start"
            )}
          >
            <span className="font-medium">Velmora</span>
          </Link>

          {/* Center nav (desktop) */}
          <nav className="hidden md:flex md:flex-1 md:items-center md:justify-center">
            <ul className="flex items-center gap-10">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      cn(
                        "nav-link",
                        isActive ? "text-gold" : transparent ? "text-paper/90 hover:text-paper" : "text-ink/80 hover:text-ink"
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right icons */}
          <div className="flex flex-1 items-center justify-end gap-2 md:flex-none">
            <button
              type="button"
              aria-label="Search"
              className="hidden md:inline-flex p-2 hover:text-gold transition-colors"
            >
              <Search size={20} strokeWidth={1.4} />
            </button>
            <button
              type="button"
              aria-label={`Open cart with ${itemCount} item${itemCount === 1 ? "" : "s"}`}
              onClick={openCart}
              className="relative p-2 hover:text-gold transition-colors"
            >
              <ShoppingBag size={20} strokeWidth={1.4} />
              <span
                className={cn(
                  "absolute -right-0.5 -top-0.5 min-w-[18px] h-[18px] rounded-full px-1 text-[10px] font-medium flex items-center justify-center transition-colors",
                  transparent ? "bg-paper text-ink" : "bg-ink text-paper"
                )}
              >
                {itemCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 md:hidden transition-opacity duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-ink/40 animate-fade-in-soft"
          onClick={() => setMobileOpen(false)}
        />
        <aside
          className={cn(
            "absolute left-0 top-0 h-full w-[82%] max-w-sm bg-ivory border-r border-hairline p-6 flex flex-col transition-transform duration-400",
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between mb-10">
            <span className="font-serif text-xl tracking-ui-wide uppercase font-medium">Velmora</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="p-2 -mr-2"
            >
              <X size={20} strokeWidth={1.4} />
            </button>
          </div>
          <nav>
            <ul className="space-y-5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      cn(
                        "block font-serif text-2xl",
                        isActive ? "text-gold" : "text-ink"
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Hairline className="my-8" />
          <div className="text-sm text-taupe space-y-2">
            <p className="text-ink font-medium">Customer Care</p>
            <p>care@velmora.co</p>
            <p>Mon–Fri · 9–6 EST</p>
          </div>
        </aside>
      </div>
    </>
  );
}
