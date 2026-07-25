import React, { useEffect, useRef } from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

export default function CartDrawer() {
  const { 
    cartItems, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity,
    cartTotal,
    clearCart 
  } = useCart();

  const drawerRef = useRef(null);

  useEffect(() => {
    // Load images when cart drawer opens
    if (isCartOpen && drawerRef.current) {
      ImageHelper.loadImages(strkImgConfig, drawerRef.current);
    }
  }, [isCartOpen, cartItems]);

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-50 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div ref={drawerRef} className="fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-50 shadow-premium-lg 
                    transform transition-transform duration-300 ease-in-out
                    translate-x-0"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="font-serif text-2xl font-medium">
              Your Cart ({cartItems.length})
            </h2>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="hover:opacity-70 transition-opacity"
            >
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-20">
                <ShoppingBag size={48} className="mx-auto mb-4 text-velmora-warmGray/50" />
                <p className="text-velmora-warmGray">Your cart is empty</p>
                <Link
                  to="/shop"
                  onClick={() => setIsCartOpen(false)}
                  className="btn-primary inline-block mt-6"
                >
                  Start Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={`${item.product.id}-${item.variant}`} className="flex gap-4">
                    {/* Product Image */}
                    <Link 
                      to={`/product/${item.product.id}`}
                      onClick={() => setIsCartOpen(false)}
                      className="w-20 h-20 flex-shrink-0"
                    >
                      <img
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={item.product.name}
                        data-strk-img-id={`cart-${item.product.id}`}
                        data-strk-img={item.product.images[0].dataStrkImg}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="200"
                        className="w-full h-full object-cover rounded-md"
                      />
                    </Link>

                    {/* Product Details */}
                    <div className="flex-1">
                      <Link 
                        to={`/product/${item.product.id}`}
                        onClick={() => setIsCartOpen(false)}
                        className="font-medium text-sm hover:text-velmora-gold transition-colors"
                      >
                        {item.product.name}
                      </Link>
                      <p className="text-xs text-velmora-warmGray mt-1">
                        {item.variant}
                      </p>
                      
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.variant, item.quantity - 1)}
                            className="w-6 h-6 border border-velmora-warmGray/30 rounded flex items-center justify-center hover:border-velmora-gold transition-colors"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="text-sm w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.variant, item.quantity + 1)}
                            className="w-6 h-6 border border-velmora-warmGray/30 rounded flex items-center justify-center hover:border-velmora-gold transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <span className="font-medium text-sm">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </span>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.product.id, item.variant)}
                        className="text-xs text-velmora-warmGray hover:text-red-500 transition-colors mt-2"
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
            <div className="border-t p-6 space-y-4">
              <div className="flex items-center justify-between text-lg font-medium">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              
              <Link
                to="/checkout"
                onClick={() => setIsCartOpen(false)}
                className="btn-primary w-full text-center block"
              >
                Checkout
              </Link>
              
              <button
                onClick={clearCart}
                className="w-full text-sm text-velmora-warmGray hover:text-red-500 transition-colors"
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
