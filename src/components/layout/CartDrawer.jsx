import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import Button from "@/components/ui/Button";

function resolveImgUrl(imgId) {
  const entry = strkImgConfig[imgId];
  if (!entry) return null;
  const picked = entry.picked;
  const result = (entry.results || []).find((r) => r.id === picked);
  return result?.url || entry.results?.[0]?.url || null;
}

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } =
    useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !drawerRef.current) return;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, drawerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [isOpen, items]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-espresso/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
      />
      {/* Drawer */}
      <aside
        ref={drawerRef}
        className={`fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-ivory shadow-soft transition-transform duration-500 ease-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-sand/30">
          <h2 className="font-serif text-xl tracking-widest3 uppercase text-ink">
            Your Bag
          </h2>
          <button
            onClick={closeCart}
            className="text-ink hover:text-gold transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-4">
              <ShoppingBag size={32} className="text-sand" />
              <p className="text-sm text-ink/70">Your bag is empty.</p>
              <Button as={Link} to="/shop" variant="outline" size="sm" onClick={closeCart}>
                Start Shopping
              </Button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={item.lineId} className="flex gap-4">
                  <Link
                    to={`/product/${item.id}`}
                    onClick={closeCart}
                    className="shrink-0 w-20 h-24 bg-cream overflow-hidden"
                  >
                    <img
                      alt={item.name}
                      src={
                        resolveImgUrl(`cart-${item.imgId}`) ||
                        resolveImgUrl(`${item.imgId}-card`) ||
                        ""
                      }
                      className="w-full h-full object-cover bg-cream"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${item.id}`}
                      onClick={closeCart}
                      className="block font-serif text-base uppercase tracking-widest3 text-ink hover:text-gold transition-colors"
                    >
                      {item.name}
                    </Link>
                    <p className="text-xs text-sand mt-1">{item.variant}</p>
                    <p className="text-sm text-ink mt-1">{formatPrice(item.price)}</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-sand/50">
                        <button
                          onClick={() => updateQuantity(item.lineId, item.quantity - 1)}
                          className="px-2 py-1 text-ink hover:text-gold"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={13} />
                        </button>
                        <span className="px-3 text-xs text-ink">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.lineId, item.quantity + 1)}
                          className="px-2 py-1 text-ink hover:text-gold"
                          aria-label="Increase quantity"
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.lineId)}
                        className="text-[11px] uppercase tracking-widest2 text-sand hover:text-ink transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-sand/30 px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-widest2 text-sand">
                Subtotal
              </span>
              <span className="font-serif text-xl text-ink">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="text-xs text-sand">
              Shipping & taxes calculated at checkout.
            </p>
            <Button className="w-full" size="md">
              Checkout
            </Button>
            <button
              onClick={closeCart}
              className="w-full text-[11px] uppercase tracking-widest2 text-ink/70 hover:text-gold transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
