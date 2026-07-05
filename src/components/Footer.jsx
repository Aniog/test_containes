import React from 'react'
import { Link } from 'react-router-dom'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export function Footer() {
  return (
    <footer className="bg-[#1A1A18] text-white/80 pt-20 pb-10 border-t border-border/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="font-serif tracking-[0.25em] uppercase text-2xl text-white block mb-6">
              Velmora
            </Link>
            <p className="text-sm leading-relaxed text-white/60 mb-8 max-w-xs">
              Crafted to be treasured. Ethically sourced demi-fine gold jewelry for the modern romantic.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors text-white/60"><span className="sr-only">Instagram</span>Ig</a>
              <a href="#" className="hover:text-primary transition-colors text-white/60"><span className="sr-only">Pinterest</span>Pi</a>
              <a href="#" className="hover:text-primary transition-colors text-white/60"><span className="sr-only">TikTok</span>Ti</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-lg text-white mb-6 uppercase tracking-wider">Shop</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/shop" className="hover:text-primary transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="hover:text-primary transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-primary transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-primary transition-colors">Huggies</Link></li>
              <li><Link to="/shop?sort=bestsellers" className="hover:text-primary transition-colors">Bestsellers</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg text-white mb-6 uppercase tracking-wider">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Materials & Ethics</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Journal</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-1">
            <h4 className="font-serif text-lg text-white mb-4 uppercase tracking-wider">Stay Connected</h4>
            <p className="text-sm text-white/60 mb-4">Join our list for early access and a 10% welcome gift.</p>
            <div className="flex flex-col gap-2">
              <Input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent border-white/20 text-white placeholder:text-white/40 rounded-none focus-visible:ring-primary"
              />
              <Button variant="outline" className="w-full bg-white text-black border-transparent hover:bg-white/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <Separator className="bg-white/10 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-white/40 gap-4">
          <p>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/" className="hover:text-white transition-colors">Shipping Options</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}