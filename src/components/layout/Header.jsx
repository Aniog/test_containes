import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { Menu, X, Anchor } from "lucide-react"
import Button from "@/components/ui/Button"
import { cn } from "@/lib/utils"

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/products", label: "Products We Source" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between lg:h-20">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">
            <Anchor className="h-5 w-5" />
          </span>
          <span className="text-lg font-extrabold tracking-tight text-ink">
            SSourcing<span className="text-primary"> China</span>
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
                    : "text-body hover:text-primary",
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button to="/contact" variant="accent" size="sm">
            Get a Free Sourcing Quote
          </Button>
        </div>

        <button
          className="rounded-md p-2 text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-white lg:hidden">
          <nav className="container-page flex flex-col py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "rounded-md px-3 py-3 text-base font-medium",
                    isActive ? "bg-primary/10 text-primary" : "text-body",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Button
              to="/contact"
              variant="accent"
              className="mt-3"
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
