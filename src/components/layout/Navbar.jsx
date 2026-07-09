import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Search, ShoppingBag, Menu, X } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "@/components/ui/sheet"
import { CartDrawer } from "@/components/cart/CartDrawer"

const navLinks = [
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/shop?category=sets" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { setIsOpen, itemCount } = useCart()
  const location = useLocation()
  const isHome = location.pathname === "/"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const transparent = isHome && !scrolled
  const textColor = transparent ? "text-white" : "text-velmora-charcoal"
  const bg = transparent ? "bg-transparent" : "bg-velmora-cream/95 backdrop-blur-md shadow-sm"

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-40 transition-all duration-300 ${bg}`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 lg:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button className={`p-1 ${textColor}`} aria-label="Open menu">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-velmora-cream">
                <SheetTitle className="font-serif text-2xl tracking-widest">VELMORA</SheetTitle>
                <div className="mt-10 flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      to={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="font-serif text-xl uppercase tracking-widest text-velmora-charcoal hover:text-velmora-accent"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <Link
            to="/"
            className={`font-serif text-xl font-semibold uppercase tracking-[0.22em] ${textColor}`}
          >
            Velmora
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className={`relative text-xs font-medium uppercase tracking-widest transition-colors hover:text-velmora-accent ${textColor}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <button className={`p-1 transition-colors hover:text-velmora-accent ${textColor}`} aria-label="Search">
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={() => setIsOpen(true)}
              className={`relative p-1 transition-colors hover:text-velmora-accent ${textColor}`}
              aria-label="Open cart"
            >
              <ShoppingBag className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-velmora-accent text-[10px] font-medium text-white">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>
      <CartDrawer />
    </>
  )
}
