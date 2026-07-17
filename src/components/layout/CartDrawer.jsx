import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { items, removeItem, updateQty, subtotal, totalItems, isOpen, setIsOpen } = useCart()

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-velvet/40 z-40 transition-opacity duration-400 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-ivory z-50 flex flex-col shadow-2xl transition-transform duration-400 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-champagne/40">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-gold" />
            <span className="font-serif text-xl text-velvet">Your Cart</span>
            {totalItems > 0 && (
              <span className="text-xs font-sans text-mist ml-1">({totalItems})</span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-cream rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5 text-bark" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag className="w-12 h-12 text-champagne" />
              <p className="font-serif text-2xl text-bark">Your cart is empty</p>
              <p className="font-sans text-sm text-mist">Discover our curated collection</p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-2 px-8 py-3 bg-velvet text-champagne font-sans text-xs tracking-widest uppercase hover:bg-bark transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map(item => (
                <div key={item.key} className="flex gap-4 py-4 border-b border-champagne/30">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-cream flex-shrink-0 overflow-hidden flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-br from-champagne/40 to-cream flex items-center justify-center">
                      <span className="font-serif text-xs text-mist text-center px-1 leading-tight">{item.product.name.split(' ')[0]}</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p id={`cart-${item.key}-name`} className="font-serif text-sm text-velvet uppercase tracking-wider leading-tight">{item.product.name}</p>
                    {item.variant && (
                      <p className="font-sans text-xs text-mist mt-0.5">{item.variant}</p>
                    )}
                    <p className="font-sans text-sm text-gold mt-1">${item.product.price}</p>
                    {/* Qty controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQty(item.key, item.qty - 1)}
                        className="w-6 h-6 flex items-center justify-center border border-champagne/60 text-bark hover:border-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-sans text-sm text-velvet w-4 text-center">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.key, item.qty + 1)}
                        className="w-6 h-6 flex items-center justify-center border border-champagne/60 text-bark hover:border-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <button
                      onClick={() => removeItem(item.key)}
                      className="text-mist hover:text-velvet transition-colors"
                      aria-label="Remove item"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    <p className="font-sans text-sm font-medium text-velvet">
                      ${(item.product.price * item.qty).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-champagne/40 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-sans text-sm text-mist uppercase tracking-wider">Subtotal</span>
              <span className="font-serif text-xl text-velvet">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-mist text-center">Shipping & taxes calculated at checkout</p>
            <button className="w-full py-4 bg-velvet text-champagne font-sans text-xs tracking-widest uppercase hover:bg-bark transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full py-3 border border-champagne/60 text-bark font-sans text-xs tracking-widest uppercase hover:border-gold hover:text-gold transition-colors duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}
