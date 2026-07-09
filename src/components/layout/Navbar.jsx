import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Search, ShoppingBag, Menu, X } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { cn } from "@/lib/utils"

const LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
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
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid
          ? "bg-ivory/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(232,222,207,0.8)]"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-8xl items-center justify-between px-5 py-4 md:px-8 md:py-5">
        {/* Left: mobile menu + logo */}
        <div className="flex items-center gap-3 md:gap-0">
          <button
            type="button"
            className="md:hidden -ml-1 p-1"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Open menu"
          >
            {mobileOpen ? (
              <X size={22} className={solid ? "text-ink" : "text-ivory"} />
            ) : (
              <Menu size={22} className={solid ? "text-ink" : "text-ivory"} />
            )}
          </button>
          <Link
            to="/"
            className={cn(
              "font-serif text-2xl tracking-widest2 md:text-3xl",
              solid ? "text-ink" : "text-ivory"
            )}
          >
            VELMORA
          </Link>
        </div>

        {/* Center links */}
        <div className="hidden md:flex md:items-center md:gap-10">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  "text-[11px] uppercase tracking-widest2 transition-colors duration-300",
                  solid ? "text-ink hover:text-gold" : "text-ivory/90 hover:text-ivory",
                  isActive && (solid ? "text-gold" : "text-ivory")
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* Right: search + cart */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Search"
            className={cn("transition-colors", solid ? "text-ink hover:text-gold" : "text-ivory hover:text-champagne")}
          >
            <Search size={20} />
          </button>
          <button
            type="button"
            onClick={openCart}
            aria-label="Open cart"
            className={cn("relative transition-colors", solid ? "text-ink hover:text-gold" : "text-ivory hover:text-champagne")}
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
          "md:hidden overflow-hidden transition-all duration-500 ease-out",
          mobileOpen ? "max-h-96 border-t border-sand" : "max-h-0"
        )}
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  "py-3 font-serif text-xl uppercase tracking-widest2 text-ink",
                  isActive && "text-gold"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}
