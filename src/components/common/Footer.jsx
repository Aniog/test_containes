import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t bg-secondary/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-primary font-bold text-white">SS</div>
              <span className="text-xl font-bold tracking-tight text-primary">SSourcing China</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your professional B2B partner for China sourcing. We bridge the gap between global buyers and reliable Chinese manufacturers.
            </p>
            <div className="flex gap-4">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/services" className="hover:text-primary">Our Services</Link></li>
              <li><Link to="/how-it-works" className="hover:text-primary">How It Works</Link></li>
              <li><Link to="/products" className="hover:text-primary">Products We Source</Link></li>
              <li><Link to="/case-studies" className="hover:text-primary">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-primary">Sourcing Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Supplier Sourcing</li>
              <li>Factory Audit</li>
              <li>Quality Inspection</li>
              <li>Order Management</li>
              <li>Logistics & Shipping</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-primary" />
                <span>Futian District, Shenzhen, Guangdong, China</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>quotes@ssourcingchina.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+86 755 1234 5678</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
