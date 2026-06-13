import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-slate-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Globe className="h-8 w-8 text-primary" />
              <span className="font-bold text-2xl text-white">SSourcing<span className="text-primary">China</span></span>
            </Link>
            <p className="text-sm mt-4 leading-relaxed">
              Your trusted partner in China. We help global buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping efficiently.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="hover:text-primary transition-colors text-sm">Our Services</Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-primary transition-colors text-sm">How It Works</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-primary transition-colors text-sm">Products We Source</Link>
              </li>
              <li>
                <Link to="/case-studies" className="hover:text-primary transition-colors text-sm">Case Studies</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-primary transition-colors text-sm">Blog & Insights</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Core Services</h3>
            <ul className="space-y-3">
              <li className="text-sm">Supplier Sourcing</li>
              <li className="text-sm">Factory Verification</li>
              <li className="text-sm">Sample Development</li>
              <li className="text-sm">Quality Inspection</li>
              <li className="text-sm">Logistics & Shipping</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                <span className="text-sm">Futian District, Shenzhen, Guangdong Province, China</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3 shrink-0" />
                <span className="text-sm">+86 123 4567 8900</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3 shrink-0" />
                <a href="mailto:info@ssourcingchina.com" className="text-sm hover:text-white transition-colors">
                  info@ssourcingchina.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-400">
            &copy; {currentYear} SSourcing China. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-slate-400">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;