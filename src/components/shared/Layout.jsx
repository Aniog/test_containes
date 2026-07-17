import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ShoppingBag, Search, Menu, X, Minus, Plus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useStore } from '../../store'
import { cn } from '../../lib/utils'

export const Navbar = () => {
  const { pathname } = useLocation()
  const { getCartCount, openCart } = useStore()
  const [isScrolled, setIsScrolled] = React.useState(false)
  const isHomepage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out border-b font-sans",
        isHomepage && !isScrolled 
          ? "bg-transparent border-transparent text-white" 
          : "bg-background/95 backdrop-blur-md border-border text-foreground shadow-sm"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <div className="flex-1 md:hidden">
          <Menu className="w-6 h-6 stroke-[1.5]" />
        </div>

        <nav className="flex-1 hidden md:flex items-center gap-8 text-sm uppercase tracking-widest">
          <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
          <a href="#" className="hover:text-primary transition-colors">Collections</a>
          <a href="#" className="hover:text-primary transition-colors">About</a>
        </nav>

        <Link to="/" className="text-3xl font-serif tracking-[0.15em] flex-1 text-center md:flex-none uppercase">
          Velmora
        </Link>

        <div className="flex-1 flex justify-end items-center gap-6">
          <Search className="w-5 h-5 stroke-[1.5] hidden md:block cursor-pointer hover:text-primary transition-colors" />
          <button 
            onClick={openCart}
            className="relative flex items-center hover:text-primary transition-colors"
          >
            <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
            {getCartCount() > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-primary text-primary-foreground text-[10px] font-medium w-4 h-4 rounded-full flex items-center justify-center">
                {getCartCount()}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 px-6 font-sans">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="text-3xl font-serif tracking-[0.15em] uppercase">Velmora</div>
          <p className="text-sm opacity-80 max-w-xs leading-relaxed">
            Demi-fine gold jewelry designed for the modern romantic. Quiet luxury crafted for everyday treasure.
          </p>
        </div>
        
        <div>
          <h4 className="text-editorial text-sm mb-6 opacity-60">Shop</h4>
          <ul className="space-y-4 text-sm opacity-80">
            <li><Link to="/shop" className="hover:opacity-100 transition-opacity">All Jewelry</Link></li>
            <li><a href="#" className="hover:opacity-100 transition-opacity">Earrings</a></li>
            <li><a href="#" className="hover:opacity-100 transition-opacity">Necklaces</a></li>
            <li><a href="#" className="hover:opacity-100 transition-opacity">Huggies</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-editorial text-sm mb-6 opacity-60">Help</h4>
          <ul className="space-y-4 text-sm opacity-80">
            <li><a href="#" className="hover:opacity-100 transition-opacity">Contact Us</a></li>
            <li><a href="#" className="hover:opacity-100 transition-opacity">Shipping & Returns</a></li>
            <li><a href="#" className="hover:opacity-100 transition-opacity">Jewelry Care</a></li>
            <li><a href="#" className="hover:opacity-100 transition-opacity">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-editorial text-sm mb-6 opacity-60">Connect</h4>
          <ul className="space-y-4 text-sm opacity-80">
            <li><a href="#" className="hover:opacity-100 transition-opacity">Instagram</a></li>
            <li><a href="#" className="hover:opacity-100 transition-opacity">Pinterest</a></li>
            <li><a href="#" className="hover:opacity-100 transition-opacity">TikTok</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-16 pt-8 border-t border-white/10 text-xs opacity-60 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2026 Velmora Fine Jewelry. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <span>Terms</span>
          <span>Privacy</span>
        </div>
      </div>
    </footer>
  )
}

export const CartDrawer = () => {
  const { cart, isCartOpen, closeCart, removeFromCart, updateQuantity, getCartTotal } = useStore()

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full max-w-md bg-background shadow-2xl z-[101] flex flex-col font-sans"
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-editorial text-lg">Your Cart</h2>
              <button onClick={closeCart} className="p-2 hover:bg-muted rounded-full transition-colors">
                <X className="w-5 h-5 stroke-[1.5]" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-70">
                  <ShoppingBag className="w-12 h-12 stroke-1" />
                  <p>Your cart is empty.</p>
                  <Link onClick={closeCart} to="/shop" className="text-sm underline underline-offset-4">Continue Shopping</Link>
                </div>
              ) : (
                cart.map((item, index) => (
                  <div key={item.id} className="flex gap-4 items-center">
                    <div className="w-20 h-24 bg-muted overflow-hidden flex-shrink-0">
                      {item.product.images?.primary ? (
                        <img 
                          src={item.product.images.primary}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <img 
                          data-strk-img-id={`c-uuidx2-${item.product.id}-idx1-${index}`}
                          data-strk-img={`[c-title-${index}-${item.id}] jewelry product`}
                          data-strk-img-ratio="1x1"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex justify-between">
                        <h4 className="font-serif text-lg">{item.product.name}</h4>
                        <button onClick={() => removeFromCart(item.id)} className="text-xs opacity-60 hover:opacity-100 uppercase tracking-wider">Remove</button>
                      </div>
                      <p className="text-sm opacity-70">${item.product.price}</p>
                      {item.variant && <p className="text-xs opacity-60 uppercase tracking-widest">{item.variant}</p>}
                      <div className="flex items-center gap-3 pt-2">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 border border-border hover:border-primary transition-colors">
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 border border-border hover:border-primary transition-colors">
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="border-t border-border p-6 bg-background space-y-6">
                <div className="flex justify-between items-center text-lg font-serif">
                  <span>Subtotal</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
                <p className="text-xs opacity-60 text-center">Shipping & taxes calculated at checkout.</p>
                <button className="w-full bg-primary text-primary-foreground py-4 text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors">
                  Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <CartDrawer />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}