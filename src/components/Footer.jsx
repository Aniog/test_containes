import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    products: [
      { label: 'Double Folding Machine', href: '#products' },
      { label: 'Sheet Metal Folder', href: '#products' },
      { label: 'Metal Folding Machine', href: '#products' },
      { label: 'Custom Solutions', href: '#contact' },
    ],
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Our History', href: '#about' },
      { label: 'Careers', href: '#contact' },
      { label: 'News & Events', href: '#contact' },
    ],
    support: [
      { label: 'Technical Support', href: '#contact' },
      { label: 'Documentation', href: '#contact' },
      { label: 'Warranty Info', href: '#contact' },
      { label: 'FAQs', href: '#contact' },
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-brand-secondary rounded-lg flex items-center justify-center">
                <span className="text-brand-dark font-bold text-xl">A</span>
              </div>
              <div>
                <h3 className="text-xl font-bold leading-tight">ARTITECT</h3>
                <p className="text-xs text-slate-400 uppercase tracking-wider">Machinery</p>
              </div>
            </div>

            <p className="text-slate-400 mb-6 max-w-sm leading-relaxed">
              Leading manufacturer of precision sheet metal folding machines. Delivering excellence in metal fabrication technology since 1985.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-slate-400">
                <Phone className="w-4 h-4 text-brand-secondary flex-shrink-0" />
                <span>+1 (234) 567-890</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Mail className="w-4 h-4 text-brand-secondary flex-shrink-0" />
                <span>info@artitect.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin className="w-4 h-4 text-brand-secondary flex-shrink-0" />
                <span>123 Industrial Avenue, CA 90210</span>
              </div>
            </div>

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 hover:bg-brand-secondary rounded-lg flex items-center justify-center transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-400 hover:text-brand-secondary transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-400 hover:text-brand-secondary transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-400 hover:text-brand-secondary transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              &copy; {currentYear} ARTITECT MACHINERY. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-brand-secondary transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-brand-secondary transition-colors">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-brand-secondary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
