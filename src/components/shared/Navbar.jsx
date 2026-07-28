import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { Menu, X, Ship } from "lucide-react"
import { navLinks } from "@/data/content"
import Button from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-line">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary text-white">
              <Ship className="w-5 h-5" />
            </span>
            <span className="text-lg font-bold text-ink tracking-tight">
              SSourcing<span className="text-primary"> China</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    isActive
                      ? "text-primary"
                      : "text-muted hover:text-ink",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

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
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-line bg-white">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "block px-3 py-2.5 text-base font-medium rounded-md",
                    isActive ? "text-primary bg-blue-50" : "text-ink hover:bg-slate-50",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Button as={Link} to="/contact" className="w-full mt-3" onClick={() => setOpen(false)}>
              Get a Free Sourcing Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
