import { useEffect, useRef } from 'react';
import { MapPin, TrendingUp, Thermometer, Wind } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const MOUNTAINS = [
  {
    id: 'everest',
    name: 'Mount Everest',
    range: 'Himalayas',
    country: 'Nepal / Tibet',
    elevation: '8,849 m',
    difficulty: 'Extreme',
    description:
      'The highest point on Earth, straddling the Nepal–Tibet border. The Southeast Ridge route from Nepal is the most popular path to the summit.',
    temp: '-60°C',
    wind: '285 km/h',
    imgId: 'geo-img-everest-d4e5f6',
    imgQuery: '[geo-everest-desc] [geo-everest-name]',
  },
  {
    id: 'k2',
    name: 'K2',
    range: 'Karakoram',
    country: 'Pakistan / China',
    elevation: '8,611 m',
    difficulty: 'Extreme',
    description:
      'Known as the "Savage Mountain," K2 is the second-highest peak and considered far more technically demanding than Everest with a higher fatality rate.',
    temp: '-55°C',
    wind: '200 km/h',
    imgId: 'geo-img-k2-g7h8i9',
    imgQuery: '[geo-k2-desc] [geo-k2-name]',
  },
  {
    id: 'aconcagua',
    name: 'Aconcagua',
    range: 'Andes',
    country: 'Argentina',
    elevation: '6,961 m',
    difficulty: 'Hard',
    description:
      'The highest peak in the Western Hemisphere and a popular target for climbers aiming to complete the Seven Summits. The Normal Route requires no technical climbing.',
    temp: '-40°C',
    wind: '160 km/h',
    imgId: 'geo-img-aconcagua-j1k2l3',
    imgQuery: '[geo-aconcagua-desc] [geo-aconcagua-name]',
  },
  {
    id: 'denali',
    name: 'Denali',
    range: 'Alaska Range',
    country: 'USA',
    elevation: '6,190 m',
    difficulty: 'Hard',
    description:
      'North America\'s highest peak, known for extreme cold and unpredictable weather. The West Buttress route is the standard path, requiring glacier travel and crevasse navigation.',
    temp: '-50°C',
    wind: '190 km/h',
    imgId: 'geo-img-denali-m4n5o6',
    imgQuery: '[geo-denali-desc] [geo-denali-name]',
  },
];

const difficultyColor = {
  Extreme: 'bg-red-500/20 text-red-400',
  Hard: 'bg-orange-500/20 text-orange-400',
  Moderate: 'bg-yellow-500/20 text-yellow-400',
};

const GeographySection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="geography" ref={containerRef} className="bg-slate-950 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-amber-500/20 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
            Geography
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            The World's Greatest Peaks
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">
            From the Himalayas to the Andes, these mountains define the limits of human ambition
            and the raw power of our planet's geology.
          </p>
        </div>

        {/* Mountain cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {MOUNTAINS.map((m) => (
            <div
              key={m.id}
              className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  alt={m.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={m.imgId}
                  data-strk-img={m.imgQuery}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                <span
                  id={`geo-${m.id}-name`}
                  className="absolute bottom-3 left-4 text-white font-bold text-lg"
                >
                  {m.name}
                </span>
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <MapPin className="w-4 h-4 text-amber-500" />
                    <span>{m.country}</span>
                    <span className="text-slate-600">·</span>
                    <span>{m.range}</span>
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${difficultyColor[m.difficulty]}`}>
                    {m.difficulty}
                  </span>
                </div>

                <p id={`geo-${m.id}-desc`} className="text-slate-300 text-sm leading-relaxed mb-4">
                  {m.description}
                </p>

                <div className="grid grid-cols-3 gap-3 border-t border-slate-800 pt-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-amber-400 mb-1">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div className="text-white font-bold text-sm">{m.elevation}</div>
                    <div className="text-slate-500 text-xs">Elevation</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-sky-400 mb-1">
                      <Thermometer className="w-4 h-4" />
                    </div>
                    <div className="text-white font-bold text-sm">{m.temp}</div>
                    <div className="text-slate-500 text-xs">Min Temp</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-slate-300 mb-1">
                      <Wind className="w-4 h-4" />
                    </div>
                    <div className="text-white font-bold text-sm">{m.wind}</div>
                    <div className="text-slate-500 text-xs">Max Wind</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GeographySection;
