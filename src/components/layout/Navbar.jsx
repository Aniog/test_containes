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
    const onScroll = () => setScrolled(window.scrollY > 24)
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
        "fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-smooth",
        transparent
          ? "bg-transparent"
          : "bg-cream/95 backdrop-blur-md border-b border-ink-200/40"
      )}
    >
      <nav className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left: mobile menu + logo */}
          <div className="flex items-center gap-3 flex-1">
            <button
              className="md:hidden text-ink-800"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Open menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
            <Link
              to="/"
              className={cn(
                "font-serif text-2xl md:text-3xl tracking-widest2 transition-colors",
                transparent ? "text-cream" : "text-ink-800"
              )}
            >
              VELMORA
            </Link>
          </div>

          {/* Center links */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className={cn(
                  "text-xs uppercase tracking-widest2 font-medium transition-colors hover:text-gold",
                  transparent ? "text-cream/90" : "text-ink-700"
                )}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Right: icons */}
          <div className="flex items-center gap-4 md:gap-5 flex-1 justify-end">
            <button
              aria-label="Search"
              className={cn(
                "transition-colors hover:text-gold",
                transparent ? "text-cream" : "text-ink-800"
              )}
            >
              <Search size={20} />
            </button>
            <button
              aria-label="Cart"
              onClick={openCart}
              className={cn(
                "relative transition-colors hover:text-gold",
                transparent ? "text-cream" : "text-ink-800"
              )}
            >
              <ShoppingBag size={20} />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-white text-[10px] font-semibold rounded-full w-4 h-4 flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-ink-200/40 animate-fade-in">
          <div className="px-5 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="text-sm uppercase tracking-widest2 text-ink-700 hover:text-gold"
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
