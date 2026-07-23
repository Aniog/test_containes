import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Search, ShoppingBag, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/CartContext"

const navLinks = [
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/#categories" },
  { label: "About", href: "/#story" },
  { label: "Journal", href: "/#" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { setIsOpen, count } = useCart()
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
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        transparent
          ? "bg-transparent text-velmora-cream"
          : "bg-velmora-cream/95 text-velmora-charcoal shadow-sm backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <button
          className="p-2 lg:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>

        <Link
          to="/"
          className="font-serif text-2xl uppercase tracking-[0.25em] lg:text-3xl"
        >
          Velmora
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className="relative font-sans text-xs uppercase tracking-[0.15em] transition-opacity hover:opacity-70 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            className="p-2 transition-opacity hover:opacity-70"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            className="relative p-2 transition-opacity hover:opacity-70"
            onClick={() => setIsOpen(true)}
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-velmora-gold text-[10px] font-medium text-velmora-cream">
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-velmora-border bg-velmora-cream px-6 py-6 lg:hidden">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block font-serif text-lg uppercase tracking-[0.15em] text-velmora-charcoal"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
