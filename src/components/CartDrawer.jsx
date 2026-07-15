import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    removeFromCart,
    updateQuantity,
    cartTotal
  } = useCart();

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-50 transform transition-transform duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-velmora-taupe/30">
            <h2 className="font-serif text-2xl text-velmora-soft-black">
              Your Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
            </h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="text-velmora-charcoal hover:text-velmora-gold transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Cart Items */}
          {cartItems.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center p-6">
              <ShoppingBag size={48} className="text-velmora-taupe mb-4" />
              <p className="font-sans text-velmora-warm-gray mb-6">Your cart is empty</p>
              <Link
                to="/shop"
                onClick={() => setIsCartOpen(false)}
                className="bg-velmora-soft-black text-white px-8 py-3 font-sans text-sm tracking-widest uppercase hover:bg-velmora-gold transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cartItems.map((item) => (
                  <CartItem
                    key={`${item.product.id}-${item.variant}`}
                    item={item}
                    onRemove={removeFromCart}
                    onUpdateQuantity={updateQuantity}
                  />
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-velmora-taupe/30 p-6 space-y-4">
                <div className="flex items-center justify-between font-sans">
                  <span className="text-velmora-charcoal">Subtotal</span>
                  <span className="text-lg font-medium text-velmora-soft-black">
                    ${cartTotal.toFixed(2)}
                  </span>
                </div>
                <p className="text-xs text-velmora-warm-gray text-center">
                  Shipping calculated at checkout
                </p>
                <button className="w-full bg-velmora-soft-black hover:bg-velmora-gold text-white py-4 font-sans text-sm tracking-widest uppercase transition-all duration-300">
                  Checkout
                </button>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-full border border-velmora-taupe text-velmora-charcoal py-3 font-sans text-sm tracking-widest uppercase hover:border-velmora-gold hover:text-velmora-gold transition-all duration-300"
                >
                  Continue Shopping
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

function CartItem({ item, onRemove, onUpdateQuantity }) {
  return (
    <div className="flex space-x-4">
      <Link
        to={`/product/${item.product.id}`}
        className="flex-shrink-0 w-20 h-20 overflow-hidden bg-velmora-light-gray"
        onClick={() => window.dispatchEvent(new CustomEvent('close-cart'))}
      >
        <img
          src={item.product.images[0]}
          alt={item.product.name}
          className="w-full h-full object-cover"
        />
      </Link>

      <div className="flex-1 space-y-2">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-serif text-sm tracking-widest uppercase text-velmora-soft-black">
              {item.product.name}
            </h3>
            <p className="text-xs text-velmora-warm-gray font-sans">
              {item.variant} · ${item.product.price}
            </p>
          </div>
          <button
            onClick={() => onRemove(item.product.id, item.variant)}
            className="text-velmora-warm-gray hover:text-velmora-charcoal transition-colors"
          >
            <X size={14} />
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => onUpdateQuantity(item.product.id, item.variant, item.quantity - 1)}
            className="p-1 border border-velmora-taupe hover:border-velmora-gold transition-colors"
          >
            <Minus size={12} />
          </button>
          <span className="w-8 text-center text-sm font-sans">{item.quantity}</span>
          <button
            onClick={() => onUpdateQuantity(item.product.id, item.variant, item.quantity + 1)}
            className="p-1 border border-velmora-taupe hover:border-velmora-gold transition-colors"
          >
            <Plus size={12} />
          </button>
        </div>
      </div>
    </div>
  );
}
