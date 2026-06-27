import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { itemCount, toggleCart } = useCart()

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handle, { passive: true })
    return () => window.removeEventListener('scroll', handle)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const linkClass =
    'text-sm tracking-[0.08em] uppercase font-medium hover:text-gold transition-colors duration-300'

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-warm-white/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.04)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between h-[72px]">
          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 -ml-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Center links - desktop */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/shop" className={linkClass}>Shop</Link>
            <Link to="/shop?category=Earrings" className={linkClass}>Earrings</Link>
            <Link to="/shop?category=Necklaces" className={linkClass}>Necklaces</Link>
            <Link to="/shop?category=Huggies" className={linkClass}>Huggies</Link>
          </div>

          {/* Logo - center */}
          <Link
            to="/"
            className="absolute left-1/2 -translate-x-1/2 font-serif text-[26px] tracking-[0.12em] font-semibold"
            style={{ color: scrolled ? 'var(--color-rich-brown)' : 'var(--color-warm-white)' }}
          >
            VELMORA
          </Link>

          {/* Right */}
          <div className="flex items-center gap-2 lg:gap-4">
            <button className="p-2" aria-label="Search" style={{ color: scrolled ? undefined : 'var(--color-warm-white)' }}>
              <Search className="w-5 h-5" />
            </button>
            <button
              className="p-2 relative"
              onClick={() => toggleCart()}
              aria-label="Cart"
              style={{ color: scrolled ? undefined : 'var(--color-warm-white)' }}
            >
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-gold text-warm-charcoal text-[10px] font-bold w-[18px] h-[18px] rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-warm-white pt-[72px] lg:hidden">
          <div className="flex flex-col items-center gap-8 pt-16 text-xl font-serif tracking-[0.06em]">
            <Link to="/shop" onClick={() => setMobileOpen(false)}>Shop</Link>
            <Link to="/shop?category=Earrings" onClick={() => setMobileOpen(false)}>Earrings</Link>
            <Link to="/shop?category=Necklaces" onClick={() => setMobileOpen(false)}>Necklaces</Link>
            <Link to="/shop?category=Huggies" onClick={() => setMobileOpen(false)}>Huggies</Link>
          </div>
        </div>
      )}
    </>
  )
}
