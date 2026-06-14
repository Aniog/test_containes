import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Menu, X, Globe2, Phone, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/products", label: "Products" },
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
      className={cn(
        "sticky top-0 z-40 w-full bg-white/95 backdrop-blur",
        scrolled ? "border-b border-slate-200 shadow-sm" : "border-b border-transparent"
      )}
    >
      <div className="hidden bg-navy-950 text-slate-200 md:block">
        <div className="container-wide flex h-9 items-center justify-between text-xs">
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5">
              <Globe2 className="h-3.5 w-3.5" />
              <span>Helping buyers in 40+ countries source from China</span>
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="mailto:hello@ssourcingchina.com"
              className="inline-flex items-center gap-1.5 hover:text-white"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>hello@ssourcingchina.com</span>
            </a>
            <a
              href="tel:+8675588889999"
              className="inline-flex items-center gap-1.5 hover:text-white"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>+86 755 8888 9999</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container-wide flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2" aria-label="SSourcing China home">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-navy-900 text-white font-bold text-sm">
            SS
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-base font-semibold text-slate-900">SSourcing China</span>
            <span className="text-[11px] text-slate-500">Your China sourcing partner</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-navy-50 text-navy-900"
                    : "text-slate-700 hover:bg-slate-50 hover:text-navy-900"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/contact" className="btn-primary">
            Get a Free Sourcing Quote
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="container-wide flex flex-col gap-1 py-3" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "rounded-md px-3 py-2.5 text-sm font-medium",
                    isActive ? "bg-navy-50 text-navy-900" : "text-slate-700 hover:bg-slate-50"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn-primary mt-2 w-full">
              Get a Free Sourcing Quote
            </Link>
            <div className="mt-3 grid gap-1 px-3 pb-2 text-xs text-slate-500">
              <a href="mailto:hello@ssourcingchina.com" className="inline-flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5" /> hello@ssourcingchina.com
              </a>
              <a href="tel:+8675588889999" className="inline-flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5" /> +86 755 8888 9999
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
