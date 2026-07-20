import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQty, subtotal, totalItems } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[70] bg-obsidian/40 cart-overlay"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-sm z-[80] bg-ivory flex flex-col transition-transform duration-400 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-ivory-dark">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} strokeWidth={1.5} className="text-obsidian" />
            <span className="font-sans text-xs uppercase tracking-widest text-obsidian font-medium">
              Your Bag {totalItems > 0 && `(${totalItems})`}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-obsidian hover:text-gold transition-colors bg-transparent border-0 p-1"
            aria-label="Close cart"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-taupe-light" />
              <p className="font-serif text-xl text-text-secondary font-light">Your bag is empty</p>
              <p className="font-sans text-xs text-taupe">
                Discover our collection of fine jewelry
              </p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-2 font-sans text-xs uppercase tracking-widest border border-obsidian text-obsidian px-6 py-3 hover:bg-obsidian hover:text-ivory transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4 pb-5 border-b border-ivory-dark last:border-0">
                  {/* Image placeholder */}
                  <div className="w-20 h-20 bg-ivory-dark flex-shrink-0 flex items-center justify-center">
                    <ShoppingBag size={20} strokeWidth={1} className="text-taupe-light" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-sm uppercase tracking-widest2 text-obsidian leading-tight">
                      {item.product.name}
                    </p>
                    <p className="font-sans text-xs text-taupe mt-0.5">{item.variant}</p>
                    <p className="font-sans text-sm font-semibold text-obsidian mt-1">
                      ${item.product.price}
                    </p>
                    {/* Qty controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQty(item.key, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center border border-ivory-dark text-obsidian hover:border-gold transition-colors bg-transparent"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={10} />
                      </button>
                      <span className="font-sans text-xs w-4 text-center text-obsidian">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQty(item.key, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center border border-ivory-dark text-obsidian hover:border-gold transition-colors bg-transparent"
                        aria-label="Increase quantity"
                      >
                        <Plus size={10} />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-auto text-taupe hover:text-obsidian transition-colors bg-transparent border-0 p-0 text-xs font-sans underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-ivory-dark">
            <div className="flex justify-between items-center mb-1">
              <span className="font-sans text-xs uppercase tracking-widest text-taupe">Subtotal</span>
              <span className="font-sans text-base font-semibold text-obsidian">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-taupe mb-4">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-obsidian text-ivory font-sans text-xs uppercase tracking-widest py-4 hover:bg-obsidian-soft transition-colors">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-2 border border-ivory-dark text-obsidian font-sans text-xs uppercase tracking-widest py-3 hover:border-obsidian transition-colors bg-transparent"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
