import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Search, ShoppingBag, Menu, X } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { cn } from "@/lib/utils"

const links = [
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { count, openCart } = useCart()
  const location = useLocation()
  const isHome = location.pathname === "/"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const solid = scrolled || !isHome || mobileOpen

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid
          ? "bg-cream/95 backdrop-blur border-b border-line text-ink"
          : "bg-transparent text-cream"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10 py-4 md:py-5">
        {/* Left: mobile menu + logo */}
        <div className="flex items-center gap-4 md:flex-1">
          <button
            type="button"
            className="md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Open menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <Link
            to="/"
            className="font-serif text-2xl md:text-3xl tracking-widest3"
          >
            VELMORA
          </Link>
        </div>

        {/* Center links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  "text-xs uppercase tracking-widest2 transition-colors hover:text-gold",
                  isActive && "text-gold"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* Right: icons */}
        <div className="flex items-center gap-5 md:flex-1 md:justify-end">
          <button type="button" aria-label="Search" className="hover:text-gold transition-colors">
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={openCart}
            aria-label="Open cart"
            className="relative hover:text-gold transition-colors"
          >
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-medium text-cream">
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-line bg-cream">
          <div className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  cn(
                    "py-3 text-sm uppercase tracking-widest2 border-b border-line last:border-0",
                    isActive ? "text-gold" : "text-ink"
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
