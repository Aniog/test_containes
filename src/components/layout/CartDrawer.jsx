import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import products from '@/data/products';

function findProduct(productId) {
  return products.find((p) => p.id === productId);
}

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, itemCount } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-espresso/40 z-[60] transition-opacity duration-400 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-cream z-[70] shadow-2xl transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-cream-200">
            <h2 className="font-serif text-lg tracking-widest uppercase text-espresso">
              Your Bag ({itemCount})
            </h2>
            <button onClick={closeCart} className="p-2 text-warm hover:text-espresso transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-warm">
                <ShoppingBag className="w-12 h-12 mb-4 opacity-30" />
                <p className="text-sm">Your bag is empty.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => {
                  const product = findProduct(item.productId);
                  if (!product) return null;
                  return (
                    <div key={`${item.productId}-${item.color}`} className="flex gap-4">
                      <div className="w-20 h-20 bg-sand-100 flex-shrink-0 flex items-center justify-center">
                        <span className="text-warm-50 text-xs">IMG</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-serif text-xs tracking-widest uppercase text-espresso truncate">
                          {product.name}
                        </h3>
                        <p className="text-xs text-warm mt-0.5 capitalize">{item.color} Tone</p>
                        <p className="text-sm font-medium text-espresso mt-1">${item.price}</p>
                        <div className="flex items-center gap-3 mt-3">
                          <button
                            onClick={() => updateQuantity(item.productId, item.color, item.quantity - 1)}
                            className="w-7 h-7 flex items-center justify-center border border-cream-200 text-warm hover:text-espresso hover:border-warm transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-sm w-6 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.productId, item.color, item.quantity + 1)}
                            className="w-7 h-7 flex items-center justify-center border border-cream-200 text-warm hover:text-espresso hover:border-warm transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => removeItem(item.productId, item.color)}
                            className="ml-auto text-xs text-warm underline hover:text-espresso transition-colors"
                          >
                            Remove
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
          {items.length > 0 && (
            <div className="border-t border-cream-200 px-6 py-5 space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-warm">Subtotal</span>
                <span className="font-medium text-espresso">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-warm-100">Shipping & taxes calculated at checkout.</p>
              <button className="w-full bg-gold text-cream py-3 text-xs uppercase tracking-super font-medium hover:bg-gold-500 transition-colors duration-300">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
