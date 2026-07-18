import { Link } from 'react-router-dom'
import { Minus, Plus, X, ShoppingBag, Trash2, Gem } from 'lucide-react'
import { Sheet } from '@/components/ui/Sheet'
import { Button } from '@/components/ui/Button'
import { useCart } from '@/lib/cart-context'
import { formatPrice } from '@/lib/utils'

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal } = useCart()

  return (
    <Sheet open={isOpen} onClose={closeCart} title="Your Cart">
      {items.length === 0 ? (
        <div className="flex h-full flex-col items-center justify-center text-center">
          <ShoppingBag size={48} className="mb-4 text-ink/20" />
          <p className="font-serif text-xl text-ink">Your cart is empty</p>
          <p className="mt-2 text-sm text-stone">
            Discover pieces crafted to be treasured.
          </p>
          <Button
            variant="solid"
            className="mt-6"
            onClick={() => closeCart()}
            asChild
          >
            <Link to="/shop">Continue Shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="flex h-full flex-col">
          <ul className="flex-1 space-y-6 overflow-y-auto">
            {items.map((item) => (
              <li key={`${item.productId}-${item.variantId}`} className="flex gap-4">
                <div className="flex h-24 w-20 flex-shrink-0 items-center justify-center bg-champagne/40">
                  <Gem size={24} className="text-gold" />
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <Link
                      to={`/products/${item.productId}`}
                      onClick={closeCart}
                      className="font-serif text-sm uppercase tracking-[0.15em] text-ink transition-colors hover:text-gold"
                    >
                      {item.product.name}
                    </Link>
                    <p className="mt-1 text-xs capitalize text-stone">
                      {item.variant?.label}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center border border-ink/10">
                      <button
                        onClick={() =>
                          updateQuantity(item.productId, item.variantId, item.quantity - 1)
                        }
                        className="p-1.5 text-ink transition-colors hover:text-gold"
                        aria-label="Decrease"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="min-w-[1.5rem] px-1 text-center text-xs tabular-nums">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.productId, item.variantId, item.quantity + 1)
                        }
                        className="p-1.5 text-ink transition-colors hover:text-gold"
                        aria-label="Increase"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                    <span className="text-sm font-medium">
                      {formatPrice(item.lineTotal)}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.productId, item.variantId)}
                  className="self-start p-1 text-ink/40 transition-colors hover:text-red-600"
                  aria-label="Remove item"
                >
                  <Trash2 size={16} />
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 border-t border-ink/10 pt-6">
            <div className="flex items-center justify-between text-sm">
              <span className="text-stone">Subtotal</span>
              <span className="font-medium text-ink">{formatPrice(subtotal)}</span>
            </div>
            <p className="mt-2 text-xs text-stone">
              Shipping and taxes calculated at checkout.
            </p>
            <Button variant="solid" fullWidth className="mt-4">
              Checkout
            </Button>
            <Button
              variant="ghost"
              fullWidth
              className="mt-2"
              onClick={closeCart}
              asChild
            >
              <Link to="/shop">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      )}
    </Sheet>
  )
}
