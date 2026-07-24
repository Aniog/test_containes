import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet'
import { useCart } from '@/context/CartContext'
import { getProductImageFallback } from '@/lib/productImages'

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
]

export default function Navbar() {
  const location = useLocation()
  const { totalItems } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || !isHome
  const textColor = solid ? 'text-velmora-espresso' : 'text-white'
  const bg = solid ? 'bg-velmora-cream/95 backdrop-blur-md shadow-sm' : 'bg-transparent'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 ${bg}`}
    >
      <nav className="mx-auto flex h-16 md:h-20 max-w-[1440px] items-center justify-between px-4 md:px-8">
        <Link
          to="/"
          className={`font-serif text-xl md:text-2xl font-semibold tracking-[0.18em] uppercase ${textColor} transition-colors`}
        >
          Velmora
        </Link>

        <ul className={`hidden md:flex items-center gap-8 text-sm font-medium tracking-wide ${textColor}`}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className="relative py-2 hover:opacity-70 transition-opacity"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={`flex items-center gap-3 md:gap-5 ${textColor}`}>
          <button
            aria-label="Search"
            className="p-2 hover:opacity-70 transition-opacity"
          >
            <Search className="h-5 w-5" />
          </button>

          <Sheet>
            <SheetTrigger asChild>
              <button
                aria-label="Open cart"
                className="relative p-2 hover:opacity-70 transition-opacity"
              >
                <ShoppingBag className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-velmora-gold text-[10px] font-semibold text-velmora-espresso px-1">
                    {totalItems}
                  </span>
                )}
              </button>
            </SheetTrigger>
            <CartSheet />
          </Sheet>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="p-2 md:hidden hover:opacity-70 transition-opacity"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-3/4 max-w-xs bg-velmora-cream border-r-velmora-taupe/20">
              <div className="flex flex-col h-full pt-8">
                <Link
                  to="/"
                  onClick={() => setMobileOpen(false)}
                  className="font-serif text-2xl font-semibold tracking-[0.18em] uppercase text-velmora-espresso mb-10"
                >
                  Velmora
                </Link>
                <ul className="flex flex-col gap-6 text-lg font-serif text-velmora-espresso">
                  {navLinks.map((link) => (
                    <li key={link.label}>
                      <SheetClose asChild>
                        <Link to={link.href} className="hover:text-velmora-gold transition-colors">
                          {link.label}
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}

function CartSheet() {
  const { items, subtotal, removeItem, updateQuantity } = useCart()

  return (
    <SheetContent className="bg-velmora-cream border-l-velmora-taupe/20 w-full sm:max-w-md flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-serif text-2xl font-semibold text-velmora-espresso">Your Cart</h2>
      </div>

      {items.length === 0 ? (
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <ShoppingBag className="h-12 w-12 text-velmora-taupe/40 mb-4" />
          <p className="font-serif text-lg text-velmora-espresso">Your cart is empty</p>
          <p className="text-sm text-velmora-taupe mt-1">Discover something treasured.</p>
        </div>
      ) : (
        <>
          <div className="flex-1 overflow-y-auto -mx-6 px-6">
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={`${item.productId}-${item.variant}`} className="flex gap-4">
                  <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md bg-velmora-cream-dark">
                    <img
                      src={item.imageUrl || getProductImageFallback(item.slug)}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <p className="font-serif text-sm uppercase tracking-wider text-velmora-espresso">
                        {item.name}
                      </p>
                      <p className="text-xs text-velmora-taupe mt-0.5 capitalize">{item.variant}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-velmora-taupe/30 rounded-md">
                        <button
                          className="px-2 py-1 text-velmora-taupe hover:text-velmora-espresso"
                          onClick={() => updateQuantity(item.productId, item.variant, item.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="px-2 text-sm text-velmora-espresso min-w-[1.5rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          className="px-2 py-1 text-velmora-taupe hover:text-velmora-espresso"
                          onClick={() => updateQuantity(item.productId, item.variant, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-sm font-medium text-velmora-espresso">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.productId, item.variant)}
                    className="self-start text-velmora-taupe hover:text-velmora-espresso transition-colors"
                    aria-label={`Remove ${item.name}`}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-velmora-taupe/20 pt-6 mt-6 space-y-4">
            <div className="flex items-center justify-between text-velmora-espresso">
              <span className="text-sm">Subtotal</span>
              <span className="font-serif text-xl">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-velmora-taupe">Shipping & taxes calculated at checkout.</p>
            <button className="w-full rounded-md bg-velmora-espresso py-3.5 text-sm font-medium uppercase tracking-wider text-velmora-cream hover:bg-velmora-espresso-light transition-colors">
              Checkout
            </button>
            <SheetClose asChild>
              <Link
                to="/shop"
                className="block w-full rounded-md border border-velmora-espresso py-3.5 text-center text-sm font-medium uppercase tracking-wider text-velmora-espresso hover:bg-velmora-espresso hover:text-velmora-cream transition-colors"
              >
                Continue Shopping
              </Link>
            </SheetClose>
          </div>
        </>
      )}
    </SheetContent>
  )
}
