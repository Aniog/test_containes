import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } =
    useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full sm:w-[420px] bg-[#FAF7F2] shadow-xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-warm-200">
            <h2 className="font-serif text-lg tracking-wider uppercase text-warm-900">
              Your Cart
            </h2>
            <button
              onClick={closeCart}
              className="p-1 text-warm-500 hover:text-warm-800 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-warm-300 mb-4" />
                <p className="font-serif text-lg text-warm-600 mb-2">
                  Your cart is empty
                </p>
                <p className="text-sm text-warm-400 mb-6">
                  Discover pieces you'll treasure.
                </p>
                <Button variant="default" onClick={closeCart}>
                  <Link to="/shop">Shop Now</Link>
                </Button>
              </div>
            ) : (
              <div className="space-y-5">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.variant}`}
                    className="flex gap-4 pb-5 border-b border-warm-200/50"
                  >
                    <div className="w-20 h-20 bg-cream-200 flex-shrink-0 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="product-name text-warm-900 truncate">
                        {item.name}
                      </h3>
                      <p className="text-xs text-warm-500 mt-0.5 font-sans">
                        {item.variant}
                      </p>
                      <p className="text-sm font-sans font-medium text-warm-900 mt-1">
                        ${item.price}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity - 1)
                          }
                          className="p-0.5 text-warm-500 hover:text-warm-800"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-sans text-warm-900 w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity + 1)
                          }
                          className="p-0.5 text-warm-500 hover:text-warm-800"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="ml-auto text-[10px] tracking-wider uppercase text-warm-400 hover:text-warm-700 font-sans"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-warm-200 px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-sans text-warm-600">Subtotal</span>
                <span className="font-serif text-lg text-warm-900">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-warm-400 font-sans">
                Free shipping on all orders
              </p>
              <Button className="w-full" variant="default" size="lg">
                Checkout
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}