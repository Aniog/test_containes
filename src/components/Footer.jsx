import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-extrabold tracking-tight">SSourcing</span>
              <span className="text-sm font-medium opacity-80">China</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Your reliable China sourcing partner. We help global buyers find vetted suppliers, control quality, and manage shipments end-to-end.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                'Supplier Sourcing',
                'Factory Verification',
                'Quality Inspection',
                'Production Monitoring',
                'Shipping Coordination',
              ].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-sm text-slate-300 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2">
              {[
                { label: 'How It Works', path: '/how-it-works' },
                { label: 'Products We Source', path: '/products' },
                { label: 'Case Studies', path: '/case-studies' },
                { label: 'Blog', path: '/blog' },
                { label: 'Contact', path: '/contact' },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm text-slate-300 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                <span>hello@ssourcingchina.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                <span>+86 138 0000 0000</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Shenzhen, Guangdong, China</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/" className="text-xs text-slate-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/" className="text-xs text-slate-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
