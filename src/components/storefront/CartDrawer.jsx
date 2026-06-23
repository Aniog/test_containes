import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { products } from '@/data/products'
import { formatPrice } from '@/lib/format'
import { getProductImageUrl } from '@/lib/stockImageConfig'
import { useStore } from './StoreProvider'

const CartDrawer = () => {
  const { cartItems, closeCart, isCartOpen, removeItem, subtotal, updateItemQuantity } = useStore()

  const itemsWithProduct = useMemo(
    () =>
      cartItems.map((item) => ({
        ...item,
        product: products.find((product) => product.id === item.productId),
      })),
    [cartItems],
  )

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-bark/45 transition-opacity duration-300 ${
          isCartOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeCart}
      />
      <aside
        aria-label="Shopping cart"
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-line bg-pearl shadow-velvet transition-transform duration-500 ease-luxe ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-line px-5 py-5 sm:px-6">
            <div>
              <p className="section-kicker">Your selections</p>
              <h2 className="mt-2 font-serif text-3xl text-ink">Cart</h2>
            </div>
            <button
              type="button"
              aria-label="Close cart"
              onClick={closeCart}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {itemsWithProduct.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-mist text-gold">
                <ShoppingBag className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-serif text-3xl text-ink">Your bag is waiting</h3>
              <p className="mt-3 max-w-sm text-sm leading-6 text-muted">
                Add a few demi-fine pieces to build your next everyday stack.
              </p>
              <Link to="/shop" onClick={closeCart} className="button-primary mt-8">
                Browse the collection
              </Link>
            </div>
          ) : (
            <>
              <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5 sm:px-6">
                {itemsWithProduct.map((item) => {
                  const product = item.product
                  const cartImageUrl = getProductImageUrl(item.slug)

                  return (
                    <article key={item.cartKey} className="rounded-[1.75rem] border border-line/80 bg-canvas p-4">
                      <div className="flex gap-4">
                        <img
                          alt={item.name}
                          className="h-28 w-24 rounded-[1.25rem] object-cover"
                          src={cartImageUrl}
                        />
                        <div className="min-w-0 flex-1">
                          <p className="text-[0.65rem] uppercase tracking-[0.2em] text-muted">
                            {product?.type ?? item.type}
                          </p>
                          <Link to={`/product/${item.slug}`} onClick={closeCart}>
                            <h3 className="mt-2 font-serif text-xl uppercase tracking-[0.2em] text-ink">
                              {item.name}
                            </h3>
                          </Link>
                          <p className="mt-2 text-sm text-muted">{item.variant}</p>
                          <p className="mt-3 font-serif text-2xl text-ink">{formatPrice(item.price)}</p>
                          <div className="mt-4 flex items-center justify-between gap-3">
                            <div className="flex items-center rounded-full border border-line bg-pearl px-2 py-1">
                              <button
                                type="button"
                                aria-label={`Decrease quantity for ${item.name}`}
                                onClick={() => updateItemQuantity(item.cartKey, item.quantity - 1)}
                                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-ink transition-colors duration-300 hover:text-gold"
                              >
                                <Minus className="h-3.5 w-3.5" />
                              </button>
                              <span className="min-w-[2rem] text-center text-sm text-ink">{item.quantity}</span>
                              <button
                                type="button"
                                aria-label={`Increase quantity for ${item.name}`}
                                onClick={() => updateItemQuantity(item.cartKey, item.quantity + 1)}
                                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-ink transition-colors duration-300 hover:text-gold"
                              >
                                <Plus className="h-3.5 w-3.5" />
                              </button>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeItem(item.cartKey)}
                              className="text-xs uppercase tracking-[0.18em] text-muted transition-colors duration-300 hover:text-gold"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>

              <div className="border-t border-line bg-pearl px-5 py-5 sm:px-6">
                <div className="flex items-center justify-between text-sm uppercase tracking-[0.18em] text-muted">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-muted">
                  Checkout can be connected later. Your cart state is ready for a real payment flow.
                </p>
                <button type="button" className="button-primary mt-5 w-full">
                  Proceed to checkout
                </button>
              </div>
            </>
          )}
        </div>
      </aside>
    </>
  )
}

export default CartDrawer
