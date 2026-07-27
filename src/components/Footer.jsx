import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter, ShieldCheck } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-bold tracking-tight">
              SSourcing<span className="text-secondary">China</span>
            </Link>
            <p className="text-primary-foreground/70 leading-relaxed max-w-sm">
              Your professional sourcing partner in China. We help global businesses navigate the Chinese market with confidence, transparency, and reliability.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-primary-foreground/70">
              <li><Link to="/services" className="hover:text-secondary transition-colors">Product Sourcing</Link></li>
              <li><Link to="/services" className="hover:text-secondary transition-colors">Supplier Verification</Link></li>
              <li><Link to="/services" className="hover:text-secondary transition-colors">Quality Control</Link></li>
              <li><Link to="/services" className="hover:text-secondary transition-colors">Production Monitoring</Link></li>
              <li><Link to="/services" className="hover:text-secondary transition-colors">Shipping Coordination</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-primary-foreground/70">
              <li><Link to="/how-it-works" className="hover:text-secondary transition-colors">How It Works</Link></li>
              <li><Link to="/products" className="hover:text-secondary transition-colors">Products We Source</Link></li>
              <li><Link to="/case-studies" className="hover:text-secondary transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-secondary transition-colors">Sourcing Blog</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-primary-foreground/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 flex-shrink-0 text-secondary" size={20} />
                <span>123 Sourcing Plaza, Futian District, Shenzhen, China 518000</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="flex-shrink-0 text-secondary" size={20} />
                <span>+86 123 456 789</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="flex-shrink-0 text-secondary" size={20} />
                <span>info@ssourcingchina.com</span>
              </li>
            </ul>
            <div className="mt-8 p-4 bg-white/5 rounded-lg flex items-center gap-3 border border-white/10">
              <ShieldCheck className="text-secondary" size={24} />
              <div className="text-sm">
                <p className="font-bold text-white">SGS Verified Agent</p>
                <p className="text-xs opacity-70">Cert. #SC-12345-2024</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
          <p>© {currentYear} SSourcing China Co., Ltd. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
