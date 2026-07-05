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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  // Transparent over the homepage hero only; solid everywhere else.
  const isHome = location.pathname === "/"
  const transparent = isHome && !scrolled && !mobileOpen

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        transparent
          ? "bg-transparent text-cream"
          : "bg-cream/95 backdrop-blur text-ink border-b border-line/70 shadow-soft"
      )}
    >
      <nav className="mx-auto max-w-content px-5 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left: mobile menu + logo */}
          <div className="flex items-center gap-3 flex-1">
            <button
              type="button"
              className="md:hidden -ml-1 p-1"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Open menu"
            >
              {mobileOpen ? <X width={22} /> : <Menu width={22} />}
            </button>
            <Link
              to="/"
              className="font-serif text-2xl md:text-3xl tracking-[0.3em] font-semibold"
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
                className="text-[11px] uppercase tracking-widest2 hover:text-gold transition-colors"
              >
                {l.label}
              </NavLink>
            ))}
          </div>

          {/* Right: icons */}
          <div className="flex items-center justify-end gap-4 md:gap-5 flex-1">
            <button
              type="button"
              aria-label="Search"
              className="hover:text-gold transition-colors"
            >
              <Search width={19} />
            </button>
            <button
              type="button"
              aria-label="Open cart"
              onClick={openCart}
              className="relative hover:text-gold transition-colors"
            >
              <ShoppingBag width={19} />
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
        <div className="md:hidden bg-cream text-ink border-t border-line">
          <div className="px-5 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.label}
                to={l.to}
                className="py-3 text-sm uppercase tracking-widest2 border-b border-line/60 last:border-0"
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
