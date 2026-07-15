import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';
import strkImgConfig from '@/strk-img-config.json';

function getImageUrl(imageId) {
  if (!imageId) return null;
  const entry = strkImgConfig[imageId];
  if (!entry || !entry.results?.length) return null;
  const picked = entry.picked
    ? entry.results.find((r) => String(r.id) === String(entry.picked))
    : null;
  return picked?.url || entry.results[0]?.url || null;
}

export default function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQty, subtotal } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 bg-black/30 z-[70] transition-opacity duration-300',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={closeCart}
      />
      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-full max-w-md bg-cream z-[80] shadow-2xl transform transition-transform duration-300 flex flex-col',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-hairline">
          <h2 className="font-serif text-xl text-text-primary">Your Cart</h2>
          <button onClick={closeCart} className="p-2 text-text-primary hover:text-gold transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-text-muted">
              <ShoppingBagEmpty className="w-12 h-12 mb-4" />
              <p className="font-sans text-sm">Your cart is empty</p>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {items.map((item) => {
                const imageUrl = getImageUrl(item.imageId);
                return (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-20 bg-white border border-hairline rounded-sm flex-shrink-0 overflow-hidden flex items-center justify-center">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="font-serif text-[10px] uppercase tracking-widest text-text-muted">Velmora</span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-serif text-sm uppercase tracking-widest-plus text-text-primary truncate">
                          {item.name}
                        </p>
                        <p className="font-sans text-xs text-text-muted mt-0.5 capitalize">
                          {item.variant}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="p-1 text-text-muted hover:text-red-500 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-hairline rounded-sm">
                        <button
                          onClick={() => updateQty(item.id, item.variant, item.qty - 1)}
                          className="px-2 py-1 text-text-secondary hover:text-text-primary transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 font-sans text-xs text-text-primary min-w-[1.5rem] text-center">
                          {item.qty}
                        </span>
                        <button
                          onClick={() => updateQty(item.id, item.variant, item.qty + 1)}
                          className="px-2 py-1 text-text-secondary hover:text-text-primary transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="font-sans text-sm font-medium text-text-primary">
                        ${item.price * item.qty}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-hairline px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-sm text-text-secondary">Subtotal</span>
              <span className="font-sans text-base font-medium text-text-primary">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <button className="w-full bg-gold text-white font-sans text-xs uppercase tracking-widest py-3.5 hover:bg-gold-hover transition-colors">
              Checkout
            </button>
            <p className="text-center font-sans text-[11px] text-text-muted mt-3">
              Shipping & taxes calculated at checkout
            </p>
          </div>
        )}
      </div>
    </>
  );
}

function ShoppingBagEmpty({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}
