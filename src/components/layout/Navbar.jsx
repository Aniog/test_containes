import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Menu, X, ArrowRight } from "lucide-react"
import { NAV_LINKS, SITE } from "@/data/site"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 font-bold text-lg text-slate-900">
      <span className="text-slate-900">SSourcing</span>
      <span className="text-slate-500 font-medium">China</span>
      <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-600 ml-0.5" aria-hidden="true" />
    </Link>
  )
}

export default function Navbar() {
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
        "sticky top-0 z-50 w-full bg-white/90 backdrop-blur border-b transition-colors",
        scrolled ? "border-slate-200" : "border-transparent",
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo />

          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    isActive
                      ? "text-brand-700"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button to="/contact" size="sm">
              Get a Free Sourcing Quote
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-slate-700 hover:bg-slate-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "block px-3 py-2.5 text-base font-medium rounded-md",
                    isActive
                      ? "text-brand-700 bg-brand-50"
                      : "text-slate-700 hover:bg-slate-50",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-3">
              <Button to="/contact" className="w-full">
                Get a Free Sourcing Quote
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            <p className="px-3 pt-3 text-sm text-slate-500">{SITE.email}</p>
          </div>
        </div>
      )}
    </header>
  )
}
