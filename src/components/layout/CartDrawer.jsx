import { useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';

export function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalItems, totalPrice } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-charcoal/40 cart-overlay z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white-warm z-50 flex flex-col shadow-2xl transition-transform duration-400 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-divider">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-gold" />
            <span className="font-sans text-xs tracking-widest uppercase text-charcoal">
              Your Cart {totalItems > 0 && `(${totalItems})`}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-muted-warm hover:text-charcoal transition-colors duration-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag className="w-12 h-12 text-divider" />
              <p className="font-serif text-xl text-muted-warm">Your cart is empty</p>
              <p className="font-sans text-xs text-muted-warm tracking-wide">Discover our collection</p>
              <Button variant="outline" size="sm" onClick={() => setIsOpen(false)}>
                <Link to="/shop">Shop Now</Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={item.key} className="flex gap-4">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-cream rounded flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-cream to-divider flex items-center justify-center">
                      <span className="font-serif text-xs text-muted-warm text-center px-1 leading-tight">
                        {item.product.name.split(' ')[0]}
                      </span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <p className="product-name text-xs text-charcoal leading-tight mb-1 truncate">
                      {item.product.name}
                    </p>
                    <p className="font-sans text-xs text-muted-warm mb-2">{item.variant}</p>
                    <p className="font-serif text-sm text-gold">${item.product.price}</p>

                    {/* Quantity */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center border border-divider text-muted-warm hover:border-gold hover:text-gold transition-colors duration-200"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-sans text-xs text-charcoal w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center border border-divider text-muted-warm hover:border-gold hover:text-gold transition-colors duration-200"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeItem(item.key)}
                    className="text-divider hover:text-muted-warm transition-colors duration-200 self-start mt-1"
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
          <div className="px-6 py-5 border-t border-divider space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-sans text-xs tracking-widest uppercase text-muted-warm">Subtotal</span>
              <span className="font-serif text-lg text-charcoal">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-muted-warm text-center">Shipping & taxes calculated at checkout</p>
            <Button variant="primary" size="full">
              Proceed to Checkout
            </Button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full font-sans text-xs tracking-widest uppercase text-muted-warm hover:text-gold transition-colors duration-200 py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
