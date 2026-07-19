import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Search, ShoppingBag, Menu, X } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { cn } from "@/lib/utils"

const links = [
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
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

  const onHome = location.pathname === "/"
  const transparent = onHome && !scrolled && !mobileOpen

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        transparent
          ? "bg-transparent"
          : "bg-ivory/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(28,23,20,0.08)]"
      )}
    >
      <nav className="mx-auto flex max-w-8xl items-center justify-between px-5 py-4 md:px-8">
        {/* Left: mobile menu + logo */}
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Open menu"
          >
            {mobileOpen ? (
              <X className={cn("h-5 w-5", transparent ? "text-ivory" : "text-ink")} />
            ) : (
              <Menu className={cn("h-5 w-5", transparent ? "text-ivory" : "text-ink")} />
            )}
          </button>
          <Link
            to="/"
            className={cn(
              "font-serif text-2xl tracking-widest3 md:text-3xl",
              transparent ? "text-ivory" : "text-ink"
            )}
          >
            VELMORA
          </Link>
        </div>

        {/* Center: links */}
        <div className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={cn(
                "text-xs uppercase tracking-widest2 transition-colors hover:text-gold",
                transparent ? "text-ivory" : "text-ink"
              )}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Right: icons */}
        <div className="flex items-center gap-5">
          <button
            aria-label="Search"
            className={cn("transition-colors hover:text-gold", transparent ? "text-ivory" : "text-ink")}
          >
            <Search className="h-5 w-5" strokeWidth={1.5} />
          </button>
          <button
            onClick={openCart}
            aria-label="Open cart"
            className={cn(
              "relative transition-colors hover:text-gold",
              transparent ? "text-ivory" : "text-ink"
            )}
          >
            <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center bg-gold px-1 text-[10px] font-medium text-ink">
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden bg-ivory transition-all duration-300 md:hidden",
          mobileOpen ? "max-h-96 border-t border-sand" : "max-h-0"
        )}
      >
        <div className="flex flex-col px-5 py-4">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="border-b border-sand py-3 text-sm uppercase tracking-widest2 text-ink last:border-0"
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}
