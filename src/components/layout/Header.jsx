import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Search, ShoppingBag, Menu, X } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
]

export default function Header() {
  const { itemCount, openDrawer } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  // Pages where the hero lives and we want a transparent header over it
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

  // Solid bg once scrolled, OR if not on home. Always solid on mobile.
  const useSolid = scrolled || !isHome
  const onDark = isHome && !scrolled

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        useSolid
          ? "bg-cream-50/95 backdrop-blur-md border-b border-espresso-800/5"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="mx-auto flex h-16 md:h-20 max-w-editorial items-center justify-between px-5 md:px-10">
        {/* Mobile: hamburger */}
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
          className={cn(
            "md:hidden -ml-2 inline-flex h-10 w-10 items-center justify-center rounded-full",
            onDark ? "text-cream-100" : "text-espresso-800"
          )}
        >
          <Menu className="h-5 w-5" strokeWidth={1.4} />
        </button>

        {/* Left: logo */}
        <Link
          to="/"
          aria-label="Velmora home"
          className={cn(
            "font-serif text-2xl md:text-[28px] tracking-[0.18em] font-medium transition-colors duration-300",
            onDark ? "text-cream-100" : "text-espresso-800"
          )}
        >
          VELMORA
        </Link>

        {/* Center: nav (desktop) */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "text-[12px] font-medium uppercase tracking-widest3 transition-colors duration-300",
                  onDark
                    ? "text-cream-100/90 hover:text-cream-50"
                    : "text-espresso-800/80 hover:text-espresso-800",
                  isActive && (onDark ? "text-cream-50" : "text-espresso-800")
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right: icons */}
        <div className="flex items-center gap-1 md:gap-3">
          <button
            type="button"
            aria-label="Search"
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300",
              onDark
                ? "text-cream-100 hover:text-cream-50"
                : "text-espresso-800 hover:text-espresso-700"
            )}
          >
            <Search className="h-[18px] w-[18px]" strokeWidth={1.4} />
          </button>
          <button
            type="button"
            aria-label={`Open cart with ${itemCount} items`}
            onClick={openDrawer}
            className={cn(
              "relative inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300",
              onDark
                ? "text-cream-100 hover:text-cream-50"
                : "text-espresso-800 hover:text-espresso-700"
            )}
          >
            <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.4} />
            {itemCount > 0 && (
              <span
                className={cn(
                  "absolute -right-0.5 -top-0.5 inline-flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-[10px] font-medium tracking-normal",
                  onDark
                    ? "bg-cream-100 text-espresso-800"
                    : "bg-espresso-800 text-cream-100"
                )}
              >
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-espresso-800/40 animate-fadeIn"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 w-[78%] max-w-sm bg-cream-50 animate-fadeIn">
            <div className="flex h-16 items-center justify-between px-5 border-b border-espresso-800/10">
              <span className="font-serif text-xl tracking-[0.18em] text-espresso-800">
                VELMORA
              </span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center text-espresso-800"
              >
                <X className="h-5 w-5" strokeWidth={1.4} />
              </button>
            </div>
            <nav className="flex flex-col px-5 py-8 gap-1">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    cn(
                      "block py-3 font-serif text-3xl text-espresso-800",
                      isActive && "italic"
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
            <div className="px-5 pt-4 border-t border-espresso-800/10 mx-5">
              <p className="eyebrow mb-3">Customer Care</p>
              <p className="text-sm text-ink-muted leading-relaxed">
                care@velmora.com<br />+1 (800) 555-0142
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
