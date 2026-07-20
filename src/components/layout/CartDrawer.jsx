import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, closeCart, totalItems, totalPrice, removeItem, updateQuantity } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-sm bg-cream shadow-xl transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-beige">
            <div>
              <h2 className="font-serif text-xl font-medium text-warm-charcoal">Cart</h2>
              <p className="text-xs text-warm-gray mt-0.5">{totalItems} {totalItems === 1 ? 'item' : 'items'}</p>
            </div>
            <button
              onClick={closeCart}
              className="p-2 hover:text-gold transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-10 h-10 text-beige mb-4" />
                <p className="text-warm-gray text-sm">Your cart is empty</p>
                <p className="text-warm-gray/60 text-xs mt-1">Add some treasures to get started.</p>
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="mt-6 text-xs uppercase tracking-widest text-gold hover:text-warm-charcoal transition-colors border-b border-gold pb-0.5"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item.cartId} className="flex gap-4 pb-4 border-b border-beige/60">
                    <div className="w-16 h-16 flex-shrink-0 bg-cream-dark overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs uppercase tracking-widest font-medium text-warm-charcoal truncate">
                        {item.name}
                      </h4>
                      <p className="text-xs text-warm-gray mt-0.5">{item.variant}</p>
                      <p className="text-sm font-medium text-warm-charcoal mt-1">
                        ${item.price}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="p-1 border border-beige rounded-sm hover:border-gold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-medium w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="p-1 border border-beige rounded-sm hover:border-gold transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeItem(item.cartId)}
                          className="ml-auto text-xs text-warm-gray hover:text-warm-charcoal transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-beige px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-warm-gray">Subtotal</span>
                <span className="text-lg font-serif font-medium text-warm-charcoal">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-warm-gray/60">Shipping & taxes calculated at checkout</p>
              <Button className="w-full" variant="primary">
                Checkout
              </Button>
              <button
                onClick={closeCart}
                className="w-full text-center text-xs uppercase tracking-widest text-warm-gray hover:text-warm-charcoal transition-colors"
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