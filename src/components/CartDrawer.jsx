import React from 'react';
import { X, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { 
    cartItems, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity,
    cartTotal 
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="cart-overlay fixed inset-0 bg-charcoal/50 z-50"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="cart-drawer fixed right-0 top-0 h-full w-full max-w-md bg-cream-50 z-50 shadow-premium transform translate-x-0">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-charcoal-200">
            <div className="flex items-center gap-2">
              <ShoppingBag size={20} className="text-charcoal" />
              <h2 className="font-serif text-xl text-charcoal">Your Cart</h2>
            </div>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="text-charcoal hover:opacity-70 transition-opacity"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag size={48} className="mx-auto text-charcoal-300 mb-4" />
                <p className="text-charcoal-500 font-serif text-lg">Your cart is empty</p>
                <p className="text-charcoal-400 text-sm mt-2">Discover our collection</p>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item, index) => (
                  <div key={`${item.product.id}-${item.variant}-${index}`} className="flex gap-4 pb-6 border-b border-charcoal-200">
                    {/* Product Image */}
                    <div className="w-24 h-24 bg-cream-100 flex-shrink-0">
                      <img 
                        src={item.product.images[0]} 
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <h3 className="product-name text-charcoal mb-1">
                        {item.product.name}
                      </h3>
                      <p className="text-charcoal-500 text-sm mb-2">{item.variant}</p>
                      <p className="text-charcoal font-medium">${item.product.price}</p>

                      {/* Quantity & Remove */}
                      <div className="flex items-center justify-between mt-3">
                        <div className="quantity-selector">
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.variant, item.quantity - 1)}
                            aria-label="Decrease quantity"
                          >
                            -
                          </button>
                          <input 
                            type="number" 
                            value={item.quantity}
                            readOnly
                          />
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.variant, item.quantity + 1)}
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>

                        <button 
                          onClick={() => removeFromCart(item.product.id, item.variant)}
                          className="text-charcoal-400 hover:text-charcoal transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-charcoal-200">
              <div className="flex items-center justify-between mb-4">
                <span className="font-serif text-lg text-charcoal">Total</span>
                <span className="font-serif text-lg text-charcoal">${cartTotal.toFixed(2)}</span>
              </div>
              <button className="btn-primary w-full">
                Proceed to Checkout
              </button>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="w-full text-center mt-3 text-sm text-charcoal-500 hover:text-charcoal transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
