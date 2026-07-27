import { useState, useEffect } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Menu, X, Globe2 } from "lucide-react"
import Button from "@/components/ui/Button"
import Container from "@/components/ui/Container"
import { cn } from "@/lib/utils"

const navItems = [
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
    const onScroll = () => setScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-white border-b transition-colors",
        scrolled
          ? "border-slate-200 shadow-sm"
          : "border-transparent"
      )}
    >
      <Container>
        <div className="flex h-16 md:h-20 items-center justify-between gap-4">
          <Link
            to="/"
            className="flex items-center gap-2.5 text-navy-600 hover:opacity-90"
            aria-label="SSourcing China home"
          >
            <span className="grid h-9 w-9 place-items-center rounded-md bg-navy-600 text-white font-bold">
              SS
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-base font-bold text-navy-600">
                SSourcing
              </span>
              <span className="text-[11px] font-medium text-slate-500 tracking-wide">
                CHINA SOURCING PARTNER
              </span>
            </span>
          </Link>

          <nav
            className="hidden lg:flex items-center gap-7"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "text-sm font-medium transition-colors",
                    isActive
                      ? "text-accent-500"
                      : "text-slate-700 hover:text-navy-600"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <span className="hidden xl:inline-flex items-center gap-1.5 text-xs font-medium text-slate-500">
              <Globe2 className="h-3.5 w-3.5" /> EN
            </span>
            <Button to="/contact" variant="primary" size="md">
              Get a Free Sourcing Quote
            </Button>
          </div>

          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-navy-600 hover:bg-slate-100"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <Container className="py-4">
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      "rounded-md px-3 py-2.5 text-sm font-medium",
                      isActive
                        ? "bg-navy-50 text-accent-500"
                        : "text-slate-700 hover:bg-slate-50"
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="pt-3">
                <Button to="/contact" variant="primary" size="md" className="w-full">
                  Get a Free Sourcing Quote
                </Button>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  )
}
