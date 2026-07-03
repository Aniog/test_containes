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

  // Transparent only over the homepage hero; solid everywhere else.
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

  const solid = scrolled || !isHome || mobileOpen

  const onSearchSubmit = (e) => {
    e.preventDefault()
    if (!query.trim()) return
    setSearchOpen(false)
    navigate(`/shop?q=${encodeURIComponent(query.trim())}`)
    setQuery("")
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid
          ? "bg-cream/95 backdrop-blur-md border-b border-sand/70"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-8xl items-center justify-between px-5 md:px-8 h-16 md:h-20">
        {/* Left: mobile menu + logo */}
        <div className="flex items-center gap-3 flex-1">
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMobileOpen((v) => !v)}
            className={cn(
              "md:hidden p-1 -ml-1 transition-colors",
              solid ? "text-ink" : "text-cream"
            )}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <Link
            to="/"
            className={cn(
              "font-serif text-2xl md:text-3xl tracking-[0.3em] leading-none transition-colors",
              solid ? "text-ink" : "text-cream"
            )}
          >
            VELMORA
          </Link>
        </div>

        {/* Center: nav links */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={cn(
                "text-[11px] uppercase tracking-[0.25em] font-medium transition-colors hover:opacity-60",
                solid ? "text-ink" : "text-cream"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: search + cart */}
        <div className="flex items-center justify-end gap-4 md:gap-5 flex-1">
          <button
            type="button"
            aria-label="Search"
            onClick={() => setSearchOpen((v) => !v)}
            className={cn(
              "transition-colors hover:opacity-60",
              solid ? "text-ink" : "text-cream"
            )}
          >
            <Search className="w-[18px] h-[18px]" />
          </button>

          <button
            type="button"
            aria-label="Open cart"
            onClick={openCart}
            className={cn(
              "relative transition-colors hover:opacity-60",
              solid ? "text-ink" : "text-cream"
            )}
          >
            <ShoppingBag className="w-[18px] h-[18px]" />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-cream text-[10px] font-semibold rounded-full w-4 h-4 flex items-center justify-center">
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Search bar */}
      {searchOpen && (
        <div className="border-t border-sand/70 bg-cream">
          <form
            onSubmit={onSearchSubmit}
            className="mx-auto max-w-8xl px-5 md:px-8 py-4 flex items-center gap-3"
          >
            <Search className="w-4 h-4 text-stone" />
            <input
              autoFocus
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search earrings, necklaces, huggies…"
              className="flex-1 bg-transparent text-sm text-ink placeholder:text-stone-soft outline-none"
            />
            <button
              type="submit"
              className="text-[11px] uppercase tracking-[0.25em] text-ink hover:text-gold transition-colors"
            >
              Search
            </button>
          </form>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-sand/70 bg-cream">
          <div className="px-5 py-6 flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-sm uppercase tracking-[0.25em] text-ink"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
