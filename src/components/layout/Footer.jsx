import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, Linkedin, Twitter, Facebook } from 'lucide-react'

const footerLinks = {
  company: [
    { name: 'About Us', href: '/' },
    { name: 'Our Team', href: '/' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
  ],
  services: [
    { name: 'Supplier Verification', href: '/services' },
    { name: 'Quality Control', href: '/services' },
    { name: 'Production Follow-up', href: '/services' },
    { name: 'Shipping & Logistics', href: '/services' },
  ],
  resources: [
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Products We Source', href: '/products' },
    { name: 'FAQ', href: '/contact' },
    { name: 'Contact Us', href: '/contact' },
  ],
}

const Footer = () => {
  return (
    <footer className="bg-[--color-primary] text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[--color-primary] font-bold text-lg">SS</span>
              </div>
              <div>
                <span className="text-white font-bold text-lg">SSourcing</span>
                <span className="text-white/70 text-sm block -mt-1">China</span>
              </div>
            </Link>
            <p className="text-white/80 text-sm leading-relaxed mb-6 max-w-sm">
              Your trusted China sourcing partner. We help global businesses find reliable suppliers, verify factories, ensure quality, and coordinate seamless shipping.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[--color-accent-light] flex-shrink-0 mt-0.5" />
                <span className="text-white/80">Room 1208, Building A<br />No. 123 East Nanjing Road<br />Shanghai, China 200001</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[--color-accent-light] flex-shrink-0" />
                <a href="tel:+862155512345" className="text-white/80 hover:text-white transition-colors">+86 21 5551 2345</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[--color-accent-light] flex-shrink-0" />
                <a href="mailto:info@ssourcingchina.com" className="text-white/80 hover:text-white transition-colors">info@ssourcingchina.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[--color-accent-light] flex-shrink-0" />
                <span className="text-white/80">Mon-Fri: 9:00 - 18:00 CST</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white/50 mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-white/80 text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white/50 mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-white/80 text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white/50 mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-white/80 text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm">
              &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link to="/" className="text-white/60 hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/" className="text-white/60 hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/" className="text-white/60 hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
