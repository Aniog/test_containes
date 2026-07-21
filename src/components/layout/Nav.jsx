import React, { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Search, ShoppingBag, Menu, X } from "lucide-react"
import { useCart, useCartUi } from "@/context/CartContext"
import { cn } from "@/lib/utils"

const links = [
  { to: "/shop", label: "Shop" },
  { to: "/shop?cat=earrings", label: "Collections", scroll: false },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
]

export default function Nav({ onCartOpen }) {
  const { count } = useCart()
  const cartUi = useCartUi()
  const handleCartOpen = onCartOpen ?? cartUi?.openCart
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  // The nav is transparent on the homepage hero; on other pages it's
  // always solid. The first 80px of scroll on the home page triggers
  // the solid state.
  const isHome = location.pathname === "/"
  const isSolid = !isHome || scrolled

  useEffect(() => {
    if (!isHome) {
      setScrolled(false)
      return undefined
    }
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [isHome])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname, location.search])

  // Lock body scroll when mobile menu is open
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
          "fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-out-soft",
          isSolid
            ? "bg-bone/95 backdrop-blur-md border-b border-line"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <nav
          aria-label="Primary"
          className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12 h-16 md:h-20 flex items-center justify-between"
        >
          {/* Left: logo */}
          <Link
            to="/"
            className={cn(
              "font-serif text-2xl md:text-[28px] tracking-widest2 leading-none transition-colors duration-300",
              isSolid ? "text-ink" : "text-bone"
            )}
            aria-label="Velmora — home"
          >
            VELMORA
          </Link>

          {/* Center: nav links (desktop) */}
          <ul className="hidden lg:flex items-center gap-10">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "relative text-[11px] tracking-widest3 uppercase font-medium transition-colors duration-300 py-1",
                      isSolid ? "text-ink" : "text-bone",
                      isSolid ? "hover:text-champagne-deep" : "hover:text-champagne"
                    )
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right: icons */}
          <div className="flex items-center gap-2 md:gap-3">
            <button
              type="button"
              aria-label="Search"
              className={cn(
                "w-10 h-10 inline-flex items-center justify-center transition-colors duration-300",
                isSolid ? "text-ink hover:text-champagne-deep" : "text-bone hover:text-champagne"
              )}
            >
              <Search className="w-[18px] h-[18px]" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={handleCartOpen}
              aria-label={`Open cart, ${count} items`}
              className={cn(
                "relative w-10 h-10 inline-flex items-center justify-center transition-colors duration-300",
                isSolid ? "text-ink hover:text-champagne-deep" : "text-bone hover:text-champagne"
              )}
            >
              <ShoppingBag className="w-[18px] h-[18px]" strokeWidth={1.5} />
              {count > 0 && (
                <span
                  className={cn(
                    "absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 inline-flex items-center justify-center text-[10px] font-medium rounded-full",
                    isSolid ? "bg-ink text-bone" : "bg-bone text-ink"
                  )}
                  aria-hidden="true"
                >
                  {count}
                </span>
              )}
            </button>
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((v) => !v)}
              className={cn(
                "lg:hidden w-10 h-10 inline-flex items-center justify-center transition-colors duration-300",
                isSolid ? "text-ink" : "text-bone"
              )}
            >
              {mobileOpen ? (
                <X className="w-5 h-5" strokeWidth={1.5} />
              ) : (
                <Menu className="w-5 h-5" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu sheet */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-40 transition-all duration-500 ease-out-soft",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-ink/40"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute top-0 right-0 h-full w-[78%] max-w-sm bg-bone border-l border-line",
            "transition-transform duration-500 ease-out-soft",
            mobileOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="pt-24 px-8 pb-10 h-full flex flex-col">
            <ul className="space-y-1">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end={l.to === "/"}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        "block py-3 font-serif text-3xl tracking-wide",
                        isActive ? "text-champagne-deep" : "text-ink"
                      )
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-8 border-t border-line text-xs tracking-widest3 uppercase text-muted space-y-2">
              <p>Care · care@velmora.com</p>
              <p>Free shipping on orders over $80</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
