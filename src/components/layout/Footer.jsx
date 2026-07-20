import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-900 text-brand-50 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <a href="/" className="font-serif text-2xl tracking-widest block mb-6">
              VELMORA
            </a>
            <p className="text-brand-200 text-sm leading-relaxed mb-6 font-light">
              Demi-fine jewelry crafted for the modern woman. Quiet luxury intended to be treasured daily.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-brand-200 hover:text-brand-50 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-200 hover:text-brand-50 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-200 hover:text-brand-50 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6">Shop</h4>
            <ul className="space-y-4 text-sm text-brand-200 font-light">
              <li><a href="#" className="hover:text-brand-50 transition-colors">All Jewelry</a></li>
              <li><a href="#" className="hover:text-brand-50 transition-colors">Earrings</a></li>
              <li><a href="#" className="hover:text-brand-50 transition-colors">Necklaces</a></li>
              <li><a href="#" className="hover:text-brand-50 transition-colors">Huggies</a></li>
              <li><a href="#" className="hover:text-brand-50 transition-colors">Best Sellers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6">Help</h4>
            <ul className="space-y-4 text-sm text-brand-200 font-light">
              <li><a href="#" className="hover:text-brand-50 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-brand-50 transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-brand-50 transition-colors">Jewelry Care</a></li>
              <li><a href="#" className="hover:text-brand-50 transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-brand-50 transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-brand-200 font-light">
              <li><a href="#" className="hover:text-brand-50 transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-brand-50 transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-brand-50 transition-colors">Journal</a></li>
              <li><a href="#" className="hover:text-brand-50 transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-brand-50 transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-brand-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-300 font-light">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-50 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand-50 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}