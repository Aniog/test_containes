import React, { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import Button from "@/components/ui/Button"
import { cn } from "@/lib/utils"

const navItems = [
  { to: "/services", label: "Services" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/products", label: "Products We Source" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
]

const Header = () => {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header className="sticky top-0 z-40 bg-navy text-ink-onDark border-b border-navy-800">
      <div className="container-content flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-[4px] bg-teal text-white flex items-center justify-center font-bold text-[15px] tracking-tight">
            SS
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-[15px] font-semibold text-ink-onDark">
              SSourcing China
            </span>
            <span className="text-[11px] text-ink-onDarkMuted tracking-wide">
              China Sourcing Agent
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "px-3 py-2 text-[14px] font-medium transition-colors",
                  isActive
                    ? "text-ink-onDark"
                    : "text-ink-onDarkMuted hover:text-ink-onDark"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden md:inline text-[13px] text-ink-onDarkMuted hover:text-ink-onDark"
          >
            hello@ssourcing.cn
          </Link>
          <Button as={Link} to="/contact#inquiry" variant="primary" size="sm">
            Get a Free Quote
          </Button>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 text-ink-onDark"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-navy-800 bg-navy text-ink-onDark">
          <div className="container-content py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "px-2 py-3 text-[15px] font-medium border-b border-navy-800",
                    isActive ? "text-ink-onDark" : "text-ink-onDarkMuted"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="pt-4">
              <Button as={Link} to="/contact#inquiry" variant="primary" size="md" className="w-full">
                Get a Free Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
