import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { cart, isCartOpen, closeCart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (!isCartOpen) return null;

  const total = getCartTotal();

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal/50 z-50 transition-opacity duration-300"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-serif text-xl text-charcoal">Your Cart</h2>
          <button
            onClick={closeCart}
            className="text-warm-gray hover:text-charcoal transition-colors duration-300"
            aria-label="Close cart"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} strokeWidth={1} className="text-warm-gray mb-4" />
              <p className="font-serif text-lg text-charcoal mb-2">Your cart is empty</p>
              <p className="font-sans text-sm text-warm-gray">
                Discover our collection and find your perfect piece.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="mt-6 btn-primary"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 pb-6 border-b border-border"
                >
                  {/* Image */}
                  <div className="w-20 h-24 bg-ivory flex-shrink-0">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <h3 className="product-name text-charcoal">{item.name}</h3>
                    <p className="font-sans text-sm text-warm-gray mt-1 capitalize">
                      {item.variant} Tone
                    </p>
                    <p className="font-sans text-sm text-charcoal mt-2">
                      ${item.price}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-border rounded-sm">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-2 text-warm-gray hover:text-charcoal transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} strokeWidth={2} />
                        </button>
                        <span className="px-3 font-sans text-sm text-charcoal">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-2 text-warm-gray hover:text-charcoal transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} strokeWidth={2} />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="font-sans text-xs text-warm-gray hover:text-charcoal transition-colors underline"
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
        {cart.length > 0 && (
          <div className="p-6 border-t border-border bg-ivory">
            <div className="flex justify-between items-center mb-4">
              <span className="font-sans text-warm-gray">Subtotal</span>
              <span className="font-serif text-xl text-charcoal">${total.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-warm-gray mb-4">
              Shipping and taxes calculated at checkout.
            </p>
            <button className="w-full btn-primary mb-3">
              Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full btn-secondary"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;