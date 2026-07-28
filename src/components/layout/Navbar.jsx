import { useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Menu, X, Ship } from "lucide-react"
import { navLinks } from "@/data/nav"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/shared/Section"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur border-b border-border">
      <Container className="flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-white">
            <Ship className="h-5 w-5" />
          </span>
          <span className="text-lg font-bold text-ink">
            SSourcing<span className="text-brand"> China</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive
                    ? "text-brand bg-brand-light"
                    : "text-slate-ink hover:text-brand hover:bg-brand-light/60",
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button as={Link} to="/contact" size="sm">
            Get a Free Sourcing Quote
          </Button>
        </div>

        <button
          className="lg:hidden p-2 text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {open && (
        <div className="lg:hidden border-t border-border bg-surface">
          <Container className="py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-2.5 text-sm font-medium rounded-md",
                    isActive
                      ? "text-brand bg-brand-light"
                      : "text-slate-ink hover:bg-brand-light/60",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Button
              as={Link}
              to="/contact"
              className="mt-2"
              onClick={() => setOpen(false)}
            >
              Get a Free Sourcing Quote
            </Button>
          </Container>
        </div>
      )}
    </header>
  )
}
