import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ShoppingBag, Search, Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useCart } from '../../context/CartContext'

export function Navbar({ onOpenCart }) {
  const { getCartCount } = useCart()
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  
  const isHomepage = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navClass = cn(
    'fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-6 py-4 flex items-center justify-between',
    {
      'bg-background/90 backdrop-blur-md border-b border-border shadow-sm text-foreground': isScrolled || !isHomepage,
      'bg-transparent text-white pt-6': !isScrolled && isHomepage
    }
  )

  const linkClass = cn(
    'text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors',
    {
      'text-white hover:text-white/80': !isScrolled && isHomepage,
      'text-foreground hover:text-primary': isScrolled || !isHomepage
    }
  )

  const cartCount = getCartCount()

  return (
    <nav className={navClass}>
      {/* Mobile Menu */}
      <div className="md:hidden flex-1">
        <button className="p-2 -ml-2">
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* Center Logo (Mobile) & Left Logo (Desktop) */}
      <div className="flex-1 md:flex-none text-center md:text-left">
        <Link to="/" className="font-serif text-2xl tracking-[0.2em] font-medium">
          VELMORA
        </Link>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex flex-1 justify-center gap-12">
        <Link to="/products" className={linkClass}>Shop</Link>
        <Link to="/products?category=collections" className={linkClass}>Collections</Link>
        <Link to="/about" className={linkClass}>About</Link>
      </div>

      {/* Right Icons */}
      <div className="flex-1 flex justify-end gap-4">
        <button className={cn('p-2 transition-colors', { 'hover:text-primary': isScrolled || !isHomepage, 'hover:text-white/80': !isScrolled && isHomepage })}>
          <Search className="w-5 h-5" />
        </button>
        <button 
          onClick={onOpenCart}
          className={cn('relative p-2 transition-colors flex items-center', { 'hover:text-primary': isScrolled || !isHomepage, 'hover:text-white/80': !isScrolled && isHomepage })}
        >
          <ShoppingBag className="w-5 h-5" />
          {cartCount > 0 && (
            <span className="absolute top-1 right-0 bg-primary text-primary-foreground text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  )
}
