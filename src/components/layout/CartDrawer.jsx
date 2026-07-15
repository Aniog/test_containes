import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'
import { formatPrice } from '@/data/products'
import { Sheet } from '@/components/ui/Sheet'
import { Button } from '@/components/ui/Button'

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal } = useCart()

  return (
    <Sheet open={isOpen} onClose={closeCart}>
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between border-b border-vel-border px-6 py-5">
          <h2 className="font-serif text-xl font-normal uppercase tracking-wide">
            Your Cart ({items.length})
          </h2>
          <button
            type="button"
            onClick={closeCart}
            className="p-2 text-vel-muted transition-colors hover:text-vel-base"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <ShoppingBag size={40} className="mb-4 text-vel-border" />
            <p className="font-serif text-lg uppercase tracking-wide text-vel-base">
              Your cart is empty
            </p>
            <p className="mt-2 text-sm text-vel-muted">
              Discover something beautiful to treasure.
            </p>
            <Button onClick={closeCart} className="mt-6">
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <ul className="flex flex-col gap-6">
                {items.map((item) => (
                  <li key={`${item.id}-${item.tone}`} className="flex gap-4">
                    <div className="h-20 w-20 flex-shrink-0 bg-vel-cream" />
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <p className="product-name">{item.name}</p>
                        <p className="mt-0.5 text-xs capitalize text-vel-muted">
                          {item.tone} tone
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-vel-border">
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.id, item.tone, item.quantity - 1)
                            }
                            className="p-1.5 text-vel-muted hover:text-vel-base"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-sm">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.id, item.tone, item.quantity + 1)
                            }
                            className="p-1.5 text-vel-muted hover:text-vel-base"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <span className="text-sm font-medium">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.id, item.tone)}
                      className="self-start p-1 text-vel-muted hover:text-vel-base"
                      aria-label="Remove item"
                    >
                      <X size={16} />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-vel-border px-6 py-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm uppercase tracking-wide text-vel-muted">
                  Subtotal
                </span>
                <span className="font-serif text-lg font-medium">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="mb-5 text-xs text-vel-muted">
                Shipping & taxes calculated at checkout.
              </p>
              <Button className="w-full">Checkout</Button>
            </div>
          </>
        )}
      </div>
    </Sheet>
  )
}
