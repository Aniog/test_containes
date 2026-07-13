import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Menu, X, Globe2 } from "lucide-react"

const navItems = [
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
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={
        "sticky top-0 z-40 w-full border-b transition-colors duration-200 " +
        (scrolled
          ? "bg-white/95 backdrop-blur border-slate-200"
          : "bg-white border-transparent")
      }
    >
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2.5 group" aria-label="SSourcing China home">
          <span className="w-9 h-9 rounded-md bg-brand-800 text-white flex items-center justify-center font-bold text-sm">
            SS
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-base md:text-lg font-bold text-slate-900 tracking-tight">
              SSourcing China
            </span>
            <span className="hidden md:block text-[11px] uppercase tracking-[0.18em] text-slate-500 font-semibold">
              China Sourcing Agent
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                "px-3 py-2 text-sm font-medium rounded-md transition-colors " +
                (isActive
                  ? "text-brand-800 bg-brand-50"
                  : "text-slate-700 hover:text-brand-800 hover:bg-brand-50")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <div className="hidden xl:flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <Globe2 className="w-3.5 h-3.5" />
            <span>EN · USD</span>
          </div>
          <Link to="/contact" className="btn-primary text-sm py-2.5 px-4">
            Get a Free Quote
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <nav className="container-x py-4 flex flex-col gap-1" aria-label="Mobile">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  "px-3 py-2.5 text-sm font-medium rounded-md " +
                  (isActive
                    ? "text-brand-800 bg-brand-50"
                    : "text-slate-700 hover:bg-slate-50")
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn-primary mt-2 w-full">
              Get a Free Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
