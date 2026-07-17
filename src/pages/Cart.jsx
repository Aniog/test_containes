import { Link } from "react-router-dom";
import { Minus, Plus, X, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { JewelryImage } from "@/components/ui/JewelryImage";
import { products as allProducts } from "@/data/products";

export default function Cart() {
  const { items, subtotal, updateQuantity, removeItem } = useCart();

  // Suggest 2 bestsellers the user isn't already carrying
  const suggestions = allProducts
    .filter((p) => p.badge === "Bestseller")
    .filter((p) => !items.find((i) => i.productId === p.id))
    .slice(0, 2);

  return (
    <main className="bg-canvas pt-24 md:pt-28">
      <div className="container-editorial pb-10 pt-6">
        <p className="eyebrow">Bag</p>
        <h1 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
          Your Bag
        </h1>
      </div>

      {items.length === 0 ? (
        <div className="container-editorial pb-24">
          <div className="grid place-items-center rounded-sm border border-line bg-canvas-soft py-20 text-center">
            <div className="grid h-16 w-16 place-items-center rounded-full bg-canvas text-ink-secondary">
              <ShoppingBag size={22} strokeWidth={1.4} />
            </div>
            <p className="mt-6 font-serif text-2xl text-ink">Your bag is empty</p>
            <p className="mt-2 max-w-sm text-ink-secondary">
              Begin with a quiet everyday piece, or a gift set for someone you
              love.
            </p>
            <Link to="/shop" className="mt-8 btn-primary">
              Shop the Collection
            </Link>
          </div>
        </div>
      ) : (
        <div className="container-editorial pb-24">
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <ul className="md:col-span-8 divide-y divide-line border-t border-b border-line">
              {items.map((line) => (
                <li
                  key={line.key}
                  className="grid grid-cols-12 items-start gap-4 py-6 md:gap-6"
                >
                  <div className="col-span-4 sm:col-span-3">
                    <div className="aspect-[3/4] w-full overflow-hidden">
                      <JewelryImage
                        art={line.art}
                        palette={line.palette}
                        ratio="3/4"
                        className="h-full w-full"
                        alt={line.name}
                      />
                    </div>
                  </div>
                  <div className="col-span-8 flex flex-col sm:col-span-9">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <Link
                          to={`/product/${line.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                          className="product-name text-base text-ink hover:text-ink-secondary"
                        >
                          {line.name}
                        </Link>
                        <p className="mt-1 text-[11px] uppercase tracking-wider2 text-ink-secondary">
                          {line.tone === "gold" ? "18K Gold" : line.tone}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(line.key)}
                        className="p-1 text-ink-muted hover:text-ink"
                        aria-label={`Remove ${line.name}`}
                      >
                        <X size={18} strokeWidth={1.4} />
                      </button>
                    </div>
                    <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-5">
                      <div className="inline-flex items-center border border-line">
                        <button
                          type="button"
                          onClick={() => updateQuantity(line.key, line.quantity - 1)}
                          className="grid h-10 w-10 place-items-center text-ink-secondary hover:text-ink"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} strokeWidth={1.6} />
                        </button>
                        <span className="w-10 text-center text-sm text-ink">
                          {line.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(line.key, line.quantity + 1)}
                          className="grid h-10 w-10 place-items-center text-ink-secondary hover:text-ink"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} strokeWidth={1.6} />
                        </button>
                      </div>
                      <span className="text-base text-ink">
                        {formatPrice(line.price * line.quantity)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <aside className="md:col-span-4">
              <div className="bg-canvas-soft p-6 md:p-8">
                <h3 className="font-serif text-2xl text-ink">Order Summary</h3>
                <dl className="mt-6 space-y-3 text-sm">
                  <div className="flex justify-between text-ink-secondary">
                    <dt>Subtotal</dt>
                    <dd className="text-ink">{formatPrice(subtotal)}</dd>
                  </div>
                  <div className="flex justify-between text-ink-secondary">
                    <dt>Shipping</dt>
                    <dd className="text-ink">Calculated at checkout</dd>
                  </div>
                  <div className="flex justify-between text-ink-secondary">
                    <dt>Tax</dt>
                    <dd className="text-ink">Calculated at checkout</dd>
                  </div>
                </dl>
                <div className="mt-5 border-t border-line pt-5">
                  <div className="flex items-baseline justify-between">
                    <span className="text-[11px] uppercase tracking-wider2 text-ink-secondary">
                      Total
                    </span>
                    <span className="font-serif text-2xl text-ink">
                      {formatPrice(subtotal)}
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  className="mt-6 w-full btn-primary"
                >
                  Checkout
                </button>
                <Link
                  to="/shop"
                  className="mt-3 block w-full text-center text-[11px] uppercase tracking-wider2 text-ink-secondary hover:text-ink"
                >
                  Continue Shopping
                </Link>

                <ul className="mt-8 space-y-2 text-xs text-ink-secondary">
                  <li>· Free worldwide shipping on orders over $75</li>
                  <li>· 30-day no-questions returns</li>
                  <li>· Secure checkout · 256-bit encryption</li>
                </ul>
              </div>

              {suggestions.length > 0 && (
                <div className="mt-10">
                  <h4 className="text-[11px] uppercase tracking-wider2 text-ink-secondary">
                    You may also love
                  </h4>
                  <ul className="mt-5 space-y-5">
                    {suggestions.map((p) => (
                      <li key={p.id} className="flex items-center gap-4">
                        <div className="h-20 w-16 flex-shrink-0 overflow-hidden">
                          <JewelryImage
                            art={p.art}
                            palette={p.palette}
                            ratio="3/4"
                            className="h-full w-full"
                            alt={p.name}
                          />
                        </div>
                        <div className="flex-1">
                          <p className="product-name text-sm text-ink">
                            {p.name}
                          </p>
                          <p className="mt-1 text-sm text-ink-secondary">
                            {formatPrice(p.price)}
                          </p>
                        </div>
                        <Link
                          to={`/product/${p.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                          className="text-[11px] uppercase tracking-wider2 text-ink hover:text-ink-secondary"
                        >
                          View
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </div>
      )}
    </main>
  );
}
