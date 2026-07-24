import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Search, ShoppingBag, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useCart } from "@/context/CartContext"

const navLinks = [
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
]

export default function Navbar({ onOpenCart }) {
  const location = useLocation()
  const { count } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const isHome = location.pathname === "/"

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const transparent = isHome && !scrolled && !mobileOpen

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-40 transition-all duration-300",
        transparent
          ? "bg-transparent text-white"
          : "bg-background/95 backdrop-blur-md text-primary border-b border-hairline"
      )}
    >
      <nav className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 -ml-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>

        {/* Center links desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "text-sm font-medium tracking-wide hover:opacity-70 transition-opacity",
                location.pathname === link.href && "underline underline-offset-8"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Logo */}
        <Link
          to="/"
          className="absolute left-1/2 -translate-x-1/2 font-serif text-xl md:text-2xl tracking-[0.18em] font-semibold"
        >
          VELMORA
        </Link>

        {/* Right icons */}
        <div className="flex items-center gap-3 md:gap-5">
          <button
            aria-label="Search"
            className="p-2 hover:opacity-70 transition-opacity"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            onClick={onOpenCart}
            aria-label="Cart"
            className="relative p-2 hover:opacity-70 transition-opacity"
          >
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] font-semibold text-white">
                {count > 9 ? "9+" : count}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background text-primary border-t border-hairline px-4 pb-6 pt-2">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-base font-medium tracking-wide py-2 border-b border-hairline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
