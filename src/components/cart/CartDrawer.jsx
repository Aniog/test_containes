import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-charcoal/40 z-50 transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
          <h2 className="font-serif text-xl text-charcoal">Your Cart</h2>
          <button onClick={closeCart} className="text-charcoal hover:opacity-70 transition-opacity" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-sand mb-4" />
              <p className="text-taupe text-sm">Your cart is empty</p>
              <button
                onClick={closeCart}
                className="mt-4 text-sm text-gold underline underline-offset-4 hover:text-gold-light transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div key={item.key} className="flex gap-4 py-4 border-b border-sand last:border-0">
                  <div className="w-20 h-20 bg-linen flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm uppercase tracking-product text-charcoal truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-taupe mt-0.5 capitalize">{item.variant} tone</p>
                    <p className="text-sm text-charcoal font-medium mt-1">${item.product.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 border border-sand flex items-center justify-center text-charcoal hover:border-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm text-charcoal w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 border border-sand flex items-center justify-center text-charcoal hover:border-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.key)}
                    className="text-taupe hover:text-charcoal transition-colors self-start"
                    aria-label="Remove item"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-sand">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-taupe">Subtotal</span>
              <span className="text-lg font-serif text-charcoal">${totalPrice.toFixed(2)}</span>
            </div>
            <button className="w-full bg-gold text-cream py-3.5 text-sm uppercase tracking-cta font-medium hover:bg-gold-light transition-colors">
              Checkout
            </button>
            <p className="text-xs text-taupe text-center mt-3">Free shipping on orders over $75</p>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
