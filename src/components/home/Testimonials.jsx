import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import translations from '@/translations';

const accentColors = ['text-orange-400', 'text-emerald-400', 'text-emerald-400', 'text-blue-400'];

function StarRating({ count }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 text-gold fill-gold" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { lang } = useLanguage();
  const t = translations[lang].testimonials;
  const isChinese = lang === 'zh';

  return (
    <section id="testimonials" className="py-28 px-6 md:px-12 lg:px-24 bg-space-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-700/40 bg-green-900/20 mb-6">
            <span className={`text-xs font-semibold text-green-300 tracking-[0.2em] uppercase ${isChinese ? 'font-noto' : 'font-inter'}`}>
              {t.badge}
            </span>
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold text-mist mb-5 ${isChinese ? 'font-noto' : 'font-cinzel'}`}>
            {t.heading1} <span className="text-gold">{t.heading2}</span>
          </h2>
          <p className={`text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed ${isChinese ? 'font-noto' : 'font-inter'}`}>
            {t.subtitle}
          </p>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-green-700/60 to-transparent mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.items.map((item, i) => (
            <div
              key={item.name}
              className="p-8 rounded-2xl border border-green-900/40 bg-void-dark hover:border-green-700/60 transition-all duration-300 group relative"
            >
              <Quote className="w-8 h-8 text-green-700/40 mb-4" />
              <p className={`text-gray-300 leading-relaxed text-base mb-6 italic ${isChinese ? 'font-noto' : 'font-inter'}`}>
                "{item.quote}"
              </p>
              <StarRating count={5} />
              <div className="mt-5 pt-5 border-t border-white/5 flex items-center justify-between">
                <div>
                  <div className={`text-base font-semibold text-mist ${isChinese ? 'font-noto' : 'font-cinzel'}`}>{item.name}</div>
                  <div className={`text-xs text-gray-500 mt-0.5 ${isChinese ? 'font-noto' : 'font-inter'}`}>{item.title}</div>
                </div>
                <div className={`text-xs font-semibold ${accentColors[i]} tracking-wider uppercase px-3 py-1 rounded-full bg-white/5 border border-white/10 ${isChinese ? 'font-noto' : 'font-inter'}`}>
                  {item.destination}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {t.trust.map((item) => (
            <div key={item.label} className="text-center">
              <div className="font-cinzel text-3xl font-bold text-gold">{item.value}</div>
              <div className={`text-xs text-gray-500 tracking-wider uppercase mt-1 ${isChinese ? 'font-noto' : 'font-inter'}`}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
