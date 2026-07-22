import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, Search, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { toggleCart, cartCount } = useCart()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const navLinks = [
    { to: "/shop", label: "Shop" },
    { to: "/shop?category=earrings", label: "Earrings" },
    { to: "/shop?category=necklaces", label: "Necklaces" },
    { to: "/shop?category=huggies", label: "Huggies" },
    { to: "/about", label: "About" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          <button
            className="md:hidden p-2 -ml-2 text-current"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <Link to="/" className="hidden md:block">
            <span
              className={`font-serif text-xl tracking-[0.2em] transition-colors duration-300 ${
                scrolled ? "text-stone-900" : "text-white"
              }`}
            >
              VELMORA
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-xs uppercase tracking-[0.15em] transition-colors duration-300 hover:opacity-70 ${
                  scrolled ? "text-stone-600" : "text-white/90"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              className={`p-2 transition-colors duration-300 ${
                scrolled ? "text-stone-600 hover:text-stone-900" : "text-white/90 hover:text-white"
              }`}
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={toggleCart}
              className={`relative p-2 transition-colors duration-300 ${
                scrolled ? "text-stone-600 hover:text-stone-900" : "text-white/90 hover:text-white"
              }`}
              aria-label="Cart"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-amber-600 text-[10px] font-medium text-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-stone-100">
          <nav className="flex flex-col px-4 py-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm uppercase tracking-[0.15em] text-stone-600 hover:text-stone-900"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
