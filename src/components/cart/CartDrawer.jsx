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
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-50 
                   transform transition-transform duration-500 ease-in-out
                   ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-velmora-sand">
            <h2 className="font-serif text-2xl flex items-center gap-2">
              <ShoppingBag size={20} />
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
              <div className="text-center py-20">
                <ShoppingBag size={48} className="mx-auto text-velmora-sand mb-4" />
                <p className="font-serif text-xl text-velmora-charcoal-light mb-6">
                  Your cart is empty
                </p>
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="btn-primary inline-block"
                >
                  Start Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.variant}`}
                    className="flex gap-4 pb-6 border-b border-velmora-sand"
                  >
                    {/* Product Image */}
                    <Link
                      to={`/product/${item.id}`}
                      onClick={closeCart}
                      className="flex-shrink-0"
                    >
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-20 h-20 object-cover bg-velmora-warm"
                      />
                    </Link>

                    {/* Product Details */}
                    <div className="flex-1 space-y-2">
                      <Link
                        to={`/product/${item.id}`}
                        onClick={closeCart}
                        className="font-serif text-sm hover:text-velmora-gold transition-colors"
                      >
                        {item.name}
                      </Link>
                      <p className="font-sans text-xs text-velmora-charcoal-light">
                        {item.variant}
                      </p>
                      <p className="font-serif text-sm">${item.price}</p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="w-6 h-6 border border-velmora-charcoal/20 
                                     flex items-center justify-center hover:border-velmora-gold 
                                     transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="font-sans text-sm w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="w-6 h-6 border border-velmora-charcoal/20 
                                     flex items-center justify-center hover:border-velmora-gold 
                                     transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.id, item.variant)}
                      className="flex-shrink-0 text-velmora-charcoal-light 
                                 hover:text-red-500 transition-colors"
                      aria-label="Remove item"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer with Totals and Checkout */}
          {items.length > 0 && (
            <div className="border-t border-velmora-sand p-6 space-y-4">
              {/* Subtotal */}
              <div className="flex items-center justify-between font-sans">
                <span className="text-sm uppercase tracking-wider">Subtotal</span>
                <span className="font-serif text-xl">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="font-sans text-xs text-velmora-charcoal-light">
                Shipping & taxes calculated at checkout
              </p>

              {/* Checkout Button */}
              <button
                onClick={() => {
                  alert('Checkout functionality would be implemented here!');
                  closeCart();
                }}
                className="w-full bg-velmora-charcoal text-white py-4 font-sans text-sm 
                           uppercase tracking-ultra-wide hover:bg-velmora-gold 
                           transition-all duration-500"
              >
                Proceed to Checkout
              </button>

              {/* Continue Shopping */}
              <Link
                to="/shop"
                onClick={closeCart}
                className="block text-center font-sans text-sm text-velmora-charcoal-light 
                           hover:text-velmora-gold transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
