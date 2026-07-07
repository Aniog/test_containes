import { Link } from 'react-router-dom';
import { Minus, Plus, ArrowLeft, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Cart = () => {
  const { items, removeItem, updateQuantity, subtotal, itemCount } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <ShoppingBag className="w-20 h-20 text-taupe-light mx-auto mb-6" strokeWidth={1} />
          <h1 className="font-serif text-3xl text-espresso-900 mb-4">Your Cart is Empty</h1>
          <p className="text-taupe mb-8">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Link
            to="/shop"
            className="inline-block px-8 py-4 bg-gold text-white text-sm uppercase tracking-wider hover:bg-gold-hover transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl text-espresso-900 text-center mb-12">
          Your Cart ({itemCount})
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-6 pb-6 border-b border-border"
                >
                  {/* Image */}
                  <Link to={`/product/${item.id}`} className="flex-shrink-0">
                    <div className="w-32 h-40 bg-cream-100 rounded-lg overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover hover:opacity-80 transition-opacity"
                      />
                    </div>
                  </Link>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <Link
                          to={`/product/${item.id}`}
                          className="product-name text-espresso-900 hover:text-gold transition-colors"
                        >
                          {item.name}
                        </Link>
                        <p className="text-sm text-taupe mt-1">{item.variant}</p>
                      </div>
                      <p className="text-lg font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>

                    <p className="text-sm text-taupe mt-1">${item.price.toFixed(2)} each</p>

                    {/* Quantity & Remove */}
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-border rounded">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-3 text-taupe hover:text-espresso-900 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-4 h-4" strokeWidth={2} />
                        </button>
                        <span className="px-4 text-sm min-w-[3rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-3 text-taupe hover:text-espresso-900 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-4 h-4" strokeWidth={2} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-sm text-taupe hover:text-espresso-900 transition-colors underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Continue Shopping */}
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 mt-8 text-sm text-taupe hover:text-gold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
              Continue Shopping
            </Link>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-cream-100 rounded-lg p-8 sticky top-28">
              <h2 className="font-serif text-xl text-espresso-900 mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-taupe">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-taupe">
                  <span>Shipping</span>
                  <span className="text-gold">Free</span>
                </div>
                <div className="flex justify-between text-taupe">
                  <span>Tax</span>
                  <span>Calculated at checkout</span>
                </div>
              </div>

              <div className="border-t border-border pt-4 mb-6">
                <div className="flex justify-between text-lg font-medium">
                  <span>Estimated Total</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full py-4 bg-gold text-white text-sm uppercase tracking-wider hover:bg-gold-hover transition-colors mb-4">
                Proceed to Checkout
              </button>

              <div className="flex items-center justify-center gap-4 mt-6">
                <span className="text-xs text-taupe">Secure checkout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
