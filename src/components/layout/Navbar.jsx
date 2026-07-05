import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, Search, ShoppingBag, X } from "lucide-react"
import { useCart } from "@/context/CartContext"

export default function Navbar({ onOpenCart }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems } = useCart()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const navLinks = [
    { to: "/shop", label: "Shop" },
    { to: "/shop?category=earrings", label: "Earrings" },
    { to: "/shop?category=necklaces", label: "Necklaces" },
    { to: "/shop?category=huggies", label: "Huggies" },
    { to: "/about", label: "About" },
  ]

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          className="md:hidden rounded-md p-2 text-brand-ink hover:bg-brand-warm"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link to="/" className="font-serif text-xl tracking-widest text-brand-ink">
          VELMORA
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-ink">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`transition-colors hover:text-brand-accent ${
                location.pathname + location.search === link.to ? "text-brand-accent" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="rounded-full p-2 text-brand-ink hover:bg-brand-warm" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button
            className="relative rounded-full p-2 text-brand-ink hover:bg-brand-warm"
            onClick={onOpenCart}
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -right-0.5 -top-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-brand-accent text-[10px] font-bold text-white">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-brand-line bg-white/95 backdrop-blur-md">
          <nav className="flex flex-col px-4 py-4 gap-3 text-sm font-medium text-brand-ink">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="py-2 border-b border-brand-line last:border-0"
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
