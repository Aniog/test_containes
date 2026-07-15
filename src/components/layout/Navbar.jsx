import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Search, ShoppingBag, Menu, X } from "lucide-react"
import { useCart } from "@/context/CartContext"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, openCart } = useCart()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const isHome = location.pathname === "/"

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled || !isHome
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 -ml-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-8">
            {["Shop", "Collections", "About", "Journal"].map((link) => (
              <Link
                key={link}
                to={link === "Shop" ? "/shop" : "/"}
                className={`text-xs tracking-widest uppercase transition-colors duration-300 ${
                  scrolled || !isHome
                    ? "text-midnight-900 hover:text-gold-600"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link}
              </Link>
            ))}
          </nav>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-xl lg:text-2xl tracking-wider transition-colors duration-300 ${
              scrolled || !isHome ? "text-midnight-900" : "text-white"
            }`}
          >
            VELMORA
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-3 lg:gap-5">
            <button
              aria-label="Search"
              className={`p-1.5 transition-colors duration-300 ${
                scrolled || !isHome
                  ? "text-midnight-900 hover:text-gold-600"
                  : "text-white/90 hover:text-white"
              }`}
            >
              <Search size={18} />
            </button>
            <button
              aria-label="Cart"
              onClick={openCart}
              className={`relative p-1.5 transition-colors duration-300 ${
                scrolled || !isHome
                  ? "text-midnight-900 hover:text-gold-600"
                  : "text-white/90 hover:text-white"
              }`}
            >
              <ShoppingBag size={18} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold-500 text-white text-[10px] font-medium w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-velvet-100">
          <nav className="flex flex-col px-4 py-4 space-y-3">
            {["Shop", "Collections", "About", "Journal"].map((link) => (
              <Link
                key={link}
                to={link === "Shop" ? "/shop" : "/"}
                className="text-sm tracking-widest uppercase text-midnight-900 py-2"
              >
                {link}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}