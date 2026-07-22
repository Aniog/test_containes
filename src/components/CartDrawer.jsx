import React from "react";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import Button from "@/components/ui/Button";
import { Link } from "react-router-dom";

const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    cartTotal,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-[60] transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-[#F9F6F1] z-[70] flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E5E0D8]">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-[#C5A46E]" />
            <span className="font-serif text-xl tracking-wide text-[#2C2823]">
              Your Cart
            </span>
          </div>
          <button
            onClick={closeCart}
            className="text-[#6B6359] hover:text-[#2C2823] transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag className="w-12 h-12 text-[#C5A46E]/40 mb-4" />
            <p className="text-[#6B6359] mb-6">Your cart is empty</p>
            <Button onClick={closeCart} variant="outline">
              CONTINUE SHOPPING
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4">
                  {/* Placeholder image */}
                  <div className="w-20 h-20 bg-[#EDE8DF] flex-shrink-0 rounded" />
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <p className="font-serif text-sm tracking-[1px] text-[#2C2823] leading-tight">
                          {item.name}
                        </p>
                        <p className="text-xs text-[#9A8F7E] mt-0.5">
                          {item.variant}
                        </p>
                      </div>
                      <p className="text-sm text-[#2C2823] whitespace-nowrap">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity controls */}
                      <div className="flex items-center border border-[#E5E0D8]">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1.5 hover:bg-[#EDE8DF] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm tabular-nums">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1.5 hover:bg-[#EDE8DF] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs text-[#9A8F7E] hover:text-[#C5A46E] transition-colors tracking-widest"
                      >
                        REMOVE
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-[#E5E0D8] px-6 py-6 bg-white">
              <div className="flex justify-between text-sm mb-6">
                <span className="text-[#6B6359]">Subtotal</span>
                <span className="font-medium text-[#2C2823] tabular-nums">
                  {formatPrice(cartTotal)}
                </span>
              </div>
              <p className="text-xs text-[#9A8F7E] mb-4 text-center">
                Shipping calculated at checkout
              </p>
              <Button className="w-full mb-3" size="lg">
                CHECKOUT
              </Button>
              <button
                onClick={closeCart}
                className="w-full text-xs tracking-[1.5px] text-[#6B6359] hover:text-[#2C2823] py-2 transition-colors"
              >
                CONTINUE SHOPPING
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
