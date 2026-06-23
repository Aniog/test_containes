import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart, useCartActions } from '@/context/CartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { items } = useCart()
  const { toggleCart } = useCartActions()
  const navigate = useNavigate()
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const navLinks = [
    { label: 'SHOP', to: '/shop' },
    { label: 'EARRINGS', to: '/shop?category=earrings' },
    { label: 'NECKLACES', to: '/shop?category=necklaces' },
    { label: 'HUGGIES', to: '/shop?category=huggies' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-50/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(42,32,25,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left: Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-sans text-[11px] tracking-widest transition-colors duration-300 ${
                  scrolled
                    ? 'text-velvet-700 hover:text-velvet-950'
                    : 'text-cream-50/90 hover:text-cream-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 -ml-2 ${
              scrolled ? 'text-velvet-900' : 'text-cream-50'
            }`}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} strokeWidth={1} /> : <Menu size={20} strokeWidth={1} />}
          </button>

          {/* Center: Logo */}
          <Link
            to="/"
            className={`absolute left-1/2 -translate-x-1/2 font-serif text-2xl md:text-[26px] tracking-[0.22em] transition-colors duration-300 ${
              scrolled ? 'text-velvet-950' : 'text-cream-50'
            }`}
          >
            VELMORA
          </Link>

          {/* Right: Icons */}
          <div className="flex items-center gap-1 md:gap-4">
            <button
              aria-label="Search"
              className={`p-2 transition-colors duration-300 ${
                scrolled
                  ? 'text-velvet-600 hover:text-velvet-950'
                  : 'text-cream-50/80 hover:text-cream-50'
              }`}
            >
              <Search size={18} strokeWidth={1} />
            </button>
            <button
              onClick={() => toggleCart(true)}
              aria-label="Cart"
              className={`relative p-2 transition-colors duration-300 ${
                scrolled
                  ? 'text-velvet-600 hover:text-velvet-950'
                  : 'text-cream-50/80 hover:text-cream-50'
              }`}
            >
              <ShoppingBag size={18} strokeWidth={1} />
              {totalQuantity > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-cream-100 text-[10px] font-sans font-medium text-velvet-950 flex items-center justify-center">
                  {totalQuantity}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-cream-50 border-t border-velvet-100 animate-fade-in">
          <div className="px-6 py-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="block py-3 font-serif text-lg tracking-wider text-velvet-900 hover:text-velvet-600 transition-colors"
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
