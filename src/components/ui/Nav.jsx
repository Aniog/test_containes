import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { Search, ShoppingBag, X, Menu } from "lucide-react"
import { useCart, useUI } from "@/lib/cart-context.jsx"
import { useScrollPosition } from "@/components/ui/useScrollPosition.js"
import { cn } from "@/lib/utils.js"

const links = [
  { to: "/shop", label: "Shop" },
  { to: "/shop?cat=earrings", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
]

export default function Nav({ variant = "default" }) {
  const { cart, openCart } = useCart()
  const { mobileNavOpen, setMobileNavOpen } = useUI()
  const scrolled = useScrollPosition(40)
  const [searchOpen, setSearchOpen] = useState(false)

  // variant: "default" = transparent over hero, "solid" = always solid
  const isTransparent = variant === "default" && !scrolled && !mobileNavOpen
  const cartCount = cart.reduce((sum, l) => sum + l.qty, 0)

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-500 ease-editorial",
          isTransparent
            ? "bg-transparent text-ivory"
            : "bg-ivory/95 text-espresso backdrop-blur-sm border-b border-hairline"
        )}
      >
        <div className="container-x flex h-16 items-center justify-between md:h-20">
          {/* Mobile menu trigger */}
          <button
            type="button"
            className="md:hidden p-2 -ml-2"
            onClick={() => setMobileNavOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" strokeWidth={1.5} />
          </button>

          {/* Logo */}
          <Link
            to="/"
            className="font-serif text-xl tracking-[0.22em] font-medium md:text-2xl"
            aria-label="Velmora — home"
          >
            VELMORA
          </Link>

          {/* Center links */}
          <nav className="hidden md:flex items-center gap-9" aria-label="Primary">
            {links.map((l) => (
              <NavLink
                key={l.label}
                to={l.to}
                className={({ isActive }) =>
                  cn(
                    "font-sans text-[12px] uppercase tracking-[0.22em] transition-colors duration-300",
                    isActive ? "text-gold" : "hover:text-gold"
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-1 md:gap-2">
            <button
              type="button"
              className="p-2 transition-colors hover:text-gold"
              aria-label="Search"
              onClick={() => setSearchOpen((s) => !s)}
            >
              <Search className="h-5 w-5" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              className="relative p-2 transition-colors hover:text-gold"
              aria-label={`Open cart, ${cartCount} items`}
              onClick={openCart}
            >
              <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-espresso px-1 font-sans text-[10px] font-medium text-ivory">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Search dropdown */}
        {searchOpen && (
          <div className="border-t border-hairline bg-ivory text-espresso">
            <div className="container-x flex items-center gap-3 py-4">
              <Search className="h-4 w-4 text-taupe" strokeWidth={1.5} />
              <input
                autoFocus
                type="search"
                placeholder="Search for jewelry, materials, gifts…"
                className="flex-1 bg-transparent text-sm placeholder:text-taupe-light focus:outline-none"
                onKeyDown={(e) => {
                  if (e.key === "Escape") setSearchOpen(false)
                }}
              />
              <button
                type="button"
                className="p-1 text-taupe hover:text-espresso"
                onClick={() => setSearchOpen(false)}
                aria-label="Close search"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Mobile menu */}
      {mobileNavOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-espresso/40"
            onClick={() => setMobileNavOpen(false)}
            aria-hidden="true"
          />
          <aside className="absolute inset-y-0 left-0 w-[85%] max-w-sm bg-ivory shadow-2xl animate-slideInRight flex flex-col">
            <div className="flex items-center justify-between border-b border-hairline px-6 py-5">
              <span className="font-serif text-xl tracking-[0.22em]">VELMORA</span>
              <button
                type="button"
                onClick={() => setMobileNavOpen(false)}
                aria-label="Close menu"
                className="p-2 -mr-2"
              >
                <X className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>
            <nav className="flex-1 px-6 py-8" aria-label="Mobile">
              <ul className="space-y-6">
                {links.map((l) => (
                  <li key={l.label}>
                    <NavLink
                      to={l.to}
                      onClick={() => setMobileNavOpen(false)}
                      className="font-serif text-2xl text-espresso"
                    >
                      {l.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="border-t border-hairline px-6 py-5 text-xs text-taupe">
              Free worldwide shipping over $75 · 30-day returns
            </div>
          </aside>
        </div>
      )}
    </>
  )
}
