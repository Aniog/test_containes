import React from 'react';
import { useCart } from '../../context/CartContext';
import { X, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { 
    items, 
    isOpen, 
    closeCart, 
    removeItem, 
    updateQuantity,
    cartTotal 
  } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`overlay ${isOpen ? 'visible' : 'hidden'}`}
        onClick={closeCart}
      />

      {/* Cart Drawer */}
      <div className={`cart-drawer ${isOpen ? 'open' : 'closed'}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="font-serif-display text-2xl">Your Cart</h2>
            <button onClick={closeCart} className="text-[#2A2520] hover:text-[#B8860B]">
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-[#6B6560] mb-4">Your cart is empty</p>
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="text-[#B8860B] hover:underline"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.selectedVariant}`} className="flex gap-4">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-serif-display text-sm uppercase tracking-wider mb-1">
                        {item.name}
                      </h3>
                      <p className="text-xs text-[#6B6560] mb-2">{item.selectedVariant}</p>
                      <p className="font-medium mb-3">${item.price}</p>
                      
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.selectedVariant, item.quantity - 1)}
                          className="p-1 border border-[#D4CFC8] rounded hover:border-[#B8860B]"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.selectedVariant, item.quantity + 1)}
                          className="p-1 border border-[#D4CFC8] rounded hover:border-[#B8860B]"
                        >
                          <Plus size={14} />
                        </button>
                        <button
                          onClick={() => removeItem(item.id, item.selectedVariant)}
                          className="ml-auto text-sm text-[#6B6560] hover:text-red-500"
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
            <div className="p-6 border-t">
              <div className="flex justify-between mb-4">
                <span className="font-medium">Total</span>
                <span className="font-medium">${cartTotal.toFixed(2)}</span>
              </div>
              <button className="w-full bg-[#B8860B] text-white py-3 uppercase tracking-wider text-sm font-medium hover:bg-[#A0780A] transition-colors mb-3">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full border border-[#B8860B] text-[#B8860B] py-3 uppercase tracking-wider text-sm font-medium hover:bg-[#B8860B] hover:text-white transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
