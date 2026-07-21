import { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { Search, ShoppingBag, Menu, X } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
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
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setSearchOpen(false)
  }, [location.pathname])

  // Transparent over hero on home top; solid everywhere else
  const solid = scrolled || !isHome || mobileOpen

  const submitSearch = (e) => {
    e.preventDefault()
    if (!query.trim()) return
    navigate(`/shop?q=${encodeURIComponent(query.trim())}`)
    setSearchOpen(false)
    setQuery("")
  }

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        solid
          ? "bg-ivory/95 backdrop-blur-md border-b border-sand/70"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav className="max-w-8xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left: mobile menu + desktop nav */}
          <div className="flex items-center gap-6 flex-1">
            <button
              type="button"
              className="md:hidden -ml-1 p-1"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Open menu"
            >
              {mobileOpen ? (
                <X className={cn("w-5 h-5", solid ? "text-ink" : "text-ivory")} />
              ) : (
                <Menu className={cn("w-5 h-5", solid ? "text-ink" : "text-ivory")} />
              )}
            </button>
            <ul className="hidden md:flex items-center gap-8">
              {NAV_LINKS.slice(0, 2).map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className={cn(
                      "text-[11px] uppercase tracking-widest3 font-medium transition-colors duration-300 hover:text-gold",
                      solid ? "text-ink" : "text-ivory"
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
            className="flex-1 flex justify-center"
            aria-label="Velmora home"
          >
            <span
              className={cn(
                "font-serif text-2xl md:text-3xl tracking-[0.25em] font-medium transition-colors duration-500",
                solid ? "text-ink" : "text-ivory"
              )}
            >
              VELMORA
            </span>
          </Link>

          {/* Right: nav + icons */}
          <div className="flex items-center justify-end gap-6 flex-1">
            <ul className="hidden md:flex items-center gap-8">
              {NAV_LINKS.slice(2).map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className={cn(
                      "text-[11px] uppercase tracking-widest3 font-medium transition-colors duration-300 hover:text-gold",
                      solid ? "text-ink" : "text-ivory"
                    )}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => setSearchOpen((v) => !v)}
              aria-label="Search"
              className="p-1 transition-colors duration-300 hover:text-gold"
            >
              <Search className={cn("w-[18px] h-[18px]", solid ? "text-ink" : "text-ivory")} />
            </button>
            <button
              type="button"
              onClick={openCart}
              aria-label="Open cart"
              className="relative p-1 transition-colors duration-300 hover:text-gold"
            >
              <ShoppingBag className={cn("w-[18px] h-[18px]", solid ? "text-ink" : "text-ivory")} />
              {count > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-gold text-ink text-[10px] font-semibold rounded-full w-4 h-4 flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="pb-4 animate-fade-in">
            <form onSubmit={submitSearch} className="flex items-center gap-3 border-b border-sand pb-2">
              <Search className="w-4 h-4 text-stone" />
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search earrings, necklaces, huggies…"
                className="flex-1 bg-transparent text-sm text-ink placeholder:text-stone-light outline-none"
              />
              <button type="submit" className="text-[11px] uppercase tracking-widest3 text-gold hover:text-gold-deep">
                Search
              </button>
            </form>
          </div>
        )}
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-ivory border-t border-sand animate-fade-in">
          <ul className="px-5 py-4 flex flex-col">
            {NAV_LINKS.map((l) => (
              <li key={l.label} className="border-b border-sand/60 last:border-0">
                <Link
                  to={l.to}
                  className="block py-3 text-sm uppercase tracking-widest3 text-ink hover:text-gold"
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
