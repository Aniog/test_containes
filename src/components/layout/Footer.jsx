import { Link } from 'react-router-dom';
import { Factory, Mail, MessageCircle, MapPin } from 'lucide-react';

const footerLinks = [
  {
    heading: 'Services',
    links: [
      { label: 'Mold Sourcing', path: '/mold-sourcing' },
      { label: 'Custom Mold Making', path: '/custom-mold-making' },
      { label: 'Mold Types', path: '/mold-types' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'How It Works', path: '/how-it-works' },
      { label: 'FAQ', path: '/faq' },
      { label: 'Contact Us', path: '/contact' },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{background: '#1A2332'}} className="text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#1B4F8A] rounded-lg flex items-center justify-center">
                <Factory className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg text-white">
                Case Mold <span className="text-[#E87722]">Trading</span>
              </span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Your mold sourcing and manufacturing support partner in China. We help overseas buyers find the right factory, compare quotations, and follow up from tooling to delivery.
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <a href="mailto:info@casemoldtrading.com" className="flex items-center gap-2 text-gray-300 hover:text-white text-sm transition-colors">
                <Mail className="w-4 h-4 text-[#E87722]" />
                info@casemoldtrading.com
              </a>
              <a href="https://wa.me/" className="flex items-center gap-2 text-gray-300 hover:text-white text-sm transition-colors">
                <MessageCircle className="w-4 h-4 text-[#E87722]" />
                WhatsApp Inquiry
              </a>
              <span className="flex items-center gap-2 text-gray-300 text-sm">
                <MapPin className="w-4 h-4 text-[#E87722]" />
                China-based, serving global buyers
              </span>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">{col.heading}</h4>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-gray-300 hover:text-white text-sm transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} Case Mold Trading. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs">
            Mold Sourcing &amp; Manufacturing Support in China
          </p>
        </div>
      </div>
    </footer>
  );
}
