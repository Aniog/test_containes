import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, X, Plus, Minus, Trash2 } from 'lucide-react'
import { useCart } from '../context/CartContext'

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const { cart, removeFromCart, updateQuantity, cartTotal, cartCount, isCartOpen, setIsCartOpen } = useCart()
  const location = useLocation()

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Shop', path: '/shop' },
    { label: 'Collections', path: '/shop' },
    { label: 'About', path: '/' },
    { label: 'Journal', path: '/' },
  ]

  return (
    <>
      {/* Sticky Navigation */}
      <nav className={`nav ${isScrolled ? 'solid' : 'transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="serif text-2xl tracking-[0.2em] text-[#2C2522]">
            VELMORA
          </Link>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center gap-10 text-sm tracking-[0.1em] uppercase">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="hover:text-[#8B7355] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:text-[#8B7355] transition-colors">
              <Search size={18} />
            </button>
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-2 hover:text-[#8B7355] transition-colors relative"
            >
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#8B7355] text-white text-[10px] flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">{children}</main>

      {/* Cart Drawer */}
      <>
        {/* Backdrop */}
        {isCartOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-[90]"
            onClick={() => setIsCartOpen(false)}
          />
        )}

        {/* Drawer */}
        <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
          <div className="p-6 border-b flex items-center justify-between">
            <h3 className="serif text-xl tracking-[0.1em]">Your Cart</h3>
            <button onClick={() => setIsCartOpen(false)}>
              <X size={20} />
            </button>
          </div>

          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-[60vh] text-center px-6">
              <ShoppingBag size={48} className="text-[#E5DFD6] mb-4" />
              <p className="text-[#6B635E]">Your cart is empty</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="btn btn-outline mt-6"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="p-6 space-y-6 flex-1 overflow-auto">
                {cart.map((item) => (
                  <div key={item.cartId} className="flex gap-4">
                    <div className="w-20 h-20 bg-[#F0EBE3] flex-shrink-0">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <div>
                          <p className="product-name text-sm tracking-wider pr-2">{item.name}</p>
                          <p className="text-xs text-[#6B635E] mt-0.5">{item.selectedVariant}</p>
                        </div>
                        <button onClick={() => removeFromCart(item.cartId)}>
                          <Trash2 size={14} className="text-[#9A9088]" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-[#E5DFD6]">
                          <button
                            onClick={() => updateQuantity(item.cartId, (item.quantity || 1) - 1)}
                            className="p-1.5 hover:bg-[#F8F5F1]"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-3 text-sm">{item.quantity || 1}</span>
                          <button
                            onClick={() => updateQuantity(item.cartId, (item.quantity || 1) + 1)}
                            className="p-1.5 hover:bg-[#F8F5F1]"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <p className="font-medium">${(item.price * (item.quantity || 1)).toFixed(0)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 border-t mt-auto">
                <div className="flex justify-between mb-6 text-sm">
                  <span>Total</span>
                  <span className="font-medium">${cartTotal}</span>
                </div>
                <button className="btn btn-primary w-full">
                  Proceed to Checkout
                </button>
                <p className="text-center text-xs text-[#9A9088] mt-4 tracking-wide">
                  Free worldwide shipping on orders over $75
                </p>
              </div>
            </>
          )}
        </div>
      </>
    </>
  )
}

export default Layout