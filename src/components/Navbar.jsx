import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Search, ShoppingBag, Menu, X } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { cn } from "@/lib/utils"

const navLinks = [
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  // Determine if we're on a page where nav should always be solid (non-homepage)
  const isHome = location.pathname === "/"
  const solid = scrolled || !isHome || mobileOpen

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        solid
          ? "bg-cream-50/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(184,169,148,0.4)]"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left: mobile menu + logo */}
          <div className="flex items-center gap-4 flex-1">
            <button
              type="button"
              className={cn(
                "md:hidden p-1 -ml-1 transition-colors",
                solid ? "text-ink-800" : "text-cream-50"
              )}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Open menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <Link
              to="/"
              className={cn(
                "font-serif text-2xl md:text-3xl tracking-widest2 font-medium transition-colors",
                solid ? "text-ink-900" : "text-cream-50"
              )}
            >
              VELMORA
            </Link>
          </div>

          {/* Center: nav links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={cn(
                  "text-xs uppercase tracking-widest2 font-medium transition-colors hover:text-gold-500",
                  solid ? "text-ink-700" : "text-cream-50/90"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: icons */}
          <div className="flex items-center gap-4 md:gap-5 flex-1 justify-end">
            <button
              type="button"
              className={cn(
                "transition-colors hover:text-gold-500",
                solid ? "text-ink-800" : "text-cream-50"
              )}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={openCart}
              className={cn(
                "relative transition-colors hover:text-gold-500",
                solid ? "text-ink-800" : "text-cream-50"
              )}
              aria-label="Open cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold-500 text-cream-50 text-[10px] font-semibold rounded-full w-4 h-4 flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream-50 border-t border-ink-200/40">
          <div className="px-6 py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-sm uppercase tracking-widest2 font-medium text-ink-800 hover:text-gold-500"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
