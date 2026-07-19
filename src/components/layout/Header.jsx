import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { Menu, Search, ShoppingBag, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Shop", to: "/shop" },
  { label: "Collections", to: "/shop?collection=gift" },
  { label: "About", to: "/#story" },
  { label: "Journal", to: "/#journal" },
]

export default function Header({ itemCount, onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-40 border-b transition duration-500",
        scrolled || menuOpen
          ? "border-velmora-hairline bg-velmora-cream/95 text-velmora-ink shadow-sm backdrop-blur-xl"
          : "border-transparent bg-transparent text-velmora-cream",
      )}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12" aria-label="Primary navigation">
        <div className="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="focus-ring rounded-full p-2 transition hover:text-velmora-gold"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <Link to="/" className="font-serif text-3xl font-semibold tracking-wider text-current">
          VELMORA
        </Link>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className="text-xs font-bold uppercase tracking-luxe text-current/90 transition hover:text-velmora-gold"
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/shop"
            className="focus-ring hidden rounded-full p-2 text-current transition hover:text-velmora-gold sm:inline-flex"
            aria-label="Search Velmora"
          >
            <Search className="h-5 w-5" />
          </Link>
          <button
            type="button"
            onClick={onCartOpen}
            className="focus-ring relative rounded-full p-2 text-current transition hover:text-velmora-gold"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[10px] font-bold text-velmora-ink">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "lg:hidden overflow-hidden border-t border-velmora-hairline bg-velmora-cream text-velmora-ink transition-all duration-500",
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="space-y-1 px-5 py-5">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-velmora-hairline py-4 font-serif text-3xl font-medium text-velmora-ink"
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}
