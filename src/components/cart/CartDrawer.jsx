import React from 'react';
import { X, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const {
    cartItems,
    isCartOpen,
    cartTotal,
    cartCount,
    removeFromCart,
    updateQuantity,
    closeCart,
    clearCart
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-velmora-charcoal/50 z-50 transition-opacity duration-500"
        onClick={closeCart}
      />

      {/* Cart Drawer */}
      <div className="fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-50 shadow-luxury-lg transform transition-transform duration-500 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-velmora-gold-light/20">
            <div className="flex items-center gap-2">
              <ShoppingBag size={20} className="text-velmora-gold" />
              <h2 className="font-serif text-lg">
                Your Cart ({cartCount})
              </h2>
            </div>
            <button
              onClick={closeCart}
              className="hover:text-velmora-gold transition-colors duration-300"
            >
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length > 0 ? (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    {/* Product Image */}
                    <div className="w-20 h-20 flex-shrink-0 overflow-hidden bg-velmora-ivory">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <h3 className="text-sm font-medium mb-1">{item.name}</h3>
                      <p className="text-xs text-velmora-stone mb-2">{item.variant}</p>
                      <p className="text-sm font-medium">${item.price}</p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="w-6 h-6 border border-velmora-stone/30 flex items-center justify-center hover:border-velmora-gold transition-colors duration-300"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="w-6 h-6 border border-velmora-stone/30 flex items-center justify-center hover:border-velmora-gold transition-colors duration-300"
                        >
                          <Plus size={12} />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-xs text-velmora-stone hover:text-red-500 transition-colors duration-300 ml-2"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <ShoppingBag size={48} className="mx-auto text-velmora-gold/50 mb-4" />
                <p className="text-velmora-stone mb-2">Your cart is empty</p>
                <button
                  onClick={closeCart}
                  className="text-velmora-gold hover:underline text-sm"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t border-velmora-gold-light/20 p-6 space-y-4">
              {/* Subtotal */}
              <div className="flex items-center justify-between">
                <span className="font-medium">Subtotal</span>
                <span className="font-serif text-lg">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-velmora-stone">
                Shipping and taxes calculated at checkout
              </p>

              {/* Checkout Button */}
              <button
                onClick={() => {
                  alert('Checkout functionality would be implemented here!');
                  closeCart();
                }}
                className="w-full bg-velmora-charcoal text-white py-4 text-sm tracking-widest uppercase hover:bg-velmora-gold transition-all duration-500 flex items-center justify-center gap-2"
              >
                Proceed to Checkout
                <ArrowRight size={16} />
              </button>

              {/* Clear Cart */}
              <button
                onClick={() => {
                  if (window.confirm('Are you sure you want to clear your cart?')) {
                    clearCart();
                  }
                }}
                className="w-full text-sm text-velmora-stone hover:text-red-500 transition-colors duration-300"
              >
                Clear Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
