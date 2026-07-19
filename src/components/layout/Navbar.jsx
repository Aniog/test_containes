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
  const { count, openCart } = useCart()
  const { pathname } = useLocation()

  // Transparent only over the homepage hero; solid elsewhere.
  const isHome = pathname === "/"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const solid = scrolled || !isHome || mobileOpen

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid
          ? "bg-ivory/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(217,207,192,0.6)]"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        {/* Left: mobile menu + logo */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X size={20} className={solid ? "text-espresso" : "text-ivory"} />
            ) : (
              <Menu size={20} className={solid ? "text-espresso" : "text-ivory"} />
            )}
          </button>
          <Link
            to="/"
            className={cn(
              "font-serif text-2xl tracking-[0.3em] transition-colors md:text-3xl",
              solid ? "text-espresso" : "text-ivory"
            )}
          >
            VELMORA
          </Link>
        </div>

        {/* Center links */}
        <div className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className={cn(
                "text-[11px] font-medium uppercase tracking-[0.2em] transition-colors hover:text-gold",
                solid ? "text-espresso" : "text-ivory"
              )}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right: search + cart */}
        <div className="flex items-center gap-5">
          <button
            type="button"
            aria-label="Search"
            className={cn("transition-colors hover:text-gold", solid ? "text-espresso" : "text-ivory")}
          >
            <Search size={19} />
          </button>
          <button
            type="button"
            onClick={openCart}
            aria-label="Open cart"
            className={cn("relative transition-colors hover:text-gold", solid ? "text-espresso" : "text-ivory")}
          >
            <ShoppingBag size={19} />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[9px] font-semibold text-white">
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-hairline bg-ivory transition-all duration-300 md:hidden",
          mobileOpen ? "max-h-80" : "max-h-0"
        )}
      >
        <div className="flex flex-col px-6 py-4">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className="py-3 text-xs font-medium uppercase tracking-[0.2em] text-espresso"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
