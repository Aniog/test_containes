import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Search, ShoppingBag, Menu, X } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/shop" },
  { label: "About", href: "/#story" },
  { label: "Journal", href: "/#journal" },
]

export default function Navbar() {
  const { count, openCart } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === "/"

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const isTransparent = isHome && !scrolled && !mobileOpen

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        isTransparent
          ? "bg-transparent text-cream"
          : "bg-cream/95 text-ink backdrop-blur-sm shadow-sm"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="font-serif text-xl font-semibold uppercase tracking-[0.18em]"
        >
          Velmora
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="relative py-2 text-xs font-sans font-medium uppercase tracking-[0.15em] transition-colors hover:text-gold-dark"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Search"
            className="p-1 transition-colors hover:text-gold-dark"
          >
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label="Open cart"
            onClick={openCart}
            className="relative p-1 transition-colors hover:text-gold-dark"
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[9px] font-sans font-semibold text-white">
                {count}
              </span>
            )}
          </button>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="p-1 transition-colors hover:text-gold-dark md:hidden"
          >
            {mobileOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden bg-cream transition-all duration-500 md:hidden",
          mobileOpen ? "max-h-96 border-b border-gold-muted" : "max-h-0"
        )}
      >
        <nav className="flex flex-col px-6 pb-6 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="border-b border-gold-muted py-4 text-sm font-sans font-medium uppercase tracking-[0.15em] text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
