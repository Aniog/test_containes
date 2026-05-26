import { MapPin, Users } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const venues = [
  {
    id: 'metlife',
    name: '大都会球场',
    city: '纽约/新泽西',
    country: '🇺🇸 美国',
    capacity: 82500,
    matches: 8,
    final: true,
    description: '决赛场地，全美最大球场之一',
  },
  {
    id: 'azteca',
    name: '阿兹特克球场',
    city: '墨西哥城',
    country: '🇲🇽 墨西哥',
    capacity: 87523,
    matches: 5,
    final: false,
    description: '世界杯历史最悠久的球场，开幕式场地',
  },
  {
    id: 'sofi',
    name: 'SoFi球场',
    city: '洛杉矶',
    country: '🇺🇸 美国',
    capacity: 70240,
    matches: 7,
    final: false,
    description: '现代化顶级球场，好莱坞之城',
  },
  {
    id: 'dallas',
    name: 'AT&T球场',
    city: '达拉斯',
    country: '🇺🇸 美国',
    capacity: 80000,
    matches: 6,
    final: false,
    description: '德克萨斯之星，室内穹顶球场',
  },
  {
    id: 'toronto',
    name: 'BMO球场',
    city: '多伦多',
    country: '🇨🇦 加拿大',
    capacity: 45000,
    matches: 6,
    final: false,
    description: '加拿大最重要的足球圣地',
  },
  {
    id: 'guadalajara',
    name: '阿克隆球场',
    city: '瓜达拉哈拉',
    country: '🇲🇽 墨西哥',
    capacity: 49850,
    matches: 5,
    final: false,
    description: '墨西哥第二大城市的现代球场',
  },
];

export default function VenuesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="venues" ref={containerRef} className="bg-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#FFD700] text-xs font-bold uppercase tracking-widest">比赛场馆</span>
          <h2 className="font-['Bebas_Neue'] text-4xl sm:text-5xl text-white mt-2 tracking-wide">
            世界级比赛场馆
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            横跨三国的16座顶级球场，为球迷带来无与伦比的观赛体验
          </p>
        </div>

        {/* Venues Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {venues.map((venue) => (
            <div
              key={venue.id}
              className={`bg-gray-800 rounded-xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 group ${
                venue.final
                  ? 'border-[#FFD700]/50 shadow-[0_0_20px_rgba(255,215,0,0.15)]'
                  : 'border-gray-700 hover:border-gray-500'
              }`}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden bg-gray-700">
                <img
                  alt={venue.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={`venue-img-${venue.id}`}
                  data-strk-img={`[venue-name-${venue.id}] [venue-city-${venue.id}] football stadium`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                {venue.final && (
                  <div className="absolute top-3 right-3 bg-[#FFD700] text-black text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                    决赛场地
                  </div>
                )}
                <div className="absolute bottom-3 left-3">
                  <span className="text-lg">{venue.country.split(' ')[0]}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3
                  id={`venue-name-${venue.id}`}
                  className="text-white font-bold text-lg mb-1"
                >
                  {venue.name}
                </h3>
                <div className="flex items-center gap-1.5 text-gray-400 text-sm mb-3">
                  <MapPin className="w-3.5 h-3.5" />
                  <span id={`venue-city-${venue.id}`}>{venue.city}</span>
                  <span className="text-gray-600">·</span>
                  <span>{venue.country}</span>
                </div>
                <p className="text-gray-500 text-sm mb-4">{venue.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                    <Users className="w-3.5 h-3.5" />
                    <span>{venue.capacity.toLocaleString()} 座</span>
                  </div>
                  <span className="text-[#FFD700] text-sm font-bold">{venue.matches} 场比赛</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
