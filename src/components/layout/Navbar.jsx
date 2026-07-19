import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Search, ShoppingBag, X, Menu } from "lucide-react"
import { useCart } from "@/hooks/useCart"
import { cn } from "@/lib/utils"

const navLinks = [
  { to: "/shop", label: "Shop" },
  { to: "/shop?category=earrings", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
]

export default function Navbar() {
  const { itemCount, openCart } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  // Always use the solid version on non-home routes so the nav is readable
  const isHome = location.pathname === "/"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      const original = document.body.style.overflow
      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.overflow = original
      }
    }
  }, [mobileOpen])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname, location.search])

  const solid = !isHome || scrolled

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-colors duration-500",
          solid
            ? "bg-oat/95 backdrop-blur-sm border-b border-hairline"
            : "bg-transparent",
        )}
      >
        <nav
          aria-label="Primary"
          className="container-x flex items-center justify-between h-16 md:h-20"
        >
          {/* Mobile burger */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="md:hidden -ml-1 p-2 text-ink"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Logo */}
          <Link
            to="/"
            className="font-serif text-2xl md:text-[1.6rem] tracking-wider-3 text-ink"
            aria-label="Velmora home"
          >
            VELMORA
          </Link>

          {/* Center links */}
          <ul className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    cn(
                      "label-2 text-ink hover:text-ink/70 transition-colors",
                      isActive && "text-ink",
                    )
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right icons */}
          <div className="flex items-center gap-2 md:gap-3">
            <button
              type="button"
              className="p-2 text-ink hover:text-ink/70 transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" strokeWidth={1.25} />
            </button>
            <button
              type="button"
              onClick={openCart}
              className="relative p-2 text-ink hover:text-ink/70 transition-colors"
              aria-label={`Open cart, ${itemCount} item${itemCount === 1 ? "" : "s"}`}
            >
              <ShoppingBag className="w-5 h-5" strokeWidth={1.25} />
              {itemCount > 0 && (
                <span
                  aria-hidden="true"
                  className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-ink text-cream text-[10px] font-medium flex items-center justify-center tabular-nums"
                >
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu drawer */}
      <div
        aria-hidden={!mobileOpen}
        className={cn(
          "fixed inset-0 z-50 md:hidden transition-opacity duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
      >
        <div
          className="absolute inset-0 bg-ink/40"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute inset-y-0 left-0 w-[85%] max-w-sm bg-oat shadow-drawer flex flex-col transition-transform duration-300 ease-out",
            mobileOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="flex items-center justify-between px-5 h-16 border-b border-hairline">
            <Link
              to="/"
              className="font-serif text-2xl tracking-wider-3 text-ink"
              onClick={() => setMobileOpen(false)}
            >
              VELMORA
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="p-2 text-ink"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" strokeWidth={1.25} />
            </button>
          </div>
          <ul className="flex-1 flex flex-col p-6 gap-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className="block py-4 font-serif text-2xl text-ink border-b border-hairline"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="px-6 py-6 border-t border-hairline text-xs label-2">
            Free worldwide shipping · 30-day returns
          </div>
        </div>
      </div>
    </>
  )
}
