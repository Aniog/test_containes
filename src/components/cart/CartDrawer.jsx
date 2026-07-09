import { useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../lib/utils';

export default function CartDrawer({ isOpen, onClose }) {
  const { items, removeItem, updateQuantity, totalItems, totalPrice } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const itemList = Object.entries(items);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-velvet-950/40 backdrop-blur-sm z-[70] transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-full max-w-md bg-cream z-[80] shadow-lifted transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-velvet-800" />
            <h2 className="font-serif text-xl font-semibold text-velvet-900">
              Your Cart
            </h2>
            <span className="text-sm text-muted-foreground">
              ({totalItems} {totalItems === 1 ? 'item' : 'items'})
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-velvet-600 hover:text-velvet-900 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto p-6" style={{ maxHeight: 'calc(100vh - 240px)' }}>
          {itemList.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-velvet-300 mb-4" />
              <p className="font-serif text-lg text-velvet-700 mb-2">
                Your cart is empty
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Discover our collection of handcrafted jewelry.
              </p>
              <button
                onClick={onClose}
                className="velmora-btn-primary"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {itemList.map(([key, item]) => (
                <div key={key} className="flex gap-4 pb-6 border-b border-border last:border-0">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-velvet-100 rounded-sm flex-shrink-0 overflow-hidden">
                    <img
                      src={`https://placehold.co/160x160/2c2824/d4a03a?text=${encodeURIComponent(item.product.name.split(' ')[0])}`}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm font-semibold text-velvet-900 uppercase tracking-wider">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {item.variant}
                    </p>
                    <p className="font-sans text-sm font-semibold text-velvet-800 mt-1">
                      {formatPrice(item.product.price)}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <div className="flex items-center border border-border rounded-sm">
                        <button
                          onClick={() => updateQuantity(key, item.quantity - 1)}
                          className="p-1.5 text-velvet-600 hover:text-velvet-900 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium text-velvet-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(key, item.quantity + 1)}
                          className="p-1.5 text-velvet-600 hover:text-velvet-900 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(key)}
                        className="text-xs text-muted-foreground hover:text-red-600 transition-colors underline underline-offset-2"
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

        {/* Footer with total and checkout */}
        {itemList.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 bg-cream border-t border-border p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Subtotal</span>
              <span className="font-sans text-lg font-semibold text-velvet-900">
                {formatPrice(totalPrice)}
              </span>
            </div>
            <p className="text-xs text-muted-foreground mb-4">
              Shipping & taxes calculated at checkout
            </p>
            <button className="velmora-btn-primary w-full">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
