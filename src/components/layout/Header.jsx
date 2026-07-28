import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { Menu, X, Ship } from "lucide-react"
import { navLinks } from "@/data/site"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Ship className="h-5 w-5" />
          </span>
          <span className="text-lg font-bold tracking-tight text-foreground">
            SSourcing<span className="text-accent-600"> China</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary",
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button as={Link} to="/contact" variant="accent" size="sm">
            Get a Free Sourcing Quote
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-white lg:hidden">
          <nav className="mx-auto flex max-w-content flex-col gap-1 px-4 py-3 sm:px-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "rounded-md px-3 py-2.5 text-sm font-medium",
                    isActive
                      ? "bg-primary-50 text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-primary",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Button
              as={Link}
              to="/contact"
              variant="accent"
              size="md"
              className="mt-2"
              onClick={() => setOpen(false)}
            >
              Get a Free Sourcing Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
