import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Search, Menu, X } from "lucide-react"
import { CartTrigger } from "@/components/CartDrawer"
import { cn } from "@/lib/utils"

const navLinks = [
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === "/"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const transparent = isHome && !scrolled && !mobileOpen

  return (
    <header
      className={cn(
        "fixed top-0 z-40 w-full transition-all duration-300",
        transparent ? "bg-transparent text-white" : "bg-cream/95 text-espresso shadow-sm backdrop-blur"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link to="/" className="font-serif text-xl font-medium tracking-wide md:text-2xl">
          VELMORA
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="font-sans text-xs font-medium uppercase tracking-extra-wide transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button aria-label="Search" className="transition-colors hover:text-gold">
            <Search className="h-5 w-5" />
          </button>
          <div className="relative">
            <CartTrigger className="relative transition-colors hover:text-gold" />
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/20 bg-cream px-4 py-6 text-espresso md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="font-sans text-sm font-medium uppercase tracking-extra-wide"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
