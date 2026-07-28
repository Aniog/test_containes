import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, Phone } from "lucide-react"
import Button from "@/components/ui/Button"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "Products", path: "/products" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container-site flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-extrabold text-navy-900">
            SSourcing<span className="text-blue-600">.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-blue-600",
                pathname === item.path ? "text-blue-600" : "text-slate-700"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a href="tel:+8613812345678" className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-blue-600">
            <Phone className="h-4 w-4" />
            +86 138 1234 5678
          </a>
          <Button as={Link} to="/contact" variant="primary" size="sm">
            Get a Free Quote
          </Button>
        </div>

        <button
          type="button"
          className="p-2 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6 text-slate-700" /> : <Menu className="h-6 w-6 text-slate-700" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="container-site flex flex-col gap-4 py-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "text-base font-medium",
                  pathname === item.path ? "text-blue-600" : "text-slate-700"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button as={Link} to="/contact" variant="primary" className="mt-2 w-full" onClick={() => setMobileOpen(false)}>
              Get a Free Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
