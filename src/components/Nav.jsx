import * as React from "react"
import { Search, ShoppingBag, Menu, X, Star, Heart, ArrowRight } from "lucide-react"
import { Button } from "./ui/button"
import { useCart } from "../lib/CartContext"

export function Nav() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const { cartCount, toggleCart } = useCart()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-surface/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Mobile Menu */}
        <div className="md:hidden flex-1">
          <Button variant="ghost" size="icon" className={isScrolled ? "text-ink" : "text-white"}>
            <Menu className="w-5 h-5" />
          </Button>
        </div>

        {/* Desktop Links */}
        <nav className={`hidden md:flex flex-1 items-center gap-8 text-sm tracking-wide ${isScrolled ? "text-ink" : "text-white md:text-white"}`}>
          <a href="/shop" className="hover:text-brand transition-colors">Shop</a>
          <a href="/collections" className="hover:text-brand transition-colors">Collections</a>
          <a href="/about" className="hover:text-brand transition-colors">About</a>
          <a href="/journal" className="hover:text-brand transition-colors">Journal</a>
        </nav>

        {/* Logo */}
        <a href="/" className={`font-serif text-2xl md:text-3xl tracking-widest uppercase font-semibold flex-shrink-0 ${isScrolled ? "text-ink" : "text-white"}`}>
          Velmora
        </a>

        {/* Right Actions */}
        <div className={`flex flex-1 items-center justify-end gap-2 md:gap-4 ${isScrolled ? "text-ink" : "text-white"}`}>
          <Button variant="ghost" size="icon" className="hover:text-brand">
            <Search className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="relative hover:text-brand" onClick={toggleCart}>
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 flex items-center justify-center w-4 h-4 bg-brand text-white text-[9px] font-bold rounded-full">
                {cartCount}
              </span>
            )}
          </Button>
        </div>
      </div>
    </header>
  )
}
