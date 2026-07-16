import React from "react";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";
import { Link } from "react-router-dom";

const CartDrawer = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    cartTotal,
    isCartOpen,
    closeCart,
  } = useCart();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    closeCart();
    // Placeholder for future checkout integration
    alert("Checkout flow would open here. Cart total: " + formatPrice(cartTotal));
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-[60] overlay"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="cart-drawer fixed right-0 top-0 bottom-0 w-full max-w-md bg-[#F8F5F0] z-[70] flex flex-col shadow-2xl open">
        {/* Header */}
        <div className="flex items-center justify-between px-6 h-20 border-b border-[#E5DFD6]">
          <div className="flex items-center gap-3">
            <ShoppingBag size={18} />
            <span className="text-sm tracking-[2px]">YOUR CART</span>
          </div>
          <button onClick={closeCart} className="p-2 -mr-2">
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        {cart.length > 0 ? (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {cart.map((item) => (
                <div key={item.cartItemId} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#E5DFD6] flex-shrink-0 overflow-hidden">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <p className="text-sm font-medium tracking-wide pr-4">{item.name}</p>
                        <p className="text-xs text-[#9A8F82] mt-0.5">{item.selectedVariant.label}</p>
                      </div>
                      <p className="text-sm whitespace-nowrap">{formatPrice(item.price * item.quantity)}</p>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center border border-[#E5DFD6]">
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-[#F5F2ED]"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-[#F5F2ED]"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.cartItemId)}
                        className="text-xs text-[#9A8F82] hover:text-[#B89778]"
                      >
                        REMOVE
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-[#E5DFD6] p-6 space-y-4 bg-white">
              <div className="flex justify-between text-sm">
                <span className="tracking-[1px]">SUBTOTAL</span>
                <span className="font-medium">{formatPrice(cartTotal)}</span>
              </div>
              <p className="text-xs text-[#9A8F82]">
                Shipping calculated at checkout. Free worldwide shipping on orders over $75.
              </p>
              <Button onClick={handleCheckout} className="w-full" size="lg">
                PROCEED TO CHECKOUT
              </Button>
              <button
                onClick={closeCart}
                className="w-full text-xs tracking-[1.5px] py-2 text-[#9A8F82] hover:text-[#2C2522]"
              >
                CONTINUE SHOPPING
              </button>
            </div>
          </>
        ) : (
          /* Empty State */
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag size={48} className="text-[#E5DFD6] mb-4" />
            <p className="text-lg font-serif mb-2">Your cart is empty</p>
            <p className="text-sm text-[#9A8F82] mb-8">Discover pieces crafted to be treasured.</p>
            <Link to="/shop" onClick={closeCart}>
              <Button variant="outline">BROWSE COLLECTION</Button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
