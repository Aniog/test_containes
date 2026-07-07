import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Search, ShoppingBag, Menu, X } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { cn } from "@/lib/utils"

const LINKS = [
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

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  // Transparent only over the homepage hero; solid elsewhere.
  const isHome = location.pathname === "/"
  const transparent = isHome && !scrolled && !mobileOpen

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-500",
        transparent
          ? "bg-transparent"
          : "bg-cream/95 backdrop-blur-md border-b border-ink/10"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10 h-16 md:h-20">
        {/* Left: mobile menu + logo */}
        <div className="flex items-center gap-4 flex-1">
          <button
            type="button"
            className="md:hidden text-ink"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Open menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <Link
            to="/"
            className={cn(
              "font-serif text-2xl md:text-3xl tracking-[0.3em] transition-colors duration-300",
              transparent ? "text-cream" : "text-ink"
            )}
          >
            VELMORA
          </Link>
        </div>

        {/* Center: links */}
        <div className="hidden md:flex items-center gap-10">
          {LINKS.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={cn(
                "text-xs uppercase tracking-[0.18em] transition-colors duration-300 hover:text-gold",
                transparent ? "text-cream" : "text-ink"
              )}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Right: icons */}
        <div className="flex items-center gap-4 md:gap-5 flex-1 justify-end">
          <button
            type="button"
            className={cn(
              "transition-colors duration-300 hover:text-gold",
              transparent ? "text-cream" : "text-ink"
            )}
            aria-label="Search"
          >
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={openCart}
            className={cn(
              "relative transition-colors duration-300 hover:text-gold",
              transparent ? "text-cream" : "text-ink"
            )}
            aria-label="Open cart"
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-ink text-[10px] font-semibold rounded-full w-4 h-4 flex items-center justify-center">
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-ink/10 animate-overlay-in">
          <div className="flex flex-col px-6 py-4">
            {LINKS.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className="py-3 text-sm uppercase tracking-[0.18em] text-ink border-b border-ink/5 last:border-0"
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
