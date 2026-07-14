import React from 'react';
import { useCart } from '../../context/CartContext';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    cartTotal,
    cartCount
  } = useCart();

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div
          className="cart-overlay fixed inset-0 z-50"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white z-50 transform transition-transform duration-500 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-velmora-beige">
            <h2 className="text-lg uppercase tracking-wider font-medium">
              Your Cart ({cartCount})
            </h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="text-velmora-charcoal hover:text-velmora-black transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          {cartItems.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center p-8">
              <ShoppingBag size={64} className="text-velmora-beige mb-6" />
              <p className="text-velmora-charcoal text-lg mb-2">Your cart is empty</p>
              <p className="text-sm text-velmora-charcoal text-center mb-8">
                Discover our collection and find your next treasured piece.
              </p>
              <Link
                to="/shop"
                onClick={() => setIsCartOpen(false)}
                className="btn-primary"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto p-6">
                {cartItems.map((item, index) => (
                  <div key={index} className="flex gap-4 mb-6 pb-6 border-b border-velmora-beige">
                    {/* Product Image */}
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-24 h-24 object-cover flex-shrink-0"
                    />

                    {/* Product Details */}
                    <div className="flex-1">
                      <h3 className="text-sm font-medium mb-1">{item.product.name}</h3>
                      {item.variant && (
                        <p className="text-xs text-velmora-charcoal mb-2">
                          {item.variant}
                        </p>
                      )}
                      <p className="text-sm mb-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                        ${item.product.price}
                      </p>

                      {/* Quantity */}
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(index, item.quantity - 1)}
                          className="w-8 h-8 border border-velmora-beige flex items-center justify-center hover:border-velmora-gold transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(index, item.quantity + 1)}
                          className="w-8 h-8 border border-velmora-beige flex items-center justify-center hover:border-velmora-gold transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(index)}
                      className="text-velmora-charcoal hover:text-red-500 transition-colors"
                    >
                      <X size={18} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-velmora-beige">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-sm uppercase tracking-wider">Total</span>
                  <span className="text-xl" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    ${cartTotal.toFixed(2)}
                  </span>
                </div>
                <button className="btn-primary w-full mb-3">
                  Checkout
                </button>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-full text-sm text-velmora-charcoal hover:text-velmora-black transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}