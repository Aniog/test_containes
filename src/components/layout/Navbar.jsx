import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Search, ShoppingBag, Menu, X } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { cn } from "@/lib/utils"

const LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
]

export default function Navbar() {
  const { count, openCart } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
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

  const onHero = location.pathname === "/"
  const solid = scrolled || !onHero || mobileOpen

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid
          ? "bg-cream/95 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10 h-16 md:h-20">
        {/* Left: mobile menu + logo */}
        <div className="flex items-center gap-3 flex-1">
          <button
            type="button"
            className="md:hidden text-espresso"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Open menu"
          >
            {mobileOpen ? <X width={20} height={20} /> : <Menu width={20} height={20} />}
          </button>
          <Link
            to="/"
            className={cn(
              "font-serif text-2xl md:text-3xl tracking-widest2 transition-colors",
              solid ? "text-espresso" : "text-cream",
            )}
          >
            VELMORA
          </Link>
        </div>

        {/* Center links */}
        <div className="hidden md:flex items-center gap-10">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  "text-[11px] uppercase tracking-widest2 transition-colors",
                  solid ? "text-espresso-700 hover:text-gold" : "text-cream/90 hover:text-white",
                  isActive && (solid ? "text-gold" : "text-white"),
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* Right: search + cart */}
        <div className="flex items-center justify-end gap-4 flex-1">
          <button
            type="button"
            className={cn("transition-colors", solid ? "text-espresso hover:text-gold" : "text-cream hover:text-white")}
            aria-label="Search"
          >
            <Search width={19} height={19} />
          </button>
          <button
            type="button"
            onClick={openCart}
            className={cn("relative transition-colors", solid ? "text-espresso hover:text-gold" : "text-cream hover:text-white")}
            aria-label="Open cart"
          >
            <ShoppingBag width={19} height={19} />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 bg-gold text-espresso text-[10px] font-medium rounded-full w-4 h-4 flex items-center justify-center">
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-500 bg-cream border-t border-line",
          mobileOpen ? "max-h-96" : "max-h-0",
        )}
      >
        <div className="flex flex-col px-6 py-4">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className="py-3 text-sm uppercase tracking-widest2 text-espresso-700 border-b border-line last:border-0"
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}
