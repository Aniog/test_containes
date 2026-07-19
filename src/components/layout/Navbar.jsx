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
  const { count, openCart } = useCart()
  const { pathname } = useLocation()
  const isHome = pathname === "/"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // On non-home pages, always treat as solid.
  const solid = scrolled || !isHome || mobileOpen

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid
          ? "bg-cream/95 backdrop-blur-sm border-b border-ink/10"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 md:py-5">
        {/* Left: mobile menu + logo */}
        <div className="flex items-center gap-3 md:flex-1">
          <button
            type="button"
            className="md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className={cn("h-5 w-5", solid ? "text-ink" : "text-cream")} strokeWidth={1.5} />
            ) : (
              <Menu className={cn("h-5 w-5", solid ? "text-ink" : "text-cream")} strokeWidth={1.5} />
            )}
          </button>
          <Link
            to="/"
            className={cn(
              "font-serif text-2xl tracking-[0.3em] transition-colors md:text-[26px]",
              solid ? "text-ink" : "text-cream"
            )}
          >
            VELMORA
          </Link>
        </div>

        {/* Center links */}
        <div className="hidden flex-1 items-center justify-center gap-9 md:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className={cn(
                "text-[11px] uppercase tracking-[0.22em] transition-colors duration-300",
                solid ? "text-ink hover:text-gold" : "text-cream/90 hover:text-cream"
              )}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right: search + cart */}
        <div className="flex flex-1 items-center justify-end gap-5">
          <button
            type="button"
            aria-label="Search"
            className={cn("transition-colors", solid ? "text-ink hover:text-gold" : "text-cream hover:text-champagne")}
          >
            <Search className="h-[18px] w-[18px]" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={openCart}
            aria-label="Open cart"
            className={cn("relative transition-colors", solid ? "text-ink hover:text-gold" : "text-cream hover:text-champagne")}
          >
            <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.5} />
            {count > 0 && (
              <span
                className={cn(
                  "absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-[9px] font-medium",
                  solid ? "bg-gold text-cream" : "bg-cream text-ink"
                )}
              >
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
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-xs uppercase tracking-[0.22em] text-ink"
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
