import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/Button';

const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    cartTotal,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-[60]"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-[#F8F5F0] z-[70] flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#EDE8DF]">
          <h2 className="font-serif text-xl tracking-[2px]">YOUR CART</h2>
          <button onClick={() => setIsCartOpen(false)} className="text-[#1A1612]">
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <p className="text-[#6B655C] mb-6">Your cart is empty</p>
            <Button onClick={() => setIsCartOpen(false)} variant="outline">
              CONTINUE SHOPPING
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#EDE8DF] flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <p className="font-serif text-sm tracking-[1px] pr-2">{item.name}</p>
                        <p className="text-xs text-[#6B655C] mt-0.5">{item.variant}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-[#6B655C] hover:text-[#1A1612]"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                    <p className="text-sm mt-1">${item.price}</p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                        className="w-7 h-7 border border-[#EDE8DF] flex items-center justify-center hover:bg-[#EDE8DF]"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                        className="w-7 h-7 border border-[#EDE8DF] flex items-center justify-center hover:bg-[#EDE8DF]"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-[#EDE8DF] px-6 py-6 space-y-4">
              <div className="flex justify-between text-sm tracking-wide">
                <span>SUBTOTAL</span>
                <span>${cartTotal}</span>
              </div>
              <p className="text-xs text-[#6B655C]">Shipping calculated at checkout</p>
              <Button className="w-full" size="lg">
                CHECKOUT
              </Button>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full text-xs tracking-[1.5px] text-[#6B655C] hover:text-[#1A1612]"
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