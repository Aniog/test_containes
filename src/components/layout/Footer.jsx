import { Compass, Instagram, Twitter, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import translations from '@/translations';

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang].footer;
  const isChinese = lang === 'zh';

  return (
    <footer id="about" className="bg-space-black border-t border-green-900/30 pt-16 pb-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-green-700 to-emerald-500 flex items-center justify-center shadow-[0_0_20px_rgba(22,163,74,0.4)]">
                <Compass className="w-5 h-5 text-white" />
              </div>
              <span className="font-cinzel text-xl font-bold text-mist tracking-widest">
                NEXUS <span className="text-gold">VOYAGES</span>
              </span>
            </div>
            <p className={`text-sm text-gray-500 leading-relaxed max-w-xs mb-6 ${isChinese ? 'font-noto' : 'font-inter'}`}>
              {t.tagline}
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-500 hover:text-gold hover:border-gold/40 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(t.categories).map(([category, links]) => (
            <div key={category}>
              <h4 className={`text-sm font-semibold text-mist tracking-wider mb-4 ${isChinese ? 'font-noto' : 'font-cinzel'}`}>
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className={`text-sm text-gray-500 hover:text-gold transition-colors duration-200 ${isChinese ? 'font-noto' : 'font-inter'}`}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-green-900/60 to-transparent mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className={`text-xs text-gray-600 ${isChinese ? 'font-noto' : 'font-inter'}`}>
            {t.copyright}
          </p>
          <div className="flex gap-6">
            {t.legal.map((item) => (
              <a
                key={item}
                href="#"
                className={`text-xs text-gray-600 hover:text-gray-400 transition-colors ${isChinese ? 'font-noto' : 'font-inter'}`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
