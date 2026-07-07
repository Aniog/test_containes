import React from 'react';
import { useCart } from '../../context/CartContext';
import { X, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';

const CartDrawer = () => {
  const {
    isOpen,
    items,
    totalItems,
    totalPrice,
    closeCart,
    removeFromCart,
    updateQuantity,
  } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-velmora-charcoal/50 z-50 transition-opacity duration-300"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-velmora-ivory z-50 transform transition-transform duration-500 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-velmora-warm">
            <h2 className="font-serif text-2xl text-velmora-charcoal">
              Your Cart ({totalItems})
            </h2>
            <button
              onClick={closeCart}
              className="text-velmora-graphite hover:text-velmora-charcoal transition-colors"
              aria-label="Close cart"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-16">
                <ShoppingBag className="w-16 h-16 text-velmora-mist mx-auto mb-6" />
                <p className="text-velmora-graphite text-lg mb-2">Your cart is empty</p>
                <p className="text-velmora-mist text-sm">
                  Discover our collection and find something you love.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.cartId} className="flex gap-4">
                    {/* Product Image */}
                    <div className="w-24 h-24 bg-velmora-cream rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 space-y-2">
                      <h3 className="font-serif text-sm tracking-wide uppercase text-velmora-charcoal">
                        {item.name}
                      </h3>
                      <p className="text-xs text-velmora-mist">
                        {item.variant.label}
                      </p>
                      <p className="text-velmora-gold font-medium">
                        ${item.price}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="w-6 h-6 border border-velmora-warm flex items-center justify-center hover:border-velmora-gold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="w-6 h-6 border border-velmora-warm flex items-center justify-center hover:border-velmora-gold transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-xs text-velmora-mist hover:text-velmora-charcoal transition-colors"
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
          {items.length > 0 && (
            <div className="border-t border-velmora-warm p-6 space-y-4">
              <div className="flex items-center justify-between text-lg">
                <span className="font-medium text-velmora-charcoal">Total</span>
                <span className="font-serif text-velmora-gold">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>

              <button className="w-full bg-velmora-gold text-white py-4 font-medium tracking-wider uppercase hover:bg-velmora-gold-dark transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={closeCart}
                className="w-full text-velmora-graphite py-3 text-sm hover:text-velmora-charcoal transition-colors"
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
