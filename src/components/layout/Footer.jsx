import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-background border-t pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest uppercase font-semibold block mb-6">
              Velmora
            </Link>
            <p className="text-secondary-foreground text-sm mb-6 max-w-xs">
              Crafted to be treasured. Demi-fine gold jewelry for everyday elegance and milestone moments.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-secondary-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-secondary-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-secondary-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/collections/earrings" className="text-sm text-secondary-foreground hover:text-primary transition-colors">Earrings</Link></li>
              <li><Link to="/collections/necklaces" className="text-sm text-secondary-foreground hover:text-primary transition-colors">Necklaces</Link></li>
              <li><Link to="/collections/huggies" className="text-sm text-secondary-foreground hover:text-primary transition-colors">Huggies</Link></li>
              <li><Link to="/collections/all" className="text-sm text-secondary-foreground hover:text-primary transition-colors">All Jewelry</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Help</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-secondary-foreground hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-sm text-secondary-foreground hover:text-primary transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-secondary-foreground hover:text-primary transition-colors">Jewelry Care</a></li>
              <li><a href="#" className="text-sm text-secondary-foreground hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-secondary-foreground hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="text-sm text-secondary-foreground hover:text-primary transition-colors">Journal</Link></li>
              <li><a href="#" className="text-sm text-secondary-foreground hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-sm text-secondary-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-secondary-foreground">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex gap-4 opacity-70 grayscale">
            {/* Payment Icons placeholders */}
            <div className="w-10 h-6 bg-secondary/50 rounded flex items-center justify-center text-[10px] font-bold border">VISA</div>
            <div className="w-10 h-6 bg-secondary/50 rounded flex items-center justify-center text-[10px] font-bold border">MC</div>
            <div className="w-10 h-6 bg-secondary/50 rounded flex items-center justify-center text-[10px] font-bold border">AMEX</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
