import { useState, useEffect } from "react"
import { NavLink, Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-colors duration-300",
        scrolled
          ? "bg-cream/95 backdrop-blur border-b border-hairline"
          : "bg-cream border-b border-transparent"
      )}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3" aria-label="ARTITECT MACHINERY home">
          <span className="font-display text-2xl font-semibold tracking-wide text-ink">
            ARTITECT
          </span>
          <span className="hidden sm:inline-block h-5 w-px bg-hairline" aria-hidden="true" />
          <span className="hidden sm:inline-block text-[0.72rem] font-semibold uppercase tracking-eyebrow text-steel">
            Machinery
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium tracking-wide transition-colors",
                  isActive ? "text-ink" : "text-steel hover:text-ink"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link to="/contact" className="btn-primary">
            Request a Quote
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 text-ink"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-hairline bg-cream">
          <div className="container-page py-6 flex flex-col gap-5">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "text-lg font-medium",
                    isActive ? "text-ink" : "text-steel"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn-primary mt-2 w-full">
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
