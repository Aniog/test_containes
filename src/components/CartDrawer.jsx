import { useNavigate } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/data/products'
import ProductImage from '@/components/ui/ProductImage'

export default function CartDrawer() {
  const { items, subtotal, isOpen, closeCart, updateQty, removeItem } = useCart()
  const navigate = useNavigate()

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-400 ${
        isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
      aria-hidden={!isOpen}
    >
      <div className="absolute inset-0 bg-ink/45 backdrop-blur-[2px]" onClick={closeCart} />

      <aside
        role="dialog"
        aria-label="Shopping cart"
        className={`absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-cream shadow-drawer transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-line px-6 py-5">
          <h2 className="font-serif text-xl tracking-[0.12em] text-ink">
            Your Cart
            <span className="ml-2 text-sm text-taupe">({items.reduce((s, i) => s + i.qty, 0)})</span>
          </h2>
          <button type="button" aria-label="Close cart" onClick={closeCart} className="text-taupe-dark transition-colors hover:text-ink">
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-5 px-8 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-sand">
              <ShoppingBag className="h-6 w-6 text-gold-deep" strokeWidth={1.25} />
            </span>
            <div>
              <p className="font-serif text-2xl text-ink">Your cart is empty</p>
              <p className="mt-2 text-sm leading-relaxed text-taupe-dark">
                Discover demi-fine pieces crafted to be treasured every day.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                closeCart()
                navigate('/shop')
              }}
              className="bg-gold px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-cream transition-colors hover:bg-gold-deep"
            >
              Shop the Collection
            </button>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-line overflow-y-auto px-6">
              {items.map((item) => (
                <li key={`${item.productId}-${item.variant}`} className="flex gap-4 py-5">
                  <button
                    type="button"
                    onClick={() => {
                      closeCart()
                      navigate(`/product/${item.productId}`)
                    }}
                    className="relative h-24 w-20 shrink-0 overflow-hidden bg-stone-warm"
                    aria-label={`View ${item.product.name}`}
                  >
                    <span id={`${item.productId}-cart-name`} className="sr-only">
                      {item.product.name}
                    </span>
                    <ProductImage
                      product={{ ...item.product, id: item.productId }}
                      variant="a"
                      ratio="4x5"
                      width={200}
                      className="h-full w-full object-cover"
                    />
                  </button>

                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-serif text-sm font-semibold uppercase tracking-[0.14em] text-ink">
                          {item.product.name}
                        </p>
                        <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-taupe">
                          {item.variant} tone
                        </p>
                      </div>
                      <p className="text-sm font-medium text-ink">{formatPrice(item.product.price * item.qty)}</p>
                    </div>

                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center border border-line">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() => updateQty(item.productId, item.variant, item.qty - 1)}
                          className="flex h-8 w-8 items-center justify-center text-taupe-dark transition-colors hover:text-gold-deep"
                        >
                          <Minus className="h-3.5 w-3.5" strokeWidth={1.5} />
                        </button>
                        <span className="w-8 text-center text-sm text-ink">{item.qty}</span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() => updateQty(item.productId, item.variant, item.qty + 1)}
                          className="flex h-8 w-8 items-center justify-center text-taupe-dark transition-colors hover:text-gold-deep"
                        >
                          <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
                        </button>
                      </div>
                      <button
                        type="button"
                        aria-label={`Remove ${item.product.name}`}
                        onClick={() => removeItem(item.productId, item.variant)}
                        className="flex h-8 w-8 items-center justify-center text-taupe transition-colors hover:text-gold-deep"
                      >
                        <Trash2 className="h-4 w-4" strokeWidth={1.5} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-line bg-sand px-6 py-6">
              <div className="flex items-baseline justify-between">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-taupe-dark">Subtotal</p>
                <p className="font-serif text-2xl text-ink">{formatPrice(subtotal)}</p>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-taupe">
                Complimentary worldwide shipping and 30-day returns on every order.
              </p>
              <button
                type="button"
                className="mt-5 w-full bg-gold py-4 text-xs font-semibold uppercase tracking-[0.22em] text-cream transition-colors hover:bg-gold-deep"
              >
                Checkout
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="mt-3 w-full border border-ink/20 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-ink transition-colors hover:border-gold-deep hover:text-gold-deep"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
