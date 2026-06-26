import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-extrabold text-lg">A</span>
              </div>
              <div className="leading-tight">
                <span className="font-extrabold text-lg tracking-tight block">ARTITECT</span>
                <span className="text-accent font-medium text-xs tracking-[0.2em] uppercase">Machinery</span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Precision-engineered metal folding solutions for industrial excellence. Trusted by manufacturers worldwide.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-accent">Products</h4>
            <ul className="space-y-2.5">
              {['Double Folding Machine', 'Sheet Metal Folder', 'Metal Folding Machine', 'Double Folder'].map((item) => (
                <li key={item}>
                  <a href="#products" className="text-white/70 text-sm hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-accent">Company</h4>
            <ul className="space-y-2.5">
              {['About Us', 'Our Technology', 'Industries Served', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#about" className="text-white/70 text-sm hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-accent">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <span className="text-white/70 text-sm">+1 (800) 555-0199</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <span className="text-white/70 text-sm">info@artitectmachinery.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <span className="text-white/70 text-sm">Industrial Zone, Suite 400<br />Shanghai, China</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">&copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-white/50 text-sm hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/50 text-sm hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
