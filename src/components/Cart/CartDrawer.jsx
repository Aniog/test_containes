import React from 'react';
import { useCart } from '../../context/CartContext';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

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
          className="fixed inset-0 bg-black/50 z-50 transition-opacity duration-300"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="font-serif text-xl">
              Your Cart ({totalItems})
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
                <ShoppingBag size={64} className="text-velmora-mist mb-4" />
                <p className="text-velmora-mist mb-2">Your cart is empty</p>
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="text-velmora-gold hover:underline"
                >
                  Continue shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.cartId} className="flex gap-4">
                    {/* Product Image */}
                    <div className="w-24 h-24 bg-velmora-cream flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1">
                      <h3 className="font-serif text-sm uppercase tracking-wider mb-1">
                        {item.name}
                      </h3>
                      <p className="text-xs text-velmora-mist mb-2">
                        {item.variant.label}
                      </p>
                      <p className="font-medium text-sm mb-3">
                        ${item.price.toFixed(2)}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.cartId, item.quantity - 1)
                          }
                          className="p-1 hover:text-velmora-gold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center text-sm">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.cartId, item.quantity + 1)
                          }
                          className="p-1 hover:text-velmora-gold transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.cartId)}
                      className="text-velmora-mist hover:text-red-500 transition-colors self-start"
                      aria-label="Remove item"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-serif text-lg">Total</span>
                <span className="font-serif text-lg">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <button className="w-full py-3 bg-velmora-charcoal text-white font-medium tracking-wider uppercase text-sm hover:bg-velmora-gold transition-colors duration-300">
                Proceed to Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full py-3 border-2 border-velmora-charcoal text-velmora-charcoal font-medium tracking-wider uppercase text-sm hover:bg-velmora-charcoal hover:text-white transition-colors duration-300"
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
