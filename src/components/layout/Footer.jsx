import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, MessageCircle, ArrowRight } from 'lucide-react'
import { navLinks, siteConfig } from '@/data/siteData'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0F2B5B] text-white">
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">Ready to Start Sourcing from China?</h3>
              <p className="text-blue-200 mt-2">Get a free consultation and quote within 24 hours.</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0F2B5B] font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[#0F2B5B] font-bold text-xl">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-tight">SSourcing</span>
                <span className="text-blue-200 text-xs leading-tight">China</span>
              </div>
            </Link>
            <p className="text-blue-200 text-sm leading-relaxed mb-6">
              Your trusted China sourcing agent. We help global buyers find reliable suppliers, ensure quality, and manage shipping from China.
            </p>
            <div className="flex flex-col gap-3">
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors text-sm">
                <Phone className="w-4 h-4" />
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors text-sm">
                <Mail className="w-4 h-4" />
                {siteConfig.email}
              </a>
              <div className="flex items-start gap-2 text-blue-200 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-blue-200 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Our Services</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link to="/services" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Supplier Verification
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Quality Control
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Product Sourcing
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Production Follow-up
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Shipping & Logistics
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Connect With Us</h4>
            <div className="flex flex-col gap-4 mb-8">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <MessageCircle className="w-5 h-5 text-blue-300" />
                  <span className="font-medium">WeChat</span>
                </div>
                <p className="text-blue-200 text-sm">{siteConfig.wechat}</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="w-5 h-5 text-blue-300" />
                  <span className="font-medium">WhatsApp</span>
                </div>
                <p className="text-blue-200 text-sm">{siteConfig.whatsapp}</p>
              </div>
            </div>
            <p className="text-blue-200 text-sm">
              Available Monday-Friday, 9:00 AM - 6:00 PM (China Time, GMT+8)
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-blue-300">
            <p>&copy; {currentYear} SSourcing China. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <span>Shenzhen, Guangdong, China</span>
              <span className="hidden md:inline">|</span>
              <span>ISO 9001 Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
