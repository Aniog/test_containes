import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const {
    cartItems,
    isCartOpen,
    cartTotal,
    removeFromCart,
    updateQuantity,
    closeCart,
  } = useCart();

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50"
          onClick={closeCart}
        />
      )}

      {/* Cart Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-50 transform transition-transform duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-velmora-border">
            <h2 className="font-serif text-xl tracking-wider text-velmora-text">
              Your Cart ({cartItems.length})
            </h2>
            <button
              onClick={closeCart}
              className="text-velmora-text hover:text-velmora-gold transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag size={48} className="mx-auto text-velmora-text-secondary mb-4" />
                <p className="text-velmora-text-secondary">Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item, index) => (
                  <div key={index} className="flex space-x-4">
                    {/* Product Image */}
                    <div className="w-24 h-24 bg-velmora-cream flex-shrink-0">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1">
                      <h3 className="font-serif text-sm tracking-wider uppercase text-velmora-text mb-1">
                        {item.product.name}
                      </h3>
                      <p className="text-velmora-gold text-sm mb-2">
                        ${item.product.price}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(index, item.quantity - 1)}
                          className="w-6 h-6 border border-velmora-border flex items-center justify-center hover:border-velmora-gold transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(index, item.quantity + 1)}
                          className="w-6 h-6 border border-velmora-border flex items-center justify-center hover:border-velmora-gold transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(index)}
                        className="text-xs text-velmora-text-secondary hover:text-red-500 transition-colors mt-2"
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
            <div className="border-t border-velmora-border p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="font-serif text-lg tracking-wider text-velmora-text">
                  Total
                </span>
                <span className="font-serif text-lg text-velmora-gold">
                  ${cartTotal.toFixed(2)}
                </span>
              </div>

              <Link
                to="/checkout"
                onClick={closeCart}
                className="block w-full bg-velmora-gold hover:bg-velmora-gold-hover text-white text-center py-3 tracking-[0.2em] text-sm uppercase transition-all duration-300 mb-3"
              >
                Proceed to Checkout
              </Link>

              <button
                onClick={closeCart}
                className="block w-full border border-velmora-gold text-velmora-gold hover:bg-velmora-gold hover:text-white text-center py-3 tracking-[0.2em] text-sm uppercase transition-all duration-300"
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
