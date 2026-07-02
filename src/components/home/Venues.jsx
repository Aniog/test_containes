import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { venues } from '@/data/worldcup';
import { MapPin, Users } from 'lucide-react';

const Venues = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const countryFlag = (country) => {
    if (country === 'USA') return '🇺🇸';
    if (country === 'Canada') return '🇨🇦';
    if (country === 'Mexico') return '🇲🇽';
    return '';
  };

  return (
    <section id="venues" className="py-20 bg-wc-bg" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <p className="text-xs font-bold tracking-widest uppercase text-wc-gold mb-2">比赛场地</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white">世界杯场馆</h2>
          <p className="text-gray-400 mt-2 text-sm">横跨三国的16座顶级体育场</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {venues.map((venue) => (
            <div
              key={venue.name}
              className="bg-wc-card border border-wc-border rounded-xl overflow-hidden hover:border-wc-gold/40 transition-all duration-200 group"
            >
              {/* Venue Image */}
              <div className="relative h-44 overflow-hidden bg-wc-surface">
                <img
                  data-strk-img-id={venue.imgId}
                  data-strk-img={`[venue-city-${venue.imgId}] [venue-name-${venue.imgId}] football stadium`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={venue.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wc-card via-transparent to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className="bg-wc-bg/80 backdrop-blur text-xs text-gray-300 px-2 py-1 rounded-full">
                    {countryFlag(venue.country)} {venue.country}
                  </span>
                </div>
              </div>

              {/* Venue Info */}
              <div className="p-4">
                <h3 id={`venue-name-${venue.imgId}`} className="text-white font-bold text-base mb-1">
                  {venue.name}
                </h3>
                <div className="flex items-center gap-1 text-gray-400 text-sm mb-3">
                  <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                  <span id={`venue-city-${venue.imgId}`}>{venue.city}</span>
                </div>
                <div className="flex items-center gap-1.5 text-sm">
                  <Users className="w-3.5 h-3.5 text-wc-gold" />
                  <span className="text-wc-gold font-bold">{venue.capacity.toLocaleString()}</span>
                  <span className="text-gray-500">座位</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Venues;
