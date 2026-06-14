import * as React from "react"
import { NavLink, Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { BrandMark } from "@/components/layout/BrandMark"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Home", to: "/" },
  { label: "Machines", to: "/products" },
  { label: "Capabilities", to: "/#capabilities" },
  { label: "Process", to: "/#process" },
  { label: "Contact", to: "/contact" },
]

export function Navbar() {
  const [open, setOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const location = useLocation()

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  React.useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-300",
        scrolled
          ? "bg-ink/80 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center" aria-label="ARTITECT MACHINERY home">
          <BrandMark />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isHash = item.to.includes("#")
            if (isHash) {
              return (
                <a
                  key={item.to}
                  href={item.to}
                  className="px-4 py-2 text-sm text-text-muted hover:text-text transition-colors"
                >
                  {item.label}
                </a>
              )
            }
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "px-4 py-2 text-sm transition-colors",
                    isActive ? "text-text" : "text-text-muted hover:text-text"
                  )
                }
              >
                {item.label}
              </NavLink>
            )
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button asChild={false} variant="secondary" size="sm" className="hidden lg:inline-flex">
            <a href="tel:+18005550199">+1 (800) 555-0199</a>
          </Button>
          <Button size="sm" onClick={() => (window.location.href = "/contact")}>
            Request a Quote
          </Button>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-text"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-line bg-ink">
          <div className="container-x py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.to}
                href={item.to}
                className="px-2 py-3 text-sm text-text-muted hover:text-text border-b border-line last:border-0"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button className="mt-4" onClick={() => (window.location.href = "/contact")}>
              Request a Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
