import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const {
    items,
    drawerOpen,
    closeDrawer,
    removeItem,
    updateQuantity,
    totalPrice,
  } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-[60] transition-opacity duration-300 ${
          drawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl transform transition-transform duration-300 ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#E8E2D8]">
            <h2 className="font-serif text-xl font-semibold">Your Cart</h2>
            <button onClick={closeDrawer} className="text-[#6B6B6B] hover:text-[#1A1A1A]">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-[#E8E2D8] mb-4" />
                <p className="text-[#6B6B6B]">Your cart is empty</p>
                <Link
                  to="/shop"
                  className="mt-4 text-sm text-[#C8A45C] hover:underline tracking-widest uppercase"
                  onClick={closeDrawer}
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="space-y-5">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 pb-5 border-b border-[#E8E2D8] last:border-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xs tracking-widest uppercase font-medium truncate">
                        {item.name}
                      </h3>
                      <p className="text-xs text-[#6B6B6B] mt-1">{item.variant}</p>
                      <p className="text-sm font-medium mt-1">${item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="w-7 h-7 border border-[#E8E2D8] flex items-center justify-center hover:bg-[#FBF8F4]"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm w-5 text-center">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="w-7 h-7 border border-[#E8E2D8] flex items-center justify-center hover:bg-[#FBF8F4]"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="ml-auto text-xs text-[#999999] hover:text-[#1A1A1A]"
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
            <div className="border-t border-[#E8E2D8] px-6 py-5 space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#6B6B6B]">Subtotal</span>
                <span className="font-medium">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-[#999999]">Shipping & taxes calculated at checkout</p>
              <button className="w-full bg-[#C8A45C] text-white py-3 uppercase tracking-widest text-sm hover:bg-[#B8944E] transition-colors">
                Checkout
              </button>
              <button
                onClick={closeDrawer}
                className="w-full text-sm text-[#6B6B6B] hover:text-[#1A1A1A] tracking-wider"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}