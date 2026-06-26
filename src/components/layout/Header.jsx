import { Link, NavLink } from "react-router-dom"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Machines" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
]

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-bone/85 backdrop-blur border-b border-hairline">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-baseline gap-2 group" onClick={() => setOpen(false)}>
          <span className="font-serif text-2xl tracking-tight text-graphite group-hover:text-accent transition-colors">
            ARTITECT
          </span>
          <span className="text-[10px] tracking-[0.35em] uppercase text-muted-ink">
            Machinery
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                cn(
                  "text-sm tracking-wide transition-colors",
                  isActive ? "text-accent" : "text-graphite hover:text-accent",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="text-xs uppercase tracking-[0.25em] bg-graphite text-bone px-5 py-3 hover:bg-steel transition-colors rounded-sm"
          >
            Request a Quote
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          className="md:hidden text-graphite p-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-hairline bg-bone">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "py-3 text-base tracking-wide border-b border-hairline last:border-b-0",
                    isActive ? "text-accent" : "text-graphite",
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 text-xs uppercase tracking-[0.25em] bg-graphite text-bone px-5 py-3 text-center rounded-sm"
            >
              Request a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
