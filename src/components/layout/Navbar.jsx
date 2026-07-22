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

  // Transparent only over the homepage hero; solid elsewhere.
  const isHome = location.pathname === "/"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const solid = scrolled || !isHome || mobileOpen

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "bg-ivory/95 text-ink shadow-soft backdrop-blur"
          : "bg-transparent text-ivory"
      )}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-10">
        {/* Left: mobile menu + logo */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <Link to="/" className="font-serif text-2xl tracking-[0.3em] md:text-3xl">
            VELMORA
          </Link>
        </div>

        {/* Center links */}
        <div className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              className="text-[11px] uppercase tracking-widest2 transition-colors hover:text-gold"
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* Right: search + cart */}
        <div className="flex items-center gap-5">
          <button type="button" aria-label="Search" className="transition-colors hover:text-gold">
            <Search size={20} />
          </button>
          <button
            type="button"
            onClick={openCart}
            aria-label="Open cart"
            className="relative transition-colors hover:text-gold"
          >
            <ShoppingBag size={20} />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[9px] font-semibold text-ink">
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-ink/10 bg-ivory text-ink transition-all duration-300 md:hidden",
          mobileOpen ? "max-h-80" : "max-h-0"
        )}
      >
        <div className="flex flex-col px-6 py-2">
          {links.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              className="border-b border-ink/5 py-3 text-xs uppercase tracking-widest2"
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}
