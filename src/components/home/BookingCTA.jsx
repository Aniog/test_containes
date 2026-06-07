import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import translations from '@/translations';

export default function BookingCTA() {
  const containerRef = useRef(null);
  const { lang } = useLanguage();
  const t = translations[lang].booking;
  const isChinese = lang === 'zh';

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="book" ref={containerRef} className="py-28 px-6 md:px-12 lg:px-24 bg-void-dark relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-20"
        data-strk-bg-id="cta-bg-portal-7x3m9q"
        data-strk-bg="[cta-title] [cta-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-green-900/40 via-void-dark/80 to-space-black/90" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-700/20 rounded-full blur-3xl pointer-events-none z-10" />

      <div className="max-w-4xl mx-auto relative z-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/40 bg-gold/10 mb-8">
          <Sparkles className="w-4 h-4 text-gold" />
          <span className={`text-xs font-semibold text-gold tracking-[0.2em] uppercase ${isChinese ? 'font-noto' : 'font-inter'}`}>
            {t.badge}
          </span>
        </div>

        <h2
          id="cta-title"
          className={`text-4xl md:text-6xl font-bold text-mist mb-6 leading-tight ${isChinese ? 'font-noto' : 'font-cinzel'}`}
          style={{ textShadow: '0 0 40px rgba(22,163,74,0.4)' }}
        >
          {t.heading}
        </h2>

        <p
          id="cta-subtitle"
          className={`text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed ${isChinese ? 'font-noto' : 'font-inter'}`}
        >
          {t.subtitle}
        </p>

        <div className="bg-space-black/60 backdrop-blur-md border border-green-900/40 rounded-2xl p-8 md:p-10 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className={`text-xs text-gray-400 tracking-wider uppercase block mb-2 ${isChinese ? 'font-noto' : 'font-inter'}`}>
                {t.labelName}
              </label>
              <input
                type="text"
                placeholder={t.placeholderName}
                className={`w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-mist placeholder-gray-600 focus:outline-none focus:border-green-600 transition-colors ${isChinese ? 'font-noto' : 'font-inter'}`}
              />
            </div>
            <div>
              <label className={`text-xs text-gray-400 tracking-wider uppercase block mb-2 ${isChinese ? 'font-noto' : 'font-inter'}`}>
                {t.labelEmail}
              </label>
              <input
                type="email"
                placeholder={t.placeholderEmail}
                className={`w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-mist placeholder-gray-600 focus:outline-none focus:border-green-600 transition-colors ${isChinese ? 'font-noto' : 'font-inter'}`}
              />
            </div>
          </div>

          <div className="mb-4">
            <label className={`text-xs text-gray-400 tracking-wider uppercase block mb-2 ${isChinese ? 'font-noto' : 'font-inter'}`}>
              {t.labelDestination}
            </label>
            <select className={`w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-mist focus:outline-none focus:border-green-600 transition-colors appearance-none cursor-pointer ${isChinese ? 'font-noto' : 'font-inter'}`}>
              <option value="" className="bg-space-black">{t.selectDefault}</option>
              {t.selectOptions.map((opt, i) => (
                <option key={i} value={i} className="bg-space-black">{opt}</option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label className={`text-xs text-gray-400 tracking-wider uppercase block mb-2 ${isChinese ? 'font-noto' : 'font-inter'}`}>
              {t.labelRequests}
            </label>
            <textarea
              rows={3}
              placeholder={t.placeholderRequests}
              className={`w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-mist placeholder-gray-600 focus:outline-none focus:border-green-600 transition-colors resize-none ${isChinese ? 'font-noto' : 'font-inter'}`}
            />
          </div>

          <button
            type="button"
            className={`w-full text-sm font-semibold py-4 rounded-full bg-gradient-to-r from-green-700 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-500 transition-all duration-300 shadow-[0_0_30px_rgba(22,163,74,0.4)] hover:shadow-[0_0_50px_rgba(22,163,74,0.6)] tracking-widest ${isChinese ? 'font-noto' : 'font-cinzel'}`}
          >
            {t.submit}
          </button>

          <p className={`text-xs text-gray-600 mt-4 text-center ${isChinese ? 'font-noto' : 'font-inter'}`}>
            {t.note}
          </p>
        </div>
      </div>
    </section>
  );
}
