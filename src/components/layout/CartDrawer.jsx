import { Link } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { products, formatPrice } from '@/data/products'
import { useCart } from '@/context/CartContext'
import ProductVisual from '@/components/product/ProductVisual'

export default function CartDrawer() {
  const {
    items,
    subtotal,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
  } = useCart()

  if (!isCartOpen) return null

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Shopping cart">
      <button
        type="button"
        className="absolute inset-0 bg-velmora-espresso/55 backdrop-blur-sm"
        onClick={closeCart}
        aria-label="Close cart"
      />
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-ivory text-velmora-espresso shadow-soft">
        <div className="flex items-center justify-between border-b border-velmora-stone px-5 py-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-velmora-goldDark">
              Your Cart
            </p>
            <h2 className="font-serif text-3xl font-semibold">Velmora Bag</h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="p-2 text-velmora-espresso transition hover:text-velmora-goldDark"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <ShoppingBag className="h-10 w-10 text-velmora-gold" />
            <h3 className="mt-5 font-serif text-3xl font-semibold">Your bag is quiet.</h3>
            <p className="mt-3 text-sm leading-7 text-velmora-ink">
              Add a luminous piece to begin your Velmora ritual.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-7 bg-velmora-gold px-6 py-3 text-xs font-bold uppercase tracking-[0.24em] text-velmora-cream transition hover:bg-velmora-goldDark"
            >
              Shop jewelry
            </Link>
          </div>
        ) : (
          <>
            <div className="velmora-scrollbar flex-1 overflow-y-auto px-5 py-5">
              <div className="grid gap-5">
                {items.map((item) => {
                  const product = products.find((entry) => entry.id === item.productId)
                  if (!product) return null

                  return (
                    <div key={item.key} className="grid grid-cols-[92px_1fr] gap-4 border-b border-velmora-stone pb-5">
                      <ProductVisual
                        product={product}
                        imageId={`cart-${item.key}`}
                        ratio="1x1"
                        width="240"
                        className="aspect-square bg-velmora-stone"
                        mode="product"
                      />
                      <div>
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3 className="font-serif text-base font-semibold uppercase tracking-[0.16em] text-velmora-espresso">
                              {item.name}
                            </h3>
                            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-velmora-goldDark">
                              {item.variant} tone
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.key)}
                            className="text-xs font-bold uppercase tracking-[0.18em] text-velmora-taupe transition hover:text-velmora-espresso"
                          >
                            Remove
                          </button>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center border border-velmora-stone bg-velmora-cream">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.key, item.quantity - 1)}
                              className="p-2 text-velmora-espresso hover:text-velmora-goldDark"
                              aria-label={`Decrease quantity for ${item.name}`}
                            >
                              <Minus className="h-3.5 w-3.5" />
                            </button>
                            <span className="min-w-8 text-center text-sm font-semibold">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.key, item.quantity + 1)}
                              className="p-2 text-velmora-espresso hover:text-velmora-goldDark"
                              aria-label={`Increase quantity for ${item.name}`}
                            >
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </div>
                          <p className="font-semibold text-velmora-espresso">
                            {formatPrice(item.price * item.quantity)}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="border-t border-velmora-stone bg-velmora-cream p-5">
              <div className="flex items-center justify-between text-sm uppercase tracking-[0.22em] text-velmora-espresso">
                <span>Subtotal</span>
                <span className="font-bold">{formatPrice(subtotal)}</span>
              </div>
              <p className="mt-3 text-xs leading-6 text-velmora-ink">
                Shipping and taxes calculated at checkout. Free worldwide shipping is included on every order.
              </p>
              <button
                type="button"
                className="mt-5 w-full bg-velmora-gold px-5 py-4 text-xs font-bold uppercase tracking-[0.28em] text-velmora-cream transition hover:bg-velmora-goldDark"
              >
                Checkout soon
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
