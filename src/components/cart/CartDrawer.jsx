// Cart Drawer Component for Velmora Fine Jewelry
import React from 'react';
import { useCart } from '../../context/CartContext';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
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
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-velmora-border">
            <h2 className="font-serif text-xl">
              Your Bag ({totalItems})
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
              <div className="text-center py-12">
                <p className="text-velmora-text-secondary mb-4">Your bag is empty</p>
                <button
                  onClick={closeCart}
                  className="text-velmora-gold hover:text-velmora-gold-dark transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.cartId} className="flex space-x-4">
                    {/* Product Image */}
                    <Link
                      to={`/product/${item.id}`}
                      onClick={closeCart}
                      className="w-24 h-24 bg-velmora-cream rounded-lg overflow-hidden flex-shrink-0"
                    >
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </Link>

                    {/* Product Info */}
                    <div className="flex-1">
                      <Link
                        to={`/product/${item.id}`}
                        onClick={closeCart}
                        className="font-serif text-sm uppercase tracking-wider hover:text-velmora-gold transition-colors"
                      >
                        {item.name}
                      </Link>
                      <p className="text-sm text-velmora-text-secondary mt-1">
                        {item.variant}
                      </p>
                      <p className="text-sm font-medium mt-1">
                        ${item.price}.00
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="w-6 h-6 border border-velmora-border rounded flex items-center justify-center hover:border-velmora-gold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-sm w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="w-6 h-6 border border-velmora-border rounded flex items-center justify-center hover:border-velmora-gold transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.cartId)}
                          className="ml-2 text-velmora-text-light hover:text-red-500 transition-colors"
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
          {items.length > 0 && (
            <div className="border-t border-velmora-border p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-serif text-lg">Total</span>
                <span className="font-serif text-lg">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <button className="w-full btn-premium btn-premium-solid">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full text-sm text-velmora-text-secondary hover:text-velmora-charcoal transition-colors"
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
