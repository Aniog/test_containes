import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    products: [
      { name: 'Double Folding Machine', href: '#products' },
      { name: 'Double Folder', href: '#products' },
      { name: 'Sheet Metal Folder', href: '#products' },
      { name: 'Sheet Metal Folding Machine', href: '#products' },
      { name: 'Metal Folder', href: '#products' },
      { name: 'Metal Folder Machine', href: '#products' },
      { name: 'Metal Folding Machine', href: '#products' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Story', href: '#about' },
      { name: 'Careers', href: '#' },
      { name: 'News', href: '#' },
    ],
    support: [
      { name: 'Contact Us', href: '#contact' },
      { name: 'Technical Support', href: '#contact' },
      { name: 'Documentation', href: '#' },
      { name: 'FAQs', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ]

  return (
    <footer className="bg-brand-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-brand-accent rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-white">A</span>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold tracking-wide">ARTITECT</h3>
                <p className="text-xs tracking-widest uppercase text-brand-gold">MACHINERY</p>
              </div>
            </div>
            <p className="text-white/60 text-body mb-6">
              Leading manufacturer of precision metal folding machines and sheet metal solutions for industrial applications worldwide.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand-accent transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-6">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/60 hover:text-brand-accent transition-colors text-body">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/60 hover:text-brand-accent transition-colors text-body">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                <a href="mailto:info@artitectmachinery.com" className="text-white/60 hover:text-brand-accent transition-colors text-body">
                  info@artitectmachinery.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                <a href="tel:+15551234567" className="text-white/60 hover:text-brand-accent transition-colors text-body">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                <span className="text-white/60 text-body">
                  123 Industrial Blvd<br />
                  Manufacturing City, MC 12345
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm text-body">
              © {currentYear} ARTITECT MACHINERY. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/50 hover:text-brand-accent text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/50 hover:text-brand-accent text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/50 hover:text-brand-accent text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
