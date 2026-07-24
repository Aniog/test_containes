import { useState, useEffect, useCallback } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, X, ChevronDown, Plus, Minus, Trash2 } from 'lucide-react'
import { useCart } from './context-CartContext'

export default function Layout() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { isOpen, closeCart } = useCart()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape' && isOpen) {
      closeCart()
    }
  }, [isOpen, closeCart])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <div className="min-h-screen flex flex-col font-sans bg-cream text-espresso">
      <Navbar scrolled={scrolled} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  )
}

function Navbar({ scrolled, mobileMenuOpen, setMobileMenuOpen }) {
  const { itemCount, toggleCart } = useCart()

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cream/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.04)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex items-center justify-between h-16 md:h-20">
            <button
              className="md:hidden p-2 -ml-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              <div className="w-5 flex flex-col gap-1">
                <span className={`block h-px bg-current transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-[3px]' : ''}`} />
                <span className={`block h-px bg-current transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-px bg-current transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-[3px]' : ''}`} />
              </div>
            </button>

            <Link to="/" className="font-serif text-xl md:text-2xl tracking-wider text-espresso no-underline hover:text-gold transition-colors">
              VELMORA
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Shop' ? '/shop' : `/${item.toLowerCase()}`}
                  className="text-[13px] tracking-wider uppercase text-warm-gray hover:text-espresso transition-colors no-underline"
                >
                  {item}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <button className="p-2 text-warm-gray hover:text-espresso transition-colors" aria-label="Search">
                <Search size={18} />
              </button>
              <button className="p-2 text-warm-gray hover:text-espresso transition-colors relative" onClick={toggleCart} aria-label="Cart">
                <ShoppingBag size={18} />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-gold text-cream text-[10px] w-[18px] h-[18px] rounded-full flex items-center justify-center font-medium">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-cream/98 backdrop-blur-sm md:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
            <Link
              key={item}
              to={item === 'Shop' ? '/shop' : `/${item.toLowerCase()}`}
              className="text-2xl font-serif tracking-wider text-espresso no-underline"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

function CartDrawer() {
  const { isOpen, items, closeCart, removeItem, updateQuantity, subtotal } = useCart()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex justify-end" role="dialog" aria-modal="true" aria-label="Shopping cart">
      <div
        className="absolute inset-0 bg-espresso/40 backdrop-blur-sm"
        onClick={closeCart}
      />
      <div className="relative h-full w-full max-w-[420px] bg-cream shadow-2xl flex flex-col animate-slide-left">
        <div className="flex items-center justify-between px-6 py-5 border-b border-warm-border">
          <h2 className="font-serif text-lg tracking-wider">YOUR BAG ({items.length})</h2>
          <button onClick={closeCart} className="p-2 text-warm-gray hover:text-espresso transition-colors" aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-warm-muted">
            <ShoppingBag size={48} strokeWidth={1} />
            <p className="mt-4 text-sm tracking-wider">Your bag is empty</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {items.map((item, i) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4 py-3 border-b border-warm-border/50">
                  <div className="w-20 h-20 bg-stone rounded-sm flex-shrink-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                      <span className="text-[10px] text-warm-muted">{item.category}</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] tracking-wider font-medium text-espresso">{item.name}</p>
                    <p className="text-xs text-warm-muted mt-0.5 capitalize">{item.variant} Tone</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-warm-border rounded-sm">
                        <button
                          onClick={() => updateQuantity(i, item.quantity - 1)}
                          className="p-1.5 hover:text-gold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center text-xs">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(i, item.quantity + 1)}
                          className="p-1.5 hover:text-gold transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium">${item.price * item.quantity}</span>
                        <button onClick={() => removeItem(i)} className="text-warm-muted hover:text-espresso transition-colors" aria-label="Remove item">
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-warm-border px-6 py-5 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-warm-muted">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-[11px] text-warm-muted text-center">Shipping & taxes calculated at checkout</p>
              <button className="w-full py-3 bg-espresso text-cream font-sans text-xs tracking-wider uppercase hover:bg-gold transition-colors duration-300">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="bg-charcoal text-cream/70 mt-auto">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-xl tracking-wider text-cream no-underline">VELMORA</Link>
            <p className="text-xs mt-4 leading-relaxed text-cream/50 max-w-[200px]">
              Demi-fine gold jewelry crafted for the modern woman. Wearable luxury, everyday.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] tracking-wider text-cream/90 mb-4 font-medium">SHOP</h4>
            <div className="flex flex-col gap-2.5">
              {['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'All Jewelry'].map((item) => (
                <Link key={item} to="/shop" className="text-xs text-cream/50 hover:text-gold-light transition-colors no-underline">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[11px] tracking-wider text-cream/90 mb-4 font-medium">HELP</h4>
            <div className="flex flex-col gap-2.5">
              {['Shipping & Returns', 'Care Guide', 'Size Guide', 'FAQs', 'Contact Us'].map((item) => (
                <a key={item} href="#" className="text-xs text-cream/50 hover:text-gold-light transition-colors no-underline">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[11px] tracking-wider text-cream/90 mb-4 font-medium">COMPANY</h4>
            <div className="flex flex-col gap-2.5">
              {['Our Story', 'Sustainability', 'Journal', 'Instagram'].map((item) => (
                <a key={item} href="#" className="text-xs text-cream/50 hover:text-gold-light transition-colors no-underline">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-cream/30">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-6 text-[11px] text-cream/30">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
