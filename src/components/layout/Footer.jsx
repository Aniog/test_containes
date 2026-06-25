import { Link } from "react-router-dom";
import { Ship, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0B2545] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-white text-[#0B2545]">
                <Ship className="w-5 h-5" />
              </span>
              <span className="text-lg font-bold">SSourcing China</span>
            </div>
            <p className="text-sm text-white/75 leading-relaxed">
              A China-based sourcing partner for global buyers. We help brands, distributors and Amazon sellers find reliable suppliers and ship quality products from China.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-white/75">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li><Link to="/how-it-works" className="hover:text-white">How It Works</Link></li>
              <li><Link to="/case-studies" className="hover:text-white">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-white/75">
              <li>Supplier Sourcing</li>
              <li>Factory Verification</li>
              <li>Quality Inspection</li>
              <li>Production Follow-up</li>
              <li>Shipping &amp; Logistics</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-white mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/75">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-white/60" />
                <span>Yiwu, Zhejiang, China</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 mt-0.5 shrink-0 text-white/60" />
                <a href="mailto:contact@ssourcingchina.com" className="hover:text-white">
                  contact@ssourcingchina.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 mt-0.5 shrink-0 text-white/60" />
                <span>+86 138 0000 0000</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-xs text-white/60">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <p className="text-xs text-white/60">
            Sourcing &middot; QC &middot; Logistics from China to the world.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
