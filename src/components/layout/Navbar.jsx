import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Search, ShoppingBag, Menu, X } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { cn } from "@/lib/utils"

const LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
]

export default function Navbar() {
  const { count, openCart } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  // Transparent only over the homepage hero; solid elsewhere.
  const isHome = location.pathname === "/"
  const solid = scrolled || !isHome || mobileOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid
          ? "bg-ivory/95 text-ink shadow-[0_1px_0_0_rgba(226,214,195,0.8)] backdrop-blur-md"
          : "bg-transparent text-ivory"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-20 sm:px-8">
        {/* Left: mobile menu + logo */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>
          <Link
            to="/"
            className="font-serif text-2xl tracking-[0.3em] sm:text-[1.7rem]"
          >
            VELMORA
          </Link>
        </div>

        {/* Center links */}
        <div className="hidden items-center gap-10 lg:flex">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  "text-[11px] uppercase tracking-[0.22em] transition-colors hover:text-gold",
                  isActive && "text-gold"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* Right: search + cart */}
        <div className="flex items-center gap-5">
          <button
            type="button"
            aria-label="Search"
            className="transition-colors hover:text-gold"
          >
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={openCart}
            aria-label={`Cart, ${count} items`}
            className="relative transition-colors hover:text-gold"
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-medium text-ink">
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-[82%] max-w-sm bg-ivory p-6 text-ink shadow-xl animate-fade-in">
            <div className="flex items-center justify-between">
              <span className="font-serif text-xl tracking-[0.3em]">VELMORA</span>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X size={22} strokeWidth={1.5} />
              </button>
            </div>
            <div className="mt-10 flex flex-col gap-1">
              {LINKS.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    cn(
                      "border-b border-sand py-4 font-serif text-2xl tracking-wide transition-colors hover:text-gold",
                      isActive && "text-gold"
                    )
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
