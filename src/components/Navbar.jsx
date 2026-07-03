import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Search, ShoppingBag, Menu, X } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { itemCount, openCart } = useCart()
  const location = useLocation()
  const isHome = location.pathname === "/"

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const transparent = isHome && !scrolled && !mobileOpen

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-40 transition-all duration-300",
        transparent ? "bg-transparent text-white" : "bg-paper/95 text-ink backdrop-blur-md shadow-sm"
      )}
    >
      <nav className="mx-auto flex h-16 md:h-20 max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-12">
        <Link
          to="/"
          className="font-serif text-xl md:text-2xl font-medium uppercase tracking-ultra"
        >
          Velmora
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className="font-sans text-xs font-medium uppercase tracking-wide hover:text-champagne transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 md:gap-5">
          <button aria-label="Search" className="hover:text-champagne transition-colors">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button
            onClick={openCart}
            aria-label="Open cart"
            className="relative hover:text-champagne transition-colors"
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            {itemCount > 0 && (
              <span className="absolute -right-2 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-champagne text-[9px] font-semibold text-white">
                {itemCount}
              </span>
            )}
          </button>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button aria-label="Open menu" className="md:hidden hover:text-champagne transition-colors">
                <Menu size={22} strokeWidth={1.5} />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] bg-paper">
              <div className="flex flex-col gap-8 pt-8">
                <Link
                  to="/"
                  onClick={() => setMobileOpen(false)}
                  className="font-serif text-2xl font-medium uppercase tracking-ultra text-ink"
                >
                  Velmora
                </Link>
                <ul className="flex flex-col gap-5">
                  {navLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="font-sans text-sm font-medium uppercase tracking-wide text-ink hover:text-champagne"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
