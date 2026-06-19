import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ShoppingBag, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart, useCartDispatch } from '@/context/CartContext';
import { products } from '@/data/products';

export default function CartDrawer({ open, onClose }) {
  const { items, subtotal, itemCount } = useCart();
  const dispatch = useCartDispatch();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const cartProducts = items.map((item) => {
    const product = products.find((p) => p.id === item.productId);
    return { ...item, product };
  }).filter((i) => i.product);

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-[60] animate-fade-in"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-velvet-50 z-[70] shadow-2xl
          transform transition-transform duration-400 ease-out flex flex-col
          ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velvet-200">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
            <span className="font-serif text-lg tracking-wide">Cart</span>
            {itemCount > 0 && (
              <span className="text-sm text-velvet-500">({itemCount})</span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-velvet-100 rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cartProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-velvet-300 mb-4" strokeWidth={1} />
              <p className="text-velvet-500 text-sm">Your cart is empty</p>
              <button
                onClick={onClose}
                className="mt-4 text-sm text-gold-600 hover:text-gold-700 underline underline-offset-4"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {cartProducts.map((item) => (
                <div key={`${item.productId}-${item.variant}`} className="flex gap-4 animate-fade-in">
                  {/* Image placeholder */}
                  <div className="w-20 h-24 bg-velvet-100 rounded-sm flex-shrink-0 overflow-hidden">
                    <div
                      data-strk-img-id={`cart-${item.productId}`}
                      data-strk-img={`[cart-name-${item.productId}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="200"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <Link
                        to={`/product/${item.productId}`}
                        onClick={onClose}
                        className="product-name text-xs block hover:text-gold-600 transition-colors"
                        id={`cart-name-${item.productId}`}
                      >
                        {item.product?.name}
                      </Link>
                      <p className="text-xs text-velvet-500 mt-0.5 capitalize">{item.variant} tone</p>
                      <p className="text-sm text-velvet-800 mt-1">${item.product?.price}</p>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-velvet-200 rounded-sm">
                        <button
                          className="p-1.5 hover:bg-velvet-100 transition-colors"
                          onClick={() =>
                            dispatch({ type: 'UPDATE_QTY', productId: item.productId, variant: item.variant, quantity: item.quantity - 1 })
                          }
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-xs font-medium">{item.quantity}</span>
                        <button
                          className="p-1.5 hover:bg-velvet-100 transition-colors"
                          onClick={() =>
                            dispatch({ type: 'UPDATE_QTY', productId: item.productId, variant: item.variant, quantity: item.quantity + 1 })
                          }
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        className="p-1.5 text-velvet-400 hover:text-red-500 transition-colors"
                        onClick={() =>
                          dispatch({ type: 'REMOVE', productId: item.productId, variant: item.variant })
                        }
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartProducts.length > 0 && (
          <div className="px-6 py-5 border-t border-velvet-200">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-velvet-600">Subtotal</span>
              <span className="font-serif text-lg tracking-wide">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-velvet-400 mb-4">Shipping & taxes calculated at checkout</p>
            <button className="btn-primary w-full mb-3">
              Checkout
            </button>
            <button
              onClick={onClose}
              className="w-full text-center text-sm text-velvet-500 hover:text-velvet-700 transition-colors underline-offset-4 hover:underline"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
