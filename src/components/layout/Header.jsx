import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-bone/95 backdrop-blur border-b border-silver"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="group flex items-center gap-3" aria-label="ARTITECT MACHINERY home">
            <span className="inline-block h-2 w-2 bg-accent" aria-hidden />
            <span className="font-serif text-xl md:text-[22px] tracking-wider text-ink leading-none">
              ARTITECT
              <span className="ml-1.5 text-steel font-light">MACHINERY</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  cn(
                    "link-underline text-sm font-medium tracking-wider2 uppercase transition-colors",
                    isActive ? "text-ink is-active" : "text-steel hover:text-ink"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-3 bg-ink text-bone px-6 py-3 text-xs uppercase tracking-widest2 hover:bg-graphite transition-colors"
          >
            Request a Quote
          </Link>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            className="md:hidden text-ink p-2"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden fixed inset-x-0 top-20 bottom-0 bg-bone transition-transform duration-500",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="px-6 py-12 flex flex-col gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                cn(
                  "font-serif text-3xl tracking-tight",
                  isActive ? "text-ink" : "text-steel"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex w-fit items-center gap-3 bg-ink text-bone px-6 py-3 text-xs uppercase tracking-widest2"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
