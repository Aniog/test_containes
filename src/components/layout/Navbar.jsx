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
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  // Transparent over hero on home top; solid elsewhere.
  const solid = scrolled || !isHome || mobileOpen

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        solid
          ? "bg-ivory/95 backdrop-blur-md border-b border-sand text-espresso"
          : "bg-transparent text-ivory border-b border-transparent"
      )}
    >
      <nav className="max-w-content mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left: mobile menu + logo */}
          <div className="flex items-center gap-4 flex-1">
            <button
              className="md:hidden -ml-1"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Open menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <Link to="/" className="font-serif text-2xl md:text-3xl tracking-[0.3em] leading-none">
              VELMORA
            </Link>
          </div>

          {/* Center links */}
          <div className="hidden md:flex items-center gap-10 flex-1 justify-center">
            {links.map((l) => (
              <NavLink
                key={l.label}
                to={l.to}
                className="text-[11px] uppercase tracking-[0.25em] font-medium hover:text-gold transition-colors duration-300"
              >
                {l.label}
              </NavLink>
            ))}
          </div>

          {/* Right: icons */}
          <div className="flex items-center justify-end gap-5 flex-1">
            <button aria-label="Search" className="hover:text-gold transition-colors duration-300">
              <Search className="w-[18px] h-[18px]" strokeWidth={1.5} />
            </button>
            <button
              aria-label="Open cart"
              onClick={openCart}
              className="relative hover:text-gold transition-colors duration-300"
            >
              <ShoppingBag className="w-[18px] h-[18px]" strokeWidth={1.5} />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-espresso text-[10px] font-semibold rounded-full w-4 h-4 flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-ivory border-t border-sand">
          <div className="px-6 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <NavLink
                key={l.label}
                to={l.to}
                className="text-sm uppercase tracking-[0.25em] font-medium text-espresso hover:text-gold"
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
