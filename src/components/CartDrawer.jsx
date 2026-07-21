import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice, cn } from '@/lib/utils'

export function CartDrawer() {
  const { isOpen, setIsOpen, items, subtotal, count, updateQuantity, removeItem } = useCart()

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="relative p-2 text-espresso-900 transition-colors hover:text-gold-dark"
        aria-label="Open cart"
      >
        <ShoppingBag size={20} strokeWidth={1.5} />
        {count > 0 && (
          <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-bold text-espresso-900">
            {count}
          </span>
        )}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-espresso-900/40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <aside
        className={cn(
          'fixed inset-y-0 right-0 z-50 w-full max-w-md bg-cream-100 shadow-2xl transition-transform duration-500 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        aria-hidden={!isOpen}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-warmgray-200 px-6 py-5">
            <h2 className="font-serif text-xl font-medium uppercase tracking-widest">Your Bag</h2>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-2 text-warmgray-500 transition-colors hover:text-espresso-900"
              aria-label="Close cart"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>

          {items.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
              <ShoppingBag size={40} className="mb-4 text-warmgray-300" strokeWidth={1} />
              <p className="font-serif text-lg">Your bag is empty</p>
              <p className="mt-2 font-sans text-sm text-warmgray-500">Discover pieces crafted to be treasured.</p>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="btn-primary mt-8"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto px-6 py-6 scrollbar-hide">
                <ul className="flex flex-col gap-6">
                  {items.map((item) => (
                    <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                      <div className="h-20 w-20 flex-shrink-0 bg-warmgray-100" />
                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <p className="product-title text-[11px]">{item.name}</p>
                          {item.variant && (
                            <p className="mt-0.5 font-sans text-xs text-warmgray-500">{item.variant}</p>
                          )}
                          <p className="mt-1 font-sans text-sm font-medium">{formatPrice(item.price)}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border border-warmgray-200">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                              className="p-2 text-warmgray-500 hover:text-espresso-900"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="min-w-[1.5rem] text-center font-sans text-sm">{item.quantity}</span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                              className="p-2 text-warmgray-500 hover:text-espresso-900"
                              aria-label="Increase quantity"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeItem(item.id, item.variant)}
                            className="p-2 text-warmgray-400 transition-colors hover:text-red-700"
                            aria-label="Remove item"
                          >
                            <Trash2 size={16} strokeWidth={1.5} />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-warmgray-200 p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-sans text-sm uppercase tracking-widest text-warmgray-500">Subtotal</span>
                  <span className="font-serif text-lg font-semibold">{formatPrice(subtotal)}</span>
                </div>
                <p className="mb-6 font-sans text-xs text-warmgray-500">Shipping & taxes calculated at checkout.</p>
                <button type="button" className="btn-primary w-full">
                  Checkout
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="mt-3 w-full py-3 text-center font-sans text-xs font-semibold uppercase tracking-widest text-warmgray-500 transition-colors hover:text-espresso-900"
                >
                  Continue Shopping
                </button>
              </div>
            </>
          )}
        </div>
      </aside>
    </>
  )
}
