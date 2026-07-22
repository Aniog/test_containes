import { useRef, useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';

// Static image pool — plugin can enumerate all imgId values from the products array
function CartItemImage({ productId }) {
  return (
    <>
      {products.map(p => (
        <img
          key={p.id}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          data-strk-img-id={p.imgId}
          data-strk-img={`[${p.descId}] [${p.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="160"
          alt={p.name}
          className={`w-full h-full object-cover ${p.id === productId ? 'block' : 'hidden'}`}
        />
      ))}
    </>
  );
}

export default function CartDrawer() {
  const { items, removeItem, updateQty, total, count, isOpen, setIsOpen } = useCart();
  const listRef = useRef(null);

  useEffect(() => {
    if (isOpen && listRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, listRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [isOpen, items]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-obsidian/40 z-50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-parchment z-50 flex flex-col shadow-[-8px_0_40px_rgba(26,23,20,0.15)] transition-transform duration-350 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-linen">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-gold" />
            <span className="font-cormorant text-xl font-light tracking-wide text-obsidian">
              Your Cart
            </span>
            {count > 0 && (
              <span className="font-manrope text-xs text-muted ml-1">({count})</span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-muted hover:text-obsidian transition-colors duration-200"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-linen" />
              <p className="font-cormorant text-2xl font-light text-muted">Your cart is empty</p>
              <p className="font-manrope text-xs text-whisper">Add something beautiful to get started.</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 font-manrope text-xs tracking-[0.12em] uppercase text-gold border border-gold px-6 py-3 hover:bg-gold hover:text-obsidian transition-all duration-300"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul ref={listRef} className="flex flex-col gap-5">
              {items.map(item => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-linen last:border-0">
                  {/* Product image */}
                  <div className="w-20 h-24 bg-cream flex-shrink-0 overflow-hidden">
                    <CartItemImage productId={item.product.id} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-cormorant text-sm font-medium tracking-[0.1em] uppercase text-obsidian leading-tight">
                      {item.product.name}
                    </p>
                    <p className="font-manrope text-xs text-muted mt-0.5 capitalize">{item.variant} tone</p>
                    <p className="font-manrope text-sm font-medium text-obsidian mt-1">
                      ${item.product.price}
                    </p>

                    <div className="flex items-center gap-3 mt-3">
                      <div className="flex items-center border border-linen">
                        <button
                          onClick={() => updateQty(item.key, item.qty - 1)}
                          className="w-7 h-7 flex items-center justify-center text-muted hover:text-obsidian transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center font-manrope text-xs text-obsidian">{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.key, item.qty + 1)}
                          className="w-7 h-7 flex items-center justify-center text-muted hover:text-obsidian transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="font-manrope text-xs text-whisper hover:text-gold transition-colors duration-200 underline underline-offset-2"
                      >
                        Remove
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
          <div className="px-6 py-6 border-t border-linen bg-cream">
            <div className="flex justify-between items-center mb-1">
              <span className="font-manrope text-xs text-muted tracking-wide uppercase">Subtotal</span>
              <span className="font-cormorant text-xl font-medium text-obsidian">${total.toFixed(2)}</span>
            </div>
            <p className="font-manrope text-xs text-whisper mb-5">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-obsidian text-parchment font-manrope text-xs tracking-[0.15em] uppercase py-4 hover:bg-espresso transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-3 border border-linen text-muted font-manrope text-xs tracking-[0.12em] uppercase py-3 hover:border-gold hover:text-gold transition-all duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
