import { useEffect, useState } from "react"
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom"
import { Search, ShoppingBag, Menu, X } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/shop?category=earrings", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
]

export default function Navbar({ tone = "light" }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { itemCount, openCart } = useCart()
  const navigate = useNavigate()
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

  // When the navbar sits over the hero we start transparent. After scroll it
  // becomes a solid light bar. On non-home pages it's always solid.
  const isHome = location.pathname === "/"
  const transparent = isHome && !scrolled
  const onDark = transparent && tone === "dark"

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-500 ease-editorial",
          transparent
            ? "bg-transparent"
            : "bg-canvas/95 backdrop-blur-sm border-b border-hairline",
        )}
      >
        <div className="container-content flex h-16 items-center justify-between md:h-20">
          {/* Left: logo */}
          <Link
            to="/"
            className={cn(
              "font-serif text-2xl tracking-[0.32em] md:text-[26px] md:tracking-[0.34em]",
              onDark ? "text-onNight" : "text-ink",
            )}
            aria-label="Velmora home"
          >
            VELMORA
          </Link>

          {/* Center: nav links */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "text-[12px] font-medium uppercase tracking-[0.22em] transition-colors duration-300 ease-editorial",
                    onDark
                      ? "text-onNight/85 hover:text-onNight"
                      : "text-ink/80 hover:text-ink",
                    isActive && !onDark && "text-ink",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right: search + cart */}
          <div className="flex items-center gap-2 md:gap-4">
            <button
              type="button"
              aria-label="Search"
              onClick={() => navigate("/shop")}
              className={cn(
                "p-2 transition-colors duration-300",
                onDark
                  ? "text-onNight hover:text-gold"
                  : "text-ink hover:text-gold-deep",
              )}
            >
              <Search className="h-[18px] w-[18px]" strokeWidth={1.4} />
            </button>
            <button
              type="button"
              aria-label={`Cart, ${itemCount} items`}
              onClick={openCart}
              className={cn(
                "relative p-2 transition-colors duration-300",
                onDark
                  ? "text-onNight hover:text-gold"
                  : "text-ink hover:text-gold-deep",
              )}
            >
              <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.4} />
              {itemCount > 0 && (
                <span
                  className={cn(
                    "absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-[10px] font-semibold",
                    onDark
                      ? "bg-gold text-onNight"
                      : "bg-ink text-onNight",
                  )}
                >
                  {itemCount}
                </span>
              )}
            </button>
            <button
              type="button"
              aria-label="Menu"
              onClick={() => setMobileOpen((s) => !s)}
              className={cn(
                "p-2 md:hidden transition-colors duration-300",
                onDark ? "text-onNight" : "text-ink",
              )}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" strokeWidth={1.4} />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={1.4} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-30 bg-canvas transition-opacity duration-500 ease-editorial md:hidden",
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8 pt-16">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className="font-serif text-4xl tracking-[0.04em] text-ink"
            >
              {link.label}
            </NavLink>
          ))}
          <span className="my-2 h-px w-12 bg-hairline" />
          <Link
            to="/shop"
            className="text-[12px] font-semibold uppercase tracking-[0.24em] text-inkSoft"
          >
            Shop All
          </Link>
        </div>
      </div>
    </>
  )
}
