import React, { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart();
  const drawerRef = useRef(null);
  const itemList = Object.entries(items);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') closeCart(); };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, closeCart]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70]" role="dialog" aria-modal="true" aria-label="Shopping cart">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#2C2622]/50 backdrop-blur-sm" onClick={closeCart} />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="absolute top-0 right-0 h-full w-full max-w-md bg-[#FAF7F2] shadow-2xl flex flex-col animate-slide-in-right"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E8DFD5]">
          <h2
            className="text-lg tracking-[0.15em] uppercase text-[#2C2622] font-semibold"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Your Cart
          </h2>
          <button onClick={closeCart} className="text-[#6B5E52] hover:text-[#2C2622] transition-colors" aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {itemList.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-[#C9A84C]/30 mb-4" />
              <p className="text-[#6B5E52] text-sm">Your cart is empty</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="mt-4 text-xs tracking-[0.15em] uppercase text-[#C9A84C] hover:underline"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-5">
              {itemList.map(([key, { product, variant, quantity }]) => (
                <div key={key} className="flex gap-4 pb-5 border-b border-[#E8DFD5]/60">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-gradient-to-br from-[#E8DFD5] to-[#D4C8B8] rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                    <img
                      data-strk-img-id={`cart-thumb-${product.id}`}
                      data-strk-img={`[${product.id}-name] luxury gold jewelry product photo`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="160"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <span id={`${product.id}-name`} className="sr-only">{product.name}</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-xs tracking-[0.12em] uppercase text-[#2C2622] font-semibold truncate"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {product.name}
                    </h3>
                    <p className="text-[10px] tracking-wider uppercase text-[#8A7F74] mt-0.5">
                      {variant.name}
                    </p>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2 border border-[#E8DFD5] rounded-full">
                        <button
                          onClick={() => updateQuantity(key, quantity - 1)}
                          className="p-1.5 text-[#6B5E52] hover:text-[#2C2622]"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-xs font-medium text-[#2C2622] w-5 text-center">{quantity}</span>
                        <button
                          onClick={() => updateQuantity(key, quantity + 1)}
                          className="p-1.5 text-[#6B5E52] hover:text-[#2C2622]"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <p className="text-sm font-semibold text-[#2C2622]">
                        ${(product.price * quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(key)}
                    className="self-start text-[#B8ADA0] hover:text-[#2C2622] transition-colors p-1"
                    aria-label={`Remove ${product.name}`}
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {itemList.length > 0 && (
          <div className="px-6 py-5 border-t border-[#E8DFD5] space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#6B5E52] tracking-wide uppercase">Subtotal</span>
              <span className="text-lg font-semibold text-[#2C2622]">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-[10px] text-[#8A7F74] tracking-wide">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-[#2C2622] text-[#FAF7F2] py-3.5 text-xs tracking-[0.2em] uppercase font-semibold rounded-sm hover:bg-[#C9A84C] transition-colors duration-300">
              Checkout
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in-right {
          animation: slideInRight 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </div>
  );
}
