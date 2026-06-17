import { ChevronRight } from 'lucide-react';

const footerLinks = [
  {
    title: 'Products',
    links: [
      'Double Folding Machine',
      'Double Folder',
      'Sheet Metal Folder',
      'Sheet Metal Folding Machine',
      'Metal Folder',
      'Metal Folder Machine',
      'Metal Folding Machine',
    ],
  },
  {
    title: 'Support',
    links: ['Technical Support', 'Spare Parts', 'Training Programs', 'Service Centers', 'Documentation'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Careers', 'News & Media', 'Exhibitions', 'Contact'],
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-brand-gold flex items-center justify-center">
                <span className="text-brand-navy font-serif text-lg font-bold">A</span>
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-wide text-white">
                  ARTITECT
                </span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-white/50">
                  Machinery
                </span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-6">
              Precision metal folding solutions for manufacturers worldwide.
              German engineering excellence since 2003.
            </p>
            <div className="flex gap-3">
              {['DE', 'EN', 'FR'].map((lang) => (
                <button
                  key={lang}
                  className="text-xs uppercase tracking-wider px-3 py-1.5 border border-white/20 text-white/70 hover:bg-brand-gold hover:text-brand-navy hover:border-brand-gold transition-all"
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs uppercase tracking-[0.15em] text-brand-gold font-medium mb-5">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/60 text-sm hover:text-brand-gold transition-colors inline-flex items-center gap-1.5"
                    >
                      <ChevronRight size={12} />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY GmbH. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/40 text-xs hover:text-brand-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/40 text-xs hover:text-brand-gold transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-white/40 text-xs hover:text-brand-gold transition-colors">
              Imprint
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}