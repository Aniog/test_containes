import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Search, ShoppingBag, Menu, X } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { to: "/shop",        label: "Shop" },
  { to: "/shop?cat=earrings",  label: "Collections" },
  { to: "/about",       label: "About" },
  { to: "/journal",     label: "Journal" },
]

export function StickyNav() {
  const { summary, openCart } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false) }, [location.pathname, location.search])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-bone/95 backdrop-blur-md border-b border-line text-cocoa"
          : "bg-transparent text-bone"
      )}
    >
      <nav
        aria-label="Primary"
        className="max-w-editorial mx-auto flex items-center justify-between px-5 md:px-10 lg:px-14 h-16 md:h-20"
      >
        <Link
          to="/"
          aria-label="Velmora home"
          className="font-serif text-2xl md:text-[28px] tracking-[0.32em] font-medium"
        >
          VELMORA
        </Link>

        <ul className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  cn(
                    "eyebrow transition-colors duration-300",
                    isActive ? "text-gold-300" : "hover:text-gold-300"
                  )
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 md:gap-6">
          <button
            type="button"
            aria-label="Search"
            className="p-1 hover:text-gold-300 transition-colors duration-300"
          >
            <Search size={18} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label={`Open cart, ${summary.count} items`}
            onClick={openCart}
            className="relative p-1 hover:text-gold-300 transition-colors duration-300"
          >
            <ShoppingBag size={18} strokeWidth={1.5} />
            {summary.count > 0 && (
              <span
                aria-hidden="true"
                className={cn(
                  "absolute -top-1 -right-2 text-[10px] tracking-widest2 font-medium",
                  "min-w-[18px] h-[18px] px-1 inline-flex items-center justify-center rounded-full",
                  scrolled
                    ? "bg-cocoa text-bone"
                    : "bg-bone text-cocoa"
                )}
              >
                {summary.count}
              </span>
            )}
          </button>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-1 hover:text-gold-300 transition-colors duration-300"
          >
            {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden bg-bone text-cocoa border-t border-line",
          "transition-[max-height,opacity] duration-500 ease-out",
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="flex flex-col px-6 py-4 gap-4">
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <NavLink to={l.to} className="eyebrow hover:text-gold-300 transition-colors">
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
