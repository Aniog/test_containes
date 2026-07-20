import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { items, drawerOpen, closeDrawer, removeItem, updateQuantity, totalPrice } = useCart()

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/30 z-[60] transition-opacity duration-300 ${
          drawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-cream z-[70] shadow-2xl transform transition-transform duration-400 ease-out ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-warm-border">
            <h2 className="font-serif text-xl tracking-wider">Shopping Bag</h2>
            <button onClick={closeDrawer} className="p-1 hover:text-gold transition-colors" aria-label="Close cart">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-muted-text gap-3">
                <ShoppingBag className="w-10 h-10" />
                <p className="text-sm">Your bag is empty</p>
                <Link
                  to="/shop"
                  className="text-sm text-gold hover:text-gold-dark underline underline-offset-2"
                  onClick={closeDrawer}
                >
                  Shop now
                </Link>
              </div>
            ) : (
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item.id} className="flex gap-4 py-3 border-b border-warm-border/40 last:border-0">
                    <div className="w-20 h-20 bg-warm rounded overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-base tracking-wider uppercase truncate">{item.name}</h3>
                      <p className="text-sm text-muted-text mt-0.5">${item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-0.5 hover:text-gold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-sm w-5 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-0.5 hover:text-gold transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="ml-auto text-xs text-muted-text hover:text-[#9B2226] transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-warm-border px-6 py-5 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm uppercase tracking-wider">Subtotal</span>
                <span className="font-serif text-lg">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-muted-text">Shipping & taxes calculated at checkout</p>
              <button className="w-full py-3 bg-gold hover:bg-gold-dark text-white text-sm uppercase tracking-wider transition-colors duration-300">
                Checkout
              </button>
              <button
                onClick={closeDrawer}
                className="w-full py-2 text-sm text-muted-text hover:text-[#1A1A1A] transition-colors uppercase tracking-wider"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}