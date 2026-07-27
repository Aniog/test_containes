import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Menu, X, Mail } from "lucide-react"
import { Button } from "@/components/ui/Button"

const navItems = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/products", label: "Products We Source" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
]

export function Header() {
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
      className={`sticky top-0 z-50 bg-white border-b transition-colors ${
        scrolled ? "border-slate-200 shadow-sm" : "border-slate-100"
      }`}
    >
      {/* Top utility bar */}
      <div className="hidden md:block bg-navy-900 text-navy-50 text-xs">
        <div className="container-x flex items-center justify-between h-9">
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" />
              <a href="mailto:sourcing@ssourcingchina.com" className="hover:text-white">
                sourcing@ssourcingchina.com
              </a>
            </span>
            <span className="text-navy-200">Shenzhen · Yiwu · Ningbo</span>
          </div>
          <div className="flex items-center gap-4 text-navy-100">
            <span>Mon–Sat 09:00–19:00 (GMT+8)</span>
            <span className="text-navy-200">|</span>
            <span>Reply within 1 business day</span>
          </div>
        </div>
      </div>

      <div className="container-x flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group" aria-label="SSourcing China home">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-navy-900 text-white font-bold text-sm">
            SS
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-bold text-navy-900 text-base md:text-lg">SSourcing China</span>
            <span className="text-[11px] text-slate-500 -mt-0.5 hidden sm:block">
              Sourcing · QC · Shipping
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive
                    ? "text-navy-900 bg-slate-100"
                    : "text-slate-700 hover:text-navy-900 hover:bg-slate-50"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/contact">
            <Button variant="primary" size="md">
              Get a Free Quote
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-navy-900 hover:bg-slate-100"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <nav className="container-x py-3 flex flex-col">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `px-3 py-3 text-sm font-medium rounded-md ${
                    isActive
                      ? "text-navy-900 bg-slate-100"
                      : "text-slate-700 hover:bg-slate-50"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="pt-3 pb-1">
              <Link to="/contact" className="block">
                <Button variant="primary" size="md" className="w-full">
                  Get a Free Quote
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
