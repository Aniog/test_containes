import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Search, ShoppingBag, Menu, X } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { cn } from "@/lib/utils"

const links = [
  { label: "Shop", to: "/shop" },
  { label: "Collections", to: "/shop" },
  { label: "About", to: "/about" },
  { label: "Journal", to: "/journal" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { count, openCart } = useCart()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  // Transparent only over the homepage hero; solid elsewhere.
  const isHome = location.pathname === "/"
  const transparent = isHome && !scrolled && !mobileOpen

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        transparent
          ? "bg-transparent text-ivory"
          : "bg-ivory/95 backdrop-blur-md text-ink border-b border-line shadow-[0_4px_30px_-20px_rgba(43,37,32,0.3)]"
      )}
    >
      <nav className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        {/* Left: mobile menu + logo */}
        <div className="flex items-center gap-3 md:gap-0 md:w-1/3">
          <button
            className="md:hidden -ml-1 p-1"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Open menu"
          >
            {mobileOpen ? <X width={22} /> : <Menu width={22} />}
          </button>
          <Link
            to="/"
            className="font-serif text-2xl md:text-[26px] tracking-[0.25em] font-medium md:absolute md:left-1/2 md:-translate-x-1/2"
          >
            VELMORA
          </Link>
        </div>

        {/* Center links (desktop) */}
        <div className="hidden md:flex items-center gap-9 w-1/3 justify-start">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className="text-[11px] uppercase tracking-[0.18em] font-medium hover:text-gold transition-colors duration-300"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right: icons */}
        <div className="flex items-center gap-4 md:gap-5 md:w-1/3 justify-end">
          <button aria-label="Search" className="hover:text-gold transition-colors duration-300">
            <Search width={19} strokeWidth={1.5} />
          </button>
          <button
            aria-label="Open cart"
            onClick={openCart}
            className="relative hover:text-gold transition-colors duration-300"
          >
            <ShoppingBag width={19} strokeWidth={1.5} />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-ivory text-[10px] font-medium rounded-full w-4 h-4 flex items-center justify-center">
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-ivory text-ink border-t border-line animate-fade-in">
          <div className="px-5 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="font-serif text-xl tracking-wide"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
