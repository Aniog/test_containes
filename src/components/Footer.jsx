import React from 'react'
import { Link } from 'react-router-dom'
import { Landmark, Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-primary text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <Landmark className="w-8 h-8 text-white" />
              <span className="text-xl font-bold text-white tracking-tighter">
                ARTITECT <span className="text-accent">MACHINERY</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Pioneering precision in sheet metal folding technology. Providing industrial solutions for architectural perfection since 1995.
            </p>
            <div className="flex space-x-4">
              <Twitter className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
              <Linkedin className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Machines</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Inquiry</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Products</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/products" className="hover:text-white transition-colors">Double Folding Machines</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Sheet Metal Folders</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">CNC Folding Centers</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Custom Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5" />
                <span>123 Industrial Way,<br />Metal Valley, MV 8890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <span>+1 (555) 012-3456</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <span>sales@artitect.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© 2026 ARTITECT MACHINERY. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
