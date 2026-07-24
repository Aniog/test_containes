import React from 'react';
import { useCart } from '../../context/CartContext';
import { X, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    removeFromCart,
    updateQuantity,
    cartTotal
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-50"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-velmora-cream z-50 shadow-premium-lg transform transition-transform duration-300">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-velmora-sand">
            <h2 className="text-lg font-serif">Your Cart</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="text-velmora-charcoal hover:text-velmora-gold"
            >
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <p className="text-center text-velmora-stone mt-8">
                Your cart is empty
              </p>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={`${item.product.id}-${item.variant}`} className="flex gap-4">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="text-sm font-serif uppercase tracking-wider">
                        {item.product.name}
                      </h3>
                      <p className="text-xs text-velmora-stone mt-1">
                        {item.variant}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-sm font-medium">
                          ${item.product.price}
                        </span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.variant,
                                item.quantity - 1
                              )
                            }
                            className="p-1 hover:text-velmora-gold"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="text-sm w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.variant,
                                item.quantity + 1
                              )
                            }
                            className="p-1 hover:text-velmora-gold"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() =>
                          removeFromCart(item.product.id, item.variant)
                        }
                        className="text-xs text-velmora-stone hover:text-red-500 mt-2"
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
            <div className="p-6 border-t border-velmora-sand">
              <div className="flex justify-between mb-4">
                <span className="text-sm uppercase tracking-wider">Total</span>
                <span className="text-lg font-medium">
                  ${cartTotal.toFixed(2)}
                </span>
              </div>
              <Link
                to="/checkout"
                className="block w-full bg-velmora-charcoal text-velmora-ivory text-center py-3 uppercase tracking-wider text-sm hover:bg-velmora-gold transition-colors"
                onClick={() => setIsCartOpen(false)}
              >
                Checkout
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
