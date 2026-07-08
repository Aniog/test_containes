import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalItems, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-dark-900/40 z-50 animate-fade-in"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-cream-100 z-50 flex flex-col animate-slide-in-right shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-stone-300">
          <h2 className="font-serif text-xl tracking-wider">Your Bag ({totalItems})</h2>
          <button onClick={closeCart} className="text-dark-700 hover:text-dark-900 transition-colors" aria-label="Close cart">
            <X size={24} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-5">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-stone-400 mb-4" />
              <p className="font-serif text-xl text-dark-700 mb-2">Your bag is empty</p>
              <p className="body-sm text-dark-500">Discover pieces you'll treasure forever.</p>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  {/* Image */}
                  <div className="w-20 h-20 bg-stone-200 flex-shrink-0 overflow-hidden">
                    {item.imgSrc ? (
                      <img
                        src={item.imgSrc}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-stone-300" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="product-name text-xs mb-1">{item.name}</h3>
                    <p className="body-sm text-dark-500 mb-2">{item.variant}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-stone-300">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1.5 text-dark-600 hover:text-dark-900 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm font-medium text-dark-900">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1.5 text-dark-600 hover:text-dark-900 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="font-sans text-sm font-medium text-dark-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-dark-500 hover:text-dark-900 transition-colors"
                          aria-label="Remove item"
                        >
                          <X size={16} />
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
        {items.length > 0 && (
          <div className="border-t border-stone-300 p-5 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-sans text-sm uppercase tracking-wider text-dark-600">Subtotal</span>
              <span className="font-sans text-lg font-semibold text-dark-900">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-dark-500 text-center">Shipping & taxes calculated at checkout</p>
            <button className="btn-primary w-full">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
