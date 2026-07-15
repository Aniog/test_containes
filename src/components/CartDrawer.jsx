import React from "react";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQuantity, subtotal } =
    useCart();

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-charcoal/40 backdrop-blur-sm z-[60] transition-opacity"
        onClick={closeCart}
      />
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-[70] shadow-2xl flex flex-col animate-slide-in-right">
        <div className="flex items-center justify-between px-6 py-5 border-b border-divider">
          <h2 className="font-serif text-xl tracking-widest uppercase">
            Your Bag
          </h2>
          <button
            onClick={closeCart}
            className="p-1 hover:text-gold transition-colors"
            aria-label="Close cart"
          >
            <X size={22} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-divider mb-4" />
              <p className="font-serif text-lg text-warmgray">
                Your bag is empty
              </p>
              <p className="text-sm text-warmgray mt-1">
                Discover pieces crafted to be treasured.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {items.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  <div className="w-20 h-24 bg-stonebg flex-shrink-0 overflow-hidden">
                    <img
                      src={`https://placehold.co/200x240/2C2420/C9A227?text=${encodeURIComponent(
                        item.name
                      )}`}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-0.5">
                    <div>
                      <h3 className="font-serif text-sm uppercase tracking-widest text-charcoal">
                        {item.name}
                      </h3>
                      <p className="text-xs text-warmgray mt-0.5 capitalize">
                        {item.variant} tone
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-divider">
                        <button
                          onClick={() =>
                            updateQuantity(item.cartId, item.quantity - 1)
                          }
                          className="px-2 py-1 hover:bg-stonebg transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-2 text-xs font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.cartId, item.quantity + 1)
                          }
                          className="px-2 py-1 hover:bg-stonebg transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <span className="font-sans text-sm font-medium">
                        ${item.price * item.quantity}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.cartId)}
                    className="self-start p-1 text-warmgray hover:text-charcoal transition-colors"
                    aria-label="Remove item"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-divider px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-sans text-sm uppercase tracking-widest text-warmgray">
                Subtotal
              </span>
              <span className="font-serif text-lg">${subtotal}</span>
            </div>
            <p className="text-xs text-warmgray">
              Shipping & taxes calculated at checkout.
            </p>
            <button className="w-full bg-charcoal text-cream font-sans text-xs uppercase tracking-widest py-4 hover:bg-gold transition-colors duration-300">
              Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full border border-charcoal text-charcoal font-sans text-xs uppercase tracking-widest py-3 hover:bg-charcoal hover:text-cream transition-colors duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
