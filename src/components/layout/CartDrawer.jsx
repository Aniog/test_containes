import { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice, totalItems } = useCart();
  const itemsRef = useRef(null);

  useEffect(() => {
    if (!isOpen || !itemsRef.current) return;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, itemsRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [isOpen, items]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-espresso/40 z-50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-ivory z-50 flex flex-col shadow-2xl transition-transform duration-350 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-warm-gray-light">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} strokeWidth={1.5} className="text-espresso" />
            <span className="font-inter text-xs tracking-widest uppercase text-espresso">
              Your Bag {totalItems > 0 && `(${totalItems})`}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-warm-gray hover:text-espresso transition-colors"
            aria-label="Close cart"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div ref={itemsRef} className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-warm-gray-light" />
              <p className="font-cormorant text-xl text-warm-gray">Your bag is empty</p>
              <p className="font-inter text-xs text-warm-gray">Add something beautiful</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 font-inter text-xs tracking-widest uppercase text-gold hover:text-gold-dark transition-colors underline underline-offset-4"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {items.map(item => (
                <CartItem
                  key={item.key}
                  item={item}
                  onRemove={() => removeItem(item.key)}
                  onUpdateQty={(q) => updateQuantity(item.key, q)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-warm-gray-light bg-linen">
            <div className="flex justify-between items-center mb-4">
              <span className="font-inter text-xs tracking-widest uppercase text-warm-gray">Subtotal</span>
              <span className="font-cormorant text-xl text-espresso">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="font-inter text-xs text-warm-gray mb-4 text-center">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-espresso text-ivory font-inter text-xs tracking-widest uppercase py-4 hover:bg-charcoal transition-colors duration-200">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-3 font-inter text-xs tracking-widest uppercase text-warm-gray hover:text-espresso transition-colors py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}

function CartItem({ item, onRemove, onUpdateQty }) {
  const { product, variant, quantity } = item;
  return (
    <div className="flex gap-4 py-4 border-b border-warm-gray-light last:border-0">
      <div className="w-20 h-20 bg-linen flex-shrink-0 overflow-hidden">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="1x1"
          data-strk-img-width="160"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start">
          <p className="font-cormorant text-sm uppercase tracking-widest text-espresso leading-tight pr-2">
            {product.name}
          </p>
          <button onClick={onRemove} className="text-warm-gray hover:text-espresso transition-colors flex-shrink-0">
            <X size={14} strokeWidth={1.5} />
          </button>
        </div>
        <p className="font-inter text-xs text-warm-gray mt-1">{variant}</p>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-2 border border-warm-gray-light">
            <button
              onClick={() => onUpdateQty(quantity - 1)}
              className="w-7 h-7 flex items-center justify-center text-warm-gray hover:text-espresso transition-colors"
            >
              <Minus size={12} strokeWidth={1.5} />
            </button>
            <span className="font-inter text-xs text-espresso w-4 text-center">{quantity}</span>
            <button
              onClick={() => onUpdateQty(quantity + 1)}
              className="w-7 h-7 flex items-center justify-center text-warm-gray hover:text-espresso transition-colors"
            >
              <Plus size={12} strokeWidth={1.5} />
            </button>
          </div>
          <span className="font-cormorant text-base text-espresso">
            ${(product.price * quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
