import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/data/cartContext';
import Button from './Button';

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
        className="fixed inset-0 bg-black/40 z-50 transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-[#F8F5F1] z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#C4B8A8]">
          <div className="flex items-center gap-3">
            <ShoppingBag className="h-5 w-5 text-[#A67C52]" />
            <span className="font-serif text-xl tracking-[1.5px] text-[#1C1917]">
              YOUR CART
            </span>
          </div>
          <button
            onClick={closeCart}
            className="p-2 hover:bg-[#EDE8E0] rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X className="h-5 w-5 text-[#8A8178]" />
          </button>
        </div>

        {/* Cart Items */}
        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag className="h-12 w-12 text-[#C4B8A8] mb-4" />
            <p className="text-[#4A4640] mb-2">Your cart is empty</p>
            <p className="text-sm text-[#8A8178]">
              Discover our collection and find something beautiful.
            </p>
            <Button
              variant="outline"
              className="mt-6"
              onClick={closeCart}
            >
              CONTINUE SHOPPING
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
              {cart.map((item) => (
                <div key={item.cartItemId} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#EDE8E0] flex-shrink-0 overflow-hidden">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-serif text-sm tracking-[1px] text-[#1C1917] leading-tight">
                          {item.name}
                        </p>
                        <p className="text-xs text-[#8A8178] mt-0.5">
                          {item.variant}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.cartItemId)}
                        className="text-[#8A8178] hover:text-[#1C1917] transition-colors"
                        aria-label="Remove item"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-sm text-[#A67C52] mt-1">
                      ${item.price}
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#C4B8A8]">
                        <button
                          onClick={() =>
                            updateQuantity(item.cartItemId, item.quantity - 1)
                          }
                          className="p-1.5 hover:bg-[#EDE8E0] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="px-3 text-sm tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.cartItemId, item.quantity + 1)
                          }
                          className="p-1.5 hover:bg-[#EDE8E0] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <p className="text-sm font-medium text-[#1C1917]">
                        ${(item.price * item.quantity).toFixed(0)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-[#C4B8A8] px-6 py-6 bg-white">
              <div className="flex justify-between items-baseline mb-4">
                <span className="text-sm tracking-[1px] text-[#4A4640]">
                  TOTAL
                </span>
                <span className="font-serif text-2xl text-[#1C1917]">
                  ${cartTotal}
                </span>
              </div>
              <p className="text-xs text-[#8A8178] mb-4">
                Shipping calculated at checkout. Free worldwide shipping on orders over $75.
              </p>
              <Button className="w-full mb-3" size="lg">
                PROCEED TO CHECKOUT
              </Button>
              <button
                onClick={closeCart}
                className="w-full text-xs tracking-[1px] text-[#8A8178] hover:text-[#1C1917] transition-colors py-2"
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
