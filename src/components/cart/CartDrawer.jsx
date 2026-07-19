import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/cart/CartContext'
import { formatPrice, cn } from '@/lib/utils'
import { Link } from 'react-router-dom'

export default function CartDrawer({ open, onClose }) {
  const { items, subtotal, totalItems, removeFromCart, updateQuantity, getProduct } = useCart()

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={cn(
          'fixed inset-0 bg-espresso/30 backdrop-blur-sm z-[60] transition-opacity duration-400',
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-full max-w-md bg-warm-white z-[70] shadow-2xl transition-transform duration-500 ease-out flex flex-col',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-taupe-light/20">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} className="text-gold" />
            <h2 className="font-serif text-lg tracking-wide">Your Bag</h2>
            {totalItems > 0 && (
              <span className="text-xs text-taupe font-sans">({totalItems})</span>
            )}
          </div>
          <button onClick={onClose} className="p-1 text-taupe hover:text-espresso transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={40} className="text-taupe-light mb-4" />
              <p className="text-taupe text-sm font-sans">Your bag is empty.</p>
              <Link
                to="/shop"
                onClick={onClose}
                className="mt-4 text-xs tracking-widest uppercase text-gold hover:text-gold-light transition-colors font-medium"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {items.map(item => {
                const product = getProduct(item.productId)
                if (!product) return null
                return (
                  <div key={`${item.productId}-${item.variant}`} className="flex gap-4 pb-5 border-b border-taupe-light/20">
                    {/* Image placeholder */}
                    <div className="w-20 h-20 flex-shrink-0 bg-sand flex items-center justify-center">
                      <div className="w-8 h-8 bg-taupe-light/30 rounded-full" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-serif text-xs tracking-wider uppercase text-espresso leading-tight">
                            {product.name}
                          </h3>
                          <p className="text-[10px] text-taupe mt-0.5 font-sans">{item.variant} Tone</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.productId, item.variant)}
                          className="text-taupe-light hover:text-espresso transition-colors ml-2"
                        >
                          <X size={14} />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-taupe-light/40">
                          <button
                            onClick={() => updateQuantity(item.productId, item.variant, item.quantity - 1)}
                            className="px-2 py-1 text-taupe hover:text-espresso transition-colors"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="px-2 text-xs font-sans text-espresso min-w-[24px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.productId, item.variant, item.quantity + 1)}
                            className="px-2 py-1 text-taupe hover:text-espresso transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <p className="text-sm font-sans text-espresso font-medium">
                          {formatPrice(product.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-taupe-light/20 px-6 py-5 space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-taupe font-sans">Subtotal</span>
              <span className="font-sans font-medium text-espresso">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-[11px] text-taupe font-sans leading-relaxed">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-gold text-cream font-sans text-xs tracking-widest uppercase py-3 hover:bg-gold-light transition-colors duration-300">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}
