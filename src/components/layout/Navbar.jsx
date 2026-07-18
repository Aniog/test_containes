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
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  // Transparent only over the homepage hero; solid everywhere else.
  const isHome = location.pathname === "/"
  const solid = scrolled || !isHome || mobileOpen

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-elegant",
        solid
          ? "bg-cream-50/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(28,25,23,0.08)]"
          : "bg-transparent"
      )}
    >
      <nav className="container-editorial flex h-16 items-center justify-between md:h-20">
        {/* Left: mobile menu + logo */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="md:hidden"
            aria-label="Open menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <X className={cn("h-5 w-5", solid ? "text-ink" : "text-cream-50")} />
            ) : (
              <Menu className={cn("h-5 w-5", solid ? "text-ink" : "text-cream-50")} />
            )}
          </button>
          <Link
            to="/"
            className={cn(
              "font-serif text-2xl tracking-[0.3em] transition-colors duration-500 md:text-[26px]",
              solid ? "text-ink" : "text-cream-50"
            )}
          >
            VELMORA
          </Link>
        </div>

        {/* Center links */}
        <div className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              className={cn(
                "link-underline font-sans text-[11px] uppercase tracking-ultra transition-colors duration-500",
                solid ? "text-ink/80 hover:text-ink" : "text-cream-50/90 hover:text-cream-50"
              )}
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* Right: search + cart */}
        <div className="flex items-center gap-4 md:gap-5">
          <button
            type="button"
            aria-label="Search"
            className={cn("transition-colors duration-500", solid ? "text-ink hover:text-gold-deep" : "text-cream-50 hover:text-gold-light")}
          >
            <Search className="h-[18px] w-[18px]" />
          </button>
          <button
            type="button"
            aria-label="Open cart"
            onClick={openCart}
            className={cn("relative transition-colors duration-500", solid ? "text-ink hover:text-gold-deep" : "text-cream-50 hover:text-gold-light")}
          >
            <ShoppingBag className="h-[18px] w-[18px]" />
            {count > 0 && (
              <span
                className={cn(
                  "absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full px-1 font-sans text-[9px] font-semibold",
                  solid ? "bg-ink text-cream-50" : "bg-gold text-ink"
                )}
              >
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-ink/10 bg-cream-50 transition-all duration-500 ease-elegant md:hidden",
          mobileOpen ? "max-h-80" : "max-h-0"
        )}
      >
        <div className="container-editorial flex flex-col gap-1 py-4">
          {links.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              className="py-3 font-sans text-xs uppercase tracking-ultra text-ink/80"
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}
