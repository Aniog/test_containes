import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Search, ShoppingBag, Menu, X } from "lucide-react"
import { useCart } from "@/context/CartContext"

const navLinks = [
  { name: "Shop", path: "/shop" },
  { name: "Collections", path: "/collections" },
  { name: "About", path: "/about" },
  { name: "Journal", path: "/journal" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, openDrawer } = useCart()
  const location = useLocation()
  const isHome = location.pathname === "/"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const solid = scrolled || !isHome

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          solid
            ? "bg-cream/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 -ml-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Left nav links - desktop */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.slice(0, 3).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-normal tracking-wider uppercase transition-colors duration-300 ${
                    solid ? "text-charcoal/80 hover:text-charcoal" : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Logo */}
            <Link
              to="/"
              className={`text-2xl md:text-3xl font-semibold tracking-[0.2em] uppercase transition-colors duration-500 font-[family-name:var(--font-serif)] ${
                solid ? "text-charcoal" : "text-white"
              }`}
              style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
            >
              VELMORA
            </Link>

            {/* Right icons */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.slice(3).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-normal tracking-wider uppercase transition-colors duration-300 ${
                    solid ? "text-charcoal/80 hover:text-charcoal" : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <button
                className={`transition-colors duration-300 ${
                  solid ? "text-charcoal/80 hover:text-charcoal" : "text-white/90 hover:text-white"
                }`}
                aria-label="Search"
              >
                <Search size={18} />
              </button>
              <button
                className={`relative transition-colors duration-300 ${
                  solid ? "text-charcoal/80 hover:text-charcoal" : "text-white/90 hover:text-white"
                }`}
                onClick={openDrawer}
                aria-label="Shopping bag"
              >
                <ShoppingBag size={18} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gold text-white text-[10px] font-medium w-4 h-4 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile right icons */}
            <div className="flex md:hidden items-center gap-4">
              <button
                className={`transition-colors ${solid ? "text-charcoal" : "text-white"}`}
                onClick={openDrawer}
                aria-label="Shopping bag"
              >
                <ShoppingBag size={18} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gold text-white text-[10px] font-medium w-4 h-4 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-cream border-t border-hairline px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block text-sm font-normal tracking-wider uppercase text-charcoal/80 hover:text-charcoal py-2"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-hairline flex items-center gap-4">
              <button className="text-charcoal/80 hover:text-charcoal flex items-center gap-2 text-sm">
                <Search size={16} />
                Search
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed nav */}
      <div className="h-20 md:h-24" />
    </>
  )
}