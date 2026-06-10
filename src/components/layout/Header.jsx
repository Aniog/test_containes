import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { BrandMark } from "@/components/shared/BrandMark"
import { cn } from "@/lib/utils"

const navItems = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Machines" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const isHome = location.pathname === "/"
  const transparent = isHome && !scrolled

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        transparent
          ? "bg-transparent"
          : "bg-ink/95 backdrop-blur-md border-b border-white/5",
      )}
    >
      <div className="container-content flex h-20 items-center justify-between">
        <BrandMark tone={transparent ? "light" : "light"} />

        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-10"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                cn(
                  "text-xs font-medium uppercase tracking-eyebrow transition-colors duration-200",
                  transparent
                    ? isActive
                      ? "text-brass"
                      : "text-bone/80 hover:text-brass-light"
                    : isActive
                      ? "text-brass"
                      : "text-bone/70 hover:text-bone",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/contact"
            className={cn(
              "btn",
              transparent
                ? "border border-brass/60 text-brass hover:bg-brass hover:text-ink"
                : "border border-brass/40 text-brass hover:bg-brass hover:text-ink",
            )}
          >
            Request a quote
          </Link>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="md:hidden grid h-10 w-10 place-items-center text-bone"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={cn(
          "md:hidden fixed inset-x-0 top-20 bottom-0 bg-ink transition-all duration-300",
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none",
        )}
      >
        <div className="container-content flex h-full flex-col gap-6 py-10">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                cn(
                  "font-serif text-3xl",
                  isActive ? "text-brass" : "text-bone hover:text-brass-light",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-accent mt-6 w-fit">
            Request a quote
          </Link>
        </div>
      </div>
    </header>
  )
}
