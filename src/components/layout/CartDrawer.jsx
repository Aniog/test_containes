import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-charcoal/40 backdrop-blur-sm z-[60] transition-opacity duration-300"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-[70] shadow-2xl flex flex-col transition-transform duration-300">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="font-serif text-xl font-medium">Your Cart</h2>
          <button
            onClick={closeCart}
            className="p-2 text-charcoal hover:text-gold transition-colors bg-transparent border-none"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-muted-fg mb-4" />
              <p className="font-serif text-lg text-charcoal">Your cart is empty</p>
              <p className="text-sm text-muted-fg mt-2">Add something beautiful to get started.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={item.key} className="flex gap-4">
                  <div className="w-20 h-20 bg-muted rounded-sm flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xs font-sans font-medium uppercase tracking-product text-charcoal truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-muted-fg mt-1 capitalize">{item.variant} tone</p>
                    <p className="text-sm font-medium text-charcoal mt-1">${item.product.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-border rounded-sm text-charcoal hover:border-gold transition-colors bg-transparent"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium text-charcoal">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-border rounded-sm text-charcoal hover:border-gold transition-colors bg-transparent"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.key)}
                    className="p-1 text-muted-fg hover:text-charcoal transition-colors self-start bg-transparent border-none"
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
          <div className="px-6 py-5 border-t border-border">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-muted-fg">Subtotal</span>
              <span className="text-lg font-serif font-medium text-charcoal">${subtotal.toFixed(2)}</span>
            </div>
            <button className="w-full bg-gold text-white text-sm font-medium uppercase tracking-widest py-4 hover:bg-gold-light transition-colors duration-300 rounded-sm border-none cursor-pointer">
              Checkout
            </button>
            <p className="text-xs text-muted-fg text-center mt-3">Free shipping on orders over $75</p>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
