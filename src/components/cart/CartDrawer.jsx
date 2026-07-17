import { Link } from 'react-router-dom';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart, useCartDispatch } from '../../context/CartContext';
import products from '../../data/products';

export default function CartDrawer() {
  const { items, isOpen, subtotal } = useCart();
  const { toggleCart, removeItem, updateQuantity } = useCartDispatch();

  const getProduct = (id) => products.find((p) => p.id === id);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-[60] transition-opacity duration-400 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => toggleCart(false)}
      />

      {/* Drawer */}
      <div className={`fixed top-0 right-0 bottom-0 w-full max-w-md bg-brand-cream z-[70] shadow-2xl transform transition-transform duration-500 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between px-6 py-5 border-b border-brand-sand/50">
          <h2 className="font-serif text-xl tracking-wider text-brand-ink">
            Your Bag ({items.reduce((s, i) => s + i.quantity, 0)})
          </h2>
          <button onClick={() => toggleCart(false)} className="text-brand-smoke hover:text-brand-ink transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] gap-4 px-6">
            <p className="text-brand-smoke font-sans">Your bag is empty.</p>
            <Link to="/shop" onClick={() => toggleCart(false)} className="btn-outline text-xs">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-5">
              {items.map((item) => {
                const product = getProduct(item.productId);
                if (!product) return null;
                return (
                  <div key={`${item.productId}-${item.variant}`} className="flex gap-4 py-3 border-b border-brand-sand/30">
                    <div className="w-20 h-28 shrink-0 bg-brand-sand/40 flex items-center justify-center">
                      <span className="text-[10px] text-brand-smoke/50">Image</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <Link
                        to={`/product/${product.slug}`}
                        onClick={() => toggleCart(false)}
                        className="font-serif text-sm tracking-product uppercase text-brand-ink hover:text-brand-gold transition-colors"
                      >
                        {product.name}
                      </Link>
                      <p className="text-xs text-brand-smoke mt-1">{item.variant} tone</p>
                      <p className="font-sans text-sm font-medium text-brand-ink mt-2">${item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center border border-brand-sand">
                          <button onClick={() => updateQuantity(item.productId, item.variant, item.quantity - 1)} className="w-7 h-7 flex items-center justify-center text-brand-smoke hover:text-brand-ink transition-colors">
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-7 h-7 flex items-center justify-center text-xs font-medium text-brand-ink">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.productId, item.variant, item.quantity + 1)} className="w-7 h-7 flex items-center justify-center text-brand-smoke hover:text-brand-ink transition-colors">
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button onClick={() => removeItem(item.productId, item.variant)} className="ml-auto text-brand-smoke hover:text-red-500 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="border-t border-brand-sand/50 px-6 py-5">
              <div className="flex justify-between mb-1 font-sans text-sm">
                <span className="text-brand-smoke">Subtotal</span>
                <span className="font-medium text-brand-ink">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-brand-smoke/60 mb-4">Shipping & taxes calculated at checkout</p>
              <button className="btn-accent w-full text-sm">Checkout</button>
              <button onClick={() => toggleCart(false)} className="w-full mt-3 py-3 text-xs tracking-wider uppercase text-brand-smoke hover:text-brand-ink transition-colors">
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}