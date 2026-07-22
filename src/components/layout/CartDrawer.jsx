import { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function CartDrawer() {
  const { items, removeItem, updateQty, total, count, isOpen, setIsOpen } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [isOpen, items]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-charcoal/40 z-50 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-ivory z-50 flex flex-col shadow-2xl transition-transform duration-400 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-warm-gray-lt/40">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-charcoal" />
            <span className="font-cormorant text-lg font-light tracking-widest2 text-charcoal">
              Your Cart {count > 0 && <span className="text-warm-gray text-sm">({count})</span>}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-warm-gray hover:text-charcoal transition-colors"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div ref={containerRef} className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-warm-gray-lt" />
              <p className="font-cormorant text-xl text-warm-gray font-light">Your cart is empty</p>
              <p className="text-xs text-warm-gray-lt tracking-wide">Add something beautiful</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 text-xs uppercase tracking-widest2 font-medium text-charcoal border border-charcoal px-6 py-2.5 hover:bg-charcoal hover:text-ivory transition-all duration-300"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="flex flex-col divide-y divide-warm-gray-lt/30">
              {items.map(item => (
                <li key={item.key} className="py-5 flex gap-4">
                  {/* Product image */}
                  <div className="w-20 h-20 bg-cream-dark flex-shrink-0 overflow-hidden">
                    <img
                      data-strk-img-id={`cart-${item.product.imgId}`}
                      data-strk-img={`[${item.product.descId}] [${item.product.titleId}]`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="160"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                    {/* Hidden text refs */}
                    <span id={item.product.titleId} className="hidden">{item.product.name}</span>
                    <span id={item.product.descId} className="hidden">{item.product.shortDesc}</span>
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <p className="font-cormorant text-sm uppercase tracking-widest2 text-charcoal font-medium leading-tight">
                      {item.product.name}
                    </p>
                    {item.variant && (
                      <p className="text-xs text-warm-gray mt-0.5">{item.variant}</p>
                    )}
                    <p className="text-xs text-warm-gray mt-1">${item.product.price}</p>

                    {/* Qty controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQty(item.key, item.qty - 1)}
                        className="w-6 h-6 border border-warm-gray-lt/60 flex items-center justify-center text-warm-gray hover:border-charcoal hover:text-charcoal transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={10} />
                      </button>
                      <span className="text-xs text-charcoal font-medium w-4 text-center">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.key, item.qty + 1)}
                        className="w-6 h-6 border border-warm-gray-lt/60 flex items-center justify-center text-warm-gray hover:border-charcoal hover:text-charcoal transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={10} />
                      </button>
                    </div>
                  </div>

                  {/* Remove + subtotal */}
                  <div className="flex flex-col items-end justify-between">
                    <button
                      onClick={() => removeItem(item.key)}
                      className="text-warm-gray-lt hover:text-charcoal transition-colors"
                      aria-label="Remove item"
                    >
                      <X size={14} />
                    </button>
                    <p className="text-sm text-charcoal font-medium">
                      ${(item.product.price * item.qty).toFixed(0)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-warm-gray-lt/40 bg-ivory">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs uppercase tracking-widest2 text-warm-gray font-medium">Subtotal</span>
              <span className="font-cormorant text-xl text-charcoal font-light">${total.toFixed(0)}</span>
            </div>
            <p className="text-xs text-warm-gray-lt text-center mb-4">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-charcoal text-ivory text-xs uppercase tracking-widest2 font-medium py-4 hover:bg-charcoal-soft transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-2 text-xs uppercase tracking-widest2 font-medium text-warm-gray py-3 hover:text-charcoal transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
