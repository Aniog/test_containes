import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { items, isOpen, toggleCart, removeFromCart, updateQuantity, subtotal } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-[60] bg-black/30 backdrop-blur-sm transition-opacity"
        onClick={() => toggleCart(false)}
      />
      <div className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-md bg-[#F5F0EB] shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#1A1816]/10">
          <h2 className="font-serif text-xl tracking-wide">Your Bag</h2>
          <button
            onClick={() => toggleCart(false)}
            className="p-1 hover:opacity-60 transition-opacity"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-4">
              <ShoppingBag size={40} className="text-[#1A1816]/20" strokeWidth={1} />
              <p className="text-sm text-[#6E6862]">Your bag is empty.</p>
              <button
                onClick={() => toggleCart(false)}
                className="mt-2 text-xs tracking-[0.14em] uppercase font-medium text-[#B8966A] hover:underline"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#EAE5E0] rounded flex items-center justify-center flex-shrink-0">
                    <span className="text-[10px] tracking-[0.12em] uppercase text-[#6E6862]">
                      IMG
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-serif text-sm tracking-wide truncate">
                          {item.name}
                        </p>
                        <p className="text-xs text-[#6E6862] mt-0.5 capitalize">
                          {item.variant} tone
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="text-[#6E6862] hover:text-[#1A1816] transition-colors"
                        aria-label="Remove"
                      >
                        <X size={14} strokeWidth={1.5} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-3 border border-[#1A1816]/10 rounded-full px-2 py-1">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity - 1)
                          }
                          className="p-0.5 hover:opacity-60"
                          aria-label="Decrease"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-xs font-medium w-3 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity + 1)
                          }
                          className="p-0.5 hover:opacity-60"
                          aria-label="Increase"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <p className="text-sm font-medium">
                        ${(item.price * item.quantity).toFixed(0)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-[#1A1816]/10 px-6 py-5 space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#6E6862]">Subtotal</span>
              <span className="font-medium">${subtotal.toFixed(0)}</span>
            </div>
            <p className="text-xs text-[#6E6862]">
              Shipping & taxes calculated at checkout.
            </p>
            <button className="w-full bg-[#1A1816] text-white text-xs tracking-[0.14em] uppercase font-medium py-3.5 rounded hover:bg-[#2E2B28] transition-colors">
              Checkout
            </button>
            <button
              onClick={() => toggleCart(false)}
              className="w-full text-xs tracking-[0.14em] uppercase font-medium py-2 text-[#6E6862] hover:text-[#1A1816] transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
