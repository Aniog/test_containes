import { useEffect, useRef } from 'react';
import { MapPin, Flag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const countries = [
  {
    id: 'usa',
    name: '美国',
    nameEn: 'United States',
    flag: '🇺🇸',
    cities: 11,
    matches: 78,
    color: 'from-blue-600 to-red-600',
    accent: 'text-blue-400',
    border: 'border-blue-500/30',
    bg: 'bg-blue-500/10',
    desc: '作为主要东道主，美国将承办包括决赛在内的绝大多数比赛。拥有世界级的体育场馆和完善的基础设施，为球迷提供无与伦比的观赛体验。',
    highlights: ['承办决赛', '11座城市', '最多场次'],
    imgId: 'usa-country-img-3f7a',
    imgQuery: '[usa-title] [usa-desc] FIFA World Cup 2026 stadium',
  },
  {
    id: 'mexico',
    name: '墨西哥',
    nameEn: 'Mexico',
    flag: '🇲🇽',
    cities: 3,
    matches: 13,
    color: 'from-green-600 to-red-600',
    accent: 'text-green-400',
    border: 'border-green-500/30',
    bg: 'bg-green-500/10',
    desc: '墨西哥是唯一三次举办世界杯的国家（1970、1986、2026）。标志性的阿兹特克球场将再次见证世界杯的荣耀时刻，揭幕战将在此举行。',
    highlights: ['揭幕战举办地', '阿兹特克球场', '三届东道主'],
    imgId: 'mexico-country-img-8c2d',
    imgQuery: '[mexico-title] [mexico-desc] Estadio Azteca Mexico City',
  },
  {
    id: 'canada',
    name: '加拿大',
    nameEn: 'Canada',
    flag: '🇨🇦',
    cities: 2,
    matches: 13,
    color: 'from-red-600 to-red-800',
    accent: 'text-red-400',
    border: 'border-red-500/30',
    bg: 'bg-red-500/10',
    desc: '加拿大首次举办世界杯，多伦多和温哥华将成为北美足球盛宴的重要舞台。加拿大男足也将首次以东道主身份参加世界杯。',
    highlights: ['首次举办', '多伦多 & 温哥华', '本土参赛'],
    imgId: 'canada-country-img-5e9b',
    imgQuery: '[canada-title] [canada-desc] Canada soccer stadium Toronto Vancouver',
  },
];

export default function HostCountries() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section id="countries" ref={containerRef} className="py-24 px-4 md:px-8 bg-[#111827]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
            主办国家
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            三国联合<span className="text-amber-400">共创历史</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            美国、加拿大、墨西哥三国携手，首次实现三国联合举办世界杯，
            共同书写足球史上最壮观的篇章。
          </p>
        </div>

        {/* Country cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {countries.map((country) => (
            <div
              key={country.id}
              className={`bg-[#1a2035] border ${country.border} rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 group`}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  id={`${country.id}-img`}
                  alt={country.nameEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={country.imgId}
                  data-strk-img={country.imgQuery}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${country.color} opacity-40`} />
                <div className="absolute top-4 left-4 text-4xl">{country.flag}</div>
                <div className="absolute bottom-4 left-4">
                  <span className={`${country.bg} ${country.accent} text-xs font-semibold px-3 py-1 rounded-full border ${country.border}`}>
                    {country.cities}座城市 · {country.matches}场比赛
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <h3 id={`${country.id}-title`} className="text-white font-black text-2xl">{country.name}</h3>
                  <span className="text-slate-400 text-sm">{country.nameEn}</span>
                </div>
                <p id={`${country.id}-desc`} className="text-slate-400 text-sm leading-relaxed mb-5">
                  {country.desc}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {country.highlights.map((h) => (
                    <span
                      key={h}
                      className={`${country.bg} ${country.accent} text-xs font-medium px-3 py-1 rounded-full`}
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map hint */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-slate-500 text-sm">
            <MapPin className="w-4 h-4" />
            <span>横跨北美大陆，覆盖超过5000公里的赛事版图</span>
          </div>
        </div>
      </div>
    </section>
  );
}
