import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
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
  const { count, openDrawer } = useCart()
  const { pathname } = useLocation()

  const isHome = pathname === "/"
  const solid = scrolled || !isHome || mobileOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-luxury",
        solid
          ? "bg-cream/95 backdrop-blur-md border-b border-champagne py-3"
          : "bg-transparent py-5",
      )}
    >
      <nav className="mx-auto flex max-w-editorial items-center justify-between px-5 md:px-8">
        {/* Left: mobile menu + logo */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="md:hidden"
            aria-label="Open menu"
            onClick={() => setMobileOpen((s) => !s)}
          >
            {mobileOpen ? (
              <X className={cn("h-5 w-5", solid ? "text-ink" : "text-white")} />
            ) : (
              <Menu className={cn("h-5 w-5", solid ? "text-ink" : "text-white")} />
            )}
          </button>
          <Link
            to="/"
            className={cn(
              "font-serif text-2xl md:text-3xl tracking-[0.25em] transition-colors duration-300",
              solid ? "text-ink" : "text-white",
            )}
          >
            VELMORA
          </Link>
        </div>

        {/* Center links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={cn(
                "text-[11px] uppercase tracking-widest2 transition-colors duration-300 hover:text-gold",
                solid ? "text-ink" : "text-white/90",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: icons */}
        <div className="flex items-center gap-4 md:gap-5">
          <button
            type="button"
            aria-label="Search"
            className={cn("transition-colors duration-300 hover:text-gold", solid ? "text-ink" : "text-white")}
          >
            <Search className="h-5 w-5" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label="Cart"
            onClick={openDrawer}
            className={cn(
              "relative transition-colors duration-300 hover:text-gold",
              solid ? "text-ink" : "text-white",
            )}
          >
            <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-medium text-white">
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-champagne bg-cream">
          <div className="flex flex-col px-5 py-4">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="py-3 text-sm uppercase tracking-widest2 text-ink border-b border-champagne/60 last:border-0"
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
