import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <span className="text-xl font-bold tracking-tight text-white mb-4 block">
            SSourcing China
          </span>
          <p className="text-sm">
            Your reliable sourcing partner in China. We help global buyers find
            suppliers, verify factories, inspect quality, and coordinate shipping.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            </li>
            <li>
              <Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link>
            </li>
            <li>
              <Link to="/products-we-source" className="hover:text-white transition-colors">Products We Source</Link>
            </li>
            <li>
              <Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-4">Contact</h3>
          <address className="not-italic text-sm space-y-2">
            <p>Guangzhou, Guangdong</p>
            <p>China</p>
            <p className="mt-2">
              <a href="mailto:info@ssourcingchina.local" className="hover:text-white transition-colors">
                info@ssourcingchina.local
              </a>
            </p>
          </address>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-8 mt-12 pt-8 border-t border-slate-800 text-sm text-center">
        <p>&copy; {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
      </div>
    </footer>
  );
}