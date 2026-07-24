import { X, Plus, Minus, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products } from "@/data/products";
import ProductImage from "./ui/ProductImage";

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const frame = requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, drawerRef.current);
      });
      return () => {
        document.body.style.overflow = "";
        cancelAnimationFrame(frame);
      };
    }
    document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, items]);

  return (
    <>
      <button
        onClick={closeCart}
        className={`fixed inset-0 bg-charcoal/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isOpen}
        aria-label="Close cart"
        tabIndex={isOpen ? 0 : -1}
      />
      <aside
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-background z-50 shadow-2xl transform transition-transform duration-300 ease-out flex flex-col ${
          isOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none"
        }`}
        aria-hidden={!isOpen}
        role="dialog"
        aria-modal={isOpen ? "true" : undefined}
        aria-label="Shopping cart"
        inert={isOpen ? undefined : "true"}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="font-serif text-2xl tracking-widest uppercase">Your Bag</h2>
          <button
            onClick={closeCart}
            className="p-2 hover:bg-border rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag size={48} className="text-border mb-4" />
            <p className="font-serif text-xl tracking-wide">Your bag is empty</p>
            <p className="mt-2 text-sm text-muted">
              Discover pieces crafted to be treasured.
            </p>
            <button
              onClick={closeCart}
              className="mt-6 bg-accent text-white px-8 py-3 text-xs tracking-widest uppercase font-medium hover:bg-accent-dark transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {products.map((product) => {
                const variants = ["Gold", "Silver"];
                return variants.map((variant) => {
                  const item = items.find(
                    (i) => i.id === product.id && i.variant === variant
                  );
                  if (!item) return null;
                  return (
                    <div key={`${product.id}-${variant}`} className="cart-item flex gap-4">
                      <div className="w-20 h-24 bg-[#EDEAE4] flex-shrink-0 overflow-hidden">
                        <ProductImage
                          query={`[cart-name-${product.id}] ${product.images.primary}`}
                          alt={product.name}
                          ratio="4x5"
                          width={200}
                          imgId={`cart-thumb-${product.id}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3
                          id={`cart-name-${product.id}`}
                          className="font-serif text-base tracking-widest uppercase truncate"
                        >
                          {product.name}
                        </h3>
                        <p className="text-xs text-muted mt-0.5">{item.variant} tone</p>
                        <p className="text-sm font-medium mt-1">${item.price}</p>
                        <div className="flex items-center gap-3 mt-3">
                          <button
                            onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                            className="w-7 h-7 border border-border flex items-center justify-center hover:border-foreground transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="text-sm w-4 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                            className="w-7 h-7 border border-border flex items-center justify-center hover:border-foreground transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => removeItem(item.cartItemId)}
                        className="self-start p-2 text-muted hover:text-foreground transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  );
                });
              })}
            </div>

            <div className="border-t border-border px-6 py-6 space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-muted">
                Shipping and taxes calculated at checkout.
              </p>
              <button className="w-full bg-accent text-white py-4 text-xs tracking-widest uppercase font-medium hover:bg-accent-dark transition-colors">
                Checkout — ${subtotal.toFixed(2)}
              </button>
              <button
                onClick={closeCart}
                className="w-full border border-foreground text-foreground py-3 text-xs tracking-widest uppercase font-medium hover:bg-foreground hover:text-background transition-colors"
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
