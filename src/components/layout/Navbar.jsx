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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { count, openCart } = useCart()
  const location = useLocation()

  // Transparent only over the homepage hero; solid everywhere else.
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
          ? "bg-cream/95 backdrop-blur-md shadow-[0_1px_0_rgba(26,23,20,0.08)]"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        {/* Left: mobile menu + logo */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="md:hidden"
            aria-label="Open menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <X className={cn("h-5 w-5", solid ? "text-ink" : "text-cream")} />
            ) : (
              <Menu className={cn("h-5 w-5", solid ? "text-ink" : "text-cream")} />
            )}
          </button>
          <Link
            to="/"
            className={cn(
              "font-serif text-2xl tracking-[0.25em] md:text-3xl transition-colors",
              solid ? "text-ink" : "text-cream"
            )}
          >
            VELMORA
          </Link>
        </div>

        {/* Center: nav links */}
        <div className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={cn(
                "text-xs uppercase tracking-[0.18em] transition-colors duration-300 hover:text-champagne",
                solid ? "text-espresso" : "text-cream/90"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: search + cart */}
        <div className="flex items-center gap-4 md:gap-5">
          <button
            type="button"
            aria-label="Search"
            className={cn(
              "transition-colors hover:text-champagne",
              solid ? "text-espresso" : "text-cream"
            )}
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Open cart"
            onClick={openCart}
            className={cn(
              "relative transition-colors hover:text-champagne",
              solid ? "text-espresso" : "text-cream"
            )}
          >
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-champagne px-1 text-[10px] font-medium text-ink">
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-ink/10 bg-cream md:hidden">
          <div className="flex flex-col px-5 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="py-3 text-sm uppercase tracking-[0.18em] text-espresso transition-colors hover:text-champagne"
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
