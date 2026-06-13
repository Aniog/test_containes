import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#1a2744] text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              SSourcing<span className="text-[#d4a843]">China</span>
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Your trusted China sourcing partner. We help global buyers find reliable suppliers, verify factories, and ensure product quality.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-white/10 rounded-md hover:bg-white/20 transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-md hover:bg-white/20 transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-md hover:bg-white/20 transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-[#d4a843]">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/services" className="hover:text-white transition-colors">Supplier Sourcing</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Factory Verification</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Quality Inspection</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Production Monitoring</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Shipping Coordination</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-[#d4a843]">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Products We Source</Link></li>
              <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-[#d4a843]">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 flex-shrink-0 text-[#d4a843]" />
                <span>info@ssourcingchina.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 flex-shrink-0 text-[#d4a843]" />
                <span>+86 755 8888 8888</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-[#d4a843]" />
                <span>Shenzhen, Guangdong, China</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
