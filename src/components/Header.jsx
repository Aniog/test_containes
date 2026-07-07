import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Search, ShoppingBag, Menu, X } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { cartCount, openCart } = useCart()
  const location = useLocation()
  
  // Is this the homepage where header should overlap?
  const isHome = location.pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  const textColor = isHome && !isScrolled && !mobileMenuOpen 
    ? "text-white" 
    : "text-foreground"

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          (isScrolled || !isHome || mobileMenuOpen)
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          
          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden flex items-center p-2 -ml-2 ${textColor}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo (Left on Desktop, Center on Mobile) */}
          <div className="flex-1 md:flex-none flex justify-center md:justify-start">
            <Link 
              to="/" 
              className={cn(
                "font-serif text-2xl tracking-[0.2em] font-medium transition-colors",
                textColor
              )}
            >
              VELMORA
            </Link>
          </div>

          {/* Desktop Navigation (Center) */}
          <nav className="hidden md:flex flex-1 justify-center space-x-8">
            {[
              { name: "Shop", path: "/collection" },
              { name: "Collections", path: "/collection?filter=collections" },
              { name: "About", path: "/about" },
              { name: "Journal", path: "/journal" },
            ].map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium tracking-wider hover:opacity-70 transition-opacity",
                  textColor
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Icons (Right) */}
          <div className="flex items-center justify-end md:flex-none space-x-4">
            <button aria-label="Search" className={cn("p-2 hover:opacity-70 transition-opacity", textColor)}>
              <Search size={20} />
            </button>
            <button 
              aria-label="Cart" 
              className={cn("p-2 hover:opacity-70 transition-opacity relative", textColor)}
              onClick={openCart}
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 flex items-center justify-center min-w-[18px] h-[18px] px-1 text-[10px] font-bold bg-primary text-primary-foreground rounded-full translate-x-1 -translate-y-1">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-background z-40 pt-24 px-6 transition-transform duration-300 md:hidden",
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-6 text-xl font-serif">
          <Link to="/" className="text-foreground tracking-wider">Home</Link>
          <hr className="border-border" />
          <Link to="/collection" className="text-foreground tracking-wider">Shop All</Link>
          <Link to="/collection?category=earrings" className="text-foreground/80 text-lg">Earrings</Link>
          <Link to="/collection?category=necklaces" className="text-foreground/80 text-lg">Necklaces</Link>
          <Link to="/collection?category=huggies" className="text-foreground/80 text-lg">Huggies</Link>
          <hr className="border-border" />
          <Link to="/about" className="text-foreground tracking-wider">About</Link>
          <Link to="/journal" className="text-foreground tracking-wider">Journal</Link>
        </nav>
      </div>
    </>
  )
}
