import React from 'react';
import { useCart } from '../../context/CartContext';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const {
    isOpen,
    closeCart,
    items,
    itemCount,
    subtotal,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-velmora-black/50 z-50 cart-overlay"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-velmora-cream z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="font-serif text-xl tracking-wide uppercase">
              Bag ({itemCount})
            </h2>
            <button
              onClick={closeCart}
              className="text-velmora-charcoal hover:text-velmora-gold transition-colors"
              aria-label="Close cart"
            >
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={48} className="text-velmora-warm-gray mb-4" />
                <p className="text-velmora-warm-gray mb-2">Your bag is empty</p>
                <button
                  onClick={closeCart}
                  className="text-velmora-gold hover:text-velmora-gold-dark transition-colors text-sm uppercase tracking-wide"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    {/* Product Image */}
                    <div className="w-24 h-24 bg-velmora-light-gray rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.images?.[0] || 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&q=80'}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1">
                      <h3 className="font-serif text-sm uppercase tracking-wider mb-1">
                        {item.name}
                      </h3>
                      <p className="text-xs text-velmora-warm-gray mb-2">
                        {item.variant}
                      </p>
                      <p className="font-serif text-sm mb-3">
                        ${item.price}.00
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="w-7 h-7 border border-gray-300 flex items-center justify-center hover:border-velmora-gold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="w-7 h-7 border border-gray-300 flex items-center justify-center hover:border-velmora-gold transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="ml-auto text-xs text-velmora-warm-gray hover:text-velmora-charcoal transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-6 border-t border-gray-200">
              {/* Subtotal */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm uppercase tracking-wide">Subtotal</span>
                <span className="font-serif text-lg">${subtotal}.00</span>
              </div>
              <p className="text-xs text-velmora-warm-gray mb-4">
                Shipping & taxes calculated at checkout
              </p>

              {/* Checkout Button */}
              <Link
                to="/checkout"
                onClick={closeCart}
                className="block w-full bg-velmora-gold text-velmora-white text-center py-4 uppercase tracking-wide text-sm hover:bg-velmora-gold-dark transition-colors mb-3"
              >
                Checkout
              </Link>

              {/* Clear Cart */}
              <button
                onClick={clearCart}
                className="w-full text-center text-xs text-velmora-warm-gray hover:text-velmora-charcoal transition-colors"
              >
                Clear Bag
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
