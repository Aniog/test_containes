import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, itemCount } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm" 
        onClick={() => setIsOpen(false)} 
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-velmora-bg-primary flex flex-col animate-slideInRight">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-border">
          <h2 className="font-serif text-xl tracking-wide">
            Your Bag ({itemCount})
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 -mr-2 hover:bg-velmora-bg-secondary rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6">
            <ShoppingBag className="w-16 h-16 text-velmora-text-muted mb-4" />
            <p className="text-velmora-text-secondary mb-6">Your bag is empty</p>
            <Link
              to="/shop"
              onClick={() => setIsOpen(false)}
              className="btn-primary text-center"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={`${item.product.id}-${item.variant.name}`} className="flex gap-4">
                    {/* Image */}
                    <div className="w-24 h-24 bg-velmora-bg-secondary flex-shrink-0 overflow-hidden">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="product-title text-velmora-text-primary">
                            {item.product.name}
                          </h3>
                          <p className="text-sm text-velmora-text-secondary mt-1">
                            {item.variant.name}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.product.id, item.variant.name)}
                          className="p-1 text-velmora-text-muted hover:text-velmora-text-primary transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        {/* Quantity */}
                        <div className="flex items-center border border-velmora-border">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.variant.name, item.quantity - 1)}
                            className="p-2 hover:bg-velmora-bg-secondary transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-sm font-medium min-w-[2rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.variant.name, item.quantity + 1)}
                            className="p-2 hover:bg-velmora-bg-secondary transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Price */}
                        <span className="font-medium">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-velmora-border px-6 py-6 bg-velmora-bg-primary">
              {/* Subtotal */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-velmora-text-secondary">Subtotal</span>
                <span className="font-serif text-xl">${subtotal.toFixed(2)}</span>
              </div>

              <p className="text-sm text-velmora-text-muted mb-4">
                Shipping and taxes calculated at checkout
              </p>

              {/* Checkout Button */}
              <button className="w-full btn-primary mb-3">
                Proceed to Checkout
              </button>

              {/* Continue Shopping */}
              <button
                onClick={() => setIsOpen(false)}
                className="w-full text-center text-sm text-velmora-text-secondary hover:text-velmora-text-primary transition-colors py-2"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
