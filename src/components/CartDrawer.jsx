import { Link } from 'react-router-dom'
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react'
import Drawer from './Drawer.jsx'
import { useCart } from '@/context/CartContext.jsx'
import { getProductImages } from '@/data/productImages.js'
import { formatPrice } from '@/lib/utils.js'

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal, itemCount } = useCart()

  return (
    <Drawer isOpen={isOpen} onClose={closeCart} title="Your Cart">
      {items.length === 0 ? (
        <div className="flex h-full flex-col items-center justify-center text-center">
          <ShoppingBag size={48} strokeWidth={1} className="mb-4 text-muted-subtle" />
          <p className="font-serif text-xl uppercase tracking-widest-custom">Your cart is empty</p>
          <p className="mt-2 text-sm text-muted">Discover something treasured.</p>
          <button
            onClick={closeCart}
            className="mt-8 bg-accent px-8 py-3 text-xs font-medium uppercase tracking-widest text-background transition-colors hover:bg-accent-hover"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="flex h-full flex-col">
          <div className="flex-1 space-y-6">
            {items.map((item) => {
              const thumbUrl = getProductImages(item.slug)?.card
              return (
              <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                <Link
                  to={`/products/${item.slug}`}
                  onClick={closeCart}
                  className="block aspect-square h-20 w-20 overflow-hidden bg-surface-elevated"
                >
                  {thumbUrl ? (
                    <img src={thumbUrl} alt={item.name} className="h-full w-full object-cover" />
                  ) : null}
                </Link>
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <Link
                      to={`/products/${item.slug}`}
                      onClick={closeCart}
                      className="font-serif text-sm uppercase tracking-widest-custom hover:text-accent"
                    >
                      {item.name}
                    </Link>
                    <p className="mt-0.5 text-xs capitalize text-muted">{item.variant}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center border border-muted-subtle/40">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="p-1.5 text-muted hover:text-foreground"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} strokeWidth={1.5} />
                      </button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="p-1.5 text-muted hover:text-foreground"
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} strokeWidth={1.5} />
                      </button>
                    </div>
                    <span className="text-sm text-foreground">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.id, item.variant)}
                  className="self-start p-1 text-muted transition-colors hover:text-red-400"
                  aria-label="Remove item"
                >
                  <Trash2 size={16} strokeWidth={1.5} />
                </button>
              </div>
              )
            })}
          </div>

          <div className="border-t border-muted-subtle/30 pt-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm uppercase tracking-widest text-muted">Subtotal</span>
              <span className="font-serif text-lg text-foreground">{formatPrice(subtotal)}</span>
            </div>
            <p className="mb-4 text-xs text-muted">
              Shipping and taxes calculated at checkout.
            </p>
            <button className="w-full bg-accent py-4 text-xs font-medium uppercase tracking-widest text-background transition-colors hover:bg-accent-hover">
              Checkout · {formatPrice(subtotal)}
            </button>
            <button
              onClick={closeCart}
              className="mt-3 w-full border border-foreground/20 py-3 text-xs font-medium uppercase tracking-widest text-foreground transition-colors hover:bg-foreground/5"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </Drawer>
  )
}
