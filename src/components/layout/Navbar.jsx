import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Search, ShoppingBag, Menu, X } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { label: "Shop", to: "/shop" },
  { label: "Collections", to: "/collections" },
  { label: "About", to: "/about" },
  { label: "Journal", to: "/journal" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { count, openCart } = useCart()
  const location = useLocation()

  // Transparent over hero (homepage only, top of page), solid otherwise.
  const isHome = location.pathname === "/"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
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
          ? "bg-cream/95 backdrop-blur-sm border-b border-line"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10 h-16 md:h-20">
        {/* Left: mobile menu + logo */}
        <div className="flex items-center gap-4 flex-1">
          <button
            type="button"
            className="md:hidden -ml-1"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Open menu"
          >
            {mobileOpen ? (
              <X size={22} className={solid ? "text-ink" : "text-cream"} strokeWidth={1.5} />
            ) : (
              <Menu size={22} className={solid ? "text-ink" : "text-cream"} strokeWidth={1.5} />
            )}
          </button>

          <Link
            to="/"
            className={cn(
              "font-serif text-2xl md:text-3xl tracking-[0.3em] md:tracking-[0.4em] leading-none",
              solid ? "text-ink" : "text-cream"
            )}
          >
            VELMORA
          </Link>
        </div>

        {/* Center: nav links */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={cn(
                "text-[11px] uppercase tracking-widest2 transition-colors",
                solid
                  ? "text-ink hover:text-champagne-deep"
                  : "text-cream/90 hover:text-cream"
              )}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Right: icons */}
        <div className="flex items-center justify-end gap-4 md:gap-5 flex-1">
          <button
            type="button"
            aria-label="Search"
            className={solid ? "text-ink hover:text-champagne-deep" : "text-cream hover:text-white"}
          >
            <Search size={19} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={openCart}
            aria-label="Open cart"
            className={cn(
              "relative",
              solid ? "text-ink hover:text-champagne-deep" : "text-cream hover:text-white"
            )}
          >
            <ShoppingBag size={19} strokeWidth={1.5} />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-champagne px-1 text-[9px] font-medium text-cream">
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
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="py-3 text-sm uppercase tracking-widest2 text-ink border-b border-line last:border-0"
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
