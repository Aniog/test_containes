import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded bg-teal-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <span className="text-xl font-bold text-white">
                SSourcing <span className="text-teal-400">China</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              A China-based sourcing agent helping overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:hello@ssourcingchina.com" className="text-slate-400 hover:text-white transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services" className="text-slate-400 hover:text-teal-400 transition-colors">Supplier Sourcing</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-teal-400 transition-colors">Factory Verification</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-teal-400 transition-colors">Quality Control</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-teal-400 transition-colors">Production Follow-Up</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-teal-400 transition-colors">Shipping Coordination</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/how-it-works" className="text-slate-400 hover:text-teal-400 transition-colors">How It Works</Link></li>
              <li><Link to="/products" className="text-slate-400 hover:text-teal-400 transition-colors">Products We Source</Link></li>
              <li><Link to="/case-studies" className="text-slate-400 hover:text-teal-400 transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="text-slate-400 hover:text-teal-400 transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-teal-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-teal-500" />
                <span className="text-slate-400">hello@ssourcingchina.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-teal-500" />
                <span className="text-slate-400">+86 755 1234 5678</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-teal-500" />
                <span className="text-slate-400">Shenzhen, Guangdong, China</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
