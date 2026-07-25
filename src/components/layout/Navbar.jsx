import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Heart, Menu, Search, ShoppingBag, X } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { cn } from "@/lib/utils"
import { products, formatPrice } from "@/data/products"

const navLinks = [
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
]

function SearchOverlay({ open, onClose }) {
  const [query, setQuery] = useState("")
  const results = query.trim()
    ? products.filter((p) =>
        `${p.name} ${p.tagline} ${p.category}`.toLowerCase().includes(query.trim().toLowerCase())
      )
    : []

  useEffect(() => {
    if (!open) setQuery("")
  }, [open])

  if (!open) return null
  return (
    <div className="fixed inset-0 z-[70]">
      <button
        aria-label="Close search"
        onClick={onClose}
        className="absolute inset-0 bg-noir/60 backdrop-blur-sm"
      />
      <div className="relative mx-auto mt-24 w-[calc(100%-2rem)] max-w-xl bg-ivory shadow-soft">
        <div className="flex items-center gap-3 border-b border-hairline px-5">
          <Search className="h-4 w-4 text-muted" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search earrings, necklaces, huggies…"
            className="w-full bg-transparent py-4 text-sm tracking-wide text-noir placeholder:text-muted focus:outline-none"
          />
          <button onClick={onClose} aria-label="Close search" className="text-muted transition-colors hover:text-noir">
            <X className="h-4 w-4" />
          </button>
        </div>
        {query.trim() && (
          <div className="max-h-80 overflow-y-auto px-2 py-2 thin-scroll">
            {results.length === 0 && (
              <p className="px-4 py-6 text-center text-xs uppercase tracking-[0.2em] text-muted">
                No pieces found
              </p>
            )}
            {results.map((p) => (
              <Link
                key={p.id}
                to={`/product/${p.id}`}
                onClick={onClose}
                className="flex items-center justify-between gap-4 px-4 py-3 transition-colors hover:bg-cream"
              >
                <span>
                  <span className="block font-serif text-sm uppercase tracking-[0.14em] text-noir">
                    {p.name}
                  </span>
                  <span className="block text-xs text-muted">{p.tagline}</span>
                </span>
                <span className="text-sm text-gold-deep">{formatPrice(p.price)}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { count, openCart } = useCart()
  const location = useLocation()
  const isHome = location.pathname === "/"
  const transparent = isHome && !scrolled && !menuOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setSearchOpen(false)
  }, [location.pathname])

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-luxe",
          transparent
            ? "border-b border-transparent bg-transparent"
            : "border-b border-hairline bg-ivory/95 backdrop-blur-md"
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-8">
          <div className="flex flex-1 items-center">
            <button
              className={cn(
                "p-2 transition-colors md:hidden",
                transparent ? "text-ivory" : "text-noir"
              )}
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
            <Link
              to="/"
              className={cn(
                "font-serif text-xl font-medium uppercase tracking-[0.3em] transition-colors md:text-2xl",
                transparent ? "text-ivory" : "text-noir"
              )}
            >
              Velmora
            </Link>
          </div>

          <nav className="hidden items-center gap-9 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "text-[11px] font-medium uppercase tracking-[0.22em] transition-colors",
                    transparent
                      ? isActive
                        ? "text-gold-light"
                        : "text-ivory/85 hover:text-gold-light"
                      : isActive
                        ? "text-gold-deep"
                        : "text-noir/80 hover:text-gold-deep"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex flex-1 items-center justify-end gap-1 md:gap-3">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className={cn(
                "p-2 transition-colors",
                transparent ? "text-ivory hover:text-gold-light" : "text-noir hover:text-gold-deep"
              )}
            >
              <Search className="h-[18px] w-[18px]" />
            </button>
            <button
              onClick={openCart}
              aria-label="Open cart"
              className={cn(
                "relative p-2 transition-colors",
                transparent ? "text-ivory hover:text-gold-light" : "text-noir hover:text-gold-deep"
              )}
            >
              <ShoppingBag className="h-[18px] w-[18px]" />
              {count > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[9px] font-semibold text-noir">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[60] transition-opacity duration-300 md:hidden",
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <button
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
          className="absolute inset-0 bg-noir/60"
        />
        <div
          className={cn(
            "absolute left-0 top-0 flex h-full w-72 flex-col bg-ivory shadow-drawer transition-transform duration-500 ease-luxe",
            menuOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between border-b border-hairline px-6 py-5">
            <span className="font-serif text-lg uppercase tracking-[0.3em] text-noir">Velmora</span>
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="text-muted hover:text-noir">
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col px-6 py-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "border-b border-hairline py-4 text-xs font-medium uppercase tracking-[0.25em] transition-colors",
                    isActive ? "text-gold-deep" : "text-noir hover:text-gold-deep"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <p className="mt-auto px-6 pb-8 text-[10px] uppercase tracking-[0.25em] text-muted">
            Demi-fine jewelry, crafted to be treasured
          </p>
        </div>
      </div>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
