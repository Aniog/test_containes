import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Menu, X, Anchor } from "lucide-react"
import { NAV_LINKS } from "@/data/site"
import Button from "@/components/ui/Button"
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
        "sticky top-0 z-50 w-full transition-colors duration-200",
        scrolled
          ? "bg-white/95 backdrop-blur shadow-sm border-b border-slate-200"
          : "bg-white border-b border-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 text-[#0B2545]">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0B2545] text-white">
            <Anchor className="h-5 w-5" />
          </span>
          <span className="text-lg font-bold tracking-tight">
            SSourcing<span className="text-[#1B6CA8]"> China</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "text-[#1B6CA8]"
                      : "text-slate-700 hover:text-[#0B2545]"
                  )
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button to="/contact" size="sm" variant="accent">
            Get a Free Sourcing Quote
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-[#0B2545] lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <ul className="mx-auto max-w-7xl space-y-1 px-4 py-4 sm:px-6">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    cn(
                      "block rounded-md px-3 py-2.5 text-base font-medium",
                      isActive
                        ? "bg-slate-50 text-[#1B6CA8]"
                        : "text-slate-700 hover:bg-slate-50"
                    )
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <Button to="/contact" variant="accent" className="w-full">
                Get a Free Sourcing Quote
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
