import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Search, ShoppingBag, Menu, X } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { cn } from "@/lib/utils"

const links = [
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { count, openCart } = useCart()
  const location = useLocation()

  // Transparent only over the homepage hero; solid elsewhere.
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
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "bg-cream/95 backdrop-blur-md border-b border-espresso/10"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
        {/* Left: mobile menu + desktop nav */}
        <div className="flex flex-1 items-center gap-8">
          <button
            type="button"
            className="md:hidden -ml-2 p-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Open menu"
          >
            {mobileOpen ? (
              <X size={20} className={solid ? "text-espresso" : "text-cream"} />
            ) : (
              <Menu size={20} className={solid ? "text-espresso" : "text-cream"} />
            )}
          </button>
          <ul className="hidden md:flex items-center gap-8">
            {links.slice(0, 2).map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    cn(
                      "text-xs uppercase tracking-[0.2em] transition-colors",
                      solid ? "text-espresso hover:text-gold" : "text-cream hover:text-champagne",
                      isActive && "text-gold"
                    )
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Center: logo */}
        <Link
          to="/"
          className={cn(
            "font-serif text-2xl md:text-3xl tracking-[0.3em] transition-colors",
            solid ? "text-espresso" : "text-cream"
          )}
        >
          VELMORA
        </Link>

        {/* Right: nav + icons */}
        <div className="flex flex-1 items-center justify-end gap-6">
          <ul className="hidden md:flex items-center gap-8">
            {links.slice(2).map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    cn(
                      "text-xs uppercase tracking-[0.2em] transition-colors",
                      solid ? "text-espresso hover:text-gold" : "text-cream hover:text-champagne",
                      isActive && "text-gold"
                    )
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className={cn("p-1 transition-colors", solid ? "text-espresso hover:text-gold" : "text-cream hover:text-champagne")}
            aria-label="Search"
          >
            <Search size={18} />
          </button>
          <button
            type="button"
            onClick={openCart}
            className={cn("relative p-1 transition-colors", solid ? "text-espresso hover:text-gold" : "text-cream hover:text-champagne")}
            aria-label="Open cart"
          >
            <ShoppingBag size={18} />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-medium text-cream">
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-espresso/10 bg-cream">
          <ul className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className="block py-3 text-sm uppercase tracking-[0.2em] text-espresso"
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
