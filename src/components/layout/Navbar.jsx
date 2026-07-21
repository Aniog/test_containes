import React, { useEffect, useState } from "react"
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom"
import { Heart, Menu, Search, ShoppingBag, X } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
]

export default function Navbar() {
  const { count, openCart } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const location = useLocation()
  const navigate = useNavigate()

  const onDarkHero = location.pathname === "/" && !scrolled && !mobileOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setSearchOpen(false)
  }, [location.pathname, location.search])

  const submitSearch = (e) => {
    e.preventDefault()
    const q = searchTerm.trim()
    if (q) {
      navigate(`/search?q=${encodeURIComponent(q)}`)
      setSearchOpen(false)
    }
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500",
        scrolled || mobileOpen
          ? "border-b border-line bg-background/95 shadow-[0_8px_30px_-18px_rgba(33,25,19,0.35)] backdrop-blur"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto flex h-16 max-w-7xl items-center justify-between px-5 transition-colors duration-500 md:h-20 md:px-8",
          onDarkHero ? "text-[#F7F1E5]" : "text-foreground",
        )}
      >
        <div className="flex flex-1 items-center gap-3">
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMobileOpen((v) => !v)}
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center transition-colors md:hidden",
              onDarkHero ? "text-[#F7F1E5]" : "text-foreground",
            )}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <Link
            to="/"
            className="font-serif text-xl font-medium uppercase tracking-[0.3em] md:text-2xl"
          >
            Velmora
          </Link>
        </div>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "relative text-[11px] font-medium uppercase tracking-[0.28em] transition-colors duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full",
                  isActive && "after:w-full",
                  onDarkHero ? "text-[#F7F1E5]/90 hover:text-[#F7F1E5]" : "text-foreground/80 hover:text-foreground",
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-1 md:gap-2">
          <button
            type="button"
            aria-label="Search"
            onClick={() => setSearchOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center transition-transform duration-300 hover:scale-105"
          >
            <Search className="h-[18px] w-[18px]" strokeWidth={1.5} />
          </button>
          <Link
            to="/shop?filter=bestsellers"
            aria-label="Wishlist"
            className="hidden h-10 w-10 items-center justify-center transition-transform duration-300 hover:scale-105 md:inline-flex"
          >
            <Heart className="h-[18px] w-[18px]" strokeWidth={1.5} />
          </Link>
          <button
            type="button"
            aria-label="Open cart"
            onClick={openCart}
            className="relative inline-flex h-10 w-10 items-center justify-center transition-transform duration-300 hover:scale-105"
          >
            <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.5} />
            {count > 0 && (
              <span
                className={cn(
                  "absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-[9px] font-semibold",
                  onDarkHero ? "bg-[#F7F1E5] text-foreground" : "bg-accent text-accent-foreground",
                )}
              >
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t border-line bg-background/95 backdrop-blur">
          <form
            onSubmit={submitSearch}
            className="mx-auto flex max-w-7xl items-center gap-3 px-5 py-4 md:px-8"
          >
            <Search className="h-4 w-4 shrink-0 text-muted-foreground" strokeWidth={1.5} />
            <input
              autoFocus
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search earrings, huggies, necklaces…"
              className="w-full bg-transparent text-sm tracking-wide text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
            <button
              type="submit"
              className="text-[11px] font-medium uppercase tracking-[0.24em] text-accent-deep transition-colors hover:text-foreground"
            >
              Search
            </button>
          </form>
        </div>
      )}

      {mobileOpen && (
        <div className="border-t border-line bg-background md:hidden">
          <nav className="flex flex-col px-5 py-6">
            {NAV_LINKS.map((link, i) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "animate-fade-up border-b border-line py-4 font-serif text-2xl font-light tracking-wide text-foreground transition-colors last:border-0 hover:text-accent-deep",
                    isActive && "text-accent-deep",
                  )
                }
                style={{ animationDelay: `${i * 70}ms` }}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
