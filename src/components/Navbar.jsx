import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Search, Menu, X } from "lucide-react"
import { useScrollHeader } from "@/hooks/useScrollHeader"
import { CartIcon } from "@/components/CartDrawer"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
]

export function Navbar() {
  const scrolled = useScrollHeader(60)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()
  const overHero = pathname === "/" && !scrolled

  return (
    <header
      className={cn(
        "fixed top-0 z-40 w-full transition-all duration-300",
        overHero
          ? "bg-transparent text-white"
          : "bg-background/95 text-foreground backdrop-blur-md border-b border-border",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="font-serif text-xl uppercase tracking-[0.18em]"
        >
          Velmora
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-xs uppercase tracking-[0.16em] text-current/80 transition-colors hover:text-current"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            className="p-2 transition-colors hover:text-primary"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <CartIcon />
          <button
            className="p-2 transition-colors hover:text-primary md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-background md:hidden">
          <div className="flex h-16 items-center justify-between px-4">
            <span className="font-serif text-xl uppercase tracking-[0.18em]">
              Velmora
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col items-center gap-8 pt-12">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-serif text-2xl uppercase tracking-[0.18em] text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
