import { Cog, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-navy-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                <Cog className="w-6 h-6 text-brand-gold" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-wide leading-tight text-white">
                  ARTITECT
                </span>
                <span className="text-[10px] font-semibold tracking-[0.3em] uppercase leading-tight text-brand-gold-light">
                  MACHINERY
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Engineering excellence in sheet metal folding solutions.
              Precision machinery built for professionals who demand the best.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-gold mb-6">
              Products
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#products" className="hover:text-white transition-colors">Double Folding Machine</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Sheet Metal Folder</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Metal Folding Machine</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Custom Solutions</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-gold mb-6">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Request a Quote</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-gold mb-6">
              Contact Info
            </h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-gold mt-0.5 shrink-0" />
                <span>123 Industrial Parkway<br />Manufacturing District, OH 44101</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <span>+1 (555) 234-5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <span>info@artitectmachinery.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-slate-500 hover:text-brand-gold transition-colors cursor-pointer"
          >
            Back to top
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
