import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Clock, Shield } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SC</span>
              </div>
              <span className="text-lg font-bold">SSourcing China</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Your trusted China-based sourcing agent. We help global buyers find reliable suppliers, 
              verify factories, inspect quality, and coordinate shipping from China.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <Shield className="w-4 h-4 text-secondary" />
              <span>Verified & Licensed in China</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              <li><Link to="/" className="text-gray-300 hover:text-white text-sm transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white text-sm transition-colors">Services</Link></li>
              <li><Link to="/how-it-works" className="text-gray-300 hover:text-white text-sm transition-colors">How It Works</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-white text-sm transition-colors">Products We Source</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 hover:text-white text-sm transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white text-sm transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2.5">
              <li className="text-gray-300 text-sm">Supplier Sourcing & Verification</li>
              <li className="text-gray-300 text-sm">Factory Audits & Assessments</li>
              <li className="text-gray-300 text-sm">Product Quality Inspection</li>
              <li className="text-gray-300 text-sm">Production Monitoring</li>
              <li className="text-gray-300 text-sm">Shipping & Logistics Coordination</li>
              <li className="text-gray-300 text-sm">Sample Management</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                <span className="text-gray-300 text-sm">Guangzhou, Guangdong, China</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                <a href="mailto:info@ssourcingchina.com" className="text-gray-300 hover:text-white text-sm transition-colors">
                  info@ssourcingchina.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                <a href="tel:+861234567890" className="text-gray-300 hover:text-white text-sm transition-colors">
                  +86 123 4567 890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                <span className="text-gray-300 text-sm">Mon-Fri: 9:00 AM - 6:00 PM (CST)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>Professional Sourcing Services in China</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}