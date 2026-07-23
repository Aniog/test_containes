import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = ({ open, onClose }) => {
  const { items, totalItems, totalPrice, removeItem, updateQuantity } = useCart();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E8E4DF]">
          <h2 className="serif-heading text-xl text-foreground">
            Your Bag ({totalItems})
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[#FAF8F5] rounded-sm transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-[#9B9590] mb-4" />
              <p className="serif-heading text-lg text-foreground mb-2">Your bag is empty</p>
              <p className="text-sm text-[#6B6560] mb-6">Discover pieces you'll love</p>
              <Link
                to="/shop"
                onClick={onClose}
                className="btn-primary"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item, index) => (
                <div key={`${item.productId}-${item.variant}-${index}`} className="flex gap-4">
                  {/* Image placeholder */}
                  <div className="w-24 h-32 bg-[#FAF8F5] flex-shrink-0 flex items-center justify-center">
                    <span className="text-[#9B9590] text-xs">Image</span>
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="product-name text-sm text-foreground">{item.name}</h3>
                      <p className="text-xs text-[#6B6560] mt-1">{item.variant} tone</p>
                      <p className="text-sm text-foreground mt-2">${item.price}</p>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#E8E4DF]">
                        <button
                          onClick={() => updateQuantity(item.productId, item.variant, item.quantity - 1)}
                          className="p-2 hover:bg-[#FAF8F5] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm text-foreground">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.productId, item.variant, item.quantity + 1)}
                          className="p-2 hover:bg-[#FAF8F5] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.productId, item.variant)}
                        className="text-xs text-[#6B6560] underline hover:text-foreground transition-colors"
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

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-[#E8E4DF] px-6 py-5">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-[#6B6560]">Subtotal</span>
              <span className="serif-heading text-lg text-foreground">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-[#6B6560] mb-4">Shipping & taxes calculated at checkout</p>
            <button className="btn-primary w-full">
              Checkout
            </button>
            <button
              onClick={onClose}
              className="w-full mt-3 text-sm text-[#6B6560] underline hover:text-foreground transition-colors py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
