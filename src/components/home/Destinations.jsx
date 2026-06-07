import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Clock, Thermometer, Zap, Waves, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import translations from '@/translations';

const destMeta = [
  {
    id: 'steampunk-albion',
    accentColor: 'from-orange-700 to-amber-600',
    borderColor: 'border-orange-700/40',
    glowColor: 'rgba(234,88,12,0.3)',
    badgeColor: 'bg-orange-900/40 text-orange-300 border-orange-700/40',
    icon: Zap,
    titleId: 'dest-steampunk-albion-title',
    descId: 'dest-steampunk-albion-desc',
    imgId: 'dest-img-steampunk-albion-8f2a9c',
  },
  {
    id: 'neon-megacity-ix',
    accentColor: 'from-cyan-700 to-blue-600',
    borderColor: 'border-cyan-700/40',
    glowColor: 'rgba(6,182,212,0.3)',
    badgeColor: 'bg-cyan-900/40 text-cyan-300 border-cyan-700/40',
    icon: Zap,
    titleId: 'dest-neon-megacity-ix-title',
    descId: 'dest-neon-megacity-ix-desc',
    imgId: 'dest-img-neon-megacity-ix-3b7d1e',
  },
  {
    id: 'terra-prima',
    accentColor: 'from-green-700 to-emerald-600',
    borderColor: 'border-green-700/40',
    glowColor: 'rgba(22,163,74,0.3)',
    badgeColor: 'bg-green-900/40 text-green-300 border-green-700/40',
    icon: Clock,
    titleId: 'dest-terra-prima-title',
    descId: 'dest-terra-prima-desc',
    imgId: 'dest-img-terra-prima-c4e8f2',
  },
  {
    id: 'aqua-infinitum',
    accentColor: 'from-blue-700 to-indigo-600',
    borderColor: 'border-blue-700/40',
    glowColor: 'rgba(29,78,216,0.3)',
    badgeColor: 'bg-blue-900/40 text-blue-300 border-blue-700/40',
    icon: Waves,
    titleId: 'dest-aqua-infinitum-title',
    descId: 'dest-aqua-infinitum-desc',
    imgId: 'dest-img-aqua-infinitum-9a1b3c',
  },
];

function DestinationCard({ meta, item, exploreLink, isChinese }) {
  const [hovered, setHovered] = useState(false);
  const Icon = meta.icon;

  return (
    <div
      className={`group relative rounded-2xl overflow-hidden border ${meta.borderColor} bg-void-dark transition-all duration-500 cursor-pointer`}
      style={{
        boxShadow: hovered ? `0 0 50px ${meta.glowColor}` : '0 4px 20px rgba(0,0,0,0.4)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          alt={item.name}
          data-strk-img-id={meta.imgId}
          data-strk-img={`[${meta.descId}] [${meta.titleId}]`}
          data-strk-img-ratio="3x2"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void-dark via-transparent to-transparent" />
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full border text-xs font-semibold tracking-wider ${meta.badgeColor} ${isChinese ? 'font-noto' : 'font-inter'}`}>
          {item.era}
        </div>
      </div>

      <div className="p-7">
        <div className="mb-1">
          <span className={`text-xs text-gray-500 tracking-[0.2em] uppercase ${isChinese ? 'font-noto' : 'font-inter'}`}>{item.tagline}</span>
        </div>
        <h3 id={meta.titleId} className={`text-2xl font-bold text-mist mb-3 ${isChinese ? 'font-noto' : 'font-cinzel'}`}>
          {item.name}
        </h3>
        <p id={meta.descId} className={`text-sm text-gray-400 leading-relaxed mb-5 ${isChinese ? 'font-noto' : 'font-inter'}`}>
          {item.description}
        </p>

        <div className="flex gap-4 mb-5">
          <div className={`flex items-center gap-1.5 text-xs text-gray-500 ${isChinese ? 'font-noto' : 'font-inter'}`}>
            <Clock className="w-3.5 h-3.5 shrink-0" />
            <span>{item.duration}</span>
          </div>
          <div className={`flex items-center gap-1.5 text-xs text-gray-500 ${isChinese ? 'font-noto' : 'font-inter'}`}>
            <Thermometer className="w-3.5 h-3.5 shrink-0" />
            <span>{item.climate}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {item.highlights.map((h) => (
            <span
              key={h}
              className={`text-xs px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10 ${isChinese ? 'font-noto' : 'font-inter'}`}
            >
              {h}
            </span>
          ))}
        </div>

        <a
          href="#book"
          className={`flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${meta.accentColor} bg-clip-text text-transparent hover:opacity-80 transition-opacity tracking-wider group/link ${isChinese ? 'font-noto' : 'font-cinzel'}`}
        >
          {exploreLink}
          <ArrowRight className="w-4 h-4 text-current transition-transform group-hover/link:translate-x-1" style={{ color: 'inherit' }} />
        </a>
      </div>
    </div>
  );
}

export default function Destinations() {
  const containerRef = useRef(null);
  const { lang } = useLanguage();
  const t = translations[lang].destinations;
  const isChinese = lang === 'zh';

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="destinations" ref={containerRef} className="py-28 px-6 md:px-12 lg:px-24 bg-space-black">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {destMeta.map((meta, i) => (
          <DestinationCard
            key={meta.id}
            meta={meta}
            item={t.items[i]}
            exploreLink={t.exploreLink}
            isChinese={isChinese}
          />
        ))}
      </div>
    </section>
  );
}
