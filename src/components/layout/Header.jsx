import { useEffect, useRef, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Menu, X, ShipWheel } from "lucide-react"
import { Button } from "@/components/ui/button"
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
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-white">
            <ShipWheel className="h-5 w-5" />
          </span>
          <span className="text-lg font-bold tracking-tight text-ink">
            SSourcing<span className="text-brand"> China</span>
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
                    ? "text-brand"
                    : "text-slate-600 hover:text-brand",
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
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "rounded-md px-3 py-2.5 text-base font-medium",
                    isActive
                      ? "bg-brand/10 text-brand"
                      : "text-slate-700 hover:bg-slate-100",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Button as={Link} to="/contact" className="mt-2">
              Get a Free Sourcing Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
