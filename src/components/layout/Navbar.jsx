import React, { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Search, ShoppingBag, Menu, X } from "lucide-react"
import { useCart } from "../../lib/cart"
import { cn } from "../../lib/utils"

const navLinks = [
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
]

export default function Navbar({ tone = "auto" }) {
  const { itemCount, openCart } = useCart()
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  // tone === "auto" -> transparent on hero, ivory when scrolled
  // tone === "solid"  -> always ivory
  const useTransparent = tone === "auto" && !scrolled
  const textColor = useTransparent ? "text-bone" : "text-ink"
  const subtleColor = useTransparent ? "text-bone/80" : "text-ink/70"
  const borderColor = useTransparent ? "border-bone/15" : "border-ink/10"
  const bgColor = useTransparent ? "bg-transparent" : "bg-bone-50/95 backdrop-blur-md"

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-soft",
        bgColor,
        scrolled || tone === "solid"
          ? "border-b " + borderColor + " shadow-[0_1px_0_rgba(0,0,0,0.02)]"
          : "border-b border-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-editorial items-center justify-between px-5 sm:h-20 md:px-10">
        {/* Mobile menu trigger */}
        <button
          type="button"
          className={cn("md:hidden -ml-1 flex h-10 w-10 items-center justify-center rounded-full", textColor)}
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
        >
          <Menu className="h-5 w-5" strokeWidth={1.5} />
        </button>

        {/* Logo */}
        <Link
          to="/"
          className={cn(
            "font-serif text-2xl tracking-[0.32em] sm:text-[26px]",
            textColor
          )}
          aria-label="Velmora — home"
        >
          VELMORA
        </Link>

        {/* Center links */}
        <nav className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "relative text-[12px] font-medium uppercase tracking-[0.22em] transition-colors duration-300",
                  textColor,
                  isActive ? "opacity-100" : "opacity-80 hover:opacity-100"
                )
              }
            >
              {({ isActive }) => (
                <span className="flex flex-col items-center">
                  <span>{link.label}</span>
                  <span
                    className={cn(
                      "mt-1 h-px w-4 transition-all duration-300",
                      isActive
                        ? useTransparent
                          ? "bg-bone opacity-100"
                          : "bg-ink opacity-100"
                        : "opacity-0"
                    )}
                  />
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right icons */}
        <div className="flex items-center gap-1 sm:gap-3">
          <button
            type="button"
            className={cn("hidden sm:flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 hover:bg-ink/5", textColor)}
            aria-label="Search"
          >
            <Search className="h-[18px] w-[18px]" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={openCart}
            className={cn("relative flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 hover:bg-ink/5", textColor)}
            aria-label="Open cart"
          >
            <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.5} />
            {itemCount > 0 && (
              <span
                className={cn(
                  "absolute -right-0.5 -top-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full px-1 text-[10px] font-medium leading-none",
                  useTransparent ? "bg-bone text-ink" : "bg-ink text-bone"
                )}
              >
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 md:hidden transition-opacity duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <aside
          className={cn(
            "absolute inset-y-0 left-0 w-[86%] max-w-[360px] bg-bone-50 shadow-lift transition-transform duration-500 ease-soft",
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between border-b border-ink/10 px-5 py-5">
            <span className="font-serif text-2xl tracking-[0.32em] text-ink">VELMORA</span>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-ink"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-5 py-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "border-b border-ink/5 py-4 font-serif text-2xl text-ink transition-opacity duration-300",
                    isActive ? "opacity-100" : "opacity-80"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/shop"
              className="mt-6 inline-flex items-center justify-center bg-ink py-4 text-[11px] font-medium uppercase tracking-[0.24em] text-bone"
            >
              Shop the Collection
            </Link>
          </nav>
          <div className="px-5 pb-8 text-[11px] uppercase tracking-[0.22em] text-ink/60">
            Free worldwide shipping · 30-day returns
          </div>
        </aside>
      </div>
    </header>
  )
}
