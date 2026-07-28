import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-navy font-bold text-sm">SS</span>
              </div>
              <span className="font-bold text-lg tracking-tight">SSourcing China</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Your reliable China sourcing partner. We help global buyers find verified suppliers, manage quality, and coordinate shipping.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-slate-300">Services</h4>
            <ul className="space-y-2.5">
              {['Supplier Sourcing', 'Factory Verification', 'Quality Inspection', 'Production Follow-up', 'Shipping Coordination'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-slate-300 hover:text-white text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-slate-300">Company</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'About Us', path: '/how-it-works' },
                { label: 'How It Works', path: '/how-it-works' },
                { label: 'Case Studies', path: '/case-studies' },
                { label: 'Blog', path: '/blog' },
                { label: 'Contact', path: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className="text-slate-300 hover:text-white text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-slate-300">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                <span>info@ssourcingchina.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                <span>+86 755 8888 8888</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Shenzhen, Guangdong, China</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-600 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="#" className="text-slate-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-slate-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
