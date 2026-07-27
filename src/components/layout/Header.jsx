import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Globe2, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { to: "/services", label: "Services" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/products", label: "Products We Source" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b border-border/60 bg-white/90 backdrop-blur transition-colors",
        scrolled ? "shadow-sm" : "",
      )}
    >
      <div className="hidden border-b border-border/60 bg-primary text-primary-foreground md:block">
        <div className="container-x flex h-9 items-center justify-between text-xs">
          <div className="flex items-center gap-5 text-primary-foreground/80">
            <span className="inline-flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5" />
              +86 21 5555 0188
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5" />
              hello@ssourcing-china.com
            </span>
          </div>
          <div className="flex items-center gap-4 text-primary-foreground/80">
            <span className="inline-flex items-center gap-1.5">
              <Globe2 className="h-3.5 w-3.5" />
              English &middot; 中文 &middot; Español &middot; Deutsch
            </span>
            <span>Mon–Sat &middot; 09:00–19:00 CST</span>
          </div>
        </div>
      </div>

      <div className="container-x flex h-16 items-center justify-between gap-6 lg:h-20">
        <Link
          to="/"
          className="flex items-center gap-2.5"
          aria-label="SSourcing China home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <span className="text-base font-bold tracking-tight">S</span>
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-base font-semibold text-primary">
              SSourcing <span className="text-accent">China</span>
            </span>
            <span className="text-[11px] font-medium text-muted-foreground">
              Sourcing partner for global buyers
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
                  isActive && "text-primary",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/contact" className="btn-ghost btn-sm">
            Talk to an agent
          </Link>
          <Link to="/contact" className="btn-accent btn-sm">
            Get a Free Sourcing Quote
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-primary lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-white lg:hidden">
          <div className="container-x flex flex-col gap-1 py-3">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-primary",
                    isActive && "bg-muted text-primary",
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="mt-2 grid grid-cols-1 gap-2 border-t border-border pt-3">
              <Link to="/contact" className="btn-ghost w-full">
                Talk to an agent
              </Link>
              <Link to="/contact" className="btn-accent w-full">
                Get a Free Sourcing Quote
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Header;
