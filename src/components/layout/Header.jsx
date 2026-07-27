import { useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Menu, X, Ship } from "lucide-react"
import { NAV_LINKS, SITE } from "@/data/content"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2" onClick={close}>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-900 text-white">
            <Ship className="h-5 w-5" />
          </span>
          <span className="text-lg font-extrabold tracking-tight text-brand-900">
            SSourcing<span className="text-brand-500"> China</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "text-brand-700 bg-brand-50"
                    : "text-slate-600 hover:text-brand-700 hover:bg-slate-50",
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button as={Link} to="/contact" variant="accent" size="sm">
            {SITE.cta}
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-brand-900 lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={close}
                className={({ isActive }) =>
                  cn(
                    "rounded-md px-3 py-2.5 text-base font-medium",
                    isActive
                      ? "text-brand-700 bg-brand-50"
                      : "text-slate-700 hover:bg-slate-50",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Button
              as={Link}
              to="/contact"
              variant="accent"
              className="mt-2"
              onClick={close}
            >
              {SITE.cta}
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
