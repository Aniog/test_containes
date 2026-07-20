import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
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
  const { count, openCart } = useCart()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const onHome = location.pathname === "/"
  const transparent = onHome && !scrolled && !mobileOpen

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        transparent
          ? "bg-transparent"
          : "bg-ivory/95 backdrop-blur-md border-b border-sand/60"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8 h-16 md:h-20">
        {/* Left: mobile menu + logo */}
        <div className="flex items-center gap-4 flex-1">
          <button
            type="button"
            className={cn(
              "md:hidden transition-colors",
              transparent ? "text-ivory" : "text-ink"
            )}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Open menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <Link
            to="/"
            className={cn(
              "font-serif text-2xl md:text-3xl tracking-[0.25em] transition-colors",
              transparent ? "text-ivory" : "text-ink"
            )}
          >
            VELMORA
          </Link>
        </div>

        {/* Center links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              className={cn(
                "text-xs uppercase tracking-[0.2em] transition-colors hover:text-gold",
                transparent ? "text-ivory" : "text-ink"
              )}
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* Right: search + cart */}
        <div className="flex items-center gap-5 flex-1 justify-end">
          <button
            type="button"
            aria-label="Search"
            className={cn(
              "transition-colors hover:text-gold",
              transparent ? "text-ivory" : "text-ink"
            )}
          >
            <Search size={20} />
          </button>
          <button
            type="button"
            aria-label="Open cart"
            onClick={openCart}
            className={cn(
              "relative transition-colors hover:text-gold",
              transparent ? "text-ivory" : "text-ink"
            )}
          >
            <ShoppingBag size={20} />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-medium text-ivory">
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-ivory border-t border-sand/60 animate-fade-in">
          <div className="flex flex-col px-5 py-4">
            {links.map((l) => (
              <NavLink
                key={l.label}
                to={l.to}
                className="py-3 text-sm uppercase tracking-[0.2em] text-ink border-b border-sand/40 last:border-0"
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
