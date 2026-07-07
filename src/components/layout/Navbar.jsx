import * as React from "react"
import { Link, useLocation } from "react-router-dom"
import { Search, ShoppingBag, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useCart } from "@/lib/cartContext"

const navLinks = [
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/shop" },
  { label: "About", href: "/#story" },
  { label: "Journal", href: "/" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const { itemCount, openCart } = useCart()
  const { pathname } = useLocation()
  const isHome = pathname === "/"

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const textColor = isHome && !scrolled ? "text-white" : "text-velmora-espresso"
  const bg = isHome && !scrolled ? "bg-transparent" : "bg-velmora-cream/95 backdrop-blur-md shadow-sm"

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
          bg,
          textColor
        )}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8 lg:px-12">
          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="p-2 md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>

          {/* Logo */}
          <Link
            to="/"
            className="font-serif text-2xl font-semibold tracking-[0.12em] md:text-3xl"
          >
            VELMORA
          </Link>

          {/* Center links desktop */}
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="font-sans text-xs uppercase tracking-[0.15em] transition-colors hover:text-velmora-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right icons */}
          <div className="flex items-center gap-3 md:gap-5">
            <button
              type="button"
              className="p-2 transition-colors hover:text-velmora-gold"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={openCart}
              className="relative p-2 transition-colors hover:text-velmora-gold"
              aria-label="Open cart"
            >
              <ShoppingBag className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute right-0 top-0 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-velmora-gold px-1 text-[10px] font-semibold text-velmora-espresso">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu sheet */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true">
          <div
            className="absolute inset-0 bg-velmora-espresso/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[80vw] bg-velmora-cream p-6 shadow-2xl">
            <div className="mb-8 flex items-center justify-between">
              <span className="font-serif text-xl tracking-[0.12em]">VELMORA</span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="p-2 hover:text-velmora-gold"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <ul className="space-y-5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-serif text-2xl text-velmora-espresso transition-colors hover:text-velmora-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  )
}
