import React from 'react'
import { Link } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import Button from '@/components/ui/Button'

const CartItem = ({ item, onRemove, onUpdate }) => {
  const itemTitleId = `cart-item-${item.slug}-title`
  const itemDescId = `cart-item-${item.slug}-desc`

  return (
    <div className="rounded-[1.75rem] border border-velmora-line bg-white/60 p-4 shadow-soft">
      <div className="flex gap-4">
        <div className="flex h-24 w-20 flex-col justify-end overflow-hidden rounded-[1.25rem] border border-velmora-line bg-gradient-to-b from-velmora-panel via-white to-velmora-ivory p-3 text-left shadow-soft">
          <span className="text-[10px] uppercase tracking-[0.28em] text-velmora-gold">
            {item.variant}
          </span>
          <span className="mt-2 text-[10px] uppercase tracking-[0.24em] text-velmora-ink/80">
            Velmora
          </span>
        </div>

        <div className="flex flex-1 flex-col">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p id={itemTitleId} className="text-xs uppercase tracking-luxe text-velmora-ink">
                {item.name}
              </p>
              <p id={itemDescId} className="mt-2 text-sm text-velmora-muted">
                {item.variant}
              </p>
            </div>
            <button
              type="button"
              onClick={onRemove}
              className="text-xs uppercase tracking-[0.25em] text-velmora-muted transition-colors hover:text-velmora-ink"
            >
              Remove
            </button>
          </div>

          <div className="mt-auto flex items-end justify-between pt-5">
            <div className="inline-flex items-center rounded-full border border-velmora-line bg-velmora-ivory px-2 py-1">
              <button
                type="button"
                onClick={() => onUpdate(item.quantity - 1)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-velmora-ink transition-colors hover:bg-velmora-panel"
                aria-label="Decrease quantity"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="min-w-8 text-center text-sm text-velmora-ink">{item.quantity}</span>
              <button
                type="button"
                onClick={() => onUpdate(item.quantity + 1)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-velmora-ink transition-colors hover:bg-velmora-panel"
                aria-label="Increase quantity"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <p className="text-sm text-velmora-ink">{formatPrice(item.price * item.quantity)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const CartDrawer = () => {
  const { items, isCartOpen, setIsCartOpen, removeItem, updateQuantity, subtotal } = useCart()

  return (
    <div
      className={`fixed inset-0 z-[60] transition-all duration-300 ${isCartOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      aria-hidden={!isCartOpen}
    >
      <button
        type="button"
        onClick={() => setIsCartOpen(false)}
        className={`absolute inset-0 bg-velmora-overlay transition-opacity duration-300 ${isCartOpen ? 'opacity-100' : 'opacity-0'}`}
      />

      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-xl flex-col border-l border-velmora-line bg-velmora-ivory p-6 text-velmora-ink shadow-soft transition-transform duration-300 ease-luxury sm:p-8 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between border-b border-velmora-line pb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-velmora-gold">Cart</p>
            <h2 className="mt-2 text-3xl">Your selection</h2>
          </div>
          <button
            type="button"
            onClick={() => setIsCartOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-velmora-line text-velmora-ink transition-colors hover:border-velmora-accent hover:text-velmora-accent"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length ? (
          <div className="flex flex-1 flex-col">
            <div className="mt-6 flex-1 space-y-4 overflow-y-auto pr-1">
              {items.map((item) => (
                <CartItem
                  key={`${item.slug}-${item.variant}`}
                  item={item}
                  onRemove={() => removeItem(item.slug, item.variant)}
                  onUpdate={(nextQuantity) => updateQuantity(item.slug, item.variant, nextQuantity)}
                />
              ))}
            </div>

            <div className="mt-6 space-y-5 border-t border-velmora-line pt-6">
              <div className="flex items-center justify-between text-sm text-velmora-muted">
                <span>Subtotal</span>
                <span className="text-base text-velmora-ink">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-sm leading-6 text-velmora-muted">
                Duties and taxes are calculated at checkout. Complimentary gift-ready packaging included.
              </p>
              <div className="space-y-3">
                <Button className="w-full">Proceed to Checkout</Button>
                <Button
                  as={Link}
                  to="/shop"
                  variant="secondary"
                  className="w-full"
                  onClick={() => setIsCartOpen(false)}
                >
                  Continue Shopping
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/70 text-velmora-gold shadow-soft">
              <ShoppingBag className="h-9 w-9" />
            </div>
            <h3 className="mt-8 text-3xl">Your cart is empty</h3>
            <p className="mt-4 max-w-sm text-sm leading-7 text-velmora-muted">
              Explore demi-fine pieces designed for gifting, stacking, and everyday polish.
            </p>
            <Button as={Link} to="/shop" className="mt-8" onClick={() => setIsCartOpen(false)}>
              Discover the collection
            </Button>
          </div>
        )}
      </aside>
    </div>
  )
}

export default CartDrawer
