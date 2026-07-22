import React from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart, useCartDrawer } from '@/context/CartContext';
import products from '@/data/products';

export default function CartDrawer() {
  const { cart, removeItem, updateQuantity, itemCount, subtotal } = useCart();
  const { drawerOpen, closeDrawer } = useCartDrawer();

  const getProduct = (productId) => products.find((p) => p.id === productId);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-velvet-950/40 backdrop-blur-sm transition-opacity duration-300 ${
          drawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-velvet-50 z-50 shadow-2xl transform transition-transform duration-300 ease-out ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-velvet-200">
            <h2 className="font-serif text-2xl tracking-widest">YOUR BAG</h2>
            <button onClick={closeDrawer} className="p-1 hover:text-warm-600 transition-colors" aria-label="Close cart">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {cart.items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-velvet-500">
                <p className="font-sans text-sm tracking-widest uppercase">Your bag is empty</p>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                {cart.items.map((item) => {
                  const product = getProduct(item.productId);
                  return (
                    <div key={`${item.productId}-${item.variant}`} className="flex gap-4 pb-5 border-b border-velvet-100">
                      <div className="w-20 h-20 bg-velvet-100 flex-shrink-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-velvet-200 rounded-sm" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-serif text-sm tracking-widest uppercase text-velvet-900 truncate">
                          {item.name}
                        </p>
                        <p className="text-xs text-velvet-500 mt-0.5">{item.variant} Tone</p>
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center border border-velvet-200">
                            <button
                              className="px-2 py-1 hover:text-warm-600 transition-colors"
                              onClick={() => updateQuantity(item.productId, item.variant, item.quantity - 1)}
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-3 py-1 text-sm font-medium">{item.quantity}</span>
                            <button
                              className="px-2 py-1 hover:text-warm-600 transition-colors"
                              onClick={() => updateQuantity(item.productId, item.variant, item.quantity + 1)}
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                            <button
                              className="p-1 text-velvet-400 hover:text-red-500 transition-colors"
                              onClick={() => removeItem(item.productId, item.variant)}
                              aria-label="Remove"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Footer */}
          {cart.items.length > 0 && (
            <div className="border-t border-velvet-200 px-6 py-5">
              <div className="flex justify-between text-sm mb-4">
                <span className="text-velvet-600">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-velvet-500 mb-4">Shipping & taxes calculated at checkout</p>
              <button className="w-full bg-warm-600 hover:bg-warm-700 text-white font-sans text-xs tracking-widest uppercase py-3.5 transition-colors duration-200">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
