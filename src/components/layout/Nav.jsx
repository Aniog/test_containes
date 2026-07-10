import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { cn } from "../../lib/utils.js"
import { useCart } from "../../context/CartContext.jsx"
import { SearchIcon, BagIcon, MenuIcon, CloseIcon } from "../ui/Icons.jsx"

const navLinks = [
  { to: "/shop", label: "Shop" },
  { to: "/shop?category=earrings", label: "Collections" },
  { to: "/journal", label: "Journal" },
  { to: "/about", label: "About" },
]

export default function Nav() {
  const { itemCount, openCart } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  // Pages other than home start with the solid nav treatment.
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
  }, [location.pathname])

  // Lock body scroll when mobile menu open
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

  const solid = scrolled || !isHome
  const textOnDark = isHome && !scrolled

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-velvet",
          solid
            ? "bg-ivory/95 backdrop-blur-md text-ink border-b border-hairline"
            : "bg-transparent text-ivory",
        )}
      >
        <div className="mx-auto max-w-editorial px-6 md:px-10 lg:px-16">
          <div className="flex h-16 md:h-20 items-center justify-between">
            <div className="flex items-center gap-8">
              <Link
                to="/"
                className={cn(
                  "font-serif text-[20px] md:text-[22px] tracking-[0.36em] font-medium",
                  textOnDark ? "text-ivory" : "text-ink",
                )}
                aria-label="Velmora home"
              >
                VELMORA
              </Link>
              <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      cn(
                        "text-[11px] tracking-eyebrow uppercase font-medium transition-colors duration-300",
                        textOnDark
                          ? "text-ivory/85 hover:text-ivory"
                          : "text-ink/75 hover:text-ink",
                        isActive && (textOnDark ? "text-ivory" : "text-ink"),
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>
            </div>

            <div className="flex items-center gap-5">
              <button
                type="button"
                aria-label="Search"
                className={cn(
                  "transition-colors duration-300",
                  textOnDark ? "text-ivory/90 hover:text-ivory" : "text-ink/80 hover:text-ink",
                )}
              >
                <SearchIcon className="h-[18px] w-[18px]" />
              </button>
              <button
                type="button"
                aria-label={`Open cart, ${itemCount} items`}
                onClick={openCart}
                className={cn(
                  "relative transition-colors duration-300",
                  textOnDark ? "text-ivory/90 hover:text-ivory" : "text-ink/80 hover:text-ink",
                )}
              >
                <BagIcon className="h-[18px] w-[18px]" />
                {itemCount > 0 && (
                  <span
                    className={cn(
                      "absolute -top-1.5 -right-2 min-w-[16px] h-[16px] px-1 inline-flex items-center justify-center rounded-full text-[9px] font-medium",
                      textOnDark
                        ? "bg-ivory text-espresso"
                        : "bg-espresso text-ivory",
                    )}
                  >
                    {itemCount}
                  </span>
                )}
              </button>
              <button
                type="button"
                aria-label="Open menu"
                onClick={() => setMobileOpen(true)}
                className={cn(
                  "lg:hidden transition-colors duration-300",
                  textOnDark ? "text-ivory/90 hover:text-ivory" : "text-ink/80 hover:text-ink",
                )}
              >
                <MenuIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-[60] lg:hidden transition-opacity duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-espresso/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute right-0 top-0 h-full w-[88%] max-w-sm bg-ivory text-ink shadow-lift transition-transform duration-500 ease-velvet",
            mobileOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between p-6 border-b border-hairline">
            <span className="font-serif text-[20px] tracking-[0.36em]">VELMORA</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="text-ink/70 hover:text-ink"
            >
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col p-6" aria-label="Mobile">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="py-4 border-b border-hairline text-[12px] tracking-eyebrow uppercase text-ink"
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/shop"
              onClick={() => setMobileOpen(false)}
              className="mt-8 btn-primary"
            >
              Shop the Collection
            </Link>
          </nav>
        </div>
      </div>
    </>
  )
}
