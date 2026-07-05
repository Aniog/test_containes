import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Search, ShoppingBag, Menu, X } from "lucide-react"
import { useCart } from "@/hooks/useCart"
import { cn } from "@/lib/utils"

const links = [
  { label: "Shop", to: "/shop" },
  { label: "Collections", to: "/shop" },
  { label: "About", to: "/about" },
  { label: "Journal", to: "/journal" },
]

export default function Navbar() {
  const { count, openCart } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  // Transparent only over the homepage hero; solid elsewhere.
  const isHome = location.pathname === "/"
  const transparent = isHome && !scrolled && !mobileOpen

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        transparent
          ? "bg-transparent"
          : "bg-cream/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(67,56,41,0.12)]"
      )}
    >
      <div className="mx-auto flex max-w-8xl items-center justify-between px-5 py-4 md:px-10">
        {/* Left: mobile menu + logo */}
        <div className="flex items-center gap-3 md:flex-1">
          <button
            type="button"
            className="md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Open menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <Link
            to="/"
            className={cn(
              "font-serif text-2xl tracking-ultra transition-colors md:text-3xl",
              transparent ? "text-cream" : "text-espresso-900"
            )}
          >
            VELMORA
          </Link>
        </div>

        {/* Center: nav links */}
        <nav className="hidden flex-1 items-center justify-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={cn(
                "font-sans text-[11px] uppercase tracking-widest transition-colors hover:text-gold-600",
                transparent ? "text-cream/90" : "text-espresso-700"
              )}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right: icons */}
        <div className="flex flex-1 items-center justify-end gap-4">
          <button
            type="button"
            aria-label="Search"
            className={cn(
              "transition-colors hover:text-gold-600",
              transparent ? "text-cream/90" : "text-espresso-700"
            )}
          >
            <Search size={18} />
          </button>
          <button
            type="button"
            onClick={openCart}
            aria-label="Open cart"
            className={cn(
              "relative transition-colors hover:text-gold-600",
              transparent ? "text-cream/90" : "text-espresso-700"
            )}
          >
            <ShoppingBag size={18} />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold-500 px-1 text-[9px] font-medium text-cream">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-espresso-200 bg-cream transition-[max-height] duration-300 md:hidden",
          mobileOpen ? "max-h-80" : "max-h-0"
        )}
      >
        <nav className="flex flex-col px-5 py-2">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className="border-b border-espresso-100 py-3 font-sans text-xs uppercase tracking-widest text-espresso-800 last:border-0"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
