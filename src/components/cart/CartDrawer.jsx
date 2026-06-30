import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isDrawerOpen, closeDrawer, removeItem, updateQuantity, totalPrice } = useCart();

  if (!isDrawerOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={closeDrawer} />

      {/* Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-[#faf8f5] shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#e8e2db]">
          <h2 className="velmora-heading text-xl tracking-wider">YOUR BAG</h2>
          <button onClick={closeDrawer} className="p-2 hover:text-[#c9a96e] transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-[#e8e2db] mb-4" />
              <p className="velmora-heading text-lg tracking-wider text-[#8a8279]">Your bag is empty</p>
              <button
                onClick={closeDrawer}
                className="mt-6 velmora-btn-outline text-xs"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item, index) => (
                <div key={`${item.product.id}-${item.variant}-${index}`} className="flex gap-4">
                  <div className="w-20 h-24 bg-[#f5f0eb] flex-shrink-0 overflow-hidden">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="velmora-product-name text-sm">{item.product.name}</h3>
                      <p className="text-xs text-[#8a8279] mt-1 capitalize">{item.variant} tone</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(index, item.quantity - 1)}
                          className="w-7 h-7 border border-[#e8e2db] flex items-center justify-center hover:border-[#c9a96e] transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(index, item.quantity + 1)}
                          className="w-7 h-7 border border-[#e8e2db] flex items-center justify-center hover:border-[#c9a96e] transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium">${(item.product.price * item.quantity).toFixed(2)}</span>
                        <button
                          onClick={() => removeItem(index)}
                          className="text-xs text-[#8a8279] hover:text-[#c9a96e] transition-colors underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-[#e8e2db] p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm tracking-wider uppercase">Subtotal</span>
              <span className="velmora-heading text-xl">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-[#8a8279]">Shipping & taxes calculated at checkout</p>
            <button className="w-full velmora-btn-primary">
              Checkout
            </button>
            <button
              onClick={closeDrawer}
              className="w-full text-xs tracking-widest uppercase text-[#8a8279] hover:text-[#c9a96e] transition-colors py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
