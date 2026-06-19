import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, X, Plus, Minus, Trash2 } from 'lucide-react'
import { useCart } from '../context/CartContext'

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const location = useLocation()
  const { cart, removeFromCart, updateQuantity, cartTotal, cartCount, isCartOpen, setIsCartOpen } = useCart()

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

  const isActive = (path) => location.pathname === path

  return (
    <div className="min-h-screen bg-[#F8F5F1]">
      {/* Sticky Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F8F5F1] border-b border-[#D4C5B5]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="font-serif text-2xl tracking-[4px] text-[#2C2522]">
            VELMORA
          </Link>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm tracking-[1px] transition-colors ${
                  isActive(link.path)
                    ? 'text-[#2C2522] font-medium'
                    : 'text-[#6B635C] hover:text-[#2C2522]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-[#6B635C] hover:text-[#2C2522] transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-2 text-[#6B635C] hover:text-[#2C2522] transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 bg-[#8B7355] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="border-t border-[#D4C5B5] bg-[#F8F5F1]">
            <div className="max-w-[1440px] mx-auto px-6 py-4">
              <input
                type="text"
                placeholder="Search our collection..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-b border-[#D4C5B5] py-3 text-lg placeholder:text-[#A89B8C] focus:outline-none text-[#2C2522]"
                autoFocus
              />
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-20">{children}</main>

      {/* Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[60] flex justify-end">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsCartOpen(false)}
          />

          {/* Drawer */}
          <div className="relative w-full max-w-md bg-[#F8F5F1] h-full overflow-auto shadow-xl">
            <div className="p-6 border-b border-[#D4C5B5] flex items-center justify-between sticky top-0 bg-[#F8F5F1] z-10">
              <h2 className="font-serif text-2xl tracking-[2px] text-[#2C2522]">Your Cart</h2>
              <button onClick={() => setIsCartOpen(false)} aria-label="Close cart">
                <X size={24} className="text-[#6B635C]" />
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-[60vh] text-center px-6">
                <ShoppingBag size={48} className="text-[#D4C5B5] mb-4" />
                <p className="text-[#6B635C] mb-2">Your cart is empty</p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-4 text-sm tracking-[1px] underline text-[#8B7355]"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <>
                <div className="p-6 space-y-6">
                  {cart.map((item) => (
                    <div key={item.cartId} className="flex gap-4">
                      <div className="w-20 h-20 bg-[#EDE6D9] rounded flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between">
                          <div>
                            <p className="font-serif text-sm tracking-[1px] text-[#2C2522] uppercase">
                              {item.name}
                            </p>
                            <p className="text-xs text-[#8B7355] mt-0.5">
                              {item.selectedVariant} tone
                            </p>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.cartId)}
                            className="text-[#A89B8C] hover:text-[#8B7355]"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center border border-[#D4C5B5] rounded">
                            <button
                              onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                              className="px-2 py-1 text-[#6B635C] hover:text-[#2C2522]"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="px-3 text-sm text-[#2C2522]">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                              className="px-2 py-1 text-[#6B635C] hover:text-[#2C2522]"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <p className="text-sm text-[#2C2522]">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="sticky bottom-0 bg-[#F8F5F1] border-t border-[#D4C5B5] p-6">
                  <div className="flex justify-between mb-4 text-[#2C2522]">
                    <span className="text-sm tracking-[1px]">TOTAL</span>
                    <span className="font-medium">${cartTotal.toFixed(2)}</span>
                  </div>
                  <button className="w-full bg-[#2C2522] text-[#F8F5F1] py-4 text-sm tracking-[2px] hover:bg-[#3D3633] transition-colors">
                    CHECKOUT
                  </button>
                  <p className="text-center text-xs text-[#A89B8C] mt-3 tracking-[0.5px]">
                    or 4 interest-free payments of ${(cartTotal / 4).toFixed(2)} with Afterpay
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Layout
