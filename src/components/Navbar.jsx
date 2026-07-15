import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Search, ShoppingBag, Menu, X } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { totalItems, setIsOpen } = useCart()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const isHome = location.pathname === "/"
  const transparent = isHome && !scrolled

  const navLinks = [
    { label: "Shop", href: "/shop" },
    { label: "Collections", href: "/shop" },
    { label: "About", href: "/#story" },
    { label: "Journal", href: "/#testimonials" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        transparent
          ? "bg-transparent text-white"
          : "bg-[#F8F5F2]/95 backdrop-blur-md text-[#1C1C1C] shadow-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Mobile menu */}
          <div className="flex items-center md:hidden">
            <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 -ml-2">
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <span
              className={`font-serif text-xl sm:text-2xl tracking-[0.2em] font-semibold transition-colors duration-300 ${
                transparent ? "text-white" : "text-[#1C1C1C]"
              }`}
            >
              VELMORA
            </span>
          </Link>

          {/* Center links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`text-xs uppercase tracking-[0.15em] font-medium transition-colors duration-300 hover:opacity-70 ${
                  transparent ? "text-white/90" : "text-[#1C1C1C]/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-3 sm:gap-5">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 hover:opacity-70 transition-opacity"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            <Sheet open={searchOpen} onOpenChange={setSearchOpen}>
              <SheetContent side="top" className="h-auto">
                <div className="pt-8 pb-4">
                  <input
                    type="text"
                    placeholder="Search jewelry..."
                    className="w-full bg-transparent border-b border-[#C9A96E] pb-3 text-lg text-[#1C1C1C] placeholder:text-[#8A7E72] focus:outline-none"
                    autoFocus
                  />
                </div>
              </SheetContent>
            </Sheet>

            <button
              onClick={() => setIsOpen(true)}
              className="p-2 hover:opacity-70 transition-opacity relative"
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#C9A96E] text-[10px] font-medium text-white">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#1C1C1C] text-white">
          <nav className="flex flex-col px-4 py-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm uppercase tracking-[0.15em] font-medium py-2"
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
