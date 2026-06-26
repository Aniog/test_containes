import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Menu, X, Globe2 } from "lucide-react"
import { Container } from "@/components/ui/primitives"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/products", label: "Products We Source" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
]

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5 group" aria-label="SSourcing China home">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-navy-900 text-white shadow-sm group-hover:bg-navy-700 transition-colors">
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
          <path
            d="M5 18V6h2.5l3.5 6 3.5-6H17v12h-2v-8.5L11.5 14h-1L7 9.5V18H5zm14-1a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4z"
            fill="#E08A1E"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-base font-bold text-slate-900">SSourcing China</span>
        <span className="text-[11px] uppercase tracking-wider text-slate-500 font-medium">
          China Sourcing Agent
        </span>
      </span>
    </Link>
  )
}

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
        "sticky top-0 z-40 w-full border-b backdrop-blur transition-colors",
        scrolled
          ? "bg-white/95 border-slate-200"
          : "bg-white/80 border-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-6">
        <Logo />

        <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive
                    ? "text-navy-900 bg-slate-100"
                    : "text-slate-700 hover:text-navy-900 hover:bg-slate-50"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500">
            <Globe2 className="h-4 w-4" /> English
          </span>
          <Button as={Link} to="/contact" variant="accent" size="sm">
            Get a Free Quote
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-700 hover:bg-slate-100"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <Container className="py-3">
            <nav aria-label="Mobile" className="flex flex-col">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "px-3 py-3 text-sm font-medium rounded-md",
                      isActive
                        ? "text-navy-900 bg-slate-100"
                        : "text-slate-700 hover:bg-slate-50"
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Button
                as={Link}
                to="/contact"
                variant="accent"
                size="md"
                className="mt-3"
              >
                Get a Free Quote
              </Button>
            </nav>
          </Container>
        </div>
      )}
    </header>
  )
}