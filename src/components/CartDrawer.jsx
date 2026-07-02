import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { isCartOpen, setIsCartOpen, items, updateQuantity, removeFromCart, subtotal } = useCart()

  if (!isCartOpen) return null

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-background z-50 shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-serif text-2xl">Your Bag</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-muted rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-muted-foreground">
              <ShoppingBag size={48} strokeWidth={1} />
              <p>Your bag is currently empty.</p>
              <Link 
                to="/collections/all" 
                onClick={() => setIsCartOpen(false)}
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-sm tracking-widest mt-4 inline-block uppercase transition-colors"
              >
                CONTINUE SHOPPING
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-24 h-24 bg-muted overflow-hidden flex-shrink-0">
                    <img 
                      src={item.images[0]} 
                      alt={item.name} 
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-serif text-lg leading-tight uppercase tracking-wider">{item.name}</h3>
                        {item.variant && <p className="text-sm text-muted-foreground mt-1">{item.variant}</p>}
                      </div>
                      <p className="font-medium">${item.price}</p>
                    </div>
                    
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center border border-border rounded-none">
                        <button 
                          className="px-3 py-1 hover:bg-muted transition-colors"
                          onClick={() => updateQuantity(item.id, item.quantity - 1, item.variant)}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button 
                          className="px-3 py-1 hover:bg-muted transition-colors"
                          onClick={() => updateQuantity(item.id, item.quantity + 1, item.variant)}
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-4"
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

        {items.length > 0 && (
          <div className="p-6 border-t border-border bg-background">
            <div className="flex items-center justify-between font-serif text-xl mb-6">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-sm text-center text-muted-foreground mb-4">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-4 text-sm tracking-widest uppercase transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}