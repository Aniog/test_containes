import React from 'react'
import { X, Plus, Minus, Trash2 } from 'lucide-react'
import { formatPrice } from '@/lib/utils'

const CartDrawer = ({ isOpen, onClose, items, onUpdateQuantity, onRemove, onCheckout }) => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = items.length > 0 ? 0 : 0 // Free shipping
  const total = subtotal + shipping

  return (
    <>
      {/* Overlay */}
      <div 
        className={`cart-overlay ${isOpen ? 'open' : ''}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="flex items-center justify-between p-6 border-b border-[var(--color-border)]">
          <div>
            <div className="serif text-xl tracking-[0.1em]">Your Cart</div>
            <div className="text-xs text-[var(--color-text-muted)] mt-0.5">
              {items.length} {items.length === 1 ? 'item' : 'items'}
            </div>
          </div>
          <button onClick={onClose} className="p-2 -mr-2" aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <div className="empty-state-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
            </div>
            <p className="text-[var(--color-text-muted)] mb-6">Your cart is empty</p>
            <button onClick={onClose} className="btn btn-outline">
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.map((item, index) => (
                <div key={`${item.id}-${item.variant}-${index}`} className="flex gap-4">
                  <div className="w-20 h-20 bg-[var(--color-cream)] flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <div className="product-name text-sm tracking-[0.1em] pr-4">{item.name}</div>
                        <div className="text-xs text-[var(--color-text-muted)] mt-0.5">
                          {item.variant} · {formatPrice(item.price)}
                        </div>
                      </div>
                      <button 
                        onClick={() => onRemove(index)}
                        className="text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="qty-selector">
                        <button 
                          className="qty-btn"
                          onClick={() => onUpdateQuantity(index, Math.max(1, item.quantity - 1))}
                        >
                          <Minus size={12} />
                        </button>
                        <div className="qty-value">{item.quantity}</div>
                        <button 
                          className="qty-btn"
                          onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <div className="font-medium text-sm">
                        {formatPrice(item.price * item.quantity)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="p-6 border-t border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-[var(--color-text-muted)]">Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--color-text-muted)]">Shipping</span>
                  <span className="text-[var(--color-gold)]">Free</span>
                </div>
              </div>
              <div className="flex justify-between font-medium pt-3 border-t border-[var(--color-border)]">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>

              <button 
                onClick={onCheckout}
                className="btn btn-primary w-full mt-6"
              >
                Proceed to Checkout
              </button>
              <p className="text-center text-[10px] text-[var(--color-text-muted)] mt-3 tracking-[0.08em]">
                Free worldwide shipping on all orders
              </p>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default CartDrawer
