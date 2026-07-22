import { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();
  const itemsRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, itemsRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [items]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-charcoal/40 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-ivory z-50 flex flex-col shadow-2xl transition-transform duration-400 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-linen">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-gold" />
            <span className="font-inter text-xs uppercase tracking-widest text-charcoal">
              Your Cart {totalItems > 0 && `(${totalItems})`}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 text-warm-gray hover:text-charcoal transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div ref={itemsRef} className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag className="w-12 h-12 text-linen" />
              <p className="font-cormorant text-2xl text-charcoal">Your cart is empty</p>
              <p className="font-inter text-sm text-warm-gray">Discover our collection and find something you love.</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 font-inter text-xs uppercase tracking-widest text-gold border border-gold px-6 py-3 hover:bg-gold hover:text-ivory transition-colors duration-300"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <CartItem
                  key={item.key}
                  item={item}
                  onRemove={() => removeItem(item.key)}
                  onUpdateQty={(qty) => updateQuantity(item.key, qty)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-linen px-6 py-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-inter text-xs uppercase tracking-widest text-warm-gray">Subtotal</span>
              <span className="font-cormorant text-xl text-charcoal">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-inter text-xs text-warm-gray">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-charcoal text-ivory font-inter text-xs uppercase tracking-widest py-4 hover:bg-gold transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-linen text-charcoal font-inter text-xs uppercase tracking-widest py-3 hover:border-charcoal transition-colors duration-300"
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
    <div className="flex gap-4">
      {/* Image placeholder */}
      <div className="w-20 h-24 bg-blush flex-shrink-0 overflow-hidden">
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[cart-item-${product.id}-name]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="160"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <span id={`cart-item-${product.id}-name`} className="sr-only">{product.name} {product.shortDescription}</span>
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start">
          <div>
            <p className="font-cormorant text-sm uppercase tracking-widest text-charcoal leading-tight">{product.name}</p>
            <p className="font-inter text-xs text-warm-gray mt-0.5">{variant}</p>
          </div>
          <button onClick={onRemove} className="text-warm-gray hover:text-charcoal transition-colors ml-2 flex-shrink-0">
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="flex items-center justify-between mt-3">
          {/* Quantity */}
          <div className="flex items-center border border-linen">
            <button
              onClick={() => onUpdateQty(quantity - 1)}
              className="w-7 h-7 flex items-center justify-center text-warm-gray hover:text-charcoal transition-colors"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="w-8 text-center font-inter text-xs text-charcoal">{quantity}</span>
            <button
              onClick={() => onUpdateQty(quantity + 1)}
              className="w-7 h-7 flex items-center justify-center text-warm-gray hover:text-charcoal transition-colors"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>
          <span className="font-inter text-sm font-medium text-charcoal">${(product.price * quantity).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
