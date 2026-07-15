import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Search, ShoppingBag, Menu, X } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { to: "/shop",        label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/about",       label: "About" },
  { to: "/journal",     label: "Journal" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { itemCount, openCart } = useCart()
  const location = useLocation()

  // Solid background as soon as the user scrolls past a few pixels, or always
  // solid on routes that aren't the homepage.
  const isHome = location.pathname === "/"
  const [forceSolid, setForceSolid] = useState(!isHome)

  useEffect(() => {
    setForceSolid(location.pathname !== "/")
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const solid = scrolled || forceSolid

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-editorial",
          solid
            ? "bg-cream/95 backdrop-blur-sm shadow-nav text-espresso"
            : "bg-transparent text-cream",
        )}
      >
        <div className="container-editorial">
          <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
            {/* Left: logo (mobile shows menu icon) */}
            <div className="flex items-center gap-3 flex-1 lg:flex-none">
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden p-2 -ml-2"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>
              <Link
                to="/"
                className={cn(
                  "font-serif tracking-[0.32em] text-[20px] sm:text-[22px] lg:text-[24px] font-medium transition-colors",
                )}
              >
                VELMORA
              </Link>
            </div>

            {/* Center links — desktop */}
            <nav className="hidden lg:flex items-center gap-10">
              {NAV_LINKS.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    cn(
                      "relative text-[12px] uppercase tracking-wider-3 font-medium transition-colors duration-300",
                      solid ? "text-espresso hover:text-gold-600" : "text-cream hover:text-gold-200",
                      isActive && "text-gold-500",
                    )
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </nav>

            {/* Right: search + cart */}
            <div className="flex items-center gap-2 sm:gap-4 flex-1 justify-end">
              <button
                aria-label="Search"
                className={cn(
                  "p-2 transition-colors",
                  solid ? "hover:text-gold-600" : "hover:text-gold-200",
                )}
              >
                <Search className="w-[18px] h-[18px]" strokeWidth={1.4} />
              </button>
              <button
                onClick={openCart}
                aria-label={`Cart, ${itemCount} items`}
                className={cn(
                  "relative p-2 transition-colors",
                  solid ? "hover:text-gold-600" : "hover:text-gold-200",
                )}
              >
                <ShoppingBag className="w-[18px] h-[18px]" strokeWidth={1.4} />
                {itemCount > 0 && (
                  <span
                    className={cn(
                      "absolute -top-0.5 -right-0.5 min-w-[16px] h-[16px] px-1 grid place-items-center text-[10px] font-medium leading-none rounded-full",
                      solid ? "bg-espresso text-cream" : "bg-cream text-espresso",
                    )}
                  >
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} links={NAV_LINKS} />
    </>
  )
}

function MobileDrawer({ open, onClose, links }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      <div
        className="absolute inset-0 bg-espresso/40 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      <aside className="absolute top-0 left-0 bottom-0 w-[85%] max-w-sm bg-cream text-espresso shadow-elevated animate-slide-in-right" style={{ animationName: 'fade-in', transform: 'none' }}>
        <div className="flex items-center justify-between px-6 h-16 border-b border-taupe-300/40">
          <span className="font-serif tracking-[0.32em] text-[20px] font-medium">VELMORA</span>
          <button onClick={onClose} aria-label="Close menu" className="p-2 -mr-2">
            <X className="w-5 h-5" />
          </button>
        </div>
        <nav className="px-6 py-8 flex flex-col gap-6">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={onClose}
              className="font-serif text-3xl text-espresso hover:text-gold-600 transition-colors"
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="px-6 mt-6 hairline-gold" />
        <p className="px-6 py-6 text-[11px] uppercase tracking-wider-3 text-mocha-400">
          Crafted to be treasured
        </p>
      </aside>
    </div>
  )
}
