import React, { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
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
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState("")
  const { count, openCart } = useCart()
  const location = useLocation()
  const navigate = useNavigate()

  const isHome = location.pathname === "/"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setSearchOpen(false)
  }, [location.pathname])

  const solid = scrolled || !isHome || mobileOpen

  const onSearchSubmit = (e) => {
    e.preventDefault()
    if (!query.trim()) return
    navigate(`/shop?q=${encodeURIComponent(query.trim())}`)
    setSearchOpen(false)
    setQuery("")
  }

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-editorial",
        solid
          ? "bg-cream/95 backdrop-blur-md border-b border-ink/10"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-editorial mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left: mobile menu + desktop links */}
          <div className="flex items-center gap-8 flex-1">
            <button
              className="md:hidden text-ink"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <ul className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className={cn(
                      "text-xs uppercase tracking-widest2 transition-colors duration-300",
                      solid
                        ? "text-ink hover:text-gold"
                        : "text-cream hover:text-white"
                    )}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Center: logo */}
          <Link
            to="/"
            className={cn(
              "font-serif text-2xl md:text-3xl tracking-[0.3em] transition-colors duration-300",
              solid ? "text-ink" : "text-cream"
            )}
          >
            VELMORA
          </Link>

          {/* Right: icons */}
          <div className="flex items-center justify-end gap-5 flex-1">
            <button
              className={cn(
                "transition-colors duration-300",
                solid ? "text-ink hover:text-gold" : "text-cream hover:text-white"
              )}
              onClick={() => setSearchOpen((v) => !v)}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className={cn(
                "relative transition-colors duration-300",
                solid ? "text-ink hover:text-gold" : "text-cream hover:text-white"
              )}
              onClick={openCart}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-cream text-[10px] font-medium rounded-full w-4 h-4 flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="pb-4 fade-up">
            <form onSubmit={onSearchSubmit} className="flex items-center gap-3 border-b border-ink/20 pb-2">
              <Search className="w-4 h-4 text-stone" />
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search jewelry…"
                className="flex-1 bg-transparent text-sm text-ink placeholder:text-stone-light outline-none"
              />
            </form>
          </div>
        )}
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-ink/10 fade-up">
          <ul className="px-6 py-4 space-y-4">
            {links.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  className="text-sm uppercase tracking-widest2 text-ink hover:text-gold"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
