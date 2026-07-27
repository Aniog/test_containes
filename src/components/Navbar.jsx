import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/Button"

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "Products", path: "/products" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="container-main flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-brand">SSourcing China</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = location.pathname === link.path
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`text-sm font-medium transition ${
                    active ? "text-accent" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="hidden md:block">
          <Button asChild>
            <Link to="/contact">Get a Free Sourcing Quote</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 md:hidden"
          onClick={() => setMobileOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="container-main flex flex-col gap-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-slate-700 hover:text-slate-900"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="w-full" onClick={() => setMobileOpen(false)}>
              <Link to="/contact">Get a Free Sourcing Quote</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
