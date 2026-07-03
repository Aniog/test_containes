import { useEffect } from "react"
import { Link } from "react-router-dom"
import { Plus, Minus, Trash2, ArrowRight, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"
import StrkImage from "@/components/StrkImage"

export default function CartPage() {
  const { items, totals, setQuantity, removeItem } = useCart()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" })
  }, [])

  return (
    <main className="pt-24 md:pt-28">
      <header className="container-site pb-10 border-b border-line">
        <p className="eyebrow">Your Bag</p>
        <h1
          id="cart-title"
          className="display text-4xl md:text-5xl mt-3"
        >
          {items.length === 0 ? "Your bag is empty" : "Review your bag"}
        </h1>
      </header>

      <div className="container-site py-12 md:py-16">
        {items.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingBag
              className="h-10 w-10 text-ink-muted mx-auto"
              strokeWidth={1.2}
            />
            <p className="mt-6 text-ink-secondary max-w-md mx-auto">
              Discover pieces designed to be worn and kept. Begin with our
              bestsellers.
            </p>
            <Link to="/shop" className="btn-primary mt-8 inline-flex">
              Shop the Collection
              <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
            <ul className="md:col-span-8 divide-y divide-line border-t border-b border-line">
              {items.map((item) => {
                const img = item.product.images?.[0]
                return (
                  <li
                    key={`${item.id}-${item.variant}`}
                    className="py-6 flex gap-4 md:gap-6"
                  >
                    <Link
                      to={`/product/${item.id}`}
                      className="w-24 h-32 md:w-32 md:h-40 flex-shrink-0 bg-surface overflow-hidden"
                    >
                      {img && (
                        <StrkImage
                          id={img.id}
                          query={img.query}
                          ratio="4x5"
                          width={400}
                          alt={img.alt}
                          imgClassName="w-full h-full object-cover"
                        />
                      )}
                    </Link>
                    <div className="flex-1 min-w-0 flex flex-col">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="product-name text-ink-primary">
                            {item.product.name}
                          </p>
                          <p className="mt-1 text-[11px] uppercase tracking-wider2 text-ink-muted">
                            {item.variant === "gold" ? "Gold" : "Silver"}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id, item.variant)}
                          className="p-1.5 text-ink-muted hover:text-clay transition-colors duration-300"
                          aria-label={`Remove ${item.product.name}`}
                        >
                          <Trash2 className="h-4 w-4" strokeWidth={1.5} />
                        </button>
                      </div>
                      <div className="mt-auto pt-6 flex items-center justify-between">
                        <div className="inline-flex items-center border border-line">
                          <button
                            type="button"
                            onClick={() =>
                              setQuantity(item.id, item.variant, item.qty - 1)
                            }
                            className="w-9 h-9 flex items-center justify-center text-ink-primary hover:text-accent"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3.5 w-3.5" strokeWidth={1.5} />
                          </button>
                          <span className="w-9 text-center text-sm tabular-nums">
                            {item.qty}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              setQuantity(item.id, item.variant, item.qty + 1)
                            }
                            className="w-9 h-9 flex items-center justify-center text-ink-primary hover:text-accent"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
                          </button>
                        </div>
                        <span className="text-base text-ink-primary tabular-nums font-medium">
                          {formatPrice(item.lineTotal)}
                        </span>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>

            <aside className="md:col-span-4 md:sticky md:top-28 md:self-start bg-surface border border-line p-6 md:p-8">
              <h2 className="font-sans text-[12px] uppercase tracking-name font-medium text-ink-primary">
                Order Summary
              </h2>
              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between text-ink-secondary">
                  <dt>Subtotal</dt>
                  <dd className="tabular-nums">{formatPrice(totals.subtotal)}</dd>
                </div>
                <div className="flex justify-between text-ink-secondary">
                  <dt>Shipping</dt>
                  <dd className="tabular-nums">
                    {totals.shipping === 0 ? "Free" : formatPrice(totals.shipping)}
                  </dd>
                </div>
                <div className="hairline my-2" />
                <div className="flex justify-between text-ink-primary text-base pt-1">
                  <dt>Total</dt>
                  <dd className="tabular-nums font-medium">
                    {formatPrice(totals.total)}
                  </dd>
                </div>
              </dl>
              <Link to="/checkout" className="btn-primary mt-6 w-full">
                Checkout
                <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
              </Link>
              <Link
                to="/shop"
                className="btn-ghost mt-3 w-full"
              >
                Continue Shopping
              </Link>
              {totals.subtotal < 75 && (
                <p className="mt-4 text-[11px] text-center text-ink-muted tracking-wider2 uppercase">
                  Add {formatPrice(75 - totals.subtotal)} more for free shipping
                </p>
              )}
            </aside>
          </div>
        )}
      </div>
    </main>
  )
}
