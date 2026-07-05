import React from 'react';
import { useCart } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { items, removeItem, updateQuantity, getTotal } = useCart();
  const total = getTotal();

  if (items.length === 0) {
    return (
      <div className="pt-48 pb-24 px-6 max-w-7xl mx-auto text-center space-y-8 min-h-screen">
        <ShoppingBag size={48} className="mx-auto text-muted-foreground" />
        <h1 className="text-4xl font-serif italic text-primary/80">Your cart is empty.</h1>
        <p className="text-muted-foreground font-light max-w-md mx-auto">
          It looks like you haven't added any pieces to your treasure chest yet.
        </p>
        <div className="pt-6">
          <Button asChild className="rounded-none bg-primary hover:bg-black text-white px-10 h-14 text-xs tracking-widest uppercase transition-all">
            <Link to="/shop">Shop the Collection</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      <h1 className="text-4xl md:text-5xl font-serif mb-16 text-center">Your Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-12">
          {items.map((item) => {
             const { name, price, images, slug } = item.data || item;
             return (
               <div key={`${item.id}-${item.variant}`} className="flex space-x-6 pb-12 border-b border-border group">
                 <Link to={`/product/${slug}`} className="flex-none w-32 md:w-48 aspect-[4/5] bg-secondary overflow-hidden">
                   {/* Simplified cart image, not using stock helper for performance in cart list unless needed */}
                   <div className="w-full h-full bg-accent/10 flex items-center justify-center text-accent/40 font-serif italic text-xs">
                     Item Image
                   </div>
                 </Link>
                 
                 <div className="flex-1 flex flex-col justify-between py-2">
                   <div className="flex justify-between items-start">
                     <div className="space-y-2">
                       <Link to={`/product/${slug}`} className="product-name text-sm md:text-base group-hover:text-accent transition-colors">
                         {name}
                       </Link>
                       <p className="text-xs tracking-widest text-muted-foreground uppercase">{item.variant}</p>
                     </div>
                     <button 
                       onClick={() => removeItem(item.id, item.variant)}
                       className="p-1 hover:text-accent transition-colors"
                     >
                       <X size={18} />
                     </button>
                   </div>
                   
                   <div className="flex justify-between items-end mt-8">
                     <div className="flex items-center border border-border h-10">
                       <button 
                         onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                         className="px-3 hover:text-accent transition-colors"
                       >
                         <Minus size={14} />
                       </button>
                       <span className="w-6 text-center text-xs">{item.quantity}</span>
                       <button 
                         onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                         className="px-3 hover:text-accent transition-colors"
                       >
                         <Plus size={14} />
                       </button>
                     </div>
                     <p className="text-sm font-light">${(item.data?.price || item.price) * item.quantity}</p>
                   </div>
                 </div>
               </div>
             );
          })}
        </div>

        {/* Summary */}
        <div className="bg-secondary/30 p-8 space-y-8 sticky top-32">
          <h2 className="text-2xl font-serif">Order Summary</h2>
          <div className="space-y-4 text-sm font-light">
            <div className="flex justify-between">
              <span className="text-muted-foreground italic">Subtotal</span>
              <span>${total}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground italic">Shipping</span>
              <span className="text-accent uppercase tracking-widest text-[10px] font-bold">Complimentary</span>
            </div>
            <div className="pt-4 border-t border-border flex justify-between text-lg font-serif">
              <span>Total</span>
              <span>${total}</span>
            </div>
          </div>
          <Button className="w-full rounded-none bg-primary hover:bg-black text-white h-14 text-xs tracking-widest uppercase transition-all shadow-lg">
            Checkout
          </Button>
          <div className="text-center">
            <p className="text-[10px] tracking-widest text-muted-foreground uppercase italic">
              Payments processed securely via Stripe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
