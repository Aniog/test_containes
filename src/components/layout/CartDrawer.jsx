import React from 'react';
import { useCart } from '../../context/CartContext';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { 
    isCartOpen, 
    closeCart, 
    cartItems, 
    removeFromCart, 
    updateQuantity,
    cartTotal,
    clearCart 
  } = useCart();

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div 
          className="cart-overlay fixed inset-0 z-50"
          onClick={closeCart}
        />
      )}

      {/* Cart Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-velmora-border">
            <h2 className="font-serif text-xl tracking-wider uppercase">
              Your Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
            </h2>
            <button onClick={closeCart} className="text-velmora-charcoal hover:text-velmora-gold transition-colors">
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={48} className="text-velmora-taupe mb-4" />
                <p className="text-velmora-text-light mb-2">Your cart is empty</p>
                <p className="text-sm text-velmora-text-light">
                  Discover our collection and find something you love
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item, index) => (
                  <div key={`${item.product.id}-${item.variant}-${index}`} className="flex gap-4">
                    {/* Product Image */}
                    <div className="w-24 h-24 bg-velmora-warm-gray flex-shrink-0">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <h3 className="font-serif text-sm tracking-wider uppercase mb-1">
                        {item.product.name}
                      </h3>
                      <p className="text-xs text-velmora-text-light mb-2">
                        {item.variant}
                      </p>
                      <p className="text-sm font-medium mb-3">
                        ${item.product.price}.00
                      </p>

                      {/* Quantity Control */}
                      <div className="quantity-input inline-flex">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.variant, item.quantity - 1)}
                          className="hover:bg-velmora-warm-gray"
                        >
                          <Minus size={14} />
                        </button>
                        <input
                          type="number"
                          value={item.quantity}
                          readOnly
                          className="text-center"
                        />
                        <button
                          onClick={() => updateQuantity(item.product.id, item.variant, item.quantity + 1)}
                          className="hover:bg-velmora-warm-gray"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.product.id, item.variant)}
                        className="text-xs text-velmora-text-light hover:text-velmora-gold mt-2 block"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t border-velmora-border p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-serif text-lg">Total</span>
                <span className="font-serif text-lg">${cartTotal}.00</span>
              </div>
              
              <button className="btn-premium w-full">
                Proceed to Checkout
              </button>
              
              <button
                onClick={clearCart}
                className="text-sm text-velmora-text-light hover:text-velmora-gold w-full text-center"
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
