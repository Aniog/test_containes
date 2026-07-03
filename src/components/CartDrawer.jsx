import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { cart, cartOpen, setCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart()

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        cartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div
        className="absolute inset-0 bg-velvet-950/40 backdrop-blur-sm"
        onClick={() => setCartOpen(false)}
      />
      <div
        className={`absolute right-0 top-0 bottom-0 w-full sm:w-96 bg-cream shadow-2xl transition-transform duration-400 flex flex-col ${
          cartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-5 py-5">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-velvet-700" />
            <span className="font-sans text-xs uppercase tracking-wider text-velvet-700">
              Cart ({cart.length})
            </span>
          </div>
          <button
            onClick={() => setCartOpen(false)}
            className="p-2 text-velvet-500 hover:text-velvet-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="hairline" />

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
            <ShoppingBag className="w-12 h-12 text-velvet-300 mb-4" />
            <p className="font-serif text-xl text-velvet-500 mb-2">Your cart is empty</p>
            <p className="text-sm text-velvet-400">Discover pieces crafted to be treasured.</p>
            <Link
              to="/shop"
              onClick={() => setCartOpen(false)}
              className="btn-primary mt-6"
            >
              Shop Now
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-4">
              {cart.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-20 bg-velvet-100 rounded-sm flex-shrink-0 flex items-center justify-center">
                    <span className="text-xs text-velvet-400 font-sans">{item.variant}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-sm tracking-wider text-velvet-900 uppercase leading-tight">
                      {item.name}
                    </p>
                    <p className="text-xs text-velvet-500 mt-0.5">{item.variant}</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-velvet-200 rounded-sm">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1.5 text-velvet-500 hover:text-velvet-800 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-sans text-velvet-800">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1.5 text-velvet-500 hover:text-velvet-800 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-sm font-sans font-medium text-velvet-800">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id, item.variant)}
                    className="text-velvet-300 hover:text-velvet-600 transition-colors self-start mt-1"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
            <div className="hairline" />
            <div className="px-5 py-5">
              <div className="flex justify-between mb-4">
                <span className="text-xs uppercase tracking-wider text-velvet-600 font-sans">Subtotal</span>
                <span className="font-serif text-lg text-velvet-950">${cartTotal.toFixed(2)}</span>
              </div>
              <button className="btn-primary w-full text-center mb-3">
                Checkout
              </button>
              <button
                onClick={() => setCartOpen(false)}
                className="w-full text-center text-xs uppercase tracking-wider text-velvet-500 hover:text-velvet-700 transition-colors py-2 font-sans"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}