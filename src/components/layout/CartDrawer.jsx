import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, removeItem, updateQty, total, count, isOpen, setIsOpen } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-velmora-obsidian/60 z-50 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-velmora-linen z-50 flex flex-col animate-drawerIn shadow-[−8px_0_40px_rgba(26,23,20,0.2)]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-stone/20">
          <div className="flex items-center gap-3">
            <ShoppingBag size={18} className="text-velmora-obsidian" />
            <span className="font-cormorant text-lg tracking-widest text-velmora-obsidian">
              Your Cart
            </span>
            {count > 0 && (
              <span className="font-inter text-xs text-velmora-mist">({count} items)</span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-velmora-mist hover:text-velmora-obsidian transition-colors duration-200"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} className="text-velmora-sand" />
              <p className="font-cormorant text-xl text-velmora-mist">Your cart is empty</p>
              <p className="font-inter text-xs text-velmora-mist">Discover our collection below</p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-2 font-inter text-xs uppercase tracking-widest border border-velmora-obsidian text-velmora-obsidian px-6 py-3 hover:bg-velmora-obsidian hover:text-velmora-text-light transition-all duration-300"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {items.map(item => (
                <div key={item.key} className="flex gap-4 py-4 border-b border-velmora-stone/15">
                  {/* Product thumbnail — elegant branded placeholder */}
                  <Link
                    to={`/product/${item.product.slug}`}
                    onClick={() => setIsOpen(false)}
                    className="w-20 h-20 bg-velmora-cream flex-shrink-0 overflow-hidden block"
                  >
                    <div className="w-full h-full bg-gradient-to-br from-velmora-cream via-velmora-sand to-velmora-cream flex items-center justify-center">
                      <span className="font-cormorant text-2xl font-light text-velmora-gold-dark select-none">
                        {item.product.name.charAt(0)}
                      </span>
                    </div>
                  </Link>

                  <div className="flex-1 min-w-0">
                    <p
                      id={`cart-name-${item.product.id}`}
                      className="font-cormorant text-sm uppercase tracking-widest text-velmora-obsidian leading-tight"
                    >
                      {item.product.name}
                    </p>
                    {item.variant && (
                      <p className="font-inter text-xs text-velmora-mist mt-0.5">{item.variant}</p>
                    )}
                    <p className="font-inter text-sm font-medium text-velmora-obsidian mt-1">
                      ${item.product.price}
                    </p>

                    {/* Qty controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQty(item.key, item.qty - 1)}
                        className="w-6 h-6 border border-velmora-stone/40 flex items-center justify-center text-velmora-mist hover:border-velmora-obsidian hover:text-velmora-obsidian transition-colors duration-200"
                      >
                        <Minus size={10} />
                      </button>
                      <span className="font-inter text-xs w-4 text-center text-velmora-obsidian">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.key, item.qty + 1)}
                        className="w-6 h-6 border border-velmora-stone/40 flex items-center justify-center text-velmora-mist hover:border-velmora-obsidian hover:text-velmora-obsidian transition-colors duration-200"
                      >
                        <Plus size={10} />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-2 font-inter text-xs text-velmora-mist hover:text-velmora-obsidian underline transition-colors duration-200"
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
          <div className="px-6 py-5 border-t border-velmora-stone/20 bg-velmora-cream">
            <div className="flex justify-between items-center mb-1">
              <span className="font-inter text-xs uppercase tracking-widest text-velmora-mist">Subtotal</span>
              <span className="font-cormorant text-xl text-velmora-obsidian">${total.toFixed(2)}</span>
            </div>
            <p className="font-inter text-xs text-velmora-mist mb-4">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-velmora-obsidian text-velmora-text-light font-inter text-xs uppercase tracking-widest py-4 hover:bg-velmora-charcoal transition-all duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-2 border border-velmora-stone/40 text-velmora-mist font-inter text-xs uppercase tracking-widest py-3 hover:border-velmora-obsidian hover:text-velmora-obsidian transition-all duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
