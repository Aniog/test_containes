import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Search, ShoppingBag, User, Menu, X } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { cn } from "@/lib/utils"

const links = [
  { to: "/shop", label: "Shop" },
  { to: "/shop?collection=earrings", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
]

export default function Navbar({ variant = "auto" }) {
  // variant: "auto" (transparent over hero, solid on scroll) | "solid" (always solid)
  const { itemCount, openCart } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (variant === "solid") {
      setScrolled(true)
      return
    }
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [variant])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname, location.search])

  const isSolid = variant === "solid" || scrolled
  const overLight = isSolid

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-40 transition-all duration-500 ease-editorial",
          overLight
            ? "bg-paper/95 backdrop-blur-sm border-b border-mist text-ink"
            : "bg-transparent text-paper",
        )}
      >
        <div className="container-editorial">
          <div className="h-16 md:h-20 grid grid-cols-3 items-center">
            {/* Mobile burger */}
            <button
              type="button"
              className="md:hidden -ml-1 p-2 inline-flex items-center justify-center"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={20} strokeWidth={1.5} />
            </button>

            {/* Logo */}
            <Link
              to="/"
              className="justify-self-start md:justify-self-start col-start-2 md:col-start-1"
              aria-label="Velmora — home"
            >
              <span
                className={cn(
                  "font-serif text-2xl md:text-[28px] tracking-[0.32em] font-medium",
                  "transition-colors duration-300",
                )}
              >
                VELMORA
              </span>
            </Link>

            {/* Center nav */}
            <nav className="hidden md:flex items-center justify-center gap-10 col-start-2">
              {links.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  className={({ isActive }) =>
                    cn(
                      "text-[11px] font-medium uppercase tracking-eyebrow relative py-1",
                      "transition-colors duration-300",
                      isActive
                        ? "text-gold-deep"
                        : overLight
                          ? "text-ink hover:text-gold-deep"
                          : "text-paper/90 hover:text-paper",
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Right icons */}
            <div className="justify-self-end flex items-center gap-1 md:gap-3">
              <button
                type="button"
                aria-label="Search"
                className={cn(
                  "p-2 transition-colors duration-300",
                  overLight ? "hover:text-gold-deep" : "hover:text-paper",
                )}
              >
                <Search size={18} strokeWidth={1.5} />
              </button>
              <Link
                to="/account"
                aria-label="Account"
                className={cn(
                  "hidden md:inline-flex p-2 transition-colors duration-300",
                  overLight ? "hover:text-gold-deep" : "hover:text-paper",
                )}
              >
                <User size={18} strokeWidth={1.5} />
              </Link>
              <button
                type="button"
                aria-label={`Open cart (${itemCount} items)`}
                onClick={openCart}
                className={cn(
                  "relative p-2 transition-colors duration-300",
                  overLight ? "hover:text-gold-deep" : "hover:text-paper",
                )}
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                {itemCount > 0 ? (
                  <span
                    className={cn(
                      "absolute -top-0.5 -right-0.5 min-w-[16px] h-4 px-1 inline-flex items-center justify-center",
                      "text-[9px] font-medium uppercase tracking-wide rounded-full",
                      overLight
                        ? "bg-ink text-paper"
                        : "bg-paper text-ink",
                    )}
                  >
                    {itemCount}
                  </span>
                ) : null}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 md:hidden transition-opacity duration-300 ease-editorial",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-ink/40"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute top-0 left-0 right-10 h-full bg-paper text-ink",
            "transform transition-transform duration-500 ease-editorial",
            mobileOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="px-6 h-16 flex items-center justify-between border-b border-mist">
            <span className="font-serif text-xl tracking-[0.32em]">VELMORA</span>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="p-2 -mr-2"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>
          <nav className="px-6 py-8 flex flex-col gap-6">
            {links.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "font-serif text-2xl",
                    isActive ? "text-gold-deep" : "text-ink",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="my-4 hairline" />
            <Link
              to="/account"
              className="font-serif text-2xl text-ink"
            >
              Account
            </Link>
          </nav>
        </div>
      </div>
    </>
  )
}
