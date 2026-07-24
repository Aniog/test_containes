import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Search, ShoppingBag, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useCart } from "@/context/CartContext"

const navLinks = [
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { count, openCart } = useCart()
  const { pathname } = useLocation()
  const isHome = pathname === "/"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const transparent = isHome && !scrolled && !mobileOpen

  return (
    <header
      className={cn(
        "fixed top-0 z-40 w-full transition-all duration-300",
        transparent
          ? "bg-transparent text-white"
          : "bg-velmora-cream/95 text-velmora-espresso shadow-sm backdrop-blur"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        <Link
          to="/"
          className="font-serif text-2xl uppercase tracking-widest md:text-3xl"
        >
          Velmora
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className="font-sans text-xs uppercase tracking-label transition-colors hover:text-velmora-gold"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Search"
            className="p-1 transition-colors hover:text-velmora-gold"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Cart"
            className="relative p-1 transition-colors hover:text-velmora-gold"
            onClick={openCart}
          >
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-velmora-gold text-[10px] font-medium text-white">
                {count}
              </span>
            )}
          </button>
          <button
            type="button"
            className="p-1 md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 md:hidden",
          mobileOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="border-t border-velmora-espresso/10 bg-velmora-cream px-4 py-4 text-velmora-espresso">
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block font-sans text-sm uppercase tracking-label"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
