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

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { count, openCart } = useCart()
  const location = useLocation()
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

  const solid = scrolled || !isHome

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-500",
          solid
            ? "bg-canvas/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(226,217,203,0.8)]"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 md:py-5">
          {/* Left: mobile menu + logo */}
          <div className="flex items-center gap-3">
            <button
              className="md:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu
                className={cn(
                  "h-6 w-6 transition-colors",
                  solid ? "text-ink" : "text-canvas"
                )}
              />
            </button>
            <Link
              to="/"
              className={cn(
                "font-serif text-2xl tracking-[0.3em] transition-colors md:text-3xl",
                solid ? "text-ink" : "text-canvas"
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
                  "text-[11px] uppercase tracking-[0.2em] transition-colors hover:text-gold",
                  solid ? "text-ink" : "text-canvas"
                )}
              >
                {l.label}
              </NavLink>
            ))}
          </div>

          {/* Right: icons */}
          <div className="flex items-center gap-4 md:gap-5">
            <button
              aria-label="Search"
              className={cn(
                "transition-colors hover:text-gold",
                solid ? "text-ink" : "text-canvas"
              )}
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={openCart}
              aria-label="Open cart"
              className={cn(
                "relative transition-colors hover:text-gold",
                solid ? "text-ink" : "text-canvas"
              )}
            >
              <ShoppingBag className="h-5 w-5" />
              {count > 0 && (
                <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-medium text-espresso">
                  {count}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-espresso transition-opacity duration-300 md:hidden",
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <div className="flex items-center justify-between px-5 py-4">
          <span className="font-serif text-2xl tracking-[0.3em] text-canvas">
            VELMORA
          </span>
          <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <X className="h-6 w-6 text-canvas" />
          </button>
        </div>
        <nav className="flex flex-col gap-2 px-5 pt-8">
          {links.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              className="border-b border-white/10 py-5 font-serif text-3xl text-canvas transition-colors hover:text-gold"
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  )
}
