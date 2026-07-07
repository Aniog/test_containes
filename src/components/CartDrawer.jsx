import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/Button';
import { formatPrice } from '@/lib/utils';

const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex">
      <div className="absolute inset-0 bg-black/40" onClick={() => setIsCartOpen(false)} />
      
      <div className="ml-auto w-full max-w-md bg-[#F9F6F0] h-full overflow-auto relative">
        <div className="flex items-center justify-between p-6 border-b border-[#EDE9E3]">
          <h2 className="font-serif text-xl tracking-wide">Your Cart</h2>
          <button onClick={() => setIsCartOpen(false)} className="p-2">
            <X className="h-5 w-5" />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center px-6">
            <p className="text-[#5C5248] mb-4">Your cart is empty</p>
            <Button onClick={() => setIsCartOpen(false)} variant="outline">Continue Shopping</Button>
          </div>
        ) : (
          <>
            <div className="divide-y divide-[#EDE9E3]">
              {cart.map((item) => (
                <div key={item.cartId} className="p-6 flex gap-4">
                  <div className="w-20 h-20 bg-[#EDE9E3] flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <div className="font-serif text-sm tracking-[1px]">{item.name}</div>
                        <div className="text-xs text-[#8B7F6F] mt-0.5">{item.selectedVariant}</div>
                      </div>
                      <button onClick={() => removeFromCart(item.cartId)} className="text-[#8B7F6F] hover:text-[#C5A26F]">
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center border border-[#EDE9E3]">
                        <button onClick={() => updateQuantity(item.cartId, item.quantity - 1)} className="p-1.5 hover:bg-[#EDE9E3]">
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.cartId, item.quantity + 1)} className="p-1.5 hover:bg-[#EDE9E3]">
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <div className="font-medium">{formatPrice(item.price * item.quantity)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-[#EDE9E3] mt-auto sticky bottom-0 bg-[#F9F6F0]">
              <div className="flex justify-between mb-6 text-lg">
                <span>Total</span>
                <span className="font-medium">{formatPrice(cartTotal)}</span>
              </div>
              <Button className="w-full" size="lg">Checkout</Button>
              <p className="text-center text-xs text-[#8B7F6F] mt-4">Free worldwide shipping on all orders</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;