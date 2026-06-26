import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Menu, X, Factory } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { NAV_LINKS, SITE } from "@/lib/content"
import { cn } from "@/lib/utils"

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
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors duration-200",
        scrolled
          ? "border-border-soft bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/80"
          : "border-transparent bg-surface"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-white">
            <Factory className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-base font-extrabold tracking-tight text-ink">
              {SITE.shortName}
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
              Sourcing China
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "text-brand"
                      : "text-slate-body hover:text-ink"
                  )
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button as={Link} to="/contact" size="sm">
            Get a Free Sourcing Quote
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border-soft bg-surface lg:hidden">
          <ul className="mx-auto max-w-7xl space-y-1 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "block rounded-md px-3 py-2.5 text-sm font-medium",
                      isActive
                        ? "bg-brand-light text-brand"
                        : "text-slate-body hover:bg-page"
                    )
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <Button as={Link} to="/contact" className="w-full">
                Get a Free Sourcing Quote
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
