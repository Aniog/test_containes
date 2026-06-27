import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Search, ShoppingBag, Menu, X } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const { itemCount, setIsOpen } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const isHome = location.pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isHome && !scrolled
            ? "bg-transparent"
            : "bg-velmora-surface/95 backdrop-blur-sm border-b border-velmora-border-light"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 -ml-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu
                className={cn(
                  "w-5 h-5 transition-colors",
                  isHome && !scrolled
                    ? "text-white"
                    : "text-velmora-text"
                )}
              />
            </button>

            {/* Logo */}
            <Link
              to="/"
              className="font-serif text-xl sm:text-2xl tracking-[0.15em] font-normal"
            >
              <span
                className={cn(
                  "transition-colors",
                  isHome && !scrolled ? "text-white" : "text-velmora-text"
                )}
              >
                VELMORA
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
              {["Shop", "Collections", "About", "Journal"].map((link) => (
                <Link
                  key={link}
                  to={link === "Shop" ? "/collection" : `/${link.toLowerCase()}`}
                  className={cn(
                    "font-sans text-[13px] tracking-wider uppercase transition-colors duration-300 hover:text-velmora-gold",
                    isHome && !scrolled
                      ? "text-white/90 hover:text-white"
                      : "text-velmora-text-secondary"
                  )}
                >
                  {link}
                </Link>
              ))}
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                className={cn(
                  "p-2 transition-colors",
                  isHome && !scrolled
                    ? "text-white hover:text-white/80"
                    : "text-velmora-text-secondary hover:text-velmora-gold"
                )}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                className={cn(
                  "p-2 relative transition-colors",
                  isHome && !scrolled
                    ? "text-white hover:text-white/80"
                    : "text-velmora-text-secondary hover:text-velmora-gold"
                )}
                onClick={() => setIsOpen(true)}
                aria-label="Shopping cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-velmora-gold text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-velmora-surface p-6 animate-slide-in-left">
            <button
              className="p-2 -ml-2 mb-8"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-velmora-text" />
            </button>
            <nav className="flex flex-col gap-6">
              {[
                { label: "Shop", to: "/collection" },
                { label: "Collections", to: "/collections" },
                { label: "About", to: "/about" },
                { label: "Journal", to: "/journal" },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="font-sans text-sm tracking-wider uppercase text-velmora-text hover:text-velmora-gold transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
