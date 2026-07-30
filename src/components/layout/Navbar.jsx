import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { itemCount, openCart } = useCart()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.05)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 -ml-2 text-charcoal"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Center links - desktop */}
          <div className="hidden lg:flex items-center gap-10 text-xs font-medium tracking-widest uppercase text-charcoal/80">
            <Link to="/shop" className="hover:text-charcoal transition-colors">Shop</Link>
            <Link to="/shop?category=Earrings" className="hover:text-charcoal transition-colors">Earrings</Link>
            <Link to="/shop?category=Necklaces" className="hover:text-charcoal transition-colors">Necklaces</Link>
            <Link to="/shop?category=Huggies" className="hover:text-charcoal transition-colors">Huggies</Link>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-2xl lg:text-3xl tracking-[0.3em] absolute left-1/2 -translate-x-1/2 transition-colors ${
              scrolled ? 'text-charcoal' : 'text-cream'
            }`}
          >
            VELMORA
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-1 lg:gap-3">
            <button
              onClick={() => navigate('/shop')}
              className={`p-2 transition-colors ${scrolled ? 'text-charcoal/70 hover:text-charcoal' : 'text-cream/80 hover:text-cream'}`}
              aria-label="Search"
            >
              <Search className="w-4 h-4 lg:w-5 lg:h-5" />
            </button>
            <button
              onClick={openCart}
              className={`p-2 relative transition-colors ${scrolled ? 'text-charcoal/70 hover:text-charcoal' : 'text-cream/80 hover:text-cream'}`}
              aria-label="Cart"
            >
              <ShoppingBag className="w-4 h-4 lg:w-5 lg:h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex items-center justify-center w-4 h-4 text-[10px] font-medium text-cream bg-gold-dark rounded-full">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-cream border-t border-warm">
          <div className="px-6 py-6 flex flex-col gap-4">
            {[
              { label: 'Shop', to: '/shop' },
              { label: 'Earrings', to: '/shop?category=Earrings' },
              { label: 'Necklaces', to: '/shop?category=Necklaces' },
              { label: 'Huggies', to: '/shop?category=Huggies' },
              { label: 'About', to: '/about' },
              { label: 'Journal', to: '/journal' },
            ].map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium tracking-widest uppercase text-charcoal/70 hover:text-charcoal transition-colors py-1"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
