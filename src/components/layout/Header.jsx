import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ShoppingBag, Search, Menu, X } from 'lucide-react'
import { useCartStore } from '@/lib/store'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { openCart, items } = useCartStore()
  const location = useLocation()
  
  const isHome = location.pathname === '/'
  const cartItemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  const headerClass = `fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
    isScrolled || !isHome || mobileMenuOpen
      ? 'bg-background/95 backdrop-blur-md border-b shadow-sm'
      : 'bg-transparent text-white' // Assuming hero has dark background and needs white text in transparent state
  }`

  const textClass = isScrolled || !isHome || mobileMenuOpen ? 'text-foreground' : 'text-foreground lg:text-white'
  
  // Actually, wait, let's make it simpler. The hero might be light. Let's just always have it be foreground, or if transparent, let's just make it background/95 on scroll.
  const simpleHeaderClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled || !isHome || mobileMenuOpen
      ? 'bg-background/95 backdrop-blur-md border-b shadow-sm py-4'
      : 'bg-transparent py-6'
  }`

  return (
    <header className={simpleHeaderClass}>
      <div className="container mx-auto px-4 md:px-8 max-w-7xl flex items-center justify-between">
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 -ml-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 flex-1">
          <Link to="/collections/all" className="text-sm font-medium hover:opacity-70 transition-opacity">Shop</Link>
          <Link to="/collections/earrings" className="text-sm font-medium hover:opacity-70 transition-opacity">Earrings</Link>
          <Link to="/collections/necklaces" className="text-sm font-medium hover:opacity-70 transition-opacity">Necklaces</Link>
          <Link to="/collections/huggies" className="text-sm font-medium hover:opacity-70 transition-opacity">Huggies</Link>
        </nav>

        {/* Logo */}
        <div className="flex-1 text-center md:flex-none">
          <Link to="/" className="font-serif text-2xl md:text-3xl tracking-widest uppercase font-semibold text-foreground">
            Velmora
          </Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center justify-end gap-4 flex-1">
          <button className="p-2 hover:opacity-70 transition-opacity hidden md:block">
            <Search size={20} />
          </button>
          <button 
            className="p-2 hover:opacity-70 transition-opacity relative"
            onClick={openCart}
          >
            <ShoppingBag size={20} />
            {cartItemCount > 0 && (
              <span className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b shadow-lg py-4 px-4 flex flex-col gap-4">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium p-2 border-b">Home</Link>
          <Link to="/collections/all" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium p-2 border-b">Shop All</Link>
          <Link to="/collections/earrings" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium p-2 border-b">Earrings</Link>
          <Link to="/collections/necklaces" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium p-2 border-b">Necklaces</Link>
          <Link to="/collections/huggies" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium p-2">Huggies</Link>
        </div>
      )}
    </header>
  )
}
