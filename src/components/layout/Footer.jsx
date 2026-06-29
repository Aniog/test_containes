import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SC</span>
              </div>
              <div>
                <span className="text-lg font-bold text-white">SSourcing</span>
                <span className="text-lg font-bold text-primary-light"> China</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Your trusted China-based sourcing partner. We help global buyers find reliable suppliers, verify factories, and manage quality control.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              <li><Link to="/services" className="text-sm text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/how-it-works" className="text-sm text-gray-400 hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/products" className="text-sm text-gray-400 hover:text-white transition-colors">Products We Source</Link></li>
              <li><Link to="/case-studies" className="text-sm text-gray-400 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="text-sm text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2.5">
              <li><Link to="/services" className="text-sm text-gray-400 hover:text-white transition-colors">Supplier Verification</Link></li>
              <li><Link to="/services" className="text-sm text-gray-400 hover:text-white transition-colors">Factory Audit</Link></li>
              <li><Link to="/services" className="text-sm text-gray-400 hover:text-white transition-colors">Quality Inspection</Link></li>
              <li><Link to="/services" className="text-sm text-gray-400 hover:text-white transition-colors">Production Monitoring</Link></li>
              <li><Link to="/services" className="text-sm text-gray-400 hover:text-white transition-colors">Shipping & Logistics</Link></li>
              <li><Link to="/services" className="text-sm text-gray-400 hover:text-white transition-colors">Product Sourcing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary-light mt-0.5 shrink-0" />
                <span className="text-sm text-gray-400">Guangzhou, Guangdong Province, China</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-primary-light shrink-0" />
                <a href="mailto:info@ssourcingchina.com" className="text-sm text-gray-400 hover:text-white transition-colors">info@ssourcingchina.com</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary-light shrink-0" />
                <a href="tel:+861234567890" className="text-sm text-gray-400 hover:text-white transition-colors">+86 123 4567 890</a>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg px-5 py-2.5 text-sm transition-colors"
              >
                Get a Free Sourcing Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}