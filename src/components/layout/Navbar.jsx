import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Search, ShoppingBag, X, Menu } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/shop?category=earrings", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { count, toggleCart } = useCart()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname, location.search])

  // Pages with a dark hero should let the nav be transparent initially.
  const isHome = location.pathname === "/"
  const transparent = isHome && !scrolled

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500 ease-out-soft",
        transparent
          ? "bg-transparent text-paper"
          : "bg-paper/95 text-ink backdrop-blur-md border-b border-line-light",
      )}
    >
      <div className="mx-auto flex h-16 max-w-8xl items-center justify-between px-5 md:h-20 md:px-8">
        {/* Mobile menu trigger */}
        <button
          type="button"
          aria-label="Open menu"
          className="-ml-2 inline-flex h-10 w-10 items-center justify-center md:hidden"
          onClick={() => setMobileOpen(true)}
        >
          <Menu className="h-5 w-5" strokeWidth={1.25} />
        </button>

        {/* Left: logo */}
        <Link
          to="/"
          aria-label="Velmora home"
          className={cn(
            "font-display text-2xl tracking-[0.32em] md:text-[26px]",
            "transition-colors duration-300",
          )}
        >
          VELMORA
        </Link>

        {/* Center: nav links (desktop) */}
        <nav className="hidden md:flex md:items-center md:gap-10">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "text-[11px] font-medium uppercase tracking-[0.28em] transition-colors duration-300",
                  "hover:opacity-70",
                  isActive && "opacity-100",
                  !isActive && "opacity-90",
                )
              }
              end={link.to === "/"}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right: actions */}
        <div className="flex items-center gap-2 md:gap-4">
          <button
            type="button"
            aria-label="Search"
            className="inline-flex h-10 w-10 items-center justify-center transition-opacity duration-300 hover:opacity-70"
          >
            <Search className="h-[18px] w-[18px]" strokeWidth={1.25} />
          </button>
          <button
            type="button"
            aria-label={`Open cart with ${count} item${count === 1 ? "" : "s"}`}
            onClick={toggleCart}
            className="relative inline-flex h-10 w-10 items-center justify-center transition-opacity duration-300 hover:opacity-70"
          >
            <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.25} />
            {count > 0 && (
              <span
                className={cn(
                  "absolute -right-0.5 -top-0.5 inline-flex h-4 min-w-[16px] items-center justify-center rounded-full px-1 text-[10px] font-medium leading-none",
                  transparent
                    ? "bg-paper text-ink"
                    : "bg-ink text-paper",
                )}
              >
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={NAV_LINKS}
      />
    </header>
  )
}

function MobileMenu({ open, onClose, links }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 bg-paper text-ink md:hidden">
      <div className="flex h-16 items-center justify-between px-5">
        <span className="font-display text-2xl tracking-[0.32em]">VELMORA</span>
        <button
          type="button"
          aria-label="Close menu"
          onClick={onClose}
          className="inline-flex h-10 w-10 items-center justify-center"
        >
          <X className="h-5 w-5" strokeWidth={1.25} />
        </button>
      </div>
      <nav className="flex flex-col gap-2 px-5 py-8">
        {links.map((link) => (
          <Link
            key={link.label}
            to={link.to}
            onClick={onClose}
            className="border-b border-line-light py-4 font-display text-3xl font-light"
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="px-5 py-6 text-xs uppercase tracking-[0.28em] text-text-muted">
        Free worldwide shipping over $75
      </div>
    </div>
  )
}
