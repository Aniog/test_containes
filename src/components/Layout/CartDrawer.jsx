import React from 'react';
import { useCart } from '../../context/CartContext';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, totalItems, totalPrice, removeFromCart, updateQuantity, closeCart } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-velmora-border">
            <h2 className="font-serif text-xl font-light">
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
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={48} className="text-velmora-muted mb-4" />
                <p className="font-serif text-lg text-velmora-muted mb-2">Your bag is empty</p>
                <p className="font-sans text-sm text-velmora-muted">
                  Discover our collection and find something you love.
                </p>
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="btn-primary mt-6 inline-block"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.cartId} className="flex gap-4">
                    {/* Product Image */}
                    <div className="w-24 h-24 flex-shrink-0 bg-velmora-beige">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <div className="flex justify-between mb-2">
                        <h3 className="font-serif text-sm uppercase tracking-wider">
                          {item.name}
                        </h3>
                        <button
                          onClick={() => removeFromCart(item.cartId)}
                          className="text-velmora-muted hover:text-red-500 transition-colors"
                          aria-label={`Remove ${item.name} from cart`}
                        >
                          <X size={16} />
                        </button>
                      </div>

                      <p className="font-sans text-xs text-velmora-muted uppercase tracking-wider mb-2">
                        {item.variant}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="font-serif text-sm">${item.price}</span>

                        {/* Quantity Selector */}
                        <div className="quantity-selector">
                          <button
                            onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                            className="px-2 py-1 hover:bg-velmora-beige transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-3 py-1 text-sm min-w-[2.5rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                            className="px-2 py-1 hover:bg-velmora-beige transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer - Checkout */}
          {items.length > 0 && (
            <div className="border-t border-velmora-border p-6 space-y-4">
              <div className="flex justify-between font-serif text-lg">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <p className="font-sans text-xs text-velmora-muted text-center">
                Shipping calculated at checkout
              </p>
              <button className="btn-primary w-full">
                Proceed to Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full font-sans text-sm uppercase tracking-wider text-velmora-muted hover:text-velmora-charcoal transition-colors"
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
