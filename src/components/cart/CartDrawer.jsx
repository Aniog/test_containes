import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { isCartOpen, setIsCartOpen, cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-50"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-[#FAF8F5] z-50 transform transition-transform duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#E8E0D8]">
            <h2 className="font-serif text-xl tracking-wider uppercase">
              Your Bag ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
            </h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="hover:text-[#8B7355] transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={48} className="text-[#6B5E54] mb-4" />
                <p className="text-lg text-[#6B5E54] mb-2">Your bag is empty</p>
                <p className="text-sm text-[#6B5E54] mb-8">
                  Discover our collection and find something you love.
                </p>
                <Link
                  to="/shop"
                  onClick={() => setIsCartOpen(false)}
                  className="bg-[#2A2520] text-[#FAF8F5] px-8 py-3 text-sm tracking-wider uppercase hover:bg-[#8B7355] transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={`${item.product.id}-${item.variant}`} className="flex gap-4">
                    {/* Product Image */}
                    <div className="w-24 h-24 bg-[#F5F0EB] rounded-lg overflow-hidden flex-shrink-0">
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
                      {item.variant && (
                        <p className="text-xs text-[#6B5E54] mb-2">{item.variant}</p>
                      )}
                      <p className="text-sm font-medium mb-3">${item.product.price}</p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.variant, item.quantity - 1)}
                          className="w-6 h-6 border border-[#E8E0D8] rounded flex items-center justify-center hover:border-[#8B7355] transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-sm w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.variant, item.quantity + 1)}
                          className="w-6 h-6 border border-[#E8E0D8] rounded flex items-center justify-center hover:border-[#8B7355] transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.product.id, item.variant)}
                          className="ml-auto text-xs text-[#6B5E54] hover:text-red-500 transition-colors"
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
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-[#E8E0D8]">
              <div className="flex items-center justify-between mb-6">
                <span className="font-serif text-lg">Total</span>
                <span className="font-serif text-lg">${cartTotal.toFixed(2)}</span>
              </div>
              <button className="w-full bg-[#2A2520] text-[#FAF8F5] py-4 text-sm tracking-wider uppercase hover:bg-[#8B7355] transition-colors">
                Proceed to Checkout
              </button>
              <p className="text-xs text-[#6B5E54] text-center mt-4">
                Free shipping on all orders
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
