import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/services", label: "Services" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/products", label: "Products We Source" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/blog", label: "Blog" },
];

function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-2.5"
      aria-label="SSourcing China — home"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-white">
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 7l9-4 9 4-9 4-9-4z" />
          <path d="M3 12l9 4 9-4" />
          <path d="M3 17l9 4 9-4" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-base font-bold tracking-tight text-primary">
          SSourcing
        </span>
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
          China
        </span>
      </span>
    </Link>
  );
}

export default function Header() {
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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b border-line bg-surface/95 backdrop-blur transition-shadow",
        scrolled && "shadow-card"
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between md:h-20">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "rounded-md px-3 py-2 text-sm font-medium text-ink/80 transition-colors hover:text-primary",
                    isActive && "text-primary"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button to="/contact" variant="ghost" size="sm">
              Contact
            </Button>
            <Button to="/contact#inquiry-form" variant="accent" size="sm">
              Get a Free Sourcing Quote
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-primary hover:bg-primary-100 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="lg:hidden">
          <div className="border-t border-line bg-surface">
            <Container>
              <nav
                className="flex flex-col py-3"
                aria-label="Mobile primary"
              >
                {NAV.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      cn(
                        "rounded-md px-3 py-3 text-base font-medium text-ink/80 hover:bg-primary-100/50 hover:text-primary",
                        isActive && "bg-primary-100/50 text-primary"
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                <div className="my-3 h-px bg-line" />
                <Button to="/contact" variant="ghost" size="md" className="justify-start">
                  Contact
                </Button>
                <Button
                  to="/contact#inquiry-form"
                  variant="accent"
                  size="md"
                  className="mt-2"
                >
                  Get a Free Sourcing Quote
                </Button>
              </nav>
            </Container>
          </div>
        </div>
      )}
    </header>
  );
}
