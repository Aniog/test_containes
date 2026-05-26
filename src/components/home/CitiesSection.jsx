import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const cities = [
  {
    id: 'nyc',
    name: '纽约',
    country: '美国',
    flag: '🇺🇸',
    highlight: '决赛城市',
    description: '世界之都，大都会球场将举办本届世界杯决赛',
    color: 'from-blue-900/80',
  },
  {
    id: 'mexico-city',
    name: '墨西哥城',
    country: '墨西哥',
    flag: '🇲🇽',
    highlight: '开幕式城市',
    description: '历史名城，阿兹特克球场见证无数足球传奇',
    color: 'from-green-900/80',
  },
  {
    id: 'la',
    name: '洛杉矶',
    country: '美国',
    flag: '🇺🇸',
    highlight: '娱乐之都',
    description: '阳光之城，SoFi球场是全美最现代化的体育场',
    color: 'from-orange-900/80',
  },
  {
    id: 'toronto',
    name: '多伦多',
    country: '加拿大',
    flag: '🇨🇦',
    highlight: '加拿大门户',
    description: '多元文化大都市，加拿大足球的心脏',
    color: 'from-red-900/80',
  },
  {
    id: 'miami',
    name: '迈阿密',
    country: '美国',
    flag: '🇺🇸',
    highlight: '热带风情',
    description: '阳光海滩与足球激情的完美结合',
    color: 'from-cyan-900/80',
  },
  {
    id: 'guadalajara',
    name: '瓜达拉哈拉',
    country: '墨西哥',
    flag: '🇲🇽',
    highlight: '文化名城',
    description: '墨西哥第二大城市，传统与现代的交汇',
    color: 'from-purple-900/80',
  },
];

export default function CitiesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="cities" ref={containerRef} className="bg-[#0A0E1A] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#FFD700] text-xs font-bold uppercase tracking-widest">举办城市</span>
          <h2 className="font-['Bebas_Neue'] text-4xl sm:text-5xl text-white mt-2 tracking-wide">
            三国十六城
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            从北美大陆的东海岸到西海岸，从热带海滩到高原古城
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city) => (
            <div
              key={city.id}
              className="relative rounded-xl overflow-hidden h-64 group cursor-pointer border border-gray-700 hover:border-[#FFD700]/40 transition-all duration-300"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-gray-800 group-hover:scale-105 transition-transform duration-500"
                data-strk-bg-id={`city-bg-${city.id}`}
                data-strk-bg={`[city-name-${city.id}] [city-country-${city.id}] city skyline`}
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="600"
              />

              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${city.color} to-transparent`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{city.flag}</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FFD700] bg-[#FFD700]/10 border border-[#FFD700]/30 px-2 py-0.5 rounded-full">
                    {city.highlight}
                  </span>
                </div>
                <h3 id={`city-name-${city.id}`} className="text-white font-['Bebas_Neue'] text-3xl tracking-wide leading-none">
                  {city.name}
                </h3>
                <p id={`city-country-${city.id}`} className="text-gray-300 text-xs mb-2">{city.country}</p>
                <p className="text-gray-400 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {city.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
