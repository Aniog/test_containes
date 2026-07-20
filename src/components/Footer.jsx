import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Twitter, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-base text-[#D1D1D1] pt-20 pb-10 px-6 lg:px-12">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          {/* Logo & Info */}
          <div className="space-y-6">
            <span className="text-2xl font-serif text-white tracking-widest uppercase">
              Velmora
            </span>
            <p className="text-sm max-w-xs leading-relaxed opacity-80">
              Quiet luxury demi-fine jewelry crafted for the modern woman. 
              Designed for celebration, styled for every day.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-white transition-colors">
                <Instagram className="w-5 h-5 stroke-[1.5]" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="w-5 h-5 stroke-[1.5]" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Mail className="w-5 h-5 stroke-[1.5]" />
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white mb-8">Shop</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/shop" className="hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Best Sellers</Link></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white mb-8">Help</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Materials & Care</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Links 3 */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white mb-8">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Journal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[10px] uppercase tracking-widest opacity-60">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex space-x-6 items-center flex-wrap justify-center opacity-60">
             {/* Payment Icons Placeholder */}
             <span className="text-[10px] uppercase tracking-widest">Visa</span>
             <span className="text-[10px] uppercase tracking-widest">Mastercard</span>
             <span className="text-[10px] uppercase tracking-widest">Amex</span>
             <span className="text-[10px] uppercase tracking-widest">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
