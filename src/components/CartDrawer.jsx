import { X, Plus, Minus } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } =
    useCart()

  if (!isOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
        onClick={closeCart}
      />
      <div className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-md bg-vbg shadow-2xl flex flex-col animate-[slideIn_0.3s_ease-out]">
        <div className="flex items-center justify-between px-6 py-5 border-b border-vborder">
          <h2 className="font-serif text-lg tracking-wide">Your Bag</h2>
          <button onClick={closeCart} aria-label="Close cart">
            <X size={20} className="text-vtext" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="font-sans text-sm text-vmuted">
                Your bag is empty.
              </p>
              <p className="font-sans text-xs text-vmuted mt-1">
                Explore our collection to find something you love.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 pb-5 border-b border-vborder last:border-0"
                >
                  <div className="w-20 h-24 bg-vborder rounded-sm flex-shrink-0 overflow-hidden">
                    <img
                      src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-sans text-xs font-medium uppercase tracking-wider text-vtext truncate">
                          {item.name}
                        </p>
                        <p className="font-sans text-xs text-vmuted mt-0.5 capitalize">
                          {item.variant}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-vmuted hover:text-vtext transition-colors"
                        aria-label="Remove item"
                      >
                        <X size={14} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-vborder rounded-sm">
                        <button
                          className="w-7 h-7 flex items-center justify-center text-vmuted hover:text-vtext"
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity - 1)
                          }
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-7 text-center font-sans text-xs">
                          {item.quantity}
                        </span>
                        <button
                          className="w-7 h-7 flex items-center justify-center text-vmuted hover:text-vtext"
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity + 1)
                          }
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <p className="font-sans text-sm font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-vborder px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-sm text-vmuted">Subtotal</span>
              <span className="font-sans text-base font-medium">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <button className="w-full btn-primary">Checkout</button>
            <p className="font-sans text-[11px] text-vmuted text-center mt-3">
              Shipping and taxes calculated at checkout.
            </p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </>
  )
}
