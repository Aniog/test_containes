import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0b] border-t border-[#2a2a2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#c9a44c] flex items-center justify-center rounded-sm">
                <span className="text-[#0a0a0b] font-bold text-lg leading-none">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#f5f5f5] font-bold text-sm tracking-[0.15em] uppercase leading-tight">
                  ARTITECT
                </span>
                <span className="text-[#a0a0a8] text-[10px] tracking-[0.2em] uppercase leading-tight">
                  MACHINERY
                </span>
              </div>
            </div>
            <p className="text-[#a0a0a8] text-sm leading-relaxed">
              Precision engineering for the modern workshop. We design and manufacture
              world-class sheet metal folding machines trusted by industry professionals
              worldwide.
            </p>
          </div>

          <div>
            <h4 className="text-[#f5f5f5] font-semibold text-sm uppercase tracking-[0.1em] mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Home', 'Products', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' us', '')}`}
                    className="text-[#a0a0a8] hover:text-[#c9a44c] text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#f5f5f5] font-semibold text-sm uppercase tracking-[0.1em] mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-[#a0a0a8] text-sm">
                <Phone className="w-4 h-4 mt-0.5 text-[#c9a44c] shrink-0" />
                <span>+1 (800) 555-0199</span>
              </li>
              <li className="flex items-start gap-3 text-[#a0a0a8] text-sm">
                <Mail className="w-4 h-4 mt-0.5 text-[#c9a44c] shrink-0" />
                <span>info@artitectmachinery.com</span>
              </li>
              <li className="flex items-start gap-3 text-[#a0a0a8] text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-[#c9a44c] shrink-0" />
                <span>4820 Industrial Parkway, Building C<br />Cleveland, OH 44125</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#2a2a2e] text-center">
          <p className="text-[#66666a] text-xs">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
