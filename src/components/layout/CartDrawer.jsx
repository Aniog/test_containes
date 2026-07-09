import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProductImage from '../products/ProductImage.jsx'
import { formatPrice } from '../../data/products.js'

export default function CartDrawer({
  isOpen,
  items,
  onClose,
  onRemove,
  onQuantityChange,
}) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? '' : 'pointer-events-none'}`} aria-hidden={!isOpen}>
      <div
        className={`absolute inset-0 bg-stone-950/45 backdrop-blur-sm transition duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-amber-50 text-stone-950 shadow-2xl transition duration-500 sm:w-[28rem] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-amber-200 px-5 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-stone-500">
              Your Cart
            </p>
            <h2 className="mt-1 font-serif text-3xl text-stone-950">
              Velmora Edit
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-amber-200 bg-transparent text-stone-950 transition hover:border-amber-700 hover:text-amber-700"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-stone-950">
              <ShoppingBag className="h-10 w-10 text-amber-700" />
              <h3 className="mt-5 font-serif text-3xl">Your cart is quiet.</h3>
              <p className="mt-2 max-w-xs text-sm leading-6 text-stone-700">
                Add a golden detail to begin your Velmora ritual.
              </p>
              <Link
                to="/shop"
                onClick={onClose}
                className="mt-6 bg-stone-950 px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-stone-50 transition hover:bg-amber-700"
              >
                Shop Jewelry
              </Link>
            </div>
          ) : (
            <div className="grid gap-5">
              {items.map((item) => (
                <div key={`${item.id}-${item.tone}`} className="grid grid-cols-[5.5rem_1fr] gap-4 border-b border-amber-200 pb-5">
                  <div className="aspect-[3/4] overflow-hidden bg-amber-200/50">
                    <ProductImage
                      product={item}
                      instance={`cart-${item.tone}`}
                      className="h-full w-full"
                      imgClassName="h-full w-full object-cover"
                      width="300"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-serif text-base uppercase tracking-[0.18em] text-stone-950">
                          {item.name}
                        </h3>
                        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-stone-500">
                          {item.tone} tone
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => onRemove(item.id, item.tone)}
                        className="bg-transparent p-1 text-stone-700 transition hover:text-amber-700"
                        aria-label={`Remove ${item.name}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center border border-amber-200 text-stone-950">
                        <button
                          type="button"
                          onClick={() => onQuantityChange(item.id, item.tone, item.quantity - 1)}
                          className="bg-transparent px-2 py-2 text-stone-950 hover:text-amber-700"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="min-w-8 text-center text-sm">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => onQuantityChange(item.id, item.tone, item.quantity + 1)}
                          className="bg-transparent px-2 py-2 text-stone-950 hover:text-amber-700"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <p className="font-serif text-xl text-stone-950">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-amber-200 px-5 py-5">
          <div className="flex items-center justify-between text-stone-950">
            <span className="text-sm uppercase tracking-[0.2em] text-stone-500">Subtotal</span>
            <span className="font-serif text-3xl">{formatPrice(subtotal)}</span>
          </div>
          <p className="mt-2 text-sm text-stone-700">
            Shipping and returns are complimentary. Checkout integration can be connected next.
          </p>
          <button
            type="button"
            className="mt-5 w-full bg-amber-700 px-6 py-4 text-xs font-semibold uppercase tracking-[0.26em] text-stone-50 transition hover:bg-stone-950 disabled:cursor-not-allowed disabled:bg-amber-200 disabled:text-stone-700"
            disabled={items.length === 0}
          >
            Continue to Checkout
          </button>
        </div>
      </aside>
    </div>
  )
}
