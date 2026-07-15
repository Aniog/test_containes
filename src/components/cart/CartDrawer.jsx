import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { formatPrice } from '@/data/products'
import { useCart } from './CartContext'

export default function CartDrawer() {
  const {
    items,
    cartCount,
    cartTotal,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
  } = useCart()

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-velmora-espresso/45 backdrop-blur-sm transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-velmora-linen bg-velmora-porcelain text-velmora-espresso shadow-soft transition-transform duration-500 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
        aria-hidden={!isCartOpen}
      >
        <div className="flex items-center justify-between border-b border-velmora-linen px-5 py-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-antique">
              Your Bag
            </p>
            <h2 className="font-serif text-3xl font-semibold text-velmora-espresso">
              {cartCount} {cartCount === 1 ? 'piece' : 'pieces'}
            </h2>
          </div>
          <button
            type="button"
            className="rounded-full border border-velmora-linen p-2 text-velmora-espresso transition hover:bg-velmora-cream"
            onClick={closeCart}
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <div className="mb-6 rounded-full border border-velmora-linen bg-velmora-cream p-5 text-velmora-champagne">
              <ShoppingBag className="h-8 w-8" />
            </div>
            <h3 className="font-serif text-3xl font-semibold text-velmora-espresso">
              Your jewelry box is empty
            </h3>
            <p className="mt-3 text-sm leading-6 text-velmora-sage">
              Add a Velmora piece and it will appear here, ready for checkout.
            </p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-4">
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.cartId} className="grid grid-cols-[86px_1fr] gap-4 border-b border-velmora-linen/80 pb-4">
                    <div className="flex aspect-[4/5] flex-col items-center justify-center overflow-hidden bg-velmora-espresso text-center text-velmora-porcelain">
                      <span className="font-serif text-3xl font-semibold text-velmora-champagne">
                        {item.product.name.charAt(0)}
                      </span>
                      <span className="mt-1 text-[0.58rem] font-bold uppercase tracking-[0.24em] text-velmora-linen">
                        Velmora
                      </span>
                    </div>
                    <div className="min-w-0 text-velmora-espresso">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 id={`cart-title-${item.cartId}`} className="font-serif text-base font-semibold uppercase tracking-[0.18em]">
                            {item.product.name}
                          </h3>
                          <p id={`cart-tone-${item.cartId}`} className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-velmora-sage">
                            {item.tone} tone
                          </p>
                        </div>
                        <button
                          type="button"
                          className="text-velmora-sage transition hover:text-velmora-antique"
                          onClick={() => removeFromCart(item.cartId)}
                          aria-label={`Remove ${item.product.name}`}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="mt-4 flex items-center justify-between gap-3">
                        <div className="flex items-center rounded-full border border-velmora-linen bg-velmora-cream">
                          <button
                            type="button"
                            className="p-2 transition hover:text-velmora-antique"
                            onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="min-w-8 text-center text-sm font-bold">{item.quantity}</span>
                          <button
                            type="button"
                            className="p-2 transition hover:text-velmora-antique"
                            onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <p className="text-sm font-bold text-velmora-espresso">
                          {formatPrice(item.product.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t border-velmora-linen bg-velmora-porcelain px-5 py-5">
              <div className="mb-4 flex items-center justify-between text-velmora-espresso">
                <span className="text-sm uppercase tracking-[0.2em] text-velmora-sage">Subtotal</span>
                <span className="font-serif text-3xl font-semibold">{formatPrice(cartTotal)}</span>
              </div>
              <button
                type="button"
                className="w-full rounded-full bg-velmora-champagne px-6 py-4 text-sm font-extrabold uppercase tracking-[0.22em] text-velmora-espresso shadow-glow transition hover:bg-velmora-antique hover:text-velmora-porcelain"
              >
                Continue to Checkout
              </button>
              <p className="mt-3 text-center text-xs leading-5 text-velmora-sage">
                Checkout connection can be added when you are ready. Free worldwide shipping is included.
              </p>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
