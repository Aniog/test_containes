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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { itemCount, openCart } = useCart()
  const location = useLocation()

  // Transparent over hero (only on home), solid elsewhere / after scroll.
  const isHome = location.pathname === "/"
  const transparent = isHome && !scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

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
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          transparent
            ? "bg-transparent"
            : "border-b border-sand-200 bg-ivory-100/95 backdrop-blur supports-[backdrop-filter]:bg-ivory-100/80",
        )}
        data-transparent={transparent ? "true" : "false"}
      >
        <div className="container-velmora flex h-16 items-center justify-between md:h-20">
          {/* Left: logo */}
          <Link
            to="/"
            className={cn(
              "font-serif text-[20px] font-medium tracking-wider2 md:text-[22px]",
              transparent ? "text-ivory" : "text-espresso",
            )}
            aria-label="Velmora — Home"
          >
            VELMORA
          </Link>

          {/* Center: nav */}
          <nav className="hidden md:block" aria-label="Primary">
            <ul className="flex items-center gap-8 lg:gap-10">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      cn(
                        "nav-link",
                        transparent ? "text-ivory hover:text-champagne-100" : "",
                        isActive && !transparent && "text-champagne-400",
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right: actions */}
          <div className="flex items-center gap-1 md:gap-3">
            <button
              type="button"
              aria-label="Search"
              className={cn(
                "flex h-10 w-10 items-center justify-center transition-colors duration-300 focus-ring",
                transparent
                  ? "text-ivory hover:text-champagne-100"
                  : "text-espresso hover:text-champagne-400",
              )}
            >
              <Search className="h-[18px] w-[18px]" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label={`Cart, ${itemCount} item${itemCount === 1 ? "" : "s"}`}
              onClick={openCart}
              className={cn(
                "relative flex h-10 w-10 items-center justify-center transition-colors duration-300 focus-ring",
                transparent
                  ? "text-ivory hover:text-champagne-100"
                  : "text-espresso hover:text-champagne-400",
              )}
            >
              <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.5} />
              {itemCount > 0 && (
                <span
                  className={cn(
                    "absolute -right-0.5 -top-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full px-1 font-sans text-[10px] font-medium leading-none",
                    transparent
                      ? "bg-ivory text-espresso"
                      : "bg-espresso text-ivory",
                  )}
                  aria-hidden="true"
                >
                  {itemCount}
                </span>
              )}
            </button>
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className={cn(
                "flex h-10 w-10 items-center justify-center transition-colors duration-300 focus-ring md:hidden",
                transparent
                  ? "text-ivory hover:text-champagne-100"
                  : "text-espresso hover:text-champagne-400",
              )}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" strokeWidth={1.5} />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className={cn(
            "absolute inset-0 bg-espresso/40 transition-opacity duration-300",
            mobileOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute right-0 top-0 h-full w-[82%] max-w-sm bg-ivory-50 shadow-soft transition-transform duration-300 ease-out",
            mobileOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex h-16 items-center justify-end px-6">
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="flex h-10 w-10 items-center justify-center text-espresso focus-ring"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
          <nav className="px-8 pt-4" aria-label="Mobile">
            <ul className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      cn(
                        "font-serif text-3xl text-espresso",
                        isActive && "italic text-champagne-400",
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="mt-10 hairline" />
            <p className="mt-6 text-[12px] uppercase tracking-widest2 text-stone-300">
              Free worldwide shipping on orders over $80
            </p>
          </nav>
        </div>
      </div>
    </>
  )
}
