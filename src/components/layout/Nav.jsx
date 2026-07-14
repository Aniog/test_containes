import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Search, ShoppingBag, Menu, X } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { cn } from "@/lib/utils"

const links = [
  { to: "/shop", label: "Shop" },
  { to: "/shop?category=earrings", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { itemCount, openCart } = useCart()
  const location = useLocation()

  // Hero is only on the home page; on other routes the nav is always solid.
  const isHome = location.pathname === "/"

  useEffect(() => {
    if (!isHome) {
      setScrolled(true)
      return
    }
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [isHome])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname, location.search])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      const prev = document.body.style.overflow
      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [mobileOpen])

  const transparent = isHome && !scrolled

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-elegant",
          transparent
            ? "bg-transparent text-ivory-50"
            : "bg-ivory-100/95 text-ink-500 shadow-[0_1px_0_0_rgba(224,214,197,1)] backdrop-blur",
        )}
      >
        <div className="container-x flex h-16 items-center justify-between md:h-20">
          <Link
            to="/"
            className="font-serif text-2xl font-medium tracking-wider2 md:text-[26px]"
            aria-label="Velmora — home"
          >
            VELMORA
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-10 md:flex"
          >
            {links.map((l) => (
              <NavLink
                key={l.label}
                to={l.to}
                className={({ isActive }) =>
                  cn(
                    "text-[12px] font-semibold uppercase tracking-wider2 transition-colors duration-300",
                    transparent
                      ? "text-ivory-50/90 hover:text-ivory-50"
                      : "text-ink-500/80 hover:text-gold-500",
                    isActive && l.to === "/shop" && !transparent && "text-gold-500",
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-1 md:gap-3">
            <button
              type="button"
              aria-label="Search"
              className={cn(
                "flex h-10 w-10 items-center justify-center transition-colors duration-300",
                transparent ? "hover:text-ivory-50" : "hover:text-gold-500",
              )}
            >
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={openCart}
              aria-label={`Open cart, ${itemCount} items`}
              className={cn(
                "relative flex h-10 w-10 items-center justify-center transition-colors duration-300",
                transparent ? "hover:text-ivory-50" : "hover:text-gold-500",
              )}
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              {itemCount > 0 && (
                <span
                  className={cn(
                    "absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-[10px] font-semibold leading-none",
                    transparent
                      ? "bg-ivory-50 text-ink-600"
                      : "bg-ink-500 text-ivory-50",
                  )}
                >
                  {itemCount}
                </span>
              )}
            </button>
            <button
              type="button"
              aria-label="Menu"
              onClick={() => setMobileOpen(true)}
              className={cn(
                "ml-1 flex h-10 w-10 items-center justify-center md:hidden",
                transparent ? "hover:text-ivory-50" : "hover:text-gold-500",
              )}
            >
              <Menu size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        aria-hidden={!mobileOpen}
        className={cn(
          "fixed inset-0 z-[60] md:hidden",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        <div
          onClick={() => setMobileOpen(false)}
          className={cn(
            "absolute inset-0 bg-ink-700/60 backdrop-blur-sm transition-opacity duration-500",
            mobileOpen ? "opacity-100" : "opacity-0",
          )}
        />
        <div
          className={cn(
            "absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-ivory-100 transition-transform duration-500 ease-elegant",
            mobileOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between border-b border-taupe-200 px-6 py-5">
            <span className="font-serif text-2xl text-ink-500">VELMORA</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="flex h-9 w-9 items-center justify-center text-ink-500"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-6 py-8">
            {links.map((l) => (
              <NavLink
                key={l.label}
                to={l.to}
                className="border-b border-taupe-200 py-5 font-serif text-3xl text-ink-500 transition-colors hover:text-gold-500"
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-auto border-t border-taupe-200 px-6 py-6 text-[12px] uppercase tracking-wider2 text-ink-200">
            Free worldwide shipping · 30-day returns
          </div>
        </div>
      </div>
    </>
  )
}
