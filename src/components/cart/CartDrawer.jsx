import { useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn, formatPrice } from "@/lib/utils";
import ProductImage from "@/components/ui/ProductImage";
import { findProduct } from "@/data/products";

function CartLine({ line }) {
  const { updateQuantity, removeItem } = useCart();
  const product = findProduct(line.productId);
  const query =
    product?.imageQueries?.[0] ||
    `${product?.name || "gold jewelry"} on neutral background`;

  return (
    <li className="flex gap-4 py-6 border-b border-line last:border-b-0">
      <Link
        to={`/product/${line.productId}`}
        className="block w-20 h-24 flex-shrink-0 bg-ivory-200"
      >
        <ProductImage
          imgId={`cart-${line.id}`}
          query={query}
          ratio="4x5"
          width={200}
          alt={line.name}
          className="h-full"
        />
      </Link>
      <div className="flex-1 min-w-0 flex flex-col">
        <div className="flex justify-between gap-3">
          <div className="min-w-0">
            <Link
              to={`/product/${line.productId}`}
              className="font-sans uppercase tracking-widest text-[11px] font-medium text-espresso hover:text-gold-dark transition-colors line-clamp-2"
            >
              {line.name}
            </Link>
            <p className="mt-1 text-[11px] uppercase tracking-widest text-taupe">
              {line.tone === "gold" ? "Gold" : line.tone} · {line.size}
            </p>
          </div>
          <button
            type="button"
            onClick={() => removeItem(line.id)}
            className="text-taupe hover:text-espresso p-1 -m-1"
            aria-label={`Remove ${line.name}`}
          >
            <X size={16} strokeWidth={1.5} />
          </button>
        </div>
        <div className="mt-auto flex items-center justify-between">
          <div className="inline-flex items-center border border-line">
            <button
              type="button"
              onClick={() => updateQuantity(line.id, line.quantity - 1)}
              className="h-8 w-8 inline-flex items-center justify-center text-espresso hover:bg-ivory-200 transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus size={12} strokeWidth={1.5} />
            </button>
            <span className="w-8 text-center text-xs font-medium" aria-live="polite">
              {line.quantity}
            </span>
            <button
              type="button"
              onClick={() => updateQuantity(line.id, line.quantity + 1)}
              className="h-8 w-8 inline-flex items-center justify-center text-espresso hover:bg-ivory-200 transition-colors"
              aria-label="Increase quantity"
            >
              <Plus size={12} strokeWidth={1.5} />
            </button>
          </div>
          <span className="text-sm font-medium text-espresso">
            {formatPrice(line.price * line.quantity)}
          </span>
        </div>
      </div>
    </li>
  );
}

export default function CartDrawer() {
  const { items, isOpen, closeCart, summary, clearCart } = useCart();

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeCart();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, closeCart]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 transition-opacity duration-300",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
      aria-hidden={!isOpen}
    >
      <div className="absolute inset-0 bg-espresso/50" onClick={closeCart} />
      <aside
        role="dialog"
        aria-label="Shopping bag"
        className={cn(
          "absolute inset-y-0 right-0 w-full sm:w-[440px] bg-ivory text-espresso shadow-lift flex flex-col transition-transform duration-500 ease-smooth",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-line flex-shrink-0">
          <h2 className="font-sans uppercase tracking-widest text-xs font-medium">
            Your Bag ({summary.count})
          </h2>
          <button onClick={closeCart} aria-label="Close cart" className="p-1">
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
            <ShoppingBag size={32} strokeWidth={1.2} className="text-taupe mb-5" />
            <h3 className="font-serif text-3xl text-espresso mb-2">Your bag is empty</h3>
            <p className="text-sm text-taupe mb-6 max-w-xs">
              Discover pieces designed to be worn every day.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="inline-flex items-center justify-center h-11 px-6 bg-espresso text-ivory text-xs uppercase tracking-widest font-medium hover:bg-espresso-200 transition-colors"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto px-6">
              {items.map((line) => (
                <CartLine key={line.id} line={line} />
              ))}
            </ul>
            <div className="flex-shrink-0 border-t border-line px-6 py-6 bg-ivory-50">
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-taupe">Subtotal</span>
                  <span className="font-medium">{formatPrice(summary.subtotal)}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-taupe">Shipping</span>
                  <span className="font-medium">
                    {summary.shipping === 0 ? "Free" : formatPrice(summary.shipping)}
                  </span>
                </div>
                {summary.subtotal < 75 && summary.subtotal > 0 && (
                  <p className="text-[11px] text-taupe italic pt-1">
                    Add {formatPrice(75 - summary.subtotal)} more for free shipping.
                  </p>
                )}
                <div className="flex items-center justify-between text-base pt-2 border-t border-line">
                  <span className="font-serif text-xl">Total</span>
                  <span className="font-medium">{formatPrice(summary.total)}</span>
                </div>
              </div>
              <Link
                to="/checkout"
                onClick={closeCart}
                className="block w-full text-center h-12 leading-[3rem] bg-espresso text-ivory text-xs uppercase tracking-widest font-medium hover:bg-espresso-200 transition-colors"
              >
                Checkout
              </Link>
              <button
                type="button"
                onClick={clearCart}
                className="mt-3 w-full text-center text-[11px] uppercase tracking-widest text-taupe hover:text-espresso transition-colors"
              >
                Clear bag
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
