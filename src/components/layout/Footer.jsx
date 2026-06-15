import React from 'react'
import { Link } from 'react-router-dom'
import { Hammer, Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-800 pb-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Hammer className="h-6 w-6 text-[#d4af37]" />
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-widest text-[#d4af37] leading-none">ARTITECT</span>
                <span className="text-sm font-light tracking-widest text-white mt-1">MACHINERY</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Precision sheet metal folding and industrial machinery solutions. Engineered for excellence since 1995.
            </p>
          </div>

          <div>
            <h3 className="text-[#d4af37] text-sm font-bold tracking-widest uppercase mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-white text-sm transition-colors uppercase tracking-wider">Home</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white text-sm transition-colors uppercase tracking-wider">Products</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-white text-sm transition-colors uppercase tracking-wider">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white text-sm transition-colors uppercase tracking-wider">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#d4af37] text-sm font-bold tracking-widest uppercase mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#d4af37] mt-0.5" />
                <span className="text-gray-400 text-sm">Industrial Zone 5, Sector 12, Precision City, PC 54321</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#d4af37]" />
                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#d4af37]" />
                <span className="text-gray-400 text-sm">info@artitectmachinery.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#d4af37] text-sm font-bold tracking-widest uppercase mb-6">Follow Us</h3>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors"><Facebook className="h-6 w-6" /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter className="h-6 w-6" /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="h-6 w-6" /></a>
            </div>
            <div className="mt-8">
              <p className="text-xs text-gray-500 uppercase tracking-widest">Newsletter</p>
              <div className="mt-4 flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-gray-900 border-none px-4 py-2 text-sm text-white focus:ring-1 focus:ring-[#d4af37] w-full"
                />
                <button className="bg-[#d4af37] text-[#1a1a1a] px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors">Join</button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs uppercase tracking-widest">
          <p>© 2026 ARTITECT MACHINERY. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
