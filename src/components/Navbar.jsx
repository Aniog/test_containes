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

  // Transparent over hero only on homepage top; solid elsewhere.
  const isHome = location.pathname === "/"
  const transparent = isHome && !scrolled && !mobileOpen

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        transparent
          ? "bg-transparent"
          : "bg-ivory/95 backdrop-blur-sm border-b border-sand"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Left: mobile menu + logo on mobile */}
          <div className="flex items-center gap-4 md:gap-0 md:flex-1">
            <button
              type="button"
              className="md:hidden -ml-1"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Open menu"
            >
              {mobileOpen ? (
                <X size={22} className={transparent ? "text-ivory" : "text-espresso"} />
              ) : (
                <Menu size={22} className={transparent ? "text-ivory" : "text-espresso"} />
              )}
            </button>

            {/* Center links (desktop) */}
            <nav className="hidden md:flex items-center gap-8">
              {links.slice(0, 2).map((l) => (
                <NavLink key={l.label} {...l} transparent={transparent} />
              ))}
            </nav>
          </div>

          {/* Center: logo */}
          <Link
            to="/"
            className={cn(
              "font-serif text-2xl md:text-3xl tracking-[0.3em] transition-colors duration-300",
              transparent ? "text-ivory" : "text-espresso"
            )}
          >
            VELMORA
          </Link>

          {/* Right */}
          <div className="flex items-center justify-end gap-5 md:flex-1">
            <nav className="hidden md:flex items-center gap-8 mr-2">
              {links.slice(2).map((l) => (
                <NavLink key={l.label} {...l} transparent={transparent} />
              ))}
            </nav>
            <button
              type="button"
              aria-label="Search"
              className={cn("transition-colors", transparent ? "text-ivory hover:text-champagne" : "text-espresso hover:text-gold-deep")}
            >
              <Search size={19} />
            </button>
            <button
              type="button"
              aria-label="Open cart"
              onClick={openCart}
              className={cn("relative transition-colors", transparent ? "text-ivory hover:text-champagne" : "text-espresso hover:text-gold-deep")}
            >
              <ShoppingBag size={19} />
              {count > 0 && (
                <span className="absolute -right-2 -top-2 bg-gold text-ivory text-[10px] font-medium rounded-full h-4 min-w-4 px-1 flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-ivory border-t border-sand">
          <nav className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="py-3 text-sm uppercase tracking-[0.18em] text-espresso border-b border-sand/60 last:border-0"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

function NavLink({ label, to, transparent }) {
  return (
    <Link
      to={to}
      className={cn(
        "text-[11px] uppercase tracking-[0.2em] font-medium transition-colors duration-300",
        transparent ? "text-ivory/90 hover:text-champagne" : "text-espresso hover:text-gold-deep"
      )}
    >
      {label}
    </Link>
  )
}
