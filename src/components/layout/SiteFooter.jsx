import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { navLinks } from '@/data/siteData.jsx';

const SiteFooter = () => {
  return (
    <footer className="bg-steel-900 text-paper relative overflow-hidden">
      <div className="container-artitect pt-20 md:pt-28 pb-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-10 h-10 bg-paper text-steel-900 font-display font-extrabold text-lg">
                A
              </span>
              <div className="flex flex-col leading-none">
                <span className="font-display font-extrabold text-paper text-lg tracking-tight">
                  ARTITECT
                </span>
                <span className="font-mono text-[10px] tracking-wider2 uppercase text-steel-300 mt-1">
                  Machinery
                </span>
              </div>
            </div>
            <p className="mt-6 text-steel-300 text-base leading-relaxed max-w-md">
              Engineered precision for sheet metal fabrication. From the
              workshop floor to the architectural facade, ARTITECT machines
              fold metal the way it should be folded — accurately, repeatably,
              and reliably.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 text-accent-500 font-semibold uppercase tracking-wider2 text-sm hover:text-accent-100 transition-colors"
            >
              Start a project with us
              <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </div>

          <div className="lg:col-span-2">
            <h4 className="label-eyebrow text-steel-300">Site</h4>
            <ul className="mt-6 space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-paper text-sm hover:text-accent-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="label-eyebrow text-steel-300">Machines</h4>
            <ul className="mt-6 space-y-3 text-sm">
              <li><Link to="/products" className="hover:text-accent-500">Double Folding Machine</Link></li>
              <li><Link to="/products" className="hover:text-accent-500">Double Folder</Link></li>
              <li><Link to="/products" className="hover:text-accent-500">Sheet Metal Folder</Link></li>
              <li><Link to="/products" className="hover:text-accent-500">Sheet Metal Folding Machine</Link></li>
              <li><Link to="/products" className="hover:text-accent-500">Metal Folder</Link></li>
              <li><Link to="/products" className="hover:text-accent-500">Metal Folder Machine</Link></li>
              <li><Link to="/products" className="hover:text-accent-500">Metal Folding Machine</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="label-eyebrow text-steel-300">Contact</h4>
            <ul className="mt-6 space-y-4 text-sm text-steel-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-accent-500 flex-shrink-0" strokeWidth={1.5} />
                <span>
                  No. 88 Precision Avenue<br />
                  Industrial Park, Suzhou 215123
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent-500 flex-shrink-0" strokeWidth={1.5} />
                <a href="tel:+8651288889999" className="hover:text-paper">+86 512 8888 9999</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent-500 flex-shrink-0" strokeWidth={1.5} />
                <a href="mailto:sales@artitect-machinery.com" className="hover:text-paper">
                  sales@artitect-machinery.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-steel-700 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-steel-300 tracking-wide">
            © {new Date().getFullYear()} ARTITECT MACHINERY Co., Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-steel-300 tracking-wide">
            <span>ISO 9001:2015 certified</span>
            <span className="hidden md:inline">·</span>
            <span>CE compliant</span>
            <span className="hidden md:inline">·</span>
            <span>Built with steel</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
