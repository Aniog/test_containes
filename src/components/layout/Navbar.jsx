import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
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
  const { count, setIsOpen } = useCart()
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

  // Transparent over hero on home top; solid otherwise.
  const transparent = isHome && !scrolled && !mobileOpen

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        transparent
          ? "bg-transparent"
          : "bg-cream/95 backdrop-blur-sm border-b border-line shadow-sm"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left: mobile menu + logo */}
          <div className="flex items-center gap-4 flex-1">
            <button
              className="md:hidden text-ink"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Open menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <Link
              to="/"
              className={cn(
                "font-serif text-2xl md:text-3xl tracking-[0.25em] transition-colors",
                transparent ? "text-cream" : "text-ink"
              )}
            >
              VELMORA
            </Link>
          </div>

          {/* Center links */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className={cn(
                  "text-xs uppercase tracking-[0.2em] transition-colors hover:text-gold",
                  transparent ? "text-cream/90" : "text-ink"
                )}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Right: search + cart */}
          <div className="flex items-center gap-5 flex-1 justify-end">
            <button
              className={cn(
                "transition-colors hover:text-gold hidden sm:block",
                transparent ? "text-cream/90" : "text-ink"
              )}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className={cn(
                "relative transition-colors hover:text-gold",
                transparent ? "text-cream/90" : "text-ink"
              )}
              onClick={() => setIsOpen(true)}
              aria-label="Open cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-cream text-[10px] font-medium rounded-full w-4 h-4 flex items-center justify-center">
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
          <div className="px-6 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="text-sm uppercase tracking-[0.2em] text-ink hover:text-gold"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
