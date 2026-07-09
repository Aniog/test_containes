import { useRef, useEffect } from 'react';
import { useCart } from '../../contexts/CartContext';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem, totalPrice } = useCart();
  const drawerRef = useRef(null);

  if (!isOpen) return null;

  return (
    <div ref={drawerRef}>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-background shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <h2 className="font-serif text-2xl">Your Cart</h2>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 hover:text-accent transition-colors"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-8">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <ShoppingBag size={48} strokeWidth={1} className="text-muted-foreground/30" />
              <p className="text-muted-foreground">Your cart is currently empty.</p>
              <button 
                onClick={() => setIsOpen(false)}
                className="btn-accent px-8 py-3 uppercase tracking-widest text-sm"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              {items.map((item) => {
                const imgData = strkImgConfig[item.images.primary.id];
                const resolvedData = imgData?.reusedFrom ? strkImgConfig[imgData.reusedFrom] : imgData;
                const pickedId = imgData?.picked || resolvedData?.picked;
                const imgUrl = resolvedData?.results?.find(r => r.id === pickedId)?.url || resolvedData?.results?.[0]?.url || "";
                
                return (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  {/* Image */}
                  <div className="w-24 h-32 bg-secondary rounded-sm overflow-hidden flex-shrink-0">
                    {imgUrl && (
                      <img 
                        src={imgUrl}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  
                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <Link 
                          to={`/product/${item.id}`} 
                          onClick={() => setIsOpen(false)}
                          className="font-serif text-lg leading-tight hover:text-accent transition-colors pr-4"
                        >
                          {item.name}
                        </Link>
                        <button 
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-muted-foreground hover:text-destructive transition-colors p-1"
                        >
                          <X size={16} />
                        </button>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Color: {item.variant}</p>
                      <p className="text-accent mt-2">${item.price}</p>
                    </div>

                    {/* Quantity */}
                    <div className="flex items-center gap-4 mt-4">
                      <div className="flex items-center border border-border rounded-sm">
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-2 hover:bg-secondary transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-2 hover:bg-secondary transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )})}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border p-6 bg-background space-y-4">
            <div className="flex justify-between text-lg font-serif">
              <span>Subtotal</span>
              <span>${totalPrice}</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-primary text-primary-foreground py-4 px-8 uppercase tracking-widest text-sm hover:bg-accent transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}