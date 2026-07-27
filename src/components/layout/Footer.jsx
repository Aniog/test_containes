import { Link } from 'react-router-dom'
import { Globe, Mail, MapPin, Phone } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 pt-16 pb-8 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Globe className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold text-white tracking-tight">SSourcing</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              Your trusted China sourcing agent for global B2B buyers. We find reliable suppliers, verify factories, and manage your entire supply chain.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="hover:text-white transition-colors">Supplier Verification</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Product Sourcing</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Quality Control (QC)</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Production Follow-up</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Shipping & Logistics</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Products We Source</Link></li>
              <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gray-500 shrink-0 mt-0.5" />
                <span className="text-gray-400">Guangzhou, Guangdong, China</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gray-500 shrink-0" />
                <a href="mailto:info@ssourcing.cn" className="hover:text-white transition-colors">info@ssourcing.cn</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
