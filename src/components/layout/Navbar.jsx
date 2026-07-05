import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Menu, Search, ShoppingBag, X } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { useScrollPosition } from "@/hooks/useScrollPosition"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/shop?category=earrings", label: "Collections", match: "/shop" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
]

export default function Navbar() {
  const scrollY = useScrollPosition()
  const { itemCount, openCart } = useCart()
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  const isHome = location.pathname === "/"
  const solid = scrollY > 40 || !isHome

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname, location.search])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-40 transition-all duration-300",
          solid
            ? "bg-bone/95 backdrop-blur-md border-b border-line/70"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="container-editorial flex items-center justify-between h-16 sm:h-20">
          {/* Mobile: hamburger */}
          <button
            type="button"
            className="lg:hidden -ml-2 p-2 text-ink"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} strokeWidth={1.4} />
          </button>

          {/* Left: logo */}
          <Link
            to="/"
            className="font-serif text-xl sm:text-2xl tracking-wider2 text-ink"
            aria-label="Velmora home"
          >
            VELMORA
          </Link>

          {/* Center: nav */}
          <nav className="hidden lg:flex items-center gap-10" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "text-[0.72rem] uppercase tracking-eyebrow font-medium transition-colors duration-200",
                    isActive ? "text-ink" : "text-muted hover:text-ink"
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* Right: icons */}
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              type="button"
              aria-label="Search"
              className="p-2 text-ink hover:text-ink-soft transition-colors"
            >
              <Search size={20} strokeWidth={1.4} />
            </button>
            <button
              type="button"
              aria-label={`Open cart with ${itemCount} item${itemCount === 1 ? "" : "s"}`}
              onClick={openCart}
              className="relative p-2 text-ink hover:text-ink-soft transition-colors"
            >
              <ShoppingBag size={20} strokeWidth={1.4} />
              {itemCount > 0 && (
                <span
                  className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] rounded-full bg-gold text-bone text-[10px] font-medium tracking-wide inline-flex items-center justify-center px-1"
                  aria-hidden="true"
                >
                  {itemCount > 9 ? "9+" : itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-bone animate-fadeIn" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="container-editorial flex items-center justify-between h-16 sm:h-20">
            <span className="font-serif text-xl tracking-wider2 text-ink">VELMORA</span>
            <button
              type="button"
              className="-mr-2 p-2 text-ink"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={22} strokeWidth={1.4} />
            </button>
          </div>
          <div className="hairline" />
          <nav className="container-editorial mt-12 flex flex-col gap-6" aria-label="Mobile">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className="font-serif text-3xl text-ink hover:text-gold-deep transition-colors"
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
