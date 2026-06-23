import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold text-white tracking-tight mb-4">
            SSourcing<span className="text-blue-500">China</span>
          </h3>
          <p className="text-sm text-slate-400">
            Your trusted partner for navigating the Chinese manufacturing landscape. Factory verification, quality control, and end-to-end sourcing for global buyers.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
            <li><Link to="/products" className="hover:text-white transition-colors">Products We Source</Link></li>
            <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Supplier Verification</li>
            <li>Quality Control</li>
            <li>Production Tracking</li>
            <li>Shipping & Logistics</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-2 text-sm">
            <li>Email: info@ssourcingchina.com</li>
            <li>Phone: +86 (400) 123-4567</li>
            <li>Office: Shenzhen, Guangdong, China</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-slate-800 text-sm text-slate-500 text-center flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
        <div className="space-x-4 mt-4 md:mt-0">
          <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}
