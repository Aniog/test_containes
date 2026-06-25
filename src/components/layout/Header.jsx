import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navItems = [
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
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors duration-200",
        scrolled
          ? "bg-white/95 backdrop-blur border-brand-line"
          : "bg-white border-transparent"
      )}
    >
      <div className="mx-auto flex h-16 md:h-[72px] w-full max-w-7xl items-center justify-between px-5 md:px-8 lg:px-10">
        <Link
          to="/"
          className="flex items-center gap-2 font-semibold text-brand-navy"
          aria-label="SSourcing China home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-brand-navy text-white text-sm font-bold tracking-tight">
            SS
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-base md:text-[1.05rem] font-bold tracking-tight text-brand-navy">
              SSourcing China
            </span>
            <span className="text-[0.65rem] md:text-[0.7rem] uppercase tracking-[0.16em] text-brand-ink-muted mt-0.5">
              Sourcing partner for global buyers
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors",
                  isActive
                    ? "text-brand-red"
                    : "text-brand-ink hover:text-brand-red"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button as="a" href="mailto:hello@ssourcing.example" variant="ghost" size="sm">
            hello@ssourcing.example
          </Button>
          <Button to="/contact" variant="primary" size="md">
            Get a Free Sourcing Quote
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-brand-navy hover:bg-brand-mist"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="lg:hidden border-t border-brand-line bg-white">
          <nav className="flex flex-col px-5 py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "py-3 text-sm font-medium border-b border-brand-line/70 last:border-b-0",
                    isActive ? "text-brand-red" : "text-brand-ink"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="mt-4 flex flex-col gap-2">
              <Button to="/contact" variant="primary" size="md">
                Get a Free Sourcing Quote
              </Button>
              <Button
                as="a"
                href="mailto:hello@ssourcing.example"
                variant="outline"
                size="md"
              >
                hello@ssourcing.example
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
