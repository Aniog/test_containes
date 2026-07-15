import { useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';

function CartItem({ item, updateQuantity, removeItem }) {
  const product = products.find((p) => p.id === item.productId);
  if (!product) return null;

  return (
    <div className="flex gap-4 py-5 border-b border-charcoal-100">
      <div className="w-[72px] h-[96px] bg-charcoal-100 rounded-sm flex-shrink-0 overflow-hidden">
        <div
          className="w-full h-full bg-charcoal-200"
          data-strk-bg-id={`cart-img-${item.productId}`}
          data-strk-bg={`[cart-product-name-${item.productId}] velmora gold jewelry`}
          data-strk-bg-ratio="3x4"
          data-strk-bg-width="200"
        />
      </div>
      <div className="flex-1 min-w-0">
        <p
          id={`cart-product-name-${item.productId}`}
          className="font-serif text-sm font-semibold tracking-widest uppercase text-charcoal-900"
        >
          {product.name}
        </p>
        <p className="text-xs text-charcoal-500 mt-1">{item.variant} tone</p>
        <p className="text-sm font-medium text-charcoal-800 mt-1">${item.price.toFixed(2)}</p>
        <div className="flex items-center gap-3 mt-2">
          <button
            onClick={() => updateQuantity({ productId: item.productId, variant: item.variant, quantity: item.quantity - 1 })}
            className="w-7 h-7 border border-charcoal-200 flex items-center justify-center text-charcoal-600 hover:border-charcoal-500 transition-colors"
          >
            <Minus className="w-3 h-3" />
          </button>
          <span className="text-sm text-charcoal-800 w-5 text-center">{item.quantity}</span>
          <button
            onClick={() => updateQuantity({ productId: item.productId, variant: item.variant, quantity: item.quantity + 1 })}
            className="w-7 h-7 border border-charcoal-200 flex items-center justify-center text-charcoal-600 hover:border-charcoal-500 transition-colors"
          >
            <Plus className="w-3 h-3" />
          </button>
          <button
            onClick={() => removeItem({ productId: item.productId, variant: item.variant })}
            className="ml-auto text-xs text-charcoal-400 hover:text-charcoal-700 underline underline-offset-2"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CartDrawer() {
  const { items, isOpen, closeCart, subtotal, itemCount, updateQuantity, removeItem } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-charcoal-950/40 z-[100]" onClick={closeCart} />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-[420px] bg-cream-50 z-[110] animate-slide-in-right shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-charcoal-100">
          <h3 className="font-serif text-xl font-semibold tracking-wider text-charcoal-900">
            Your Bag ({itemCount})
          </h3>
          <button onClick={closeCart} className="p-2 text-charcoal-600 hover:text-charcoal-900" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-charcoal-300 mb-4" />
              <p className="text-charcoal-600 font-serif text-lg">Your bag is empty</p>
              <p className="text-sm text-charcoal-400 mt-1">Discover pieces you&apos;ll treasure forever.</p>
              <button onClick={closeCart} className="btn-outline mt-6">Continue Shopping</button>
            </div>
          ) : (
            items.map((item) => (
              <CartItem
                key={`${item.productId}-${item.variant}`}
                item={item}
                updateQuantity={updateQuantity}
                removeItem={removeItem}
              />
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-charcoal-100">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-charcoal-600">Subtotal</span>
              <span className="font-serif text-lg font-semibold text-charcoal-900">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-[11px] text-charcoal-400 mb-4">Shipping & taxes calculated at checkout.</p>
            <button className="btn-primary w-full">Checkout</button>
          </div>
        )}
      </div>
    </>
  );
}
