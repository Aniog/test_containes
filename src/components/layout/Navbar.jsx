import React, { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Search, ShoppingBag, Menu, X } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { cn } from "@/lib/utils"

const links = [
  { to: "/shop", label: "Shop" },
  { to: "/shop?cat=earrings", label: "Collections", match: "/shop" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
]

const Navbar = () => {
  const { itemCount, openCart } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === "/"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setSearchOpen(false)
  }, [location.pathname, location.search])

  // Force solid when not on home (collection / product pages have ivory bg)
  const solid = scrolled || !isHome

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          solid
            ? "bg-ivory/95 backdrop-blur-md border-b border-hairline"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="container-wrap">
          <div className="grid grid-cols-3 items-center h-16 lg:h-20">
            {/* Left: logo */}
            <div className="flex items-center">
              <Link
                to="/"
                className={cn(
                  "font-serif text-xl lg:text-2xl tracking-[0.32em] font-medium transition-colors duration-500",
                  solid ? "text-ink" : "text-ivory"
                )}
                aria-label="Velmora home"
              >
                VELMORA
              </Link>
            </div>

            {/* Center: nav links (desktop) */}
            <nav className="hidden lg:flex items-center justify-center gap-10">
              {links.map((l) => (
                <NavLink
                  key={l.label}
                  to={l.to}
                  className={({ isActive }) =>
                    cn(
                      "font-sans uppercase tracking-[0.18em] text-[11px] underline-grow transition-colors duration-300",
                      solid
                        ? isActive || (l.match && location.pathname.startsWith(l.match))
                          ? "text-ink"
                          : "text-ink/80 hover:text-ink"
                        : isActive
                          ? "text-ivory"
                          : "text-ivory/85 hover:text-ivory"
                    )
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </nav>

            {/* Right: search + cart */}
            <div className="flex items-center justify-end gap-1 sm:gap-2">
              <button
                type="button"
                onClick={() => setSearchOpen((s) => !s)}
                className={cn(
                  "hidden sm:flex h-10 w-10 items-center justify-center transition-colors duration-300",
                  solid ? "text-ink hover:text-gold-deep" : "text-ivory hover:text-ivory/70"
                )}
                aria-label="Search"
              >
                <Search size={18} strokeWidth={1.5} />
              </button>
              <button
                type="button"
                onClick={openCart}
                className={cn(
                  "relative flex h-10 w-10 items-center justify-center transition-colors duration-300",
                  solid ? "text-ink hover:text-gold-deep" : "text-ivory hover:text-ivory/70"
                )}
                aria-label="Open cart"
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                {itemCount > 0 ? (
                  <span className="absolute top-1 right-1 flex h-4 min-w-4 px-1 items-center justify-center rounded-full bg-gold text-ivory text-[9px] font-sans font-medium">
                    {itemCount}
                  </span>
                ) : null}
              </button>
              <button
                type="button"
                onClick={() => setMobileOpen((m) => !m)}
                className={cn(
                  "lg:hidden flex h-10 w-10 items-center justify-center transition-colors duration-300",
                  solid ? "text-ink hover:text-gold-deep" : "text-ivory hover:text-ivory/70"
                )}
                aria-label="Open menu"
              >
                {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>

        {/* Search expand */}
        <div
          className={cn(
            "overflow-hidden transition-all duration-500 bg-ivory border-b border-hairline",
            searchOpen ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="container-wrap py-4 flex items-center gap-3">
            <Search size={16} className="text-muted" />
            <input
              autoFocus={searchOpen}
              type="search"
              placeholder="Search jewelry, gifts, collections…"
              className="flex-1 bg-transparent border-0 outline-none font-sans text-[15px] text-ink placeholder:text-muted/70"
            />
            <button
              type="button"
              onClick={() => setSearchOpen(false)}
              className="text-[11px] font-sans uppercase tracking-[0.18em] text-muted hover:text-ink"
            >
              Close
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-500",
          mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <div
          className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute top-16 inset-x-0 bg-ivory border-b border-hairline transition-transform duration-500",
            mobileOpen ? "translate-y-0" : "-translate-y-4"
          )}
        >
          <nav className="container-wrap py-8 flex flex-col">
            {links.map((l) => (
              <NavLink
                key={l.label}
                to={l.to}
                className="py-4 font-serif text-2xl text-ink border-b border-hairline last:border-b-0"
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/about"
              className="mt-6 link-arrow self-start"
              onClick={() => setMobileOpen(false)}
            >
              Our Story
            </Link>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Navbar
