import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose }) {
  const { items, totalItems, totalPrice, updateQuantity, removeFromCart, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simulate checkout process
    setTimeout(() => {
      alert('Thank you for your purchase! This is a demo store - no actual transaction will be processed.');
      clearCart();
      setIsCheckingOut(false);
      onClose();
    }, 1500);
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-96 bg-velmora-cream z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-velmora-sand">
            <h2 className="font-serif text-2xl" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Your Cart ({totalItems})
            </h2>
            <button
              onClick={onClose}
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
                <ShoppingBag size={64} className="text-velmora-stone mb-4" />
                <p className="text-lg text-velmora-charcoal mb-2">Your cart is empty</p>
                <p className="text-sm text-velmora-stone mb-6">Discover our collection and find something you love</p>
                <Link
                  to="/shop"
                  onClick={onClose}
                  className="bg-velmora-charcoal text-velmora-cream px-8 py-3 text-sm tracking-wide hover:bg-velmora-gold transition-colors"
                >
                  SHOP NOW
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex space-x-4">
                    {/* Product Image */}
                    <Link
                      to={`/product/${item.id}`}
                      onClick={onClose}
                      className="shrink-0 w-24 h-24 bg-velmora-ivory rounded-lg overflow-hidden"
                    >
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </Link>

                    {/* Product Details */}
                    <div className="flex-1">
                      <Link
                        to={`/product/${item.id}`}
                        onClick={onClose}
                        className="font-serif text-base hover:text-velmora-gold transition-colors"
                        style={{ fontFamily: 'Cormorant Garamond, serif' }}
                      >
                        {item.name}
                      </Link>
                      <p className="text-xs text-velmora-stone mt-1">Variant: {item.variant}</p>
                      <p className="text-sm font-medium mt-1">${item.price}.00</p>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-3 mt-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="w-6 h-6 border border-velmora-sand flex items-center justify-center hover:border-velmora-gold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-sm w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="w-6 h-6 border border-velmora-sand flex items-center justify-center hover:border-velmora-gold transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.id, item.variant)}
                      className="text-velmora-stone hover:text-red-500 transition-colors"
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <X size={18} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-velmora-sand p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-serif text-lg" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Total
                </span>
                <span className="font-serif text-lg" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  ${totalPrice}.00
                </span>
              </div>
              <p className="text-xs text-velmora-stone text-center">Free shipping on all orders</p>
              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full bg-velmora-charcoal text-velmora-cream py-4 text-sm tracking-widest hover:bg-velmora-gold transition-colors disabled:opacity-50 btn-premium"
              >
                {isCheckingOut ? 'PROCESSING...' : 'CHECKOUT'}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
