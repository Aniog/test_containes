import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ArrowRight, Globe, Shield, Clock, CheckCircle } from 'lucide-react'

const quickLinks = [
  { name: 'Services', path: '/services' },
  { name: 'How It Works', path: '/how-it-works' },
  { name: 'Products We Source', path: '/products' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
]

const services = [
  'Supplier Verification',
  'Quality Inspection',
  'Production Monitoring',
  'Shipping Coordination',
  'Factory Audits',
  'Price Negotiation',
]

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      {/* CTA Section */}
      <div className="bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Ready to Start Sourcing from China?</h2>
              <p className="text-navy-200 text-lg">Get a free quote and let our experts handle your supply chain.</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors text-lg shrink-0"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <span className="text-2xl font-bold">
                S<span className="text-red-500">Sourcing</span>
              </span>
              <span className="text-sm text-navy-300 ml-2">CHINA</span>
            </div>
            <p className="text-navy-300 mb-6 leading-relaxed">
              Your trusted China sourcing partner. We help global buyers find reliable suppliers, 
              verify factories, and coordinate shipping with confidence.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-navy-300">
                <Globe className="w-5 h-5" />
                <span className="text-sm">Global Coverage</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-navy-300 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="w-4 h-4" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-navy-300 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-red-500" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <a href="mailto:info@ssourcingchina.com" className="flex items-start gap-3 text-navy-300 hover:text-white transition-colors">
                <Mail className="w-5 h-5 mt-0.5 shrink-0" />
                <span>info@ssourcingchina.com</span>
              </a>
              <a href="tel:+8612345678900" className="flex items-start gap-3 text-navy-300 hover:text-white transition-colors">
                <Phone className="w-5 h-5 mt-0.5 shrink-0" />
                <span>+86 123 4567 8900</span>
              </a>
              <div className="flex items-start gap-3 text-navy-300">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                <span>Guangzhou, Guangdong, China</span>
              </div>
              <div className="flex items-start gap-3 text-navy-300">
                <Clock className="w-5 h-5 mt-0.5 shrink-0" />
                <span>Mon-Sat: 9:00 AM - 6:00 PM (CST)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 pt-8 border-t border-navy-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3 text-navy-300">
              <Shield className="w-8 h-8 text-red-500" />
              <div>
                <div className="font-semibold text-white">Verified Supplier</div>
                <div className="text-sm">Background Checked</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-navy-300">
              <CheckCircle className="w-8 h-8 text-red-500" />
              <div>
                <div className="font-semibold text-white">Quality Assured</div>
                <div className="text-sm">ISO Standards</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-navy-300">
              <Globe className="w-8 h-8 text-red-500" />
              <div>
                <div className="font-semibold text-white">Global Shipping</div>
                <div className="text-sm">Worldwide Delivery</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-navy-300">
              <Clock className="w-8 h-8 text-red-500" />
              <div>
                <div className="font-semibold text-white">24/7 Support</div>
                <div className="text-sm">Always Available</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-navy-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-navy-400 text-sm">
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-navy-400">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
