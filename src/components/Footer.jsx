import * as React from "react"

export function Footer() {
  return (
    <footer className="bg-ink text-surface py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <a href="/" className="font-serif text-2xl tracking-widest uppercase font-semibold block mb-6">
            Velmora
          </a>
          <p className="text-ink-lighter text-sm max-w-xs leading-relaxed">
            Demi-fine gold jewelry for the modern romantic. Crafted to be treasured, designed for the everyday.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium text-sm tracking-widest uppercase mb-6">Shop</h4>
          <ul className="space-y-4 text-sm text-ink-lighter">
            <li><a href="#" className="hover:text-white transition-colors">All Jewelry</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Earrings</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Necklaces</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Huggies</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-medium text-sm tracking-widest uppercase mb-6">Help</h4>
          <ul className="space-y-4 text-sm text-ink-lighter">
            <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Jewelry Care</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-medium text-sm tracking-widest uppercase mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-ink-lighter">
            <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Journal</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms & Privacy</a></li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 mt-16 pt-8 border-t border-ink-light flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ink-lighter">
        <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Pinterest</a>
          <a href="#" className="hover:text-white transition-colors">TikTok</a>
        </div>
      </div>
    </footer>
  )
}
