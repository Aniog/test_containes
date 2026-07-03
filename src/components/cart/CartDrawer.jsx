import React from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import Button from '@/components/ui/Button';

const CartItem = ({ item }) => {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="flex gap-4 py-4 border-b border-velmora-sand last:border-b-0">
      {/* Image */}
      <div className="w-20 h-20 bg-velmora-sand rounded overflow-hidden flex-shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start gap-2">
          <div className="min-w-0">
            <h4
              className="text-product text-xs text-velmora-espresso truncate"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
            >
              {item.name}
            </h4>
            {item.variant && (
              <p className="text-xs text-velmora-warm-gray mt-0.5">
                {item.variant}
              </p>
            )}
          </div>
          <button
            onClick={() => removeItem(item.id)}
            className="p-1 text-velmora-warm-gray hover:text-red-500 transition-colors"
            aria-label="Remove item"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>

        <div className="flex justify-between items-center mt-2">
          {/* Quantity Controls */}
          <div className="flex items-center border border-velmora-sand rounded">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="p-1.5 hover:bg-velmora-sand/50 transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="px-2 text-sm font-medium min-w-[24px] text-center">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="p-1.5 hover:bg-velmora-sand/50 transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>

          {/* Price */}
          <p className="text-sm font-medium text-velmora-espresso">
            {formatPrice(item.price * item.quantity)}
          </p>
        </div>
      </div>
    </div>
  );
};

const CartDrawer = () => {
  const { items, isOpen, closeCart, subtotal, itemCount } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[200] bg-black/40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[201] w-full max-w-md bg-white shadow-lift transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-velmora-sand">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5" />
              <h2
                className="text-lg font-medium"
                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
              >
                Your Cart
              </h2>
              {itemCount > 0 && (
                <span className="text-sm text-velmora-warm-gray">
                  ({itemCount} {itemCount === 1 ? 'item' : 'items'})
                </span>
              )}
            </div>
            <button
              onClick={closeCart}
              className="p-2 -mr-2 text-velmora-warm-gray hover:text-velmora-espresso transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                <div className="w-20 h-20 bg-velmora-sand rounded-full flex items-center justify-center mb-4">
                  <ShoppingBag className="w-8 h-8 text-velmora-warm-gray" />
                </div>
                <h3
                  className="text-lg mb-2"
                  style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
                >
                  Your cart is empty
                </h3>
                <p className="text-sm text-velmora-warm-gray mb-6">
                  Discover our collection of demi-fine jewelry
                </p>
                <Button onClick={closeCart} variant="secondary" size="sm">
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <div className="p-6">
                {items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-velmora-sand p-6 bg-white">
              {/* Subtotal */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-velmora-warm-gray">Subtotal</span>
                <span className="text-lg font-medium text-velmora-espresso">
                  {formatPrice(subtotal)}
                </span>
              </div>

              <p className="text-xs text-velmora-warm-gray mb-4">
                Shipping and taxes calculated at checkout
              </p>

              {/* Checkout Button */}
              <Button className="w-full" size="lg">
                Checkout
              </Button>

              {/* Continue Shopping */}
              <button
                onClick={closeCart}
                className="w-full mt-3 text-sm text-velmora-warm-gray hover:text-velmora-espresso transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
