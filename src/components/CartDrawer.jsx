import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice, products } from '@/data/products'
import ProductImage from './ProductImage'

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem, subtotal } = useCart()

  if (!isOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 bg-espresso/30 z-50 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />
      <div
        className="fixed inset-y-0 right-0 w-full max-w-md bg-soft-white z-50 shadow-2xl flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-hairline">
          <h2 className="font-serif text-2xl text-espresso">Your Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-cream rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X size={20} className="text-espresso" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag size={48} className="text-hairline-dark mb-4" strokeWidth={1} />
            <p className="font-serif text-xl text-espresso mb-2">Your cart is empty</p>
            <p className="text-sm text-warm-gray mb-6">Discover pieces crafted to be treasured.</p>
            <button
              onClick={() => setIsOpen(false)}
              className="bg-clay text-white text-xs uppercase tracking-widest px-8 py-3 hover:bg-clay-dark transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
              {items.map((item) => {
                const product = products.find((p) => p.id === item.id)
                return (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="w-20 h-24 bg-cream-dark flex-shrink-0 overflow-hidden">
                      <ProductImage
                        product={product}
                        ratio="3x4"
                        width="200"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-serif text-sm uppercase tracking-widest text-espresso">
                            {item.name}
                          </h3>
                          <p className="text-xs text-warm-gray mt-0.5 capitalize">
                            {item.variant} tone
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-warm-gray hover:text-clay transition-colors p-1"
                          aria-label={`Remove ${item.name}`}
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-hairline">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.variant, item.quantity - 1)
                            }
                            className="p-2 hover:bg-cream transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.variant, item.quantity + 1)
                            }
                            className="p-2 hover:bg-cream transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <p className="font-sans text-sm text-espresso">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="border-t border-hairline px-6 py-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-warm-gray">Subtotal</span>
                <span className="font-serif text-xl text-espresso">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-xs text-warm-gray">
                Shipping and taxes calculated at checkout.
              </p>
              <button className="w-full bg-clay text-white text-xs uppercase tracking-widest py-4 hover:bg-clay-dark transition-colors btn-luxury">
                Checkout
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="w-full border border-hairline-dark text-espresso text-xs uppercase tracking-widest py-3.5 hover:border-espresso transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  )
}
