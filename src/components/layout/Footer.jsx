import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Globe className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">SSourcing<span className="text-primary">China</span></span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your professional China sourcing agent. We help global buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping with confidence.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
             <h3 className="font-semibold text-lg mb-4 text-foreground">Quick Links</h3>
             <ul className="space-y-3">
                <li><Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Our Services</Link></li>
                <li><Link to="/how-it-works" className="text-sm text-muted-foreground hover:text-primary transition-colors">How It Works</Link></li>
                <li><Link to="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">Products We Source</Link></li>
                <li><Link to="/case-studies" className="text-sm text-muted-foreground hover:text-primary transition-colors">Case Studies</Link></li>
                <li><Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
             </ul>
          </div>

          <div>
             <h3 className="font-semibold text-lg mb-4 text-foreground">Services</h3>
             <ul className="space-y-3">
                <li className="text-sm text-muted-foreground">Supplier Verification</li>
                <li className="text-sm text-muted-foreground">Product Sourcing</li>
                <li className="text-sm text-muted-foreground">Quality Inspection (QC)</li>
                <li className="text-sm text-muted-foreground">Production Follow-up</li>
                <li className="text-sm text-muted-foreground">Logistics & Shipping</li>
             </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">Shenzhen, Guangdong Province, China</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">+86 123 4567 8900</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:info@ssourcingchina.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">info@ssourcingchina.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};