import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import { CURRENCY } from '@/config';

const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-black/5 flex items-center justify-between">
              <h2 className="text-lg font-serif tracking-widest uppercase">Your Cart</h2>
              <button onClick={() => setIsCartOpen(false)} className="hover:opacity-60 transition-opacity">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-muted-foreground">
                  <ShoppingBag className="w-12 h-12 mb-4 opacity-20" />
                  <p className="font-serif italic">Your cart is empty</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="mt-6 text-xs uppercase tracking-widest border-b border-primary pb-1 hover:opacity-60 transition-opacity"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-8">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-24 h-32 bg-muted flex-shrink-0 overflow-hidden">
                        <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-grow flex flex-col justify-between py-1">
                        <div>
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="text-xs font-semibold uppercase tracking-widest leading-snug">{item.name}</h3>
                            <button onClick={() => removeFromCart(item.id)} className="text-muted-foreground hover:text-primary">
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                          <p className="text-xs text-muted-foreground mb-4">{CURRENCY}{item.price}</p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center border border-black/10 rounded-full px-2 py-1">
                            <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:opacity-60">
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs w-6 text-center">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:opacity-60">
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-black/5 bg-white space-y-4">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs uppercase tracking-widest">Subtotal</span>
                  <span className="text-lg font-serif">{CURRENCY}{cartTotal.toFixed(2)}</span>
                </div>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest text-center italic">
                  Shipping and taxes calculated at checkout
                </p>
                <button className="w-full bg-primary text-white py-4 uppercase tracking-widest text-xs hover:bg-primary/90 transition-colors">
                  Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;

cat <<'EOF' > /workspace/my-app/src/components/shop/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { CURRENCY } from '@/config';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group">
      <div className="relative aspect-[3/4] mb-4 bg-muted overflow-hidden">
        {/* Main Image */}
        <Link to={`/product/${product.id}`}>
          <img
            data-strk-img-id={`p-main-${product.id}`}
            data-strk-img={`[p-desc-${product.id}] [p-name-${product.id}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          {/* Hover Image */}
          <img
            data-strk-img-id={`p-hover-${product.id}`}
            data-strk-img={`[p-desc-${product.id}] [p-name-${product.id}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src={product.images[1] || product.images[0]}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          />
        </Link>

        {/* Quick Add Button */}
        <button
          onClick={() => addToCart(product)}
          className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-sm py-3 flex items-center justify-center space-x-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10"
        >
          <ShoppingBag className="w-4 h-4" />
          <span className="text-[10px] uppercase tracking-widest font-semibold">Quick Add</span>
        </button>
      </div>

      <div className="text-center">
        <Link to={`/product/${product.id}`}>
          <h3 id={`p-name-${product.id}`} className="text-xs uppercase tracking-widest font-semibold mb-1 group-hover:text-accent transition-colors">
            {product.name}
          </h3>
        </Link>
        <p id={`p-desc-${product.id}`} className="hidden">{product.shortDescription}</p>
        <p className="text-sm font-serif">{CURRENCY}{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
