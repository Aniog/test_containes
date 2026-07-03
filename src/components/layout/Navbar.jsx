import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Search, ShoppingBag, User, Menu, X } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
]

export default function Navbar() {
  const { totals, openCart } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  // Hero is full-bleed with a dark background. Anywhere else, the page
  // background is also dark, so the solid state is always the visual
  // baseline; the transparent state is purely for the homepage hero.
  const isHome = location.pathname === "/"

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  // When the mobile menu is open we lock the scroll on body so the sheet
  // feels native and to keep focus contained.
  useEffect(() => {
    if (typeof document === "undefined") return undefined
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  // Top of the homepage hero: transparent over the image. Once we scroll
  // OR we leave the homepage, we paint the solid base for legibility.
  const transparent = isHome && !scrolled

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-soft",
          transparent
            ? "bg-transparent"
            : "bg-base/90 backdrop-blur-md border-b border-line/60",
        )}
      >
        <div className="container-site flex h-16 md:h-20 items-center justify-between">
          {/* Mobile menu trigger */}
          <button
            type="button"
            className="md:hidden -ml-2 p-2 text-ink-primary"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" strokeWidth={1.5} />
          </button>

          {/* Left: logo */}
          <Link
            to="/"
            className="font-serif text-[22px] md:text-[26px] tracking-[0.04em] text-ink-primary"
            aria-label="Velmora home"
          >
            <span className="font-light">VELMORA</span>
          </Link>

          {/* Center: nav */}
          <nav className="hidden md:flex items-center gap-9" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "font-sans text-[12px] uppercase tracking-name font-medium transition-colors duration-300",
                    "text-ink-primary hover:text-accent",
                    isActive && "text-accent",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right: actions */}
          <div className="flex items-center gap-1 md:gap-2">
            <button
              type="button"
              className="p-2 text-ink-primary hover:text-accent transition-colors duration-300"
              aria-label="Search"
            >
              <Search className="h-5 w-5" strokeWidth={1.5} />
            </button>
            <Link
              to="/account"
              className="hidden md:inline-flex p-2 text-ink-primary hover:text-accent transition-colors duration-300"
              aria-label="Account"
            >
              <User className="h-5 w-5" strokeWidth={1.5} />
            </Link>
            <button
              type="button"
              onClick={openCart}
              className="relative p-2 text-ink-primary hover:text-accent transition-colors duration-300"
              aria-label={`Open cart, ${totals.itemCount} items`}
            >
              <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
              {totals.itemCount > 0 && (
                <span
                  className={cn(
                    "absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1",
                    "flex items-center justify-center",
                    "bg-accent text-ink-onAccent text-[10px] font-medium tracking-normal",
                    "rounded-full",
                  )}
                  aria-hidden="true"
                >
                  {totals.itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu sheet */}
      <div
        className={cn(
          "fixed inset-0 z-[60] md:hidden transition-opacity duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-black/70"
          onClick={() => setMobileOpen(false)}
        />
        <aside
          className={cn(
            "absolute inset-y-0 left-0 w-[78%] max-w-sm bg-base border-r border-line",
            "flex flex-col transition-transform duration-500 ease-soft",
            mobileOpen ? "translate-x-0" : "-translate-x-full",
          )}
          role="dialog"
          aria-label="Mobile menu"
        >
          <div className="flex items-center justify-between h-16 px-6 border-b border-line">
            <Link
              to="/"
              className="font-serif text-[22px] tracking-[0.04em] text-ink-primary"
            >
              VELMORA
            </Link>
            <button
              type="button"
              className="p-2 text-ink-primary"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex flex-col px-6 py-10 gap-7" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "font-serif text-2xl text-ink-primary",
                    isActive && "text-accent",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="hairline mt-4" />
            <Link
              to="/account"
              className="font-sans text-[12px] uppercase tracking-name text-ink-secondary"
            >
              Account
            </Link>
            <Link
              to="/journal"
              className="font-sans text-[12px] uppercase tracking-name text-ink-secondary"
            >
              Journal
            </Link>
          </nav>
        </aside>
      </div>
    </>
  )
}
