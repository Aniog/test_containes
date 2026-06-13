import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <span className="text-lg font-bold text-white">
                SSourcing<span className="text-blue-400">China</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Your reliable China sourcing partner. We help global buyers find verified suppliers, manage quality control, and coordinate shipping.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a href="mailto:info@ssourcingchina.com" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                info@ssourcingchina.com
              </a>
              <a href="tel:+8613800138000" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                +86 138 0013 8000
              </a>
              <span className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4" />
                Guangzhou, China
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors">Supplier Sourcing</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors">Factory Verification</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors">Quality Inspection</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors">Production Follow-up</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors">Shipping Coordination</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/how-it-works" className="text-slate-400 hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/products" className="text-slate-400 hover:text-white transition-colors">Products We Source</Link></li>
              <li><Link to="/case-studies" className="text-slate-400 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="text-slate-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Get Started</h4>
            <p className="text-sm text-slate-400 mb-4">
              Ready to source from China? Get a free sourcing quote and let us handle the rest.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
