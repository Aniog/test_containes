import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Globe className="h-6 w-6 text-secondary" />
              <span className="text-xl font-bold tracking-tight font-heading">SSourcing <span className="text-secondary">China</span></span>
            </Link>
            <p className="text-primary-foreground/70 text-sm">
              Your professional partner in China. We bridge the gap between global buyers and reliable Chinese manufacturers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Facebook className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg">Services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/services" className="hover:text-secondary transition-colors">Product Sourcing</Link></li>
              <li><Link to="/services" className="hover:text-secondary transition-colors">Factory Audit</Link></li>
              <li><Link to="/services" className="hover:text-secondary transition-colors">Quality Inspection</Link></li>
              <li><Link to="/services" className="hover:text-secondary transition-colors">Production Monitoring</Link></li>
              <li><Link to="/services" className="hover:text-secondary transition-colors">Shipping & Logistics</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg">Company</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/how-it-works" className="hover:text-secondary transition-colors">How It Works</Link></li>
              <li><Link to="/case-studies" className="hover:text-secondary transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-secondary transition-colors">Sourcing Blog</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact Us</Link></li>
              <li><Link to="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg">Contact Us</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-secondary shrink-0" />
                <span>123 Sourcing Plaza, Futian District, Shenzhen, China</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <span>+86 755 1234 5678</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <span>contact@ssourcing-china.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/50">
          <p>© {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
