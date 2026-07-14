import React from 'react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, cartTotal, cartCount } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />
      <div className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 ease-out">
        <div className="flex items-center justify-between p-4 border-b border-[#e5e5e5]">
          <h2 className="font-serif text-lg text-[#1a1a1a]">Shopping Bag ({cartCount})</h2>
          <button
            onClick={closeCart}
            className="p-2 text-[#5c5c5c] hover:text-[#1a1a1a] transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto h-[calc(100vh-140px)]">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full p-8 text-center">
              <ShoppingBag className="w-12 h-12 text-[#d4d4d4] mb-4" />
              <p className="text-[#5c5c5c] mb-4">Your bag is empty</p>
              <Button onClick={closeCart} variant="secondary" className="w-full">
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="p-4 space-y-4">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4 pb-4 border-b border-[#f5f5f0] last:border-b-0">
                  <div className="w-20 h-20 bg-[#f5f5f0] rounded-lg flex-shrink-0 overflow-hidden">
                    <img
                      src={`https://placehold.co/200x200/f5f5f0/b8860b?text=${encodeURIComponent(item.name)}`}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm text-[#1a1a1a] truncate">{item.name}</h3>
                    <p className="text-xs text-[#5c5c5c] mt-0.5 capitalize">{item.variant} tone</p>
                    <p className="text-sm font-medium text-[#1a1a1a] mt-1">${item.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="p-1 rounded-full border border-[#e5e5e5] hover:border-[#b8860b] transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="p-1 rounded-full border border-[#e5e5e5] hover:border-[#b8860b] transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto text-xs text-[#5c5c5c] hover:text-red-500 transition-colors"
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

        {items.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-[#e5e5e5]">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-[#5c5c5c]">Subtotal</span>
              <span className="text-lg font-medium text-[#1a1a1a]">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-[#5c5c5c] mb-3">Shipping and taxes calculated at checkout</p>
            <Link to="/checkout" onClick={closeCart}>
              <Button className="w-full" size="lg">
                Checkout
              </Button>
            </Link>
            <button
              onClick={closeCart}
              className="w-full mt-2 text-sm text-[#5c5c5c] hover:text-[#1a1a1a] transition-colors py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
