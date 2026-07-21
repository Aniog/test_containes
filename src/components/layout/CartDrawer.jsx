import React from 'react';
import { Link } from 'react-router-dom';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice, cn } from '@/lib/utils';
import Button from '@/components/ui/Button';

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 z-50 bg-espresso/40 backdrop-blur-sm transition-all duration-500',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 z-50 h-full w-full sm:w-[420px] bg-ivory shadow-elevated',
          'flex flex-col transition-transform duration-500 ease-silk',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-cream">
          <h2 className="font-serif text-xl tracking-wide">Your Bag</h2>
          <button
            onClick={closeCart}
            className="p-2 text-cocoa hover:text-espresso transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Content */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <div className="w-20 h-20 rounded-full bg-cream flex items-center justify-center mb-6">
              <ShoppingBag className="w-8 h-8 text-silk" strokeWidth={1.5} />
            </div>
            <p className="text-cocoa mb-6">Your bag is empty</p>
            <Button onClick={closeCart} variant="secondary">
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <div className="space-y-6">
                {items.map((item) => (
                  <div
                    key={`${item.productId}-${item.variant}`}
                    className="flex gap-4 pb-6 border-b border-cream last:border-0"
                  >
                    {/* Image */}
                    <div className="w-24 h-28 bg-cream flex-shrink-0 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-serif text-base">{item.name}</h3>
                        <button
                          onClick={() => removeItem(item.productId, item.variant)}
                          className="p-1 text-silk hover:text-espresso transition-colors"
                          aria-label={`Remove ${item.name} from cart`}
                        >
                          <X className="w-4 h-4" strokeWidth={1.5} />
                        </button>
                      </div>
                      
                      <p className="text-sm text-cocoa mb-2 capitalize">
                        {item.variant.replace('-', ' ')}
                      </p>
                      
                      <div className="flex items-center justify-between mt-auto">
                        {/* Quantity */}
                        <div className="flex items-center border border-silk/40">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.productId,
                                item.variant,
                                item.quantity - 1
                              )
                            }
                            className="p-2 text-cocoa hover:text-espresso transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" strokeWidth={2} />
                          </button>
                          <span className="w-8 text-center text-sm">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.productId,
                                item.variant,
                                item.quantity + 1
                              )
                            }
                            className="p-2 text-cocoa hover:text-espresso transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" strokeWidth={2} />
                          </button>
                        </div>

                        {/* Price */}
                        <p className="font-medium">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-cream px-6 py-6 bg-ivory">
              <div className="flex items-center justify-between mb-4">
                <span className="text-cocoa">Subtotal</span>
                <span className="font-serif text-xl">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-xs text-silk mb-4">
                Shipping and taxes calculated at checkout
              </p>
              <Button className="w-full" size="lg">
                Checkout
              </Button>
              <button
                onClick={closeCart}
                className="w-full mt-3 text-sm text-cocoa hover:text-espresso underline underline-offset-4 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
