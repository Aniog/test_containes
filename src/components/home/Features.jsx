import { Shield, Gem, Clock, Headphones, Map, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import translations from '@/translations';

const featureMeta = [
  { icon: Shield, color: 'text-emerald-400', bg: 'bg-emerald-900/20', border: 'border-emerald-700/30' },
  { icon: Gem,    color: 'text-gold',         bg: 'bg-yellow-900/20',  border: 'border-yellow-700/30' },
  { icon: Clock,  color: 'text-emerald-400', bg: 'bg-emerald-900/20', border: 'border-emerald-700/30' },
  { icon: Headphones, color: 'text-emerald-400', bg: 'bg-emerald-900/20', border: 'border-emerald-700/30' },
  { icon: Map,    color: 'text-orange-400',   bg: 'bg-orange-900/20',  border: 'border-orange-700/30' },
  { icon: Star,   color: 'text-pink-400',     bg: 'bg-green-900/20',   border: 'border-pink-700/30' },
];

export default function Features() {
  const { lang } = useLanguage();
  const t = translations[lang].features;
  const isChinese = lang === 'zh';

  return (
    <section id="experiences" className="py-28 px-6 md:px-12 lg:px-24 bg-void-dark relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/10 mb-6">
            <span className={`text-xs font-semibold text-gold tracking-[0.2em] uppercase ${isChinese ? 'font-noto' : 'font-inter'}`}>
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

        <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureMeta.map((meta, i) => {
            const Icon = meta.icon;
            const item = t.items[i];
            return (
              <div
                key={item.title}
                className={`p-7 rounded-2xl border ${meta.border} ${meta.bg} hover:scale-[1.02] transition-transform duration-300 group`}
              >
                <div className={`w-12 h-12 rounded-xl ${meta.bg} border ${meta.border} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${meta.color}`} />
                </div>
                <h3 className={`text-lg font-semibold ${meta.color} mb-3 ${isChinese ? 'font-noto' : 'font-cinzel'}`}>
                  {item.title}
                </h3>
                <p className={`text-sm text-gray-400 leading-relaxed ${isChinese ? 'font-noto' : 'font-inter'}`}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
