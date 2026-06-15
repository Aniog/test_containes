import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function CartDrawer() {
  const { items, removeItem, updateQty, total, count, isOpen, setIsOpen } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isOpen && drawerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, drawerRef.current);
    }
  }, [isOpen, items]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="cart-overlay" onClick={() => setIsOpen(false)} />

      {/* Drawer */}
      <div ref={drawerRef} className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-mist">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-gold" />
            <h2 className="font-serif text-lg text-velvet tracking-wide">
              Your Cart {count > 0 && <span className="text-stone font-sans text-sm font-normal">({count})</span>}
            </h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-stone hover:text-velvet transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag className="w-12 h-12 text-mist" />
              <p className="font-serif text-xl text-stone">Your cart is empty</p>
              <p className="font-sans text-sm text-pebble">Discover our collection of fine jewelry</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 border border-gold text-gold font-sans text-xs tracking-widest2 uppercase px-8 py-3 hover:bg-gold hover:text-cream transition-all duration-300"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map(item => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-mist last:border-0">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-ivory flex-shrink-0 overflow-hidden">
                    <img
                      data-strk-img-id={`cart-${item.key}-img`}
                      data-strk-img={`[cart-${item.key}-name]`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="160"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p
                      id={`cart-${item.key}-name`}
                      className="font-serif text-sm text-velvet tracking-widest uppercase leading-tight"
                    >
                      {item.product.name}
                    </p>
                    <p className="font-sans text-xs text-stone mt-1 capitalize">{item.variant} tone</p>
                    <p className="font-sans text-sm text-charcoal font-medium mt-1">${item.product.price}</p>

                    <div className="flex items-center gap-3 mt-3">
                      <div className="flex items-center border border-mist">
                        <button
                          onClick={() => updateQty(item.key, item.qty - 1)}
                          className="w-7 h-7 flex items-center justify-center text-stone hover:text-velvet transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center font-sans text-sm text-charcoal">{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.key, item.qty + 1)}
                          className="w-7 h-7 flex items-center justify-center text-stone hover:text-velvet transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="text-pebble hover:text-velvet transition-colors ml-auto"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-6 border-t border-mist bg-ivory">
            <div className="flex justify-between items-center mb-1">
              <span className="font-sans text-xs text-stone tracking-widest3 uppercase">Subtotal</span>
              <span className="font-serif text-xl text-velvet">${total.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-pebble mb-5">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-gold text-cream font-sans text-xs tracking-widest2 uppercase py-4 hover:bg-gold-light transition-all duration-300 font-medium">
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-3 border border-mist text-stone font-sans text-xs tracking-widest2 uppercase py-3 hover:border-gold hover:text-gold transition-all duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
