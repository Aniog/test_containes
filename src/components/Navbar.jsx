import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
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
  const { count, openCart } = useCart()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  // Transparent over hero only on the homepage top; solid elsewhere.
  const isHome = location.pathname === "/"
  const transparent = isHome && !scrolled && !mobileOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        transparent
          ? "bg-transparent"
          : "bg-cream/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(217,207,192,0.6)]"
      )}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-5 md:px-10">
        {/* Left: mobile menu + logo */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            className={cn(
              "md:hidden",
              transparent ? "text-cream" : "text-ink"
            )}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Open menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <Link
            to="/"
            className={cn(
              "font-serif text-2xl tracking-[0.3em] transition-colors",
              transparent ? "text-cream" : "text-ink"
            )}
          >
            VELMORA
          </Link>
        </div>

        {/* Center: nav links */}
        <div className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={cn(
                "font-sans text-xs uppercase tracking-widest2 transition-colors hover:text-gold",
                transparent ? "text-cream" : "text-ink"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: search + cart */}
        <div className="flex items-center gap-5">
          <button
            type="button"
            className={cn(
              "transition-colors hover:text-gold",
              transparent ? "text-cream" : "text-ink"
            )}
            aria-label="Search"
          >
            <Search size={20} />
          </button>
          <button
            type="button"
            onClick={openCart}
            className={cn(
              "relative transition-colors hover:text-gold",
              transparent ? "text-cream" : "text-ink"
            )}
            aria-label="Open cart"
          >
            <ShoppingBag size={20} />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 font-sans text-[10px] font-medium text-cream">
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-hairline bg-cream md:hidden">
          <div className="flex flex-col px-6 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="border-b border-hairline/60 py-4 font-sans text-sm uppercase tracking-widest2 text-ink"
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
