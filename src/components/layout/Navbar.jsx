import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Search, ShoppingBag, Menu, X } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { label: "Shop", to: "/shop" },
  { label: "Collections", to: "/shop" },
  { label: "About", to: "/about" },
  { label: "Journal", to: "/journal" },
]

export default function Navbar({ onOpenSearch }) {
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

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  // Transparent only over the homepage hero; solid elsewhere.
  const isHome = location.pathname === "/"
  const solid = scrolled || !isHome || mobileOpen

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-luxury",
        solid
          ? "bg-cream/95 backdrop-blur-md border-b border-sand/60 py-3"
          : "bg-transparent py-5"
      )}
    >
      <nav className="max-w-content mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Left: mobile menu + logo */}
        <div className="flex items-center gap-3 flex-1">
          <button
            className="md:hidden text-ink"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Open menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <Link
            to="/"
            className={cn(
              "font-serif text-2xl md:text-3xl tracking-widest2 transition-colors duration-300",
              solid ? "text-ink" : "text-cream"
            )}
          >
            VELMORA
          </Link>
        </div>

        {/* Center: nav links */}
        <div className="hidden md:flex items-center gap-10 flex-1 justify-center">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={cn(
                "text-xs uppercase tracking-widest2 transition-colors duration-300 hover:text-gold",
                solid ? "text-ink" : "text-cream"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: search + cart */}
        <div className="flex items-center gap-4 flex-1 justify-end">
          <button
            onClick={onOpenSearch}
            aria-label="Search"
            className={cn(
              "transition-colors duration-300 hover:text-gold",
              solid ? "text-ink" : "text-cream"
            )}
          >
            <Search size={20} />
          </button>
          <button
            onClick={openCart}
            aria-label="Open cart"
            className={cn(
              "relative transition-colors duration-300 hover:text-gold",
              solid ? "text-ink" : "text-cream"
            )}
          >
            <ShoppingBag size={20} />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-cream text-[10px] font-medium rounded-full w-4 h-4 flex items-center justify-center">
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-sand/60 animate-fade-in">
          <div className="px-6 py-6 flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-sm uppercase tracking-widest2 text-ink hover:text-gold transition-colors"
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
