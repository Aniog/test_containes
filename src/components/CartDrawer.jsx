import { useCart } from "@/context/CartContext";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeFromCart, updateQuantity, subtotal, totalItems } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-charcoal/40 backdrop-blur-sm z-50"
            onClick={closeCart}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-cream z-50 shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-divider">
              <h2 className="serif text-2xl font-medium tracking-wide">Your Cart</h2>
              <button onClick={closeCart} className="p-2 hover:bg-cream-dark rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
                <ShoppingBag size={48} className="text-warm-gray-light mb-4" strokeWidth={1} />
                <p className="serif text-xl text-warm-gray mb-2">Your cart is empty</p>
                <p className="text-sm text-warm-gray-light">Discover our collection and find your perfect piece.</p>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5">
                  {items.map((item) => (
                    <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                      <div className="w-20 h-20 bg-cream-dark rounded overflow-hidden flex-shrink-0">
                        <img src={item.image_url} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="serif text-sm font-medium uppercase tracking-wider truncate">{item.name}</h3>
                        {item.variant && <p className="text-xs text-warm-gray mt-0.5 capitalize">{item.variant}</p>}
                        <p className="text-sm font-medium mt-1">${item.price}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="w-7 h-7 flex items-center justify-center border border-divider rounded hover:bg-cream-dark transition-colors"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="text-sm w-5 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="w-7 h-7 flex items-center justify-center border border-divider rounded hover:bg-cream-dark transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id, item.variant)}
                            className="ml-auto text-xs text-warm-gray hover:text-charcoal underline underline-offset-2"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-divider px-6 py-5 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-warm-gray">Subtotal ({totalItems} item{totalItems !== 1 ? "s" : ""})</span>
                    <span className="serif text-xl font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <p className="text-xs text-warm-gray-light">Shipping calculated at checkout.</p>
                  <button className="w-full bg-charcoal text-cream py-3.5 text-sm font-medium uppercase tracking-widest hover:bg-charcoal-light transition-colors">
                    Checkout
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
