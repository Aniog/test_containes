import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-24 pb-12 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
        <div className="col-span-1 md:col-span-1">
          <h2 className="font-serif text-2xl tracking-[0.3em] font-medium mb-6">VELMORA</h2>
          <p className="text-muted-foreground text-xs leading-relaxed max-w-[200px]">
            Finely crafted demi-fine jewelry designed for the modern woman. Quiet luxury for every day.
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          <h3 className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-2">Shop</h3>
          <Link to="/shop" className="text-xs text-muted-foreground hover:text-foreground">All Jewelry</Link>
          <Link to="/shop?category=Earrings" className="text-xs text-muted-foreground hover:text-foreground">Earrings</Link>
          <Link to="/shop?category=Necklaces" className="text-xs text-muted-foreground hover:text-foreground">Necklaces</Link>
          <Link to="/shop?category=Huggies" className="text-xs text-muted-foreground hover:text-foreground">Huggies</Link>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-2">Help</h3>
          <Link to="/shipping" className="text-xs text-muted-foreground hover:text-foreground">Shipping & Returns</Link>
          <Link to="/care" className="text-xs text-muted-foreground hover:text-foreground">Care Guide</Link>
          <Link to="/faq" className="text-xs text-muted-foreground hover:text-foreground">FAQ</Link>
          <Link to="/contact" className="text-xs text-muted-foreground hover:text-foreground">Contact Us</Link>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-2">Company</h3>
          <Link to="/about" className="text-xs text-muted-foreground hover:text-foreground">Our Story</Link>
          <Link to="/ethics" className="text-xs text-muted-foreground hover:text-foreground">Ethics</Link>
          <Link to="/journal" className="text-xs text-muted-foreground hover:text-foreground">Journal</Link>
          <Link to="/wholesale" className="text-xs text-muted-foreground hover:text-foreground">Wholesale</Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-border gap-6">
        <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
          © 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.
        </p>
        <div className="flex items-center gap-6">
          <span className="text-[10px] text-muted-foreground">INSTAGRAM</span>
          <span className="text-[10px] text-muted-foreground">PINTEREST</span>
          <span className="text-[10px] text-muted-foreground">TIKTOK</span>
        </div>
      </div>
    </footer>
  )
}
