import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react'

const footerLinks = {
  products: [
    'Double Folding Machine',
    'Double Folder',
    'Sheet Metal Folder',
    'Metal Folding Machine',
  ],
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Contact', href: '#contact' },
    { label: 'Careers', href: '#' },
  ],
  support: [
    { label: 'Technical Support', href: '#' },
    { label: 'Spare Parts', href: '#' },
    { label: 'Warranty', href: '#' },
    { label: 'Training', href: '#' },
  ],
}

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-charcoal-950 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-brand-500 flex items-center justify-center">
                <span className="text-white font-black text-lg tracking-tighter">AM</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-extrabold text-lg tracking-widest">ARTITECT</span>
                <span className="text-brand-400 text-[10px] font-medium tracking-[0.3em] uppercase">Machinery</span>
              </div>
            </div>
            <p className="text-charcoal-300 text-sm leading-relaxed mb-6 max-w-xs">
              Precision metal folding machines engineered for performance. Trusted by manufacturers worldwide since 1998.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-charcoal-300">
                <MapPin className="w-4 h-4 text-brand-400 mt-0.5 flex-shrink-0" />
                <span>1200 Industrial Blvd, Suite 400<br />Houston, TX 77001</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-charcoal-300">
                <Phone className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <span>+1 (800) 555-0187</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-charcoal-300">
                <Mail className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <span>info@artitectmachinery.com</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase text-white mb-6">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((item) => (
                <li key={item}>
                  <a href="#products" className="text-charcoal-300 hover:text-brand-400 text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase text-white mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-charcoal-300 hover:text-brand-400 text-sm transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase text-white mb-6">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-charcoal-300 hover:text-brand-400 text-sm transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-charcoal-400 text-xs">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <button
            onClick={scrollTop}
            className="flex items-center gap-2 text-charcoal-400 hover:text-brand-400 text-xs font-medium tracking-wider uppercase transition-colors cursor-pointer bg-transparent border-none"
          >
            Back to top
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
