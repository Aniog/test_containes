import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../data/products';

const CartDrawer = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } =
    useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-charcoal/50 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute top-0 right-0 h-full w-full max-w-md bg-cream shadow-hover flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-pebble">
          <div className="flex items-center gap-3">
            <ShoppingBag size={20} strokeWidth={1.5} className="text-champagne" />
            <span className="font-serif text-lg text-warm-black">Your Cart</span>
            <span className="text-sm text-stone">({cart.length})</span>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-charcoal/60 hover:text-champagne transition-colors"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag
                size={48}
                strokeWidth={1}
                className="text-pebble mb-4"
              />
              <p className="text-stone mb-2">Your cart is empty</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-champagne hover:text-antique-gold transition-colors text-sm underline underline-offset-4"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 pb-6 border-b border-pebble/50 last:border-0"
                >
                  {/* Image */}
                  <div className="w-20 h-24 bg-mist flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-serif text-sm tracking-wide text-warm-black uppercase">
                        {item.name}
                      </h4>
                      <p className="text-xs text-stone mt-1 capitalize">
                        {item.variant} Tone
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      {/* Quantity */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity - 1)
                          }
                          className="w-7 h-7 flex items-center justify-center border border-pebble hover:border-champagne transition-colors"
                        >
                          <Minus size={14} strokeWidth={1.5} />
                        </button>
                        <span className="text-sm w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity + 1)
                          }
                          className="w-7 h-7 flex items-center justify-center border border-pebble hover:border-champagne transition-colors"
                        >
                          <Plus size={14} strokeWidth={1.5} />
                        </button>
                      </div>

                      {/* Price & Remove */}
                      <div className="text-right">
                        <p className="text-sm font-medium text-warm-black">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-xs text-stone hover:text-champagne transition-colors mt-1"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-pebble bg-ivory">
            <div className="flex items-center justify-between mb-4">
              <span className="text-stone">Subtotal</span>
              <span className="font-serif text-lg text-warm-black">
                {formatPrice(cartTotal)}
              </span>
            </div>
            <p className="text-xs text-stone mb-4">
              Shipping and taxes calculated at checkout
            </p>
            <button className="w-full h-12 bg-champagne text-white font-medium text-sm uppercase tracking-wider hover:bg-antique-gold transition-colors duration-200">
              Checkout
            </button>
            <button
              onClick={() => setIsCartOpen(false)}
              className="w-full h-12 mt-2 border border-champagne text-champagne font-medium text-sm uppercase tracking-wider hover:bg-champagne hover:text-white transition-colors duration-200"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;