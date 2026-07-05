import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Menu, Search, ShoppingBag, X } from "lucide-react"
import { useCart } from "@/hooks/useCart"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { label: "Shop", to: "/shop" },
  { label: "Collections", to: "/shop?category=necklaces" },
  { label: "About", to: "/about" },
  { label: "Journal", to: "/journal" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { count, openCart } = useCart()
  const location = useLocation()

  // Force solid nav on non-home pages where there's no transparent hero
  const isHome = location.pathname === "/"
  const useSolidByDefault = !isHome

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname, location.search])

  // Decide if nav should appear as the transparent (over dark hero) variant
  const isTransparent = isHome && !scrolled && !useSolidByDefault
  const solid = !isTransparent

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-elegant",
          solid
            ? "bg-cream-elevated/95 backdrop-blur-md border-b border-ink/8"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="container-velmora flex h-16 md:h-20 items-center justify-between">
          {/* Left: Logo */}
          <Link to="/" className="group flex items-center" aria-label="Velmora home">
            <span
              className={cn(
                "font-serif text-xl md:text-2xl font-medium tracking-[0.32em] transition-colors duration-300",
                solid ? "text-ink" : "text-cream"
              )}
            >
              VELMORA
            </span>
          </Link>

          {/* Center: Nav links (desktop) */}
          <nav className="hidden lg:flex items-center gap-10" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "text-[11px] font-sans uppercase tracking-[0.25em] transition-colors duration-300 relative",
                    solid
                      ? isActive
                        ? "text-gold"
                        : "text-ink hover:text-gold"
                      : isActive
                      ? "text-gold"
                      : "text-cream hover:text-gold"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right: Search + Cart */}
          <div className="flex items-center gap-3 md:gap-5">
            <button
              type="button"
              aria-label="Search"
              className={cn(
                "p-1.5 transition-colors duration-300",
                solid ? "text-ink hover:text-gold" : "text-cream hover:text-gold"
              )}
            >
              <Search className="h-[18px] w-[18px]" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label={`Cart, ${count} item${count === 1 ? "" : "s"}`}
              onClick={openCart}
              className={cn(
                "relative p-1.5 transition-colors duration-300",
                solid ? "text-ink hover:text-gold" : "text-cream hover:text-gold"
              )}
            >
              <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.5} />
              {count > 0 && (
                <span
                  className={cn(
                    "absolute -top-0.5 -right-0.5 h-4 min-w-4 px-1 rounded-full text-[10px] font-medium flex items-center justify-center",
                    solid ? "bg-ink text-cream" : "bg-cream text-ink"
                  )}
                  aria-hidden="true"
                >
                  {count}
                </span>
              )}
            </button>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className={cn(
                "lg:hidden p-1.5 transition-colors duration-300",
                solid ? "text-ink hover:text-gold" : "text-cream hover:text-gold"
              )}
            >
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[60] lg:hidden transition-opacity duration-500 ease-elegant",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute inset-y-0 right-0 w-[85%] max-w-sm bg-ink text-cream transition-transform duration-500 ease-elegant flex flex-col",
            mobileOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between h-16 px-6 border-b border-gold/15">
            <span className="font-serif text-lg tracking-[0.32em]">VELMORA</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="p-1.5 text-cream hover:text-gold"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex-1 px-6 py-10 flex flex-col gap-8" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "font-serif text-2xl font-light tracking-wide transition-colors",
                    isActive ? "text-gold" : "text-cream hover:text-gold"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="px-6 py-6 border-t border-gold/15 text-[11px] uppercase tracking-[0.25em] text-muted-dark">
            Free worldwide shipping · 30-day returns
          </div>
        </div>
      </div>
    </>
  )
}
