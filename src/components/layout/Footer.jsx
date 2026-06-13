import { Wrench, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <Wrench className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <span className="text-lg font-bold text-white tracking-tight">ARTITECT</span>
                <span className="text-lg font-light text-slate-400 ml-1">MACHINERY</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Precision-engineered sheet metal folding solutions for industries worldwide. Quality craftsmanship since day one.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Products</h3>
            <ul className="space-y-2.5">
              {['Double Folding Machine', 'Sheet Metal Folder', 'Metal Folding Machine', 'Double Folder'].map((item) => (
                <li key={item}>
                  <a href="#products" className="text-sm text-slate-400 hover:text-amber-500 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2.5">
              {['About Us', 'Our Process', 'Quality Assurance', 'Careers'].map((item) => (
                <li key={item}>
                  <a href="#about" className="text-sm text-slate-400 hover:text-amber-500 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-400">Industrial District, Manufacturing City</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href="tel:+1234567890" className="text-sm text-slate-400 hover:text-amber-500 transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a href="mailto:info@artitect.com" className="text-sm text-slate-400 hover:text-amber-500 transition-colors">
                  info@artitect.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Artitect Machinery. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
