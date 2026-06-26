import { Link } from 'react-router-dom'
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-brand-charcoal text-brand-ivory">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold tracking-tighter">
              ARTITECT<span className="text-brand-gold">.</span>
            </h3>
            <p className="text-sm text-brand-ivory/60 max-w-xs">
              Pioneering precision folding technology for the next generation of architectural metal fabrication.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 cursor-pointer hover:text-brand-gold transition-colors" />
              <Twitter className="h-5 w-5 cursor-pointer hover:text-brand-gold transition-colors" />
              <Linkedin className="h-5 w-5 cursor-pointer hover:text-brand-gold transition-colors" />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-brand-gold">Products</h4>
            <ul className="space-y-2 text-sm text-brand-ivory/60">
              <li><Link to="/products" className="hover:text-brand-ivory transition-colors">Double Folding Machines</Link></li>
              <li><Link to="/products" className="hover:text-brand-ivory transition-colors">Sheet Metal Folders</Link></li>
              <li><Link to="/products" className="hover:text-brand-ivory transition-colors">Manual Folders</Link></li>
              <li><Link to="/products" className="hover:text-brand-ivory transition-colors">Industrial Accessories</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-brand-gold">Company</h4>
            <ul className="space-y-2 text-sm text-brand-ivory/60">
              <li><Link to="/about" className="hover:text-brand-ivory transition-colors">Our Story</Link></li>
              <li><Link to="/about" className="hover:text-brand-ivory transition-colors">Engineering Excellence</Link></li>
              <li><Link to="/contact" className="hover:text-brand-ivory transition-colors">Service & Support</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-brand-gold">Contact</h4>
            <ul className="space-y-4 text-sm text-brand-ivory/60">
              <li className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-brand-gold shrink-0" />
                <span>123 Industrial Parkway, Suite 500, Tech City</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-brand-gold shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-brand-gold shrink-0" />
                <span>info@artitectmachinery.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-brand-ivory/10 pt-8 text-center text-xs text-brand-ivory/40">
          <p>© {new Date().getFullYear()} Artitect Machinery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
