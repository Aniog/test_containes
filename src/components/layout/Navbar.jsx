import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Search, ShoppingBag, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useCart } from "@/context/CartContext"

const NAV_LINKS = [
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

  // Transparent only over the homepage hero; solid elsewhere.
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
        "fixed top-0 inset-x-0 z-50 transition-colors duration-500",
        solid
          ? "bg-cream/95 backdrop-blur-sm border-b border-line"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        {/* Left: mobile menu + logo */}
        <div className="flex items-center gap-4">
          <button
            className="md:hidden text-ink"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <Link
            to="/"
            className={cn(
              "font-serif text-2xl md:text-3xl tracking-[0.3em] transition-colors duration-300",
              solid ? "text-ink" : "text-cream"
            )}
          >
            VELMORA
          </Link>
        </div>

        {/* Center: nav links */}
        <ul className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                className={cn(
                  "text-xs uppercase tracking-widest2 transition-colors duration-300 hover:text-champagne",
                  solid ? "text-ink" : "text-cream"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: icons */}
        <div className="flex items-center gap-5">
          <button
            aria-label="Search"
            className={cn(
              "transition-colors duration-300 hover:text-champagne",
              solid ? "text-ink" : "text-cream"
            )}
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            aria-label="Cart"
            onClick={openCart}
            className={cn(
              "relative transition-colors duration-300 hover:text-champagne",
              solid ? "text-ink" : "text-cream"
            )}
          >
            <ShoppingBag className="w-5 h-5" />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-champagne text-cream text-[10px] font-medium rounded-full w-4 h-4 flex items-center justify-center">
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-line">
          <ul className="px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="text-sm uppercase tracking-widest2 text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
