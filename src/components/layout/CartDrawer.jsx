import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X, Plus, Minus, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn, formatPrice } from "@/lib/utils";
import strkImgConfig from "@/strk-img-config.json";
import Button from "@/components/ui/Button";

const placeholder =
  "data:image/svg+xml;charset=utf-8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'>
      <defs>
        <radialGradient id='g' cx='35%' cy='30%' r='80%'>
          <stop offset='0%' stop-color='#3D352B'/>
          <stop offset='100%' stop-color='#1A1814'/>
        </radialGradient>
      </defs>
      <rect width='1' height='1' fill='url(%23g)'/>
    </svg>`
  );

function ItemThumb({ product, name }) {
  // Look up the first resolved result from the strk-img-config for this product
  const imgId = product ? `${product.id}-img-1` : null;
  const entry = imgId ? strkImgConfig[imgId] : null;
  const resolved = entry?.results?.[0]?.url ?? placeholder;
  return (
    <div
      className="w-20 h-24 bg-espresso/95 bg-cover bg-center flex-shrink-0"
      style={{ backgroundImage: `url("${resolved}")` }}
      aria-label={name}
    />
  );
}

export default function CartDrawer() {
  const { items, isOpen, closeCart, subtotal, setQuantity, removeItem } = useCart();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[80] bg-espresso/40 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={cn(
          "fixed top-0 right-0 z-[81] h-full w-full sm:w-[420px] bg-ivory shadow-elevated",
          "flex flex-col transition-transform duration-500 ease-out-soft",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-label="Shopping bag"
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-hairline">
          <h2 className="font-serif text-2xl text-espresso">Your Bag</h2>
          <button
            type="button"
            onClick={closeCart}
            className="p-1 text-espresso/80 hover:text-espresso transition-colors"
            aria-label="Close bag"
          >
            <X size={20} strokeWidth={1.4} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-8 text-center gap-5">
            <div className="w-16 h-16 rounded-full border border-hairline flex items-center justify-center text-taupe">
              <ShoppingBag size={22} strokeWidth={1.2} />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-serif text-2xl text-espresso">Your bag is empty</p>
              <p className="text-sm text-taupe font-light max-w-[260px]">
                Discover our most-loved pieces — and a few quiet new arrivals.
              </p>
            </div>
            <Button variant="outline" size="md" onClick={closeCart} as={Link} to="/shop">
              Shop the Collection
            </Button>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto divide-y divide-hairline">
              {items.map((item) => (
                <li key={item.key} className="px-6 py-5 flex gap-4">
                  <ItemThumb product={item.product} name={item.name} />
                  <div className="flex-1 min-w-0 flex flex-col gap-1.5">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="label text-espresso">{item.name}</p>
                        <p className="text-xs text-taupe mt-1 capitalize">{item.color}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.key)}
                        className="text-taupe hover:text-espresso transition-colors p-1 -mr-1"
                        aria-label={`Remove ${item.name}`}
                      >
                        <Trash2 size={14} strokeWidth={1.3} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-auto pt-2">
                      <div className="inline-flex items-center border border-hairline">
                        <button
                          type="button"
                          className="w-7 h-7 flex items-center justify-center text-espresso/80 hover:text-espresso hover:bg-bone transition-colors"
                          onClick={() => setQuantity(item.key, item.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-7 text-center text-xs font-medium text-espresso">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          className="w-7 h-7 flex items-center justify-center text-espresso/80 hover:text-espresso hover:bg-bone transition-colors"
                          onClick={() => setQuantity(item.key, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <p className="text-sm text-espresso font-medium tracking-label-tight">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-hairline px-6 py-6 flex flex-col gap-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-taupe label">Subtotal</span>
                <span className="text-espresso font-medium text-base">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="text-[11px] text-taupe font-light text-center">
                Shipping and taxes calculated at checkout
              </p>
              <Button variant="primary" size="lg" fullWidth>
                Checkout · {formatPrice(subtotal)}
              </Button>
              <button
                type="button"
                onClick={closeCart}
                className="label text-taupe hover:text-espresso transition-colors text-center"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
