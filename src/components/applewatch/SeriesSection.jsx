import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const series = [
  {
    id: 'series-10',
    name: 'Apple Watch Series 10',
    nameId: 'series-10-name',
    tagline: 'Thinnest. Largest display ever.',
    taglineId: 'series-10-tagline',
    desc: 'The most advanced Apple Watch yet. Features a stunning 46mm or 42mm case, the brightest display, and the fastest chip.',
    descId: 'series-10-desc',
    price: 'From $399',
    badge: 'New',
    badgeColor: 'bg-blue-500',
    imgId: 'series-10-img-aw-1e7b4f',
    bg: 'bg-zinc-900',
    textColor: 'text-white',
    subTextColor: 'text-gray-400',
    priceColor: 'text-gray-300',
  },
  {
    id: 'series-ultra2',
    name: 'Apple Watch Ultra 2',
    nameId: 'series-ultra2-name',
    tagline: 'Built for the extreme.',
    taglineId: 'series-ultra2-tagline',
    desc: 'Designed for endurance athletes and adventurers. Titanium case, 60-hour battery life, and precision dual-frequency GPS.',
    descId: 'series-ultra2-desc',
    price: 'From $799',
    badge: 'Pro',
    badgeColor: 'bg-orange-500',
    imgId: 'series-ultra2-img-aw-9c3d2a',
    bg: 'bg-gray-900',
    textColor: 'text-white',
    subTextColor: 'text-gray-400',
    priceColor: 'text-gray-300',
  },
  {
    id: 'series-se',
    name: 'Apple Watch SE',
    nameId: 'series-se-name',
    tagline: 'The perfect starter watch.',
    taglineId: 'series-se-tagline',
    desc: 'All the essentials at an incredible value. Crash Detection, heart rate monitoring, and a beautiful Retina display.',
    descId: 'series-se-desc',
    price: 'From $249',
    badge: 'Best Value',
    badgeColor: 'bg-green-500',
    imgId: 'series-se-img-aw-4f8e1b',
    bg: 'bg-white',
    textColor: 'text-gray-900',
    subTextColor: 'text-gray-500',
    priceColor: 'text-gray-600',
  },
];

export default function SeriesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="series" ref={containerRef} className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-500 mb-3">
            The Lineup
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-4">
            Find your Apple Watch.
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
            Three models. Endless possibilities. Choose the one that fits your life.
          </p>
        </div>

        {/* Series cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {series.map((s) => (
            <div
              key={s.id}
              className={`${s.bg} rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col`}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-56">
                <img
                  alt={s.name}
                  data-strk-img-id={s.imgId}
                  data-strk-img={`[${s.descId}] [${s.nameId}] Apple Watch smartwatch`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
                <span className={`absolute top-4 left-4 ${s.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                  {s.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col flex-1">
                <h3 id={s.nameId} className={`text-xl font-bold ${s.textColor} mb-1`}>
                  {s.name}
                </h3>
                <p id={s.taglineId} className={`text-sm font-semibold ${s.subTextColor} mb-3`}>
                  {s.tagline}
                </p>
                <p id={s.descId} className={`text-sm ${s.subTextColor} leading-relaxed flex-1 mb-6`}>
                  {s.desc}
                </p>
                <div className="flex items-center justify-between">
                  <span className={`text-base font-semibold ${s.priceColor}`}>{s.price}</span>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-full px-5 py-2 transition-colors">
                    Buy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
