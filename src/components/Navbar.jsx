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

  // Transparent over hero only on home and not scrolled
  const transparent = isHome && !scrolled && !mobileOpen

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        transparent
          ? "bg-transparent"
          : "bg-ivory/95 backdrop-blur-md border-b border-sand shadow-soft"
      )}
    >
      <nav className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left: mobile menu + logo */}
          <div className="flex items-center gap-3 flex-1">
            <button
              type="button"
              className={cn(
                "md:hidden p-1 -ml-1 transition-colors",
                transparent ? "text-ivory" : "text-ink"
              )}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Open menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
            <Link
              to="/"
              className={cn(
                "font-serif text-2xl md:text-3xl tracking-[0.25em] font-medium transition-colors",
                transparent ? "text-ivory" : "text-ink"
              )}
            >
              VELMORA
            </Link>
          </div>

          {/* Center links */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <NavLink
                key={l.label}
                to={l.to}
                className={cn(
                  "text-[11px] uppercase tracking-widest2 font-medium transition-colors hover:text-gold",
                  transparent ? "text-ivory/90" : "text-ink"
                )}
              >
                {l.label}
              </NavLink>
            ))}
          </div>

          {/* Right: icons */}
          <div className="flex items-center gap-4 md:gap-5 flex-1 justify-end">
            <button
              type="button"
              className={cn(
                "transition-colors hover:text-gold",
                transparent ? "text-ivory" : "text-ink"
              )}
              aria-label="Search"
            >
              <Search size={19} />
            </button>
            <button
              type="button"
              onClick={openCart}
              className={cn(
                "relative transition-colors hover:text-gold",
                transparent ? "text-ivory" : "text-ink"
              )}
              aria-label="Open cart"
            >
              <ShoppingBag size={19} />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-ivory text-[10px] font-semibold rounded-full min-w-[16px] h-4 px-1 flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-ivory border-t border-sand animate-fade">
          <div className="px-5 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <NavLink
                key={l.label}
                to={l.to}
                className="text-sm uppercase tracking-widest2 font-medium text-ink hover:text-gold"
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
