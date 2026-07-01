import React, { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Search, ShoppingBag, Menu, X } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { cn } from "@/lib/utils"

const LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
]

export default function Navbar() {
  const { count, openCart } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  // Transparent only over the homepage hero; solid elsewhere.
  const isHome = location.pathname === "/"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const solid = scrolled || !isHome || mobileOpen

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-colors duration-500",
        solid
          ? "bg-ivory/95 backdrop-blur border-b border-hairline text-espresso"
          : "bg-transparent text-ivory"
      )}
    >
      <nav className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        {/* Left: mobile menu + logo */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="md:hidden p-1 -ml-1"
            aria-label="Open menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <Link
            to="/"
            className="font-serif text-2xl md:text-3xl tracking-[0.25em] leading-none"
          >
            VELMORA
          </Link>
        </div>

        {/* Center links */}
        <ul className="hidden md:flex items-center gap-10">
          {LINKS.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  cn(
                    "text-[11px] uppercase tracking-[0.2em] transition-opacity hover:opacity-60",
                    isActive && "opacity-60"
                  )
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right: search + cart */}
        <div className="flex items-center gap-4 md:gap-5">
          <button
            type="button"
            aria-label="Search"
            className="p-1 transition-opacity hover:opacity-60"
          >
            <Search className="w-[18px] h-[18px]" />
          </button>
          <button
            type="button"
            aria-label="Open cart"
            onClick={openCart}
            className="relative p-1 transition-opacity hover:opacity-60"
          >
            <ShoppingBag className="w-[18px] h-[18px]" />
            {count > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-gold text-ivory text-[10px] leading-none rounded-full w-4 h-4 flex items-center justify-center font-medium">
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-ivory border-t border-hairline">
          <ul className="px-5 py-4 flex flex-col">
            {LINKS.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className="block py-3 text-sm uppercase tracking-[0.2em] text-espresso border-b border-hairline last:border-0"
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
