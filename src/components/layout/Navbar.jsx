import React, { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Search, ShoppingBag, Menu, X } from "lucide-react"
import { useCart } from "@/context/CartContext"

const links = [
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { count, openCart } = useCart()
  const location = useLocation()

  // Transparent over hero on the homepage; solid everywhere else.
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
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ease-elegant ${
        solid
          ? "bg-ivory-soft/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(28,23,20,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav className="container-editorial flex h-16 items-center justify-between md:h-20">
        {/* Left: mobile menu + desktop links */}
        <div className="flex flex-1 items-center gap-6">
          <button
            className="md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Open menu"
          >
            {mobileOpen ? (
              <X className={`h-5 w-5 ${solid ? "text-ink" : "text-ivory"}`} strokeWidth={1.5} />
            ) : (
              <Menu className={`h-5 w-5 ${solid ? "text-ink" : "text-ivory"}`} strokeWidth={1.5} />
            )}
          </button>
          <ul className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    `font-sans text-xs uppercase tracking-widest transition-colors ${
                      solid ? "text-ink hover:text-gold" : "text-ivory hover:text-gold-light"
                    } ${isActive ? "text-gold" : ""}`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Center: logo */}
        <Link
          to="/"
          className={`font-serif text-2xl tracking-[0.3em] md:text-3xl ${
            solid ? "text-ink" : "text-ivory"
          }`}
        >
          VELMORA
        </Link>

        {/* Right: icons */}
        <div className="flex flex-1 items-center justify-end gap-5">
          <button
            aria-label="Search"
            className={`transition-colors ${
              solid ? "text-ink hover:text-gold" : "text-ivory hover:text-gold-light"
            }`}
          >
            <Search className="h-5 w-5" strokeWidth={1.5} />
          </button>
          <button
            onClick={openCart}
            aria-label="Open cart"
            className={`relative transition-colors ${
              solid ? "text-ink hover:text-gold" : "text-ivory hover:text-gold-light"
            }`}
          >
            <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 font-sans text-[10px] text-ivory">
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-ink/10 bg-ivory-soft transition-[max-height] duration-500 ease-elegant md:hidden ${
          mobileOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <ul className="container-editorial flex flex-col gap-1 py-4">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `block py-3 font-serif text-xl text-ink transition-colors hover:text-gold ${
                    isActive ? "text-gold" : ""
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
