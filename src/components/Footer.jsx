import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  services: [
    { label: 'Supplier Sourcing', path: '/services' },
    { label: 'Factory Verification', path: '/services' },
    { label: 'Quality Inspection', path: '/services' },
    { label: 'Production Follow-up', path: '/services' },
    { label: 'Shipping Coordination', path: '/services' },
  ],
  company: [
    { label: 'About Us', path: '/contact' },
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ],
  products: [
    { label: 'Electronics & Components', path: '/products' },
    { label: 'Home & Garden', path: '/products' },
    { label: 'Apparel & Textiles', path: '/products' },
    { label: 'Industrial Equipment', path: '/products' },
    { label: 'Packaging & Printing', path: '/products' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container-main section-padding">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-700">
                <Globe className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900">
                SSourcing <span className="text-blue-700">China</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-slate-600">
              Your trusted partner for sourcing reliable suppliers in China. We help global buyers
              find, verify, and manage manufacturing partners with confidence.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-slate-600">
                <Mail className="h-5 w-5 text-blue-700" />
                <span>info@ssourcingchina.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <Phone className="h-5 w-5 text-blue-700" />
                <span>+86 755 8888 8888</span>
              </div>
              <div className="flex items-start gap-3 text-slate-600">
                <MapPin className="h-5 w-5 text-blue-700 mt-0.5" />
                <span>Shenzhen, Guangdong, China</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-slate-900">Services</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-slate-600 hover:text-blue-700">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-slate-900">Company</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-slate-600 hover:text-blue-700">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-slate-900">Products We Source</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-slate-600 hover:text-blue-700">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/contact" className="text-sm text-slate-500 hover:text-blue-700">
              Privacy Policy
            </Link>
            <Link to="/contact" className="text-sm text-slate-500 hover:text-blue-700">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
