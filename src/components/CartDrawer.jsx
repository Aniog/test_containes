import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { Sheet } from "@/components/ui/Sheet";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    subtotal,
    count,
  } = useCart();

  return (
    <Sheet isOpen={isOpen} onClose={closeCart} title="Your Bag">
      <div className="flex flex-col h-full">
        <div className="flex-1 px-6 py-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center text-taupe">
              <ShoppingBag className="w-10 h-10 mb-4 stroke-1" />
              <p className="font-serif text-lg">Your bag is empty</p>
              <p className="text-sm mt-2">Discover pieces crafted to be treasured.</p>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-24 bg-ivory flex-shrink-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="product-name truncate">{item.name}</p>
                    <p className="text-xs text-warmgray mt-1 uppercase tracking-wider">
                      {item.variant}
                    </p>
                    <p className="text-sm font-medium mt-1">
                      {formatPrice(item.price)}
                    </p>
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.id, item.variant, item.quantity - 1)
                        }
                        className="w-7 h-7 border border-stonehair flex items-center justify-center hover:border-espresso transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.id, item.variant, item.quantity + 1)
                        }
                        className="w-7 h-7 border border-stonehair flex items-center justify-center hover:border-espresso transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto p-2 text-warmgray hover:text-red-600 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-stonehair px-6 py-6 bg-ivory">
            <div className="flex justify-between items-center mb-2">
              <span className="text-taupe">Subtotal</span>
              <span className="font-serif text-lg">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="text-xs text-warmgray mb-6">
              Shipping & taxes calculated at checkout.
            </p>
            <button type="button" className="btn-primary w-full">
              Checkout — {count} item{count !== 1 ? "s" : ""}
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="btn-outline w-full mt-3"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </Sheet>
  );
}
