import React from "react";
import { Link } from "react-router-dom";
import { Globe2, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand-800 text-brand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-white/10 text-white">
                <Globe2 className="w-5 h-5" />
              </span>
              <span className="font-bold text-white tracking-tight text-lg">
                SSourcing<span className="text-accent-500">.</span>China
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-brand-100/80">
              A China-based sourcing agent helping global buyers verify
              suppliers, control quality, follow production and ship goods
              worldwide.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className="hover:text-white" to="/services">
                  Supplier sourcing
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" to="/services">
                  Factory verification
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" to="/services">
                  Quality inspection
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" to="/services">
                  Production follow-up
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" to="/services">
                  Shipping & logistics
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className="hover:text-white" to="/how-it-works">
                  How it works
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" to="/products">
                  Products we source
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" to="/case-studies">
                  Case studies
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" to="/blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Get in touch
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-accent-500 shrink-0" />
                <span>Yiwu, Zhejiang, China</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-accent-500 shrink-0" />
                <a className="hover:text-white" href="mailto:hello@ssourcing.cn">
                  hello@ssourcing.cn
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-accent-500 shrink-0" />
                <span>+86 138 0000 0000 (WhatsApp / WeChat)</span>
              </li>
            </ul>
            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-md bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold px-4 py-2.5 transition"
            >
              Get a Free Sourcing Quote
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-brand-100/70">
          <p>© {year} SSourcing China. All rights reserved.</p>
          <p>
            Sourcing agent · Supplier verification · QC · Shipping coordination
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
