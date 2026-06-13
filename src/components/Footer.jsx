import { Link } from 'react-router-dom'
import { Globe, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#1a2b4a] text-white">
      <div className="container-main section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Globe className="w-6 h-6 text-[#c4951a]" />
              <span className="text-lg font-extrabold tracking-tight">
                SSourcing<span className="text-[#c4951a]">China</span>
              </span>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed">
              Your trusted China sourcing agent. We help global buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Supplier Sourcing', path: '/services' },
                { label: 'Factory Verification', path: '/services' },
                { label: 'Quality Inspection', path: '/services' },
                { label: 'Production Follow-Up', path: '/services' },
                { label: 'Shipping Coordination', path: '/services' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-sm text-white/70 hover:text-[#c4951a] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'About Us', path: '/how-it-works' },
                { label: 'Case Studies', path: '/case-studies' },
                { label: 'Blog', path: '/blog' },
                { label: 'Products We Source', path: '/products' },
                { label: 'Contact', path: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-sm text-white/70 hover:text-[#c4951a] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#c4951a] mt-0.5 shrink-0" />
                <span className="text-sm text-white/70">hello@ssourcingchina.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#c4951a] mt-0.5 shrink-0" />
                <span className="text-sm text-white/70">+86 21 5555 8888</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c4951a] mt-0.5 shrink-0" />
                <span className="text-sm text-white/70">
                  Shanghai, China
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-white/40 hover:text-white/70 cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="text-xs text-white/40 hover:text-white/70 cursor-pointer transition-colors">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
