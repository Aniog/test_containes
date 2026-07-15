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

  // Transparent over hero only on homepage top; solid elsewhere
  const isHome = location.pathname === "/"
  const transparent = isHome && !scrolled && !mobileOpen

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
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        transparent
          ? "bg-transparent"
          : "bg-cream/95 backdrop-blur-sm border-b border-sand"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        {/* Left: mobile menu + logo */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="md:hidden"
            aria-label="Open menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <X size={22} className={transparent ? "text-cream" : "text-charcoal"} />
            ) : (
              <Menu size={22} className={transparent ? "text-cream" : "text-charcoal"} />
            )}
          </button>
          <Link
            to="/"
            className={cn(
              "font-serif text-2xl tracking-widest2 md:text-3xl",
              transparent ? "text-cream" : "text-charcoal"
            )}
          >
            VELMORA
          </Link>
        </div>

        {/* Center: nav links */}
        <nav className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={cn(
                "text-[11px] uppercase tracking-widest2 transition-colors",
                transparent
                  ? "text-cream/90 hover:text-cream"
                  : "text-charcoal/80 hover:text-charcoal"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: icons */}
        <div className="flex items-center gap-5">
          <button
            type="button"
            aria-label="Search"
            onClick={() => setSearchOpen((v) => !v)}
            className={transparent ? "text-cream" : "text-charcoal"}
          >
            <Search size={20} />
          </button>
          <button
            type="button"
            aria-label="Cart"
            onClick={openCart}
            className={cn(
              "relative",
              transparent ? "text-cream" : "text-charcoal"
            )}
          >
            <ShoppingBag size={20} />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-medium text-cream">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Search bar */}
      {searchOpen && (
        <div className="border-t border-sand bg-cream px-6 py-4 md:px-10">
          <form onSubmit={submitSearch} className="mx-auto flex max-w-3xl items-center gap-3">
            <Search size={18} className="text-stone" />
            <input
              autoFocus
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for earrings, necklaces…"
              className="flex-1 bg-transparent py-2 text-sm text-charcoal placeholder:text-stone focus:outline-none"
            />
            <button
              type="submit"
              className="text-[11px] uppercase tracking-widest2 text-gold hover:text-gold-deep"
            >
              Search
            </button>
          </form>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="border-t border-sand bg-cream px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-sm uppercase tracking-widest2 text-charcoal"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
