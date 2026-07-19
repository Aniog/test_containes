import React, { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Menu, Search, ShoppingBag, X } from "lucide-react"

const navItems = [
  { label: "Shop", to: "/shop" },
  { label: "Collections", to: "/shop?category=Gift%20Sets" },
  { label: "About", to: "/#story" },
  { label: "Journal", to: "/#journal" },
]

export default function NavBar({ cartCount, onCartOpen }) {
  const [solid, setSolid] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === "/"

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const navClass = !isHome || solid || mobileOpen
    ? "bg-velmora-ivory/95 text-velmora-espresso shadow-sm backdrop-blur-xl border-velmora-espresso/10"
    : "bg-transparent text-velmora-ivory border-white/10"

  const linkClass = ({ isActive }) =>
    `text-xs font-bold uppercase tracking-[0.24em] transition hover:text-velmora-champagne ${isActive ? "text-velmora-champagne" : ""}`

  return (
    <header className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-300 ${navClass}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="font-serif text-3xl font-semibold tracking-[0.14em]" aria-label="Velmora home">
          VELMORA
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink key={item.label} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="hidden rounded-full p-2.5 transition hover:bg-current/10 sm:inline-flex"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="relative rounded-full p-2.5 transition hover:bg-current/10"
            onClick={onCartOpen}
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-champagne px-1 text-[0.65rem] font-extrabold text-velmora-espresso">
                {cartCount}
              </span>
            )}
          </button>
          <button
            type="button"
            className="rounded-full p-2.5 transition hover:bg-current/10 md:hidden"
            onClick={() => setMobileOpen((value) => !value)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div className={`overflow-hidden bg-velmora-ivory text-velmora-espresso transition-all duration-300 md:hidden ${mobileOpen ? "max-h-96 border-t border-velmora-espresso/10" : "max-h-0"}`}>
        <nav className="flex flex-col gap-1 px-5 py-5" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="rounded-2xl px-4 py-4 text-sm font-bold uppercase tracking-[0.24em] transition hover:bg-velmora-pearl"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
