import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import CartDrawer from './CartDrawer'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, toggleCart, isOpen } = useCart()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-velmora-bg/95 backdrop-blur-md shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-velmora-cream hover:text-velmora-gold transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className="font-serif text-xl md:text-2xl font-medium tracking-widest-2xl text-velmora-cream hover:text-velmora-gold transition-colors"
            >
              VELMORA
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
              {[
                { label: 'Shop', to: '/shop' },
                { label: 'Collections', to: '/shop' },
                { label: 'About', to: '/about' },
                { label: 'Journal', to: '/about' },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-sm font-sans tracking-wider text-velmora-muted hover:text-velmora-gold transition-colors uppercase"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-3">
              <button className="p-2 text-velmora-cream hover:text-velmora-gold transition-colors" aria-label="Search">
                <Search size={20} />
              </button>
              <button
                onClick={toggleCart}
                className="relative p-2 text-velmora-cream hover:text-velmora-gold transition-colors"
                aria-label="Cart"
              >
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 bg-velmora-gold text-velmora-bg text-[10px] font-semibold rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-velmora-bg/98 backdrop-blur-md border-t border-velmora-border/30">
            <div className="px-6 py-6 space-y-4">
              {[
                { label: 'Shop', to: '/shop' },
                { label: 'Collections', to: '/shop' },
                { label: 'About', to: '/about' },
                { label: 'Journal', to: '/about' },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="block text-lg font-serif tracking-widest text-velmora-cream hover:text-velmora-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      <CartDrawer />
    </>
  )
}
