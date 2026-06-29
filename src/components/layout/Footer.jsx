import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
                <span className="text-navy font-extrabold text-lg">A</span>
              </div>
              <div className="leading-tight">
                <span className="text-white font-bold text-lg tracking-wide block">ARTITECT</span>
                <span className="text-gold text-xs tracking-[0.25em] font-medium">MACHINERY</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Precision-engineered metal folding solutions for industrial excellence. Trusted by manufacturers worldwide.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gold text-sm tracking-wide uppercase mb-4">Products</h4>
            <ul className="space-y-2.5">
              {['Double Folding Machine', 'Double Folder', 'Sheet Metal Folder', 'Sheet Metal Folding Machine', 'Metal Folder', 'Metal Folder Machine', 'Metal Folding Machine'].map((item) => (
                <li key={item}>
                  <a href="#products" className="text-white/60 hover:text-gold text-sm transition-colors duration-300">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gold text-sm tracking-wide uppercase mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Products', href: '#products' },
                { label: 'Why Choose Us', href: '#features' },
                { label: 'About Us', href: '#about' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/60 hover:text-gold text-sm transition-colors duration-300">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gold text-sm tracking-wide uppercase mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm">info@artitectmachinery.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm">Industrial Zone, Suite 200<br />Shanghai, China</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">&copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-gold text-sm transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-gold text-sm transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
