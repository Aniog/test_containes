import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { formatPrice } from '@/data/products'
import { useCart } from './CartContext'

function CartDrawer() {
  const { items, subtotal, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity } = useCart()

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-velmora-obsidian/45 transition duration-300 ${isCartOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={() => setIsCartOpen(false)}
        aria-hidden="true"
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-velmora-ivory text-velmora-umber shadow-editorial transition duration-500 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-linen px-5 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-luxe text-velmora-antique">Your Cart</p>
            <h2 className="font-serif text-3xl text-velmora-umber">A considered edit</h2>
          </div>
          <button
            type="button"
            onClick={() => setIsCartOpen(false)}
            className="rounded-full border border-velmora-linen p-2 text-velmora-umber transition hover:border-velmora-champagne hover:bg-velmora-pearl"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-velmora-cocoa">
              <ShoppingBag className="mb-5 h-10 w-10 text-velmora-antique" />
              <p className="font-serif text-3xl text-velmora-umber">Your cart is quiet.</p>
              <p className="mt-3 max-w-xs text-sm leading-7">Add a luminous everyday piece and it will appear here.</p>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map((item) => (
                <li key={item.key} className="border-b border-velmora-linen pb-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-lg font-semibold uppercase tracking-luxe text-velmora-umber">{item.name}</h3>
                      <p className="mt-1 text-sm text-velmora-cocoa">{item.tone} tone · {item.category}</p>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.key)}
                        className="mt-3 text-xs font-semibold uppercase tracking-luxe text-velmora-antique transition hover:text-velmora-obsidian"
                      >
                        Remove
                      </button>
                    </div>
                    <p className="font-semibold text-velmora-umber">{formatPrice(item.price * item.quantity)}</p>
                  </div>
                  <div className="mt-4 inline-flex items-center border border-velmora-linen text-velmora-umber">
                    <button
                      type="button"
                      className="p-3 transition hover:bg-velmora-pearl"
                      onClick={() => updateQuantity(item.key, item.quantity - 1)}
                      aria-label={`Decrease quantity for ${item.name}`}
                    >
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                    <span className="min-w-10 text-center text-sm font-semibold">{item.quantity}</span>
                    <button
                      type="button"
                      className="p-3 transition hover:bg-velmora-pearl"
                      onClick={() => updateQuantity(item.key, item.quantity + 1)}
                      aria-label={`Increase quantity for ${item.name}`}
                    >
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-velmora-linen p-5">
          <div className="mb-4 flex items-center justify-between text-velmora-umber">
            <span className="text-sm uppercase tracking-luxe">Subtotal</span>
            <span className="text-xl font-semibold">{formatPrice(subtotal)}</span>
          </div>
          <button className="w-full bg-velmora-champagne px-6 py-4 text-sm font-bold uppercase tracking-luxe text-velmora-obsidian transition hover:bg-velmora-antique hover:text-velmora-ivory">
            Continue to Checkout
          </button>
          <p className="mt-4 text-center text-xs leading-6 text-velmora-cocoa">Preview checkout only. Taxes and shipping calculated later.</p>
        </div>
      </aside>
    </>
  )
}

export default CartDrawer
