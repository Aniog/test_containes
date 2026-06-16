import { Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = {
  Products: [
    { label: 'Double Folding Machine', href: '#products' },
    { label: 'Sheet Metal Folder', href: '#products' },
    { label: 'Metal Folding Machine', href: '#products' },
    { label: 'Custom Solutions', href: '#contact' },
  ],
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Technology', href: '#features' },
    { label: 'Case Studies', href: '#about' },
    { label: 'Careers', href: '#contact' },
  ],
  Support: [
    { label: 'Technical Support', href: '#contact' },
    { label: 'Documentation', href: '#contact' },
    { label: 'Spare Parts', href: '#contact' },
    { label: 'Training', href: '#contact' },
  ],
}

const Footer = () => {
  return (
    <footer className="bg-brand-950 text-brand-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-accent-500 rounded-sm flex items-center justify-center transform rotate-45">
                <span className="text-white font-display font-bold text-sm -rotate-45">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-display text-lg font-bold tracking-wider leading-tight">
                  ARTITECT
                </span>
                <span className="text-accent-400 text-[10px] font-sans font-medium tracking-[0.3em] uppercase leading-tight">
                  Machinery
                </span>
              </div>
            </div>
            <p className="text-brand-400 text-sm leading-relaxed max-w-sm mb-6">
              Leading manufacturer of precision metal folding machines. Engineering excellence 
              since 1998, serving industries worldwide with cutting-edge sheet metal solutions.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a href="tel:+18005550199" className="flex items-center gap-2 hover:text-accent-400 transition-colors">
                <Phone size={14} />
                <span>+1 (800) 555-0199</span>
              </a>
              <a href="mailto:info@artitectmachinery.com" className="flex items-center gap-2 hover:text-accent-400 transition-colors">
                <Mail size={14} />
                <span>info@artitectmachinery.com</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="shrink-0" />
                <span>1200 Industrial Parkway, Cleveland, OH 44135</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-sans font-semibold text-sm uppercase tracking-wider mb-4">
                {category}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-accent-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-brand-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-brand-500 text-xs">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-brand-500">
            <a href="#" className="hover:text-brand-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand-300 transition-colors">Warranty</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
