import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, X, Plus, Minus, Trash2 } from 'lucide-react'
import { useCart } from '../context/CartContext'

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { cart, cartTotal, cartCount, isCartOpen, closeCart, removeFromCart, updateQuantity, openCart } = useCart()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Shop', path: '/shop' },
    { label: 'Collections', path: '/collections' },
    { label: 'About', path: '/about' },
    { label: 'Journal', path: '/journal' },
  ]

  return (
    <>
      {/* Navigation */}
      <nav className={`nav ${isScrolled ? 'nav-solid' : 'nav-transparent'}`}>
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="serif text-2xl tracking-[0.2em] text-[#1A1816]">
            VELMORA
          </Link>

          {/* Center Links */}
          <div className="hidden md:flex items-center gap-10 nav-links">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm tracking-[0.1em] transition-colors hover:text-[#B8976F] ${
                  location.pathname === link.path ? 'text-[#B8976F]' : 'text-[#2C2825]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-5">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 hover:text-[#B8976F] transition-colors"
              aria-label="Search"
            >
              <Search size={18} />
            </button>
            <button
              onClick={openCart}
              className="p-2 hover:text-[#B8976F] transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#B8976F] text-white text-[10px] flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="border-t border-[#E5DFD6] bg-white px-6 py-4">
            <div className="max-w-[600px] mx-auto">
              <input
                type="text"
                placeholder="Search our collection..."
                className="w-full bg-transparent border-b border-[#2C2825] py-3 text-sm focus:outline-none placeholder:text-[#A39B92]"
                autoFocus
              />
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-20">{children}</main>

      {/* Cart Overlay */}
      <div
        className={`cart-overlay ${isCartOpen ? 'open' : ''}`}
        onClick={closeCart}
      />

      {/* Cart Drawer */}
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="p-6 border-b border-[#E5DFD6] flex items-center justify-between">
          <h3 className="serif text-xl tracking-[0.1em]">Your Cart</h3>
          <button onClick={closeCart} className="p-2">
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center px-6">
            <ShoppingBag size={48} className="text-[#E5DFD6] mb-4" />
            <p className="text-[#6B6560] mb-2">Your cart is empty</p>
            <button onClick={closeCart} className="btn btn-outline mt-4">
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="p-6 space-y-6 flex-1 overflow-auto">
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#F5F2ED] flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <p className="product-name text-sm tracking-[0.1em] pr-2">{item.name}</p>
                        <p className="text-xs text-[#6B6560] mt-0.5">{item.selectedVariant}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-[#A39B92] hover:text-[#2C2825]"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#E5DFD6]">
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="p-1.5 hover:bg-[#F5F2ED]"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="p-1.5 hover:bg-[#F5F2ED]"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <p className="text-sm font-medium">${(item.price * item.quantity).toFixed(0)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-[#E5DFD6] bg-[#F8F5F1]">
              <div className="flex justify-between mb-6 text-sm">
                <span>Subtotal</span>
                <span className="font-medium">${cartTotal}</span>
              </div>
              <button className="btn btn-gold w-full mb-3">
                Proceed to Checkout
              </button>
              <p className="text-center text-xs text-[#6B6560]">
                Shipping calculated at checkout
              </p>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Layout
