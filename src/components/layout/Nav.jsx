import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Search, ShoppingBag, Menu, X } from "lucide-react"
import Logo from "./Logo"
import { useCart } from "@/context/CartContext"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { summary, open } = useCart()
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

  // Hero page is dark by default. Other pages: force solid.
  const isHome = location.pathname === "/"
  const solid = !isHome || scrolled

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          solid
            ? "bg-ink/95 backdrop-blur-sm border-b border-bone/10 text-bone"
            : "bg-transparent text-bone"
        )}
      >
        <nav className="mx-auto max-w-editorial px-5 md:px-10 h-16 md:h-20 flex items-center justify-between">
          <Link to="/" className="md:hidden" aria-label="Velmora home">
            <Logo tone="bone" />
          </Link>
          <div className="hidden md:flex items-center flex-1">
            <Logo tone="bone" />
          </div>

          <ul className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    cn(
                      "nav-link text-[12px] tracking-widest2 uppercase font-medium",
                      isActive ? "text-gold" : "text-bone/85 hover:text-bone"
                    )
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 md:gap-6 flex-1 justify-end">
            <button
              type="button"
              aria-label="Search"
              className="hidden md:inline-flex p-2 hover:text-gold transition-colors"
            >
              <Search className="w-[18px] h-[18px]" />
            </button>
            <button
              type="button"
              aria-label={`Open cart, ${summary.count} item${summary.count === 1 ? "" : "s"}`}
              onClick={open}
              className="relative p-2 hover:text-gold transition-colors"
            >
              <ShoppingBag className="w-[18px] h-[18px]" />
              {summary.count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-gold text-ink text-[10px] font-medium flex items-center justify-center">
                  {summary.count}
                </span>
              )}
            </button>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-2 -mr-2"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-[60] md:hidden transition-opacity duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute right-0 top-0 h-full w-[82%] max-w-sm bg-ink text-bone border-l border-bone/10 transition-transform duration-400",
            mobileOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between px-6 h-16 border-b border-bone/10">
            <Logo tone="bone" />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="p-2 -mr-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <ul className="px-6 py-8 space-y-5">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    cn(
                      "block font-serif text-2xl",
                      isActive ? "text-gold" : "text-bone"
                    )
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="px-6 mt-8 space-y-3 text-[12px] tracking-widest2 uppercase text-bone/60">
            <p>Free worldwide shipping over $80</p>
            <p>30-day returns</p>
          </div>
        </div>
      </div>
    </>
  )
}
