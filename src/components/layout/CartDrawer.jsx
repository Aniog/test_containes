import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, total, count } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-velmora-obsidian/40 z-50 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-velmora-cream z-50 flex flex-col animate-slideInRight shadow-[-8px_0_40px_rgba(26,23,20,0.12)]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-sand">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} strokeWidth={1.5} className="text-velmora-gold" />
            <span className="font-manrope text-xs tracking-[0.2em] uppercase text-velmora-ink">
              Your Cart {count > 0 && `(${count})`}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-velmora-muted hover:text-velmora-ink transition-colors duration-200"
            aria-label="Close cart"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-velmora-sand" />
              <p className="font-cormorant text-xl text-velmora-muted">Your cart is empty</p>
              <p className="font-manrope text-xs text-velmora-whisper">Discover our collection</p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-2 bg-velmora-gold text-velmora-obsidian font-manrope text-[10px] tracking-[0.2em] uppercase px-8 py-3 hover:bg-velmora-gold-light transition-colors duration-300"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="flex flex-col divide-y divide-velmora-sand">
              {items.map(item => (
                <CartItem
                  key={item.key}
                  item={item}
                  onRemove={() => removeItem(item.key)}
                  onUpdateQty={(qty) => updateQuantity(item.key, qty)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-velmora-sand px-6 py-6 bg-velmora-linen">
            <div className="flex justify-between items-center mb-1">
              <span className="font-manrope text-xs tracking-[0.15em] uppercase text-velmora-muted">Subtotal</span>
              <span className="font-cormorant text-xl text-velmora-ink">${total.toFixed(2)}</span>
            </div>
            <p className="font-manrope text-[10px] text-velmora-whisper mb-5">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-velmora-gold text-velmora-obsidian font-manrope text-[10px] tracking-[0.2em] uppercase py-4 hover:bg-velmora-gold-light transition-colors duration-300 font-medium">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-3 border border-velmora-sand text-velmora-muted font-manrope text-[10px] tracking-[0.2em] uppercase py-3 hover:border-velmora-gold hover:text-velmora-gold transition-colors duration-300"
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
  const { product, variant, quantity } = item
  return (
    <div className="py-5 flex gap-4">
      <div className="w-20 h-20 bg-velmora-linen flex-shrink-0 overflow-hidden">
        <img
          data-strk-img-id={`cart-${item.key}-img`}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="1x1"
          data-strk-img-width="160"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start">
          <div>
            <p className="font-cormorant text-sm font-medium tracking-[0.1em] uppercase text-velmora-ink leading-tight">
              {product.name}
            </p>
            <p className="font-manrope text-[10px] text-velmora-muted mt-0.5 capitalize">{variant} tone</p>
          </div>
          <button
            onClick={onRemove}
            className="text-velmora-whisper hover:text-velmora-muted transition-colors duration-200 ml-2 flex-shrink-0"
            aria-label="Remove item"
          >
            <X size={14} strokeWidth={1.5} />
          </button>
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center border border-velmora-sand">
            <button
              onClick={() => onUpdateQty(quantity - 1)}
              className="w-7 h-7 flex items-center justify-center text-velmora-muted hover:text-velmora-ink transition-colors duration-200"
            >
              <Minus size={10} strokeWidth={2} />
            </button>
            <span className="w-8 text-center font-manrope text-xs text-velmora-ink">{quantity}</span>
            <button
              onClick={() => onUpdateQty(quantity + 1)}
              className="w-7 h-7 flex items-center justify-center text-velmora-muted hover:text-velmora-ink transition-colors duration-200"
            >
              <Plus size={10} strokeWidth={2} />
            </button>
          </div>
          <span className="font-cormorant text-base text-velmora-ink">
            ${(product.price * quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  )
}
