import { Minus, Plus, Trash2, X } from 'lucide-react'
import { Sheet } from '@/components/ui/Sheet'
import { useCart } from '@/context/CartContext'

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeFromCart, subtotal } =
    useCart()

  return (
    <Sheet isOpen={isOpen} onClose={closeCart} title="Your Cart">
      <div>
      {items.length === 0 ? (
        <div className="flex h-full flex-col items-center justify-center text-center">
          <p className="font-serif text-2xl">Your cart is empty</p>
          <p className="mt-2 text-sm text-warm-gray">
            Discover something beautiful to treasure.
          </p>
        </div>
      ) : (
        <div className="flex h-full flex-col">
          <div className="flex-1 space-y-6">
            {items.map((item) => (
              <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                <div className="h-20 w-20 flex-shrink-0 bg-blush">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <p
                      id={`cart-name-${item.id}`}
                      className="font-serif text-sm font-medium uppercase tracking-widest"
                    >
                      {item.name}
                    </p>
                    <p className="mt-0.5 text-xs capitalize text-warm-gray">
                      {item.variant}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center border border-hairline">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.variant, item.quantity - 1)
                        }
                        className="p-1.5 hover:bg-blush"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-8 text-center text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.variant, item.quantity + 1)
                        }
                        className="p-1.5 hover:bg-blush"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    <span className="text-sm font-medium">
                      ${item.price * item.quantity}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id, item.variant)}
                  className="self-start text-warm-gray transition-colors hover:text-espresso"
                  aria-label="Remove item"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="border-t border-hairline pt-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm uppercase tracking-wider text-warm-gray">
                Subtotal
              </span>
              <span className="font-serif text-xl">${subtotal}</span>
            </div>
            <p className="mb-4 text-xs text-warm-gray">
              Shipping and taxes calculated at checkout.
            </p>
            <button className="w-full bg-espresso py-4 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-gold">
              Checkout
            </button>
            <button
              onClick={closeCart}
              className="mt-3 w-full border border-hairline py-3 text-xs font-medium uppercase tracking-widest transition-colors hover:bg-blush"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}
      </div>
    </Sheet>
  )
}
