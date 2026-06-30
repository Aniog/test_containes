import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { isOpen, closeCart, items, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-foreground/50 z-50 transition-opacity duration-300"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-50 
                    transform transition-transform duration-500 ease-in-out ${
                      isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="font-serif text-2xl text-foreground">Your Cart</h2>
            <button
              onClick={closeCart}
              className="hover:opacity-70 transition-opacity"
              aria-label="Close cart"
            >
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-16">
                <ShoppingBag size={48} className="mx-auto text-muted/30 mb-4" />
                <p className="text-muted text-lg">Your cart is empty</p>
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="btn-secondary inline-block mt-6"
                >
                  Start Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.cartId} className="flex space-x-4">
                    {/* Product Image */}
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-20 h-20 object-cover flex-none"
                    />

                    {/* Product Details */}
                    <div className="flex-1">
                      <h3 className="font-serif text-sm text-foreground mb-1">
                        {item.name}
                      </h3>
                      <p className="text-xs text-muted mb-2">{item.material}</p>
                      <p className="text-sm font-medium text-foreground mb-3">
                        ${item.price}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="p-1 hover:text-accent transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="p-1 hover:text-accent transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={16} />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.cartId)}
                          className="ml-auto text-sm text-muted hover:text-red-500 transition-colors"
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
            <div className="border-t p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-serif text-lg text-foreground">Total</span>
                <span className="font-serif text-2xl text-foreground">
                  ${cartTotal.toFixed(2)}
                </span>
              </div>
              <button
                onClick={clearCart}
                className="text-sm text-muted hover:text-red-500 transition-colors"
              >
                Clear Cart
              </button>
              <Link
                to="/checkout"
                onClick={closeCart}
                className="btn-primary w-full text-center block"
              >
                Proceed to Checkout
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
