import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { items, removeItem, updateQty, subtotal, isOpen, setIsOpen } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-50 bg-espresso/40 backdrop-blur-sm animate-fade-in"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-ivory shadow-2xl flex flex-col animate-slide-in-right">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-mist">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} className="text-gold" />
            <span className="font-serif text-lg tracking-wide text-espresso">Your Cart</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-stone hover:text-espresso transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} className="text-mist" />
              <p className="font-serif text-xl text-stone">Your cart is empty</p>
              <p className="font-sans text-sm text-stone/70">Add something beautiful to get started.</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 font-sans text-xs tracking-widest uppercase text-gold border border-gold px-6 py-3 hover:bg-gold hover:text-espresso transition-all duration-300"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map(item => (
                <CartItem
                  key={item.key}
                  item={item}
                  onRemove={removeItem}
                  onUpdateQty={updateQty}
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-mist px-6 py-5 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-sans text-sm text-stone uppercase tracking-wider">Subtotal</span>
              <span className="font-serif text-xl text-espresso">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-stone/60 text-center">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-espresso text-ivory font-sans text-xs tracking-widest uppercase py-4 hover:bg-bark transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-mist text-stone font-sans text-xs tracking-widest uppercase py-3 hover:border-stone transition-colors duration-300"
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
  const { product, variant, qty } = item
  return (
    <div className="flex gap-4 py-4 border-b border-mist last:border-0">
      {/* Image placeholder */}
      <div className="w-20 h-20 bg-parchment flex-shrink-0 overflow-hidden flex items-center justify-center">
        <div className="w-full h-full bg-gradient-to-br from-parchment to-mist flex items-center justify-center">
          <span className="font-serif text-xs text-stone/40 uppercase tracking-wider text-center px-1 leading-tight">
            {product.name.split(' ').slice(0, 2).join(' ')}
          </span>
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <p className="product-name text-xs text-espresso truncate">{product.name}</p>
        {variant && <p className="font-sans text-xs text-stone mt-0.5">{variant}</p>}
        <p className="font-serif text-base text-espresso mt-1">${product.price}</p>

        <div className="flex items-center gap-3 mt-2">
          <button
            onClick={() => onUpdateQty(item.key, qty - 1)}
            className="text-stone hover:text-espresso transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus size={14} />
          </button>
          <span className="font-sans text-sm text-espresso w-4 text-center">{qty}</span>
          <button
            onClick={() => onUpdateQty(item.key, qty + 1)}
            className="text-stone hover:text-espresso transition-colors"
            aria-label="Increase quantity"
          >
            <Plus size={14} />
          </button>
        </div>
      </div>

      <button
        onClick={() => onRemove(item.key)}
        className="text-stone/50 hover:text-espresso transition-colors self-start mt-1"
        aria-label="Remove item"
      >
        <Trash2 size={14} />
      </button>
    </div>
  )
}
