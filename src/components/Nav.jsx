import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Search, ShoppingBag, User, Menu, X } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { cn } from "@/lib/utils"

const links = [
  { to: "/shop", label: "Shop" },
  { to: "/shop?category=earrings", label: "Collections", match: "/shop" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
]

export default function Nav({ forceSolid = false }) {
  const { summary, openCart } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (forceSolid) {
      setScrolled(true)
      return
    }
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [forceSolid])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname, location.search])

  // Lock scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  const solid = scrolled

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-elegant",
          solid
            ? "bg-ivory-100/95 backdrop-blur-md border-b border-line"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-3 items-center h-16 sm:h-20">
            {/* Left: logo (mobile menu button) */}
            <div className="flex items-center justify-start">
              <Link
                to="/"
                aria-label="Velmora — Home"
                className={cn(
                  "font-serif text-2xl sm:text-[1.7rem] tracking-[0.32em] font-medium transition-colors duration-500",
                  solid ? "text-espresso-800" : "text-ivory"
                )}
              >
                VELMORA
              </Link>
            </div>

            {/* Center: nav links (desktop) */}
            <nav className="hidden md:flex items-center justify-center gap-10">
              {links.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  className={({ isActive }) =>
                    cn(
                      "text-[0.7rem] font-medium tracking-[0.25em] uppercase transition-colors duration-300 relative py-1",
                      solid ? "text-espresso-800" : "text-ivory",
                      solid && isActive && "after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-px after:bg-espresso-800",
                      !solid && isActive && "after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-px after:bg-ivory"
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Right: icons */}
            <div className="flex items-center justify-end gap-2 sm:gap-4">
              <button
                type="button"
                aria-label="Search"
                className={cn(
                  "p-2 transition-colors duration-300",
                  solid ? "text-espresso-800 hover:text-gold-400" : "text-ivory hover:text-gold-200"
                )}
              >
                <Search className="w-[18px] h-[18px]" strokeWidth={1.5} />
              </button>
              <button
                type="button"
                aria-label="Account"
                className={cn(
                  "hidden sm:inline-flex p-2 transition-colors duration-300",
                  solid ? "text-espresso-800 hover:text-gold-400" : "text-ivory hover:text-gold-200"
                )}
              >
                <User className="w-[18px] h-[18px]" strokeWidth={1.5} />
              </button>
              <button
                type="button"
                aria-label={`Cart, ${summary.itemCount} items`}
                onClick={openCart}
                className={cn(
                  "relative p-2 transition-colors duration-300",
                  solid ? "text-espresso-800 hover:text-gold-400" : "text-ivory hover:text-gold-200"
                )}
              >
                <ShoppingBag className="w-[18px] h-[18px]" strokeWidth={1.5} />
                {summary.itemCount > 0 && (
                  <span
                    className={cn(
                      "absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 grid place-items-center text-[10px] font-medium rounded-full",
                      solid ? "bg-espresso-800 text-ivory" : "bg-ivory text-espresso-800"
                    )}
                  >
                    {summary.itemCount}
                  </span>
                )}
              </button>
              <button
                type="button"
                aria-label="Open menu"
                onClick={() => setMobileOpen(true)}
                className={cn(
                  "md:hidden p-2 transition-colors duration-300",
                  solid ? "text-espresso-800" : "text-ivory"
                )}
              >
                <Menu className="w-5 h-5" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-[60] md:hidden transition-opacity duration-500",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-espresso-900/40"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute top-0 right-0 bottom-0 w-[86%] max-w-sm bg-ivory-100 shadow-drawer transition-transform duration-500 ease-elegant flex flex-col",
            mobileOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between px-6 h-16 border-b border-line">
            <span className="font-serif text-xl tracking-[0.3em] text-espresso-800">VELMORA</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="p-2 text-espresso-800"
            >
              <X className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-6 py-10 flex flex-col gap-7">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="font-serif text-3xl text-espresso-800 hover:text-gold-500 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="px-6 py-6 border-t border-line space-y-2 text-xs tracking-[0.2em] uppercase text-taupe-500">
            <p>Free Worldwide Shipping</p>
            <p>30-Day Returns</p>
          </div>
        </div>
      </div>
    </>
  )
}
