import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react'

const footerLinks = {
  products: [
    { name: 'Double Folding Machine DF-2500', href: '#products' },
    { name: 'Double Folder DF-1500', href: '#products' },
    { name: 'Sheet Metal Folder SMF-3000', href: '#products' },
    { name: 'Metal Folder MF-1200', href: '#products' },
    { name: 'Metal Folding Machine MFM-2000', href: '#products' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Our Story', href: '#about' },
    { name: 'Careers', href: '#contact' },
    { name: 'News & Blog', href: '#' },
    { name: 'Partner Program', href: '#contact' },
  ],
  support: [
    { name: 'Technical Support', href: '#contact' },
    { name: 'Documentation', href: '#' },
    { name: 'Training Programs', href: '#contact' },
    { name: 'Spare Parts', href: '#contact' },
    { name: 'Warranty Info', href: '#' },
  ],
}

const Footer = () => {
  return (
    <footer className="bg-brand-950 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-lg">A</span>
              </div>
              <div>
                <span className="font-bold text-lg tracking-[0.2em]">ARTITECT</span>
                <span className="block text-[10px] tracking-[0.35em] uppercase text-brand-400">Machinery</span>
              </div>
            </div>

            <p className="text-brand-300 text-sm leading-relaxed max-w-sm">
              Leading manufacturer of precision sheet metal folding machines. 
              Delivering industrial-grade solutions for fabricators worldwide since 1999.
            </p>

            {/* Contact quick links */}
            <div className="mt-8 space-y-3">
              <a href="tel:+1800555" className="flex items-center gap-3 text-brand-300 hover:text-accent-400 text-sm transition-colors">
                <Phone className="w-4 h-4" />
                +1 (800) 555-TECH
              </a>
              <a href="mailto:sales@artitectmachinery.com" className="flex items-center gap-3 text-brand-300 hover:text-accent-400 text-sm transition-colors">
                <Mail className="w-4 h-4" />
                sales@artitectmachinery.com
              </a>
              <div className="flex items-center gap-3 text-brand-300 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                Industrial Parkway, Suite 400, OH 44101
              </div>
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h4 className="font-bold text-sm tracking-wider uppercase text-brand-200 mb-5">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-brand-400 hover:text-accent-400 text-sm transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm tracking-wider uppercase text-brand-200 mb-5">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-brand-400 hover:text-accent-400 text-sm transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm tracking-wider uppercase text-brand-200 mb-5">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-brand-400 hover:text-accent-400 text-sm transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-brand-500 text-sm">
              &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-brand-500 hover:text-brand-300 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-brand-500 hover:text-brand-300 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-brand-500 hover:text-brand-300 text-sm transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
