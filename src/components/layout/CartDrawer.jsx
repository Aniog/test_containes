import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import StockImage, { productImageQuery } from "@/components/StockImage";
import { formatPrice, getProduct } from "@/data/products";

export default function CartDrawer() {
  const {
    items,
    subtotal,
    isCartOpen,
    closeCart,
    removeItem,
    updateQuantity,
  } = useCart();

  useEffect(() => {
    document.body.style.overflow = isCartOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCartOpen]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && closeCart();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeCart]);

  return (
    <div
      className={`fixed inset-0 z-50 ${isCartOpen ? "" : "pointer-events-none"}`}
      aria-hidden={!isCartOpen}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-espresso/50 backdrop-blur-[2px] transition-opacity duration-500 ${
          isCartOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={closeCart}
      />

      {/* Panel */}
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-ivory shadow-drawer transition-transform duration-500 ease-out ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-hairline px-6 py-5">
          <h2 className="font-serif text-xl tracking-[0.2em] uppercase text-espresso">
            Your Bag
          </h2>
          <button
            onClick={closeCart}
            className="p-2 -mr-2 text-cocoa transition-colors hover:text-gold"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
            <ShoppingBag size={36} className="text-sand" strokeWidth={1.2} />
            <p className="font-serif text-2xl text-espresso">
              Your bag is empty
            </p>
            <p className="text-sm text-taupe leading-relaxed">
              Discover demi-fine pieces crafted to be treasured every day.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-2 border border-espresso/30 px-8 py-3 text-xs tracking-[0.25em] uppercase text-espresso transition-all duration-300 hover:border-gold hover:text-gold"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <ul className="divide-y divide-hairline">
                {items.map((item) => {
                  const product = getProduct(item.productId);
                  return (
                    <li key={item.key} className="flex gap-4 py-5">
                      <Link
                        to={`/product/${item.productId}`}
                        onClick={closeCart}
                        className="block h-24 w-20 shrink-0 overflow-hidden bg-sand"
                      >
                        <StockImage
                          imgId={item.imgId}
                          query={productImageQuery(product, "primary")}
                          ratio="4x3"
                          width={200}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </Link>
                      <div className="flex flex-1 flex-col">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <Link
                              to={`/product/${item.productId}`}
                              onClick={closeCart}
                              className="font-serif text-base uppercase tracking-[0.12em] text-espresso leading-snug hover:text-gold transition-colors"
                            >
                              {item.name}
                            </Link>
                            <p className="mt-1 text-xs tracking-[0.15em] uppercase text-taupe">
                              {item.tone} Tone
                            </p>
                          </div>
                          <button
                            onClick={() => removeItem(item.key)}
                            className="p-1 text-taupe transition-colors hover:text-espresso"
                            aria-label={`Remove ${item.name}`}
                          >
                            <X size={16} />
                          </button>
                        </div>
                        <div className="mt-auto flex items-center justify-between pt-3">
                          <div className="flex items-center border border-hairline">
                            <button
                              className="px-2.5 py-1.5 text-cocoa transition-colors hover:text-gold"
                              onClick={() =>
                                updateQuantity(item.key, item.quantity - 1)
                              }
                              aria-label="Decrease quantity"
                            >
                              <Minus size={13} />
                            </button>
                            <span className="w-8 text-center text-sm text-espresso">
                              {item.quantity}
                            </span>
                            <button
                              className="px-2.5 py-1.5 text-cocoa transition-colors hover:text-gold"
                              onClick={() =>
                                updateQuantity(item.key, item.quantity + 1)
                              }
                              aria-label="Increase quantity"
                            >
                              <Plus size={13} />
                            </button>
                          </div>
                          <p className="text-sm font-medium text-espresso">
                            {formatPrice(item.price * item.quantity)}
                          </p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="border-t border-hairline px-6 py-5">
              <div className="mb-1 flex items-center justify-between">
                <span className="text-xs tracking-[0.25em] uppercase text-taupe">
                  Subtotal
                </span>
                <span className="font-serif text-xl text-espresso">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="mb-4 text-xs text-taupe">
                Shipping &amp; taxes calculated at checkout.
              </p>
              <button className="w-full bg-gold py-4 text-xs tracking-[0.3em] uppercase text-ivory transition-colors duration-300 hover:bg-gold-deep">
                Proceed to Checkout
              </button>
              <button
                onClick={closeCart}
                className="mt-3 w-full py-2 text-xs tracking-[0.2em] uppercase text-cocoa transition-colors hover:text-gold"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
