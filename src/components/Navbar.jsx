import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Search, ShoppingBag, Menu, X } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { cn } from "@/lib/utils"

const links = [
  { label: "Shop", to: "/shop" },
  { label: "Collections", to: "/shop" },
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
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        solid
          ? "bg-cream/95 backdrop-blur-sm border-b border-line"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav className="max-w-8xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left: mobile menu + logo on mobile */}
          <div className="flex items-center gap-4 flex-1">
            <button
              type="button"
              className="md:hidden -ml-1 p-1"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Open menu"
            >
              {mobileOpen ? (
                <X className={cn("w-5 h-5", solid ? "text-ink" : "text-cream")} />
              ) : (
                <Menu className={cn("w-5 h-5", solid ? "text-ink" : "text-cream")} />
              )}
            </button>

            {/* Center links — desktop */}
            <div className="hidden md:flex items-center gap-8">
              {links.slice(0, 2).map((l) => (
                <NavItem key={l.label} {...l} solid={solid} />
              ))}
            </div>
          </div>

          {/* Center: logo */}
          <Link
            to="/"
            className="flex-1 flex justify-center"
            aria-label="Velmora home"
          >
            <span
              className={cn(
                "font-serif text-2xl md:text-3xl tracking-[0.3em] transition-colors duration-300",
                solid ? "text-espresso" : "text-cream"
              )}
            >
              VELMORA
            </span>
          </Link>

          {/* Right: links + search + cart */}
          <div className="flex-1 flex items-center justify-end gap-6">
            <div className="hidden md:flex items-center gap-8">
              {links.slice(2).map((l) => (
                <NavItem key={l.label} {...l} solid={solid} />
              ))}
            </div>
            <button
              type="button"
              aria-label="Search"
              className={cn("p-1 transition-colors", solid ? "text-ink hover:text-gold" : "text-cream hover:text-gold-soft")}
            >
              <Search className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label={`Cart, ${count} items`}
              onClick={openCart}
              className={cn("relative p-1 transition-colors", solid ? "text-ink hover:text-gold" : "text-cream hover:text-gold-soft")}
            >
              <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
              {count > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-gold text-cream text-[10px] font-medium min-w-[16px] h-4 px-1 rounded-full flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-line">
          <div className="px-5 py-6 flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.label}
                to={l.to}
                className="py-3 text-ink text-sm uppercase tracking-wide2 border-b border-line/60"
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

function NavItem({ label, to, solid }) {
  return (
    <NavLink
      to={to}
      className={cn(
        "text-xs uppercase tracking-wide2 transition-colors duration-300 py-1 border-b border-transparent hover:border-gold",
        solid ? "text-ink hover:text-gold" : "text-cream/90 hover:text-cream"
      )}
    >
      {label}
    </NavLink>
  )
}
