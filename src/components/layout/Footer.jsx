import { Mail, Phone, MapPin } from 'lucide-react'

const productLinks = [
  'Double Folding Machine',
  'Double Folder',
  'Sheet Metal Folder',
  'Sheet Metal Folding Machine',
  'Metal Folder',
  'Metal Folder Machine',
  'Metal Folding Machine',
]

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-extrabold tracking-wide uppercase text-white mb-4">
              ARTITECT <span className="font-light">MACHINERY</span>
            </h3>
            <p className="text-white/70 leading-relaxed mb-6">
              Engineering precision folding solutions for sheet metal fabrication. Built for performance, designed for reliability.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gold mb-4">Products</h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link}>
                  <a href="#products" className="text-white/70 hover:text-gold transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-white/70 hover:text-gold transition-colors">Home</a></li>
              <li><a href="#products" className="text-white/70 hover:text-gold transition-colors">Products</a></li>
              <li><a href="#why-us" className="text-white/70 hover:text-gold transition-colors">Why Us</a></li>
              <li><a href="#applications" className="text-white/70 hover:text-gold transition-colors">Applications</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gold mb-4">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span>Industrial Zone, Building 7<br />Manufacturing District</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="tel:+12345678900" className="hover:text-gold transition-colors">+1 (234) 567-8900</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="mailto:info@artitectmachinery.com" className="hover:text-gold transition-colors">info@artitectmachinery.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>© {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.</p>
          <p>Precision engineering for modern fabrication.</p>
        </div>
      </div>
    </footer>
  )
}
