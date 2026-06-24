import React from "react";
import { Link } from "react-router-dom";
import { Hammer, Mail, Phone, MapPin, Globe, Earth } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <Link to="/" className="flex items-center space-x-2">
            <Hammer className="h-8 w-8 text-primary" />
            <span className="text-xl font-extrabold tracking-tighter text-background uppercase">
              Artitect <span className="text-primary font-medium">Machinery</span>
            </span>
          </Link>
          <p className="text-muted-foreground text-sm max-w-xs">
            Leading manufacturer of high-precision sheet metal folding and bending machines. Engineering excellence since 1995.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link to="/products" className="hover:text-primary transition-colors">Products</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li className="flex items-center space-x-3">
              <Phone className="h-4 w-4 text-primary" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="h-4 w-4 text-primary" />
              <span>sales@artitect.machinery</span>
            </li>
            <li className="flex items-center space-x-3 text-left">
              <MapPin className="h-5 w-5 text-primary shrink-0" />
              <span>123 Industrial Parkway, Engineering District, TX 75001</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="h-10 w-10 rounded-full border border-muted-foreground/30 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
              <Globe className="h-5 w-5" />
            </a>
            <a href="#" className="h-10 w-10 rounded-full border border-muted-foreground/30 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
              <Globe className="h-5 w-5" />
            </a>
            <a href="#" className="h-10 w-10 rounded-full border border-muted-foreground/30 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
              <Earth className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-muted-foreground/20">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Artitect Machinery. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
