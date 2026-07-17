import React from 'react';
import { useCart } from '../../context/CartContext';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';

const CartDrawer = () => {
  const {
    cartItems,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    getCartCount,
    getCartTotal
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-charcoal/50 z-50 transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-sand">
          <h2 className="font-serif text-2xl">
            Cart ({getCartCount()})
          </h2>
          <button
            onClick={closeCart}
            className="text-charcoal hover:text-gold transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6" style={{ maxHeight: 'calc(100vh - 250px)' }}>
          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag size={48} className="mx-auto text-warm-gray mb-4" />
              <p className="font-serif text-xl text-warm-gray mb-2">Your cart is empty</p>
              <p className="font-sans text-sm text-warm-gray/70">
                Discover our collections and find your perfect piece.
              </p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={`${item.id}-${item.variant}`} className="flex gap-4 pb-6 border-b border-sand">
                {/* Product Image */}
                <div className="w-24 h-24 flex-shrink-0 bg-ivory">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1 space-y-2">
                  <h3 className="font-serif text-sm">{item.name}</h3>
                  {item.variant && (
                    <p className="text-xs text-warm-gray">Variant: {item.variant}</p>
                  )}
                  <p className="font-sans text-sm font-medium">${item.price}</p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1, item.variant)}
                      className="w-8 h-8 border border-sand flex items-center justify-center hover:border-gold transition-colors"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="font-sans text-sm w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1, item.variant)}
                      className="w-8 h-8 border border-sand flex items-center justify-center hover:border-gold transition-colors"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(item.id, item.variant)}
                  className="text-warm-gray hover:text-charcoal transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer - Cart Total & Checkout */}
        {cartItems.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-white border-t border-sand">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-lg">Total</span>
              <span className="font-serif text-2xl">${getCartTotal().toFixed(2)}</span>
            </div>
            <button className="btn-primary w-full">
              Proceed to Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full text-center mt-4 font-sans text-sm text-warm-gray hover:text-charcoal transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
