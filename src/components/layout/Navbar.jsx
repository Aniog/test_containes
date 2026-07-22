import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Search, ShoppingBag, Menu, X } from "lucide-react"
import { useCart } from "@/context/CartContext"
import MobileMenu from "./MobileMenu"

const NAV_LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/shop?cat=earrings", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { count, openCart } = useCart()
  const location = useLocation()

  // Transparent over hero on homepage only. Other pages start solid.
  const isHome = location.pathname === "/"
  const solid = !isHome || scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close mobile on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname, location.search])

  const textColor = solid ? "text-ink" : "text-cream"
  const linkColor = solid ? "text-ink" : "text-cream"
  const linkHover = solid ? "hover:text-gold" : "hover:text-gold-soft"

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          solid
            ? "bg-cream/95 backdrop-blur-sm border-b border-hairline"
            : "bg-transparent border-b border-transparent",
        ].join(" ")}
      >
        <nav className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12">
          <div className="h-16 md:h-20 flex items-center justify-between gap-6">
            {/* Left: logo */}
            <Link
              to="/"
              className={`font-serif text-[22px] md:text-[26px] tracking-wider3 ${textColor} font-semibold shrink-0`}
              aria-label="Velmora home"
            >
              VELMORA
            </Link>

            {/* Center: nav links (desktop) */}
            <ul className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      [
                        "eyebrow transition-colors duration-300",
                        linkColor,
                        linkHover,
                        isActive && (solid ? "text-gold" : "text-gold-soft"),
                      ]
                        .filter(Boolean)
                        .join(" ")
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Right: search + cart */}
            <div className={`flex items-center gap-4 md:gap-5 ${textColor}`}>
              <button
                type="button"
                aria-label="Search"
                className={`hidden sm:inline-flex p-1 transition-colors duration-300 ${linkHover}`}
              >
                <Search size={18} strokeWidth={1.5} />
              </button>
              <button
                type="button"
                onClick={openCart}
                aria-label="Open cart"
                className={`relative p-1 transition-colors duration-300 ${linkHover}`}
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                {count > 0 && (
                  <span
                    className={[
                      "absolute -top-1 -right-2 min-w-[18px] h-[18px] px-1 rounded-full text-[10px] font-medium flex items-center justify-center tracking-normal",
                      solid ? "bg-ink text-cream" : "bg-cream text-ink",
                    ].join(" ")}
                    aria-label={`${count} items in cart`}
                  >
                    {count}
                  </span>
                )}
              </button>
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className={`md:hidden p-1 transition-colors duration-300 ${linkHover}`}
                aria-label="Open menu"
              >
                <Menu size={20} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </nav>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={NAV_LINKS}
      />
    </>
  )
}
