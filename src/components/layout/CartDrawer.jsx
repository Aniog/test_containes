import { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/context/CartContext';

function CartItemThumb({ item }) {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, [item.product.imgId]);

  return (
    <div ref={ref} className="w-20 h-24 bg-stone-100 flex-shrink-0 overflow-hidden relative">
      <img
        data-strk-img-id={`cart-thumb-${item.key}`}
        data-strk-img={`[cart-title-${item.key}]`}
        data-strk-img-ratio="3x4"
        data-strk-img-width="200"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={item.product.name}
        className="w-full h-full object-cover"
      />
      <span id={`cart-title-${item.key}`} className="sr-only">{item.product.name} gold jewelry</span>
    </div>
  );
}

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-obsidian/40 cart-overlay z-50"
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className="fixed top-0 right-0 h-full w-full max-w-md bg-ivory z-50 flex flex-col animate-slideInRight shadow-2xl"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-200">
          <div className="flex items-center gap-3">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-obsidian" />
            <h2 className="font-cormorant text-xl font-medium text-obsidian">Your Cart</h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close cart"
            className="text-stone-500 hover:text-obsidian transition-colors"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-stone-300" />
              <p className="font-cormorant text-2xl text-stone-500 font-light">Your cart is empty</p>
              <p className="font-manrope text-sm text-stone-400">Discover our collection of fine jewelry</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 font-manrope text-xs tracking-wider uppercase border border-obsidian text-obsidian px-8 py-3 hover:bg-obsidian hover:text-ivory transition-colors duration-200"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map(item => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-stone-100">
                  {/* Product image */}
                  <CartItemThumb item={item} />

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <p className="font-cormorant text-sm uppercase tracking-product text-obsidian font-medium leading-tight">
                        {item.product.name}
                      </p>
                      <p className="font-manrope text-xs text-stone-500 mt-0.5 capitalize">{item.variant} tone</p>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      {/* Quantity */}
                      <div className="flex items-center gap-2 border border-stone-200">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-stone-600 hover:text-obsidian transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="font-manrope text-xs w-5 text-center text-obsidian">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-stone-600 hover:text-obsidian transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      {/* Price */}
                      <p className="font-manrope text-sm font-medium text-obsidian">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeItem(item.key)}
                    aria-label="Remove item"
                    className="text-stone-300 hover:text-stone-600 transition-colors self-start mt-0.5"
                  >
                    <X size={14} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-6 border-t border-stone-200 bg-stone-50">
            <div className="flex justify-between items-center mb-1">
              <span className="font-manrope text-xs uppercase tracking-wider text-stone-500">Subtotal</span>
              <span className="font-cormorant text-xl font-medium text-obsidian">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-manrope text-xs text-stone-400 mb-5">Shipping & taxes calculated at checkout</p>

            <button className="w-full bg-champagne text-obsidian font-manrope text-xs tracking-wider uppercase py-4 hover:bg-champagne-dark transition-colors duration-200 font-medium">
              Proceed to Checkout
            </button>

            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-3 border border-stone-300 text-stone-600 font-manrope text-xs tracking-wider uppercase py-3.5 hover:border-obsidian hover:text-obsidian transition-colors duration-200"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
