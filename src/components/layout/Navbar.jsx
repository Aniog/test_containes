import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Search, ShoppingBag, Menu, X } from "lucide-react"
import { useCart } from "../../context/CartContext"
import { cn } from "../../lib/utils"

const navLinks = [
  { label: "Shop", path: "/shop" },
  { label: "Collections", path: "/collections" },
  { label: "About", path: "/about" },
  { label: "Journal", path: "/journal" },
]

export default function Navbar({ onCartOpen }) {
  const { totalItems } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === "/"

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const showBg = scrolled || !isHome

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-400",
          showBg
            ? "bg-cream/95 backdrop-blur-md shadow-[0_1px_0_rgba(42,37,32,0.06)]"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn(
                "lg:hidden p-2 -ml-2",
                showBg || !isHome ? "text-charcoal" : "text-white"
              )}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Left nav links - desktop */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-xs uppercase tracking-[0.12em] font-medium hover:text-warm-gold transition-colors",
                    showBg || !isHome ? "text-charcoal/70" : "text-white/80"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Center logo */}
            <Link
              to="/"
              className={cn(
                "font-serif text-2xl lg:text-3xl tracking-[0.2em] font-semibold",
                showBg || !isHome ? "text-dark-charcoal" : "text-white"
              )}
            >
              VELMORA
            </Link>

            {/* Right nav links - desktop */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.slice(2).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-xs uppercase tracking-[0.12em] font-medium hover:text-warm-gold transition-colors",
                    showBg || !isHome ? "text-charcoal/70" : "text-white/80"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-3 sm:gap-5">
              <button
                className={cn(
                  "p-2 transition-colors",
                  showBg || !isHome ? "text-charcoal/70 hover:text-charcoal" : "text-white/80 hover:text-white"
                )}
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={onCartOpen}
                className={cn(
                  "relative p-2 transition-colors",
                  showBg || !isHome ? "text-charcoal/70 hover:text-charcoal" : "text-white/80 hover:text-white"
                )}
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-warm-gold text-dark-charcoal text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {totalItems > 9 ? "9+" : totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-16 left-0 right-0 bg-cream shadow-xl border-t border-dark-ivory">
            <div className="px-6 py-8 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm uppercase tracking-[0.12em] text-charcoal/80 hover:text-warm-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}