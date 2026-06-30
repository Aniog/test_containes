import React, { useEffect, useState } from "react"
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

export default function Header({ tone = "auto" }) {
  const { itemCount, openCart, pulseToken } = useCart()
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

  // tone: "light" forces light-text nav (used over hero), "dark" forces dark.
  // "auto" → light over hero (transparent at top), then dark when scrolled.
  const isLight = tone === "light" || (tone === "auto" && !scrolled)

  const linkColor = isLight ? "text-bone" : "text-espresso"
  const iconColor = isLight ? "text-bone" : "text-espresso"
  const logoColor = isLight ? "text-bone" : "text-espresso"
  const borderColor = scrolled
    ? "border-b border-taupe"
    : isLight
    ? "border-b border-transparent"
    : "border-b border-taupe"

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500 ease-editorial",
        scrolled
          ? "bg-cream/95 backdrop-blur supports-[backdrop-filter]:bg-cream/85"
          : "bg-transparent",
        borderColor,
      )}
    >
      <div className="mx-auto flex max-w-page items-center justify-between px-6 py-5 md:px-12 md:py-6">
        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
          className={cn("md:hidden p-1 -ml-1", iconColor)}
        >
          <Menu className="h-5 w-5" strokeWidth={1.5} />
        </button>

        {/* Left: logo */}
        <Link
          to="/"
          aria-label="Velmora home"
          className={cn(
            "font-serif text-xl tracking-[0.32em] font-medium md:text-[22px]",
            logoColor,
          )}
        >
          VELMORA
        </Link>

        {/* Center: nav links */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "font-sans text-[12px] font-medium uppercase tracking-[0.24em] transition-colors duration-300 relative",
                  linkColor,
                  isActive
                    ? "after:absolute after:left-0 after:right-0 after:-bottom-2 after:h-px after:bg-current after:content-['']"
                    : "hover:opacity-70",
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right: search + cart */}
        <div className="flex items-center gap-5">
          <button
            type="button"
            aria-label="Search"
            className={cn("hidden md:inline-flex p-1", iconColor)}
          >
            <Search className="h-5 w-5" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label={`Cart, ${itemCount} item${itemCount === 1 ? "" : "s"}`}
            onClick={openCart}
            className={cn("relative p-1", iconColor)}
          >
            <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
            <span
              key={pulseToken}
              className={cn(
                "absolute -right-1 -top-1 inline-flex h-[18px] min-w-[18px] items-center justify-center rounded-full px-1 text-[10px] font-medium tracking-normal",
                isLight
                  ? "bg-bone text-espresso animate-pulseSoft"
                  : "bg-espresso text-bone animate-pulseSoft",
              )}
            >
              {itemCount}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 z-50"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-espresso/40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 w-[78%] max-w-sm bg-cream shadow-soft animate-slideInRight [animation-direction:reverse]">
            <div className="flex items-center justify-between px-6 py-5 border-b border-taupe">
              <span className="font-serif text-lg tracking-[0.32em] text-espresso">
                VELMORA
              </span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
                className="p-1 text-espresso"
              >
                <X className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>
            <nav className="flex flex-col px-6 py-8 gap-6">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    cn(
                      "font-serif text-2xl text-espresso",
                      isActive && "text-champagne-deep",
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="mt-6 pt-6 border-t border-taupe flex flex-col gap-3">
                <button
                  type="button"
                  className="flex items-center gap-3 text-espresso"
                >
                  <Search className="h-4 w-4" strokeWidth={1.5} />
                  <span className="font-sans text-xs uppercase tracking-[0.24em]">
                    Search
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false)
                    openCart()
                  }}
                  className="flex items-center gap-3 text-espresso"
                >
                  <ShoppingBag className="h-4 w-4" strokeWidth={1.5} />
                  <span className="font-sans text-xs uppercase tracking-[0.24em]">
                    Cart ({itemCount})
                  </span>
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
