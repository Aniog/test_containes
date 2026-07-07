import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, total, itemCount } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-obsidian/40 z-50 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-parchment z-50 flex flex-col animate-slideInRight shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone/15">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} strokeWidth={1.5} className="text-stone" />
            <span className="font-inter text-xs uppercase tracking-widest text-ink">
              Your Cart {itemCount > 0 && `(${itemCount})`}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-stone hover:text-ink transition-colors"
            aria-label="Close cart"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-stone/40" />
              <p className="font-cormorant text-2xl text-stone">Your cart is empty</p>
              <p className="font-inter text-xs text-mist">Add something beautiful to get started.</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 font-inter text-xs uppercase tracking-widest text-gold border border-gold px-6 py-2.5 hover:bg-gold hover:text-obsidian transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="flex flex-col divide-y divide-stone/10">
              {items.map(item => (
                <CartItem
                  key={item.key}
                  item={item}
                  onRemove={() => removeItem(item.key)}
                  onUpdateQty={(q) => updateQuantity(item.key, q)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-stone/15 bg-cream">
            <div className="flex justify-between items-center mb-1">
              <span className="font-inter text-xs uppercase tracking-widest text-stone">Subtotal</span>
              <span className="font-cormorant text-xl text-ink">${total.toFixed(2)}</span>
            </div>
            <p className="font-inter text-[11px] text-mist mb-4">Shipping calculated at checkout</p>
            <button className="w-full bg-obsidian text-ivory font-inter text-xs uppercase tracking-widest py-4 hover:bg-charcoal transition-colors">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-2 font-inter text-xs uppercase tracking-widest text-stone hover:text-ink py-2 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}

function CartItem({ item, onRemove, onUpdateQty }) {
  const { product, quantity, variant } = item
  return (
    <div className="flex gap-4 py-5">
      <div className="w-20 h-20 bg-linen flex-shrink-0 overflow-hidden">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          data-strk-img-id={`cart-${item.key}-img`}
          data-strk-img={`[cart-item-${item.key}-name]`}
          data-strk-img-ratio="1x1"
          data-strk-img-width="80"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start gap-2">
          <span id={`cart-item-${item.key}-name`} className="font-cormorant text-sm uppercase tracking-widest text-ink leading-tight">
            {product.name}
          </span>
          <button onClick={onRemove} className="text-mist hover:text-ink transition-colors flex-shrink-0">
            <X size={14} strokeWidth={1.5} />
          </button>
        </div>
        <p className="font-inter text-[11px] text-mist mt-0.5 capitalize">{variant} tone</p>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center border border-stone/20">
            <button
              onClick={() => onUpdateQty(quantity - 1)}
              className="w-7 h-7 flex items-center justify-center text-stone hover:text-ink transition-colors"
            >
              <Minus size={12} strokeWidth={1.5} />
            </button>
            <span className="w-8 text-center font-inter text-xs text-ink">{quantity}</span>
            <button
              onClick={() => onUpdateQty(quantity + 1)}
              className="w-7 h-7 flex items-center justify-center text-stone hover:text-ink transition-colors"
            >
              <Plus size={12} strokeWidth={1.5} />
            </button>
          </div>
          <span className="font-inter text-sm text-ink font-medium">
            ${(product.price * quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  )
}
