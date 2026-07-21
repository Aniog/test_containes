import { Link } from 'react-router-dom'
import { Minus, Plus, X, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCart } from '@/context/CartContext'

export default function Cart() {
  const { items, removeItem, updateQuantity, subtotal } = useCart()

  return (
    <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="font-serif text-3xl text-brand-ink md:text-4xl">Your Cart</h1>

      {items.length === 0 ? (
        <div className="mt-10 text-center">
          <p className="text-sm text-brand-muted">Your cart is empty.</p>
          <Link to="/shop">
            <Button className="mt-4">Continue Shopping</Button>
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid gap-10 md:grid-cols-[1fr_340px]">
          <ul className="space-y-6">
            {items.map((item) => (
              <li key={`${item.id}-${item.variant}`} className="flex gap-4 rounded-md border border-brand-line bg-brand-surface p-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-24 w-24 rounded-md object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium text-brand-ink">{item.name}</p>
                      <p className="text-xs text-brand-muted capitalize">{item.variant}</p>
                    </div>
                    <button
                      onClick={() => removeItem(item.id, item.variant)}
                      className="text-brand-subtle hover:text-brand-ink"
                      aria-label="Remove"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 rounded-full border border-brand-line">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.variant, Math.max(1, item.quantity - 1))
                        }
                        className="flex h-8 w-8 items-center justify-center text-brand-muted hover:text-brand-ink"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-6 text-center text-xs text-brand-ink">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.variant, item.quantity + 1)
                        }
                        className="flex h-8 w-8 items-center justify-center text-brand-muted hover:text-brand-ink"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    <p className="text-sm font-medium text-brand-ink">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="rounded-md border border-brand-line bg-brand-surface p-6">
            <h2 className="font-serif text-lg text-brand-ink">Order Summary</h2>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex items-center justify-between text-brand-muted">
                <span>Subtotal</span>
                <span className="text-brand-ink">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between text-brand-muted">
                <span>Shipping</span>
                <span className="text-brand-ink">Calculated at checkout</span>
              </div>
            </div>
            <div className="mt-4 border-t border-brand-line pt-4">
              <div className="flex items-center justify-between text-sm font-medium text-brand-ink">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
            </div>
            <Button className="mt-6 w-full" size="lg">
              Checkout <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link to="/shop" className="mt-3 block text-center text-xs uppercase tracking-widest text-brand-muted hover:text-brand-ink">
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </main>
  )
}