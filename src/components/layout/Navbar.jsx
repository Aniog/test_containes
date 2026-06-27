import { Link, NavLink, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { Search, ShoppingBag, Menu, X } from "lucide-react"
import { useUI } from "@/context/UIContext"
import { useCart } from "@/context/CartContext"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
]

export default function Navbar() {
  const { scrolled } = useUI()
  const { itemCount, openCart } = useCart()
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchValue, setSearchValue] = useState("")

  useEffect(() => {
    setMobileOpen(false)
    setSearchOpen(false)
  }, [location.pathname])

  // Decide whether the hero forces "transparent" mode
  const isHome = location.pathname === "/"
  const transparent = isHome && !scrolled

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          transparent
            ? "bg-transparent text-ivory"
            : "bg-ivory/95 backdrop-blur-md text-espresso shadow-[0_1px_0_0_rgba(217,207,194,0.6)]",
        )}
      >
        <div className="mx-auto flex h-16 md:h-20 items-center justify-between px-6 md:px-10 max-w-[1400px]">
          {/* Logo */}
          <Link
            to="/"
            className={cn(
              "font-serif text-2xl md:text-[26px] tracking-[0.32em] font-medium",
              transparent ? "text-ivory" : "text-espresso",
            )}
            aria-label="Velmora home"
          >
            VELMORA
          </Link>

          {/* Center links — desktop */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "text-[12px] uppercase tracking-[0.22em] font-medium transition-colors duration-300 relative",
                    transparent
                      ? "text-ivory/90 hover:text-ivory"
                      : "text-espresso-soft hover:text-espresso",
                    isActive &&
                      (transparent
                        ? "text-ivory after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:rounded-full after:bg-gold"
                        : "text-espresso after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:rounded-full after:bg-gold"),
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-2 md:gap-4">
            <button
              type="button"
              onClick={() => setSearchOpen((v) => !v)}
              className={cn(
                "p-2 transition-colors",
                transparent ? "text-ivory hover:text-gold-soft" : "text-espresso hover:text-gold-deep",
              )}
              aria-label="Search"
            >
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={openCart}
              className={cn(
                "relative p-2 transition-colors",
                transparent ? "text-ivory hover:text-gold-soft" : "text-espresso hover:text-gold-deep",
              )}
              aria-label={`Open shopping bag (${itemCount} items)`}
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 inline-flex items-center justify-center bg-gold text-espresso text-[10px] font-medium rounded-full">
                  {itemCount}
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className={cn(
                "md:hidden p-2",
                transparent ? "text-ivory" : "text-espresso",
              )}
              aria-label="Open menu"
            >
              <Menu size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Hairline that fades in only on solid state */}
        <div
          className={cn(
            "h-px w-full bg-hairline transition-opacity duration-500",
            transparent ? "opacity-0" : "opacity-100",
          )}
        />
      </header>

      {/* Mobile menu drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[60] md:hidden transition-opacity duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
        aria-hidden={!mobileOpen}
      >
        <button
          type="button"
          aria-label="Close menu"
          className="absolute inset-0 bg-espresso-deep/55"
          onClick={() => setMobileOpen(false)}
        />
        <aside
          className={cn(
            "absolute right-0 top-0 h-full w-[78%] max-w-sm bg-ivory p-8 flex flex-col transition-transform duration-500",
            mobileOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between">
            <span className="font-serif text-xl tracking-[0.28em] text-espresso">VELMORA</span>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="p-1 text-espresso"
              aria-label="Close menu"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>
          <div className="my-8 hairline" />
          <nav className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="font-serif text-2xl text-espresso hover:text-gold-deep transition-colors"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="my-8 hairline" />
          <div className="mt-auto text-[11px] tracking-[0.22em] uppercase text-muted">
            Free shipping over $75
          </div>
        </aside>
      </div>

      {/* Search overlay */}
      <div
        className={cn(
          "fixed inset-x-0 top-16 md:top-20 z-40 transition-all duration-500",
          searchOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none",
        )}
        aria-hidden={!searchOpen}
      >
        <div className="bg-ivory border-t border-hairline shadow-[0_18px_36px_rgba(31,26,23,0.08)]">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-6 flex items-center gap-4">
            <Search size={18} strokeWidth={1.5} className="text-muted" />
            <input
              autoFocus={searchOpen}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              type="search"
              placeholder="Search earrings, necklaces, huggies…"
              className="flex-1 bg-transparent text-base text-espresso placeholder:text-muted outline-none border-b border-hairline pb-2 focus:border-espresso transition-colors"
            />
            <button
              type="button"
              onClick={() => setSearchOpen(false)}
              className="text-[11px] uppercase tracking-[0.22em] text-muted hover:text-espresso"
            >
              Close
            </button>
          </div>
          {searchValue.length > 1 && (
            <div className="mx-auto max-w-[1400px] px-6 md:px-10 pb-6 -mt-2 text-[12px] text-muted">
              Try “huggies”, “gold necklace”, or “gift set”.
            </div>
          )}
        </div>
      </div>
    </>
  )
}