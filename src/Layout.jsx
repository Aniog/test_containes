import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, Facebook, Instagram, Twitter } from 'lucide-react';
import { useScroll } from '../lib/hooks';
import { useCartStore } from '../lib/cart';
import { cn } from '../lib/utils';
import CartDrawer from './CartDrawer';

export default function Layout() {
  const isScrolled = useScroll();
  const location = useLocation();
  const { openCart, totalItems } = useCartStore();
  
  const isHome = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen">
      <header
        className={cn(
          "fixed top-0 w-full z-40 transition-all duration-300",
          isScrolled || !isHome ? "bg-background border-b py-4" : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-4 md:hidden">
            <button className={cn("p-2", isScrolled || !isHome ? "text-foreground" : "text-white")}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <NavLink 
              to="/shop" 
              className={({ isActive }) => cn(
                "text-sm uppercase tracking-widest transition-colors hover:text-primary",
                isActive ? "text-primary" : (isScrolled || !isHome ? "text-foreground" : "text-white/90")
              )}
            >
              Shop
            </NavLink>
            <NavLink 
              to="/collections" 
              className={({ isActive }) => cn(
                "text-sm uppercase tracking-widest transition-colors hover:text-primary",
                isActive ? "text-primary" : (isScrolled || !isHome ? "text-foreground" : "text-white/90")
              )}
            >
              Collections
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => cn(
                "text-sm uppercase tracking-widest transition-colors hover:text-primary",
                isActive ? "text-primary" : (isScrolled || !isHome ? "text-foreground" : "text-white/90")
              )}
            >
              About
            </NavLink>
          </nav>

          <NavLink 
            to="/" 
            className={({ isActive }) => cn(
              "font-serif text-2xl md:text-3xl tracking-widest absolute left-1/2 -translate-x-1/2 transition-colors",
              isActive && isHome && !isScrolled ? "text-white" : (isScrolled || !isHome ? "text-foreground" : "text-white")
            )}
          >
            VELMORA
          </NavLink>

          <div className="flex items-center gap-4">
            <button className={cn("p-2 transition-colors hover:text-primary", isScrolled || !isHome ? "text-foreground" : "text-white")}>
              <Search className="w-5 h-5" />
            </button>
            <button 
              onClick={openCart}
              className={cn("p-2 relative transition-colors hover:text-primary", isScrolled || !isHome ? "text-foreground" : "text-white")}
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center translate-x-1 -translate-y-1">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-background border-t pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <h3 className="font-serif text-2xl tracking-widest mb-6">VELMORA</h3>
              <p className="text-muted-foreground mb-6">
                Demi-fine gold jewelry, crafted to be treasured. Quiet luxury for the modern woman.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-serif text-lg mb-6">Shop</h4>
              <ul className="space-y-4">
                <li><Link to="/shop" className="text-muted-foreground hover:text-foreground transition-colors">All Jewelry</Link></li>
                <li><Link to="/shop?category=earrings" className="text-muted-foreground hover:text-foreground transition-colors">Earrings</Link></li>
                <li><Link to="/shop?category=necklaces" className="text-muted-foreground hover:text-foreground transition-colors">Necklaces</Link></li>
                <li><Link to="/shop?category=huggies" className="text-muted-foreground hover:text-foreground transition-colors">Huggies</Link></li>
                <li><Link to="/shop?category=sets" className="text-muted-foreground hover:text-foreground transition-colors">Gift Sets</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-serif text-lg mb-6">Help</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Shipping & Returns</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Jewelry Care</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-serif text-lg mb-6">Company</h4>
              <ul className="space-y-4">
                <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">Our Story</Link></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Journal</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Sustainability</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border">
            <p className="text-muted-foreground text-sm">&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      <CartDrawer />
    </div>
  );
}