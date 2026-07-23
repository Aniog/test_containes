import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';

export default function CartDrawer({ isOpen, onClose }) {
  const { cart, removeItem, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-stone-50 shadow-2xl slide-up flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-stone-200">
          <h2 className="serif-heading text-2xl">Your Bag</h2>
          <button onClick={onClose} className="p-2 hover:text-amber-700 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-stone-500">
              <p className="serif-heading text-xl mb-2">Your bag is empty</p>
              <p className="text-sm">Discover pieces you'll love</p>
            </div>
          ) : (
            <div className="p-6 space-y-6">
              {cart.map((item, index) => {
                const product = products.find((p) => p.id === item.productId);
                if (!product) return null;
                const variant = product.variants.find((v) => v.id === item.variant);

                return (
                  <div key={index} className="flex gap-4">
                    <div className="w-20 h-24 bg-stone-200 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h3 className="product-name text-sm text-stone-900 truncate">
                        {product.name}
                      </h3>
                      <p className="text-xs text-stone-500 mt-1">
                        {variant?.name || item.variant}
                      </p>
                      <p className="text-sm font-medium mt-1">${product.price}</p>

                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(index, item.quantity - 1)}
                          className="p-1 hover:text-amber-700 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-sm w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(index, item.quantity + 1)}
                          className="p-1 hover:text-amber-700 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                        <button
                          onClick={() => removeItem(index)}
                          className="ml-auto p-1 text-stone-400 hover:text-red-500 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-stone-200 p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-stone-600">Subtotal</span>
              <span className="serif-heading text-xl">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-stone-500">Shipping & taxes calculated at checkout</p>
            <button className="btn-primary w-full">
              Proceed to Checkout
            </button>
            <button
              onClick={onClose}
              className="btn-outline w-full"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
