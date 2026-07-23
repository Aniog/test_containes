import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from './CartContext'

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal } = useCart()

  if (!isOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 bg-charcoal/40 z-40 transition-opacity duration-300"
        onClick={() => setIsOpen(false)}
      />
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-ivory z-50 shadow-xl flex flex-col transition-transform duration-300">
        <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
          <h2 className="font-serif text-2xl text-charcoal">Your Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-linen rounded-sm transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5 text-charcoal" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag className="w-12 h-12 text-sand mb-4" />
            <p className="font-serif text-xl text-charcoal mb-2">Your cart is empty</p>
            <p className="text-stone text-sm">Discover our collection and find something you love.</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {items.map(item => (
                <div key={item.key} className="flex gap-4 py-4 border-b border-sand last:border-0">
                  <div className="w-20 h-20 bg-linen rounded-sm flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-sans text-xs font-medium tracking-product uppercase text-charcoal truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-stone text-xs mt-0.5 capitalize">{item.variant} tone</p>
                    <p className="text-charcoal font-medium text-sm mt-1">${item.product.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-7 h-7 border border-sand flex items-center justify-center hover:bg-linen transition-colors rounded-sm"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-7 h-7 border border-sand flex items-center justify-center hover:bg-linen transition-colors rounded-sm"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-auto text-stone hover:text-charcoal text-xs underline transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-sand px-6 py-5 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-stone text-sm">Subtotal</span>
                <span className="font-serif text-xl text-charcoal">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-stone text-xs">Shipping calculated at checkout</p>
              <button className="w-full py-3.5 bg-gold text-ivory text-sm font-medium tracking-wide uppercase hover:bg-gold-light transition-colors rounded-sm">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </>
  )
}
