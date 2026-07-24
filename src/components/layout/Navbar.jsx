import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Search, ShoppingBag, Menu, X } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { cn } from "@/lib/utils"

const LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
]

export default function Navbar() {
  const { count, openCart } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  // Transparent over the homepage hero only; solid everywhere else.
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
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        solid
          ? "bg-ivory/95 backdrop-blur-md border-b border-sand/70 shadow-soft"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav className="max-w-8xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left: mobile menu + logo */}
          <div className="flex items-center gap-3 flex-1">
            <button
              type="button"
              aria-label="Open menu"
              className="md:hidden -ml-1 p-1 text-ink"
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <Link
              to="/"
              className={cn(
                "font-serif text-2xl md:text-3xl tracking-widest2 font-semibold transition-colors",
                solid ? "text-ink" : "text-white"
              )}
            >
              VELMORA
            </Link>
          </div>

          {/* Center: links */}
          <div className="hidden md:flex items-center gap-9">
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={cn(
                  "text-[11px] uppercase tracking-widest2 font-medium transition-colors relative py-1",
                  "after:absolute after:left-0 after:bottom-0 after:h-px after:bg-current after:transition-all after:duration-300 after:w-0 hover:after:w-full",
                  solid ? "text-ink-soft hover:text-ink" : "text-white/85 hover:text-white"
                )}
              >
                {l.label}
              </NavLink>
            ))}
          </div>

          {/* Right: icons */}
          <div className="flex items-center justify-end gap-4 flex-1">
            <button
              type="button"
              aria-label="Search"
              className={cn(
                "p-1 transition-colors",
                solid ? "text-ink hover:text-gold" : "text-white hover:text-gold-light"
              )}
            >
              <Search className="w-[18px] h-[18px]" />
            </button>
            <button
              type="button"
              aria-label="Open cart"
              onClick={openCart}
              className={cn(
                "relative p-1 transition-colors",
                solid ? "text-ink hover:text-gold" : "text-white hover:text-gold-light"
              )}
            >
              <ShoppingBag className="w-[18px] h-[18px]" />
              {count > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-gold text-white text-[10px] font-semibold min-w-[16px] h-4 px-1 rounded-full flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-400 bg-ivory border-t border-sand/60",
          mobileOpen ? "max-h-80" : "max-h-0"
        )}
      >
        <div className="px-5 py-4 flex flex-col gap-1">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className="py-3 text-sm uppercase tracking-widest2 text-ink-soft border-b border-sand/50 last:border-0"
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}
