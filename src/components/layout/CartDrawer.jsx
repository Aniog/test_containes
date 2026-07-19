import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';

const CartDrawer = () => {
  const { items, isOpen, setCartOpen, removeItem, updateQuantity, cartTotal, cartCount } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setCartOpen(false)} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-[#e8e0d5]">
          <h2 className="font-serif text-xl tracking-widest text-[#3d3229]">Your Cart ({cartCount})</h2>
          <button onClick={() => setCartOpen(false)} className="text-[#3d3229] hover:text-[#b08d57]" aria-label="Close cart">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-[#b08d57] mb-4" />
              <p className="text-[#3d3229] font-medium mb-2">Your cart is empty</p>
              <p className="text-sm text-[#8c7b6b] mb-6">Looks like you have not added any treasures yet.</p>
              <button onClick={() => setCartOpen(false)} className="text-sm tracking-widest uppercase text-[#b08d57] hover:text-[#9a7a48]">
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => {
                const product = products.find((p) => p.id === item.productId);
                if (!product) return null;
                return (
                  <li key={`${item.productId}-${item.variant}`} className="flex gap-4">
                    <div className="w-20 h-20 bg-[#f5f0e8] rounded-sm flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-serif text-sm tracking-wider uppercase text-[#3d3229]">{product.name}</h3>
                      <p className="text-xs text-[#8c7b6b] mt-1 capitalize">{item.variant}</p>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-[#e8e0d5] rounded-full">
                          <button
                            onClick={() => updateQuantity(item.productId, item.variant, item.quantity - 1)}
                            className="p-1.5 text-[#3d3229] hover:text-[#b08d57]"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-3 text-xs text-[#3d3229]">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.productId, item.variant, item.quantity + 1)}
                            className="p-1.5 text-[#3d3229] hover:text-[#b08d57]"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.productId, item.variant)}
                          className="text-xs text-[#8c7b6b] hover:text-[#b08d57] underline underline-offset-4"
                        >
                          Remove
                        </button>
                      </div>
                      <p className="text-sm font-medium text-[#3d3229] mt-2">${(product.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-[#e8e0d5] bg-[#faf8f4]">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-[#8c7b6b]">Subtotal</span>
              <span className="font-serif text-lg text-[#3d3229]">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-[#8c7b6b] mb-4">Shipping and taxes calculated at checkout.</p>
            <Link
              to="/checkout"
              onClick={() => setCartOpen(false)}
              className="block w-full text-center bg-[#b08d57] text-white py-3 rounded-full text-sm tracking-widest uppercase hover:bg-[#9a7a48] transition-colors"
            >
              Checkout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
