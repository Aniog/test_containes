import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { MapPin, TrendingUp, Globe } from 'lucide-react';

const regions = ['All', 'Asia', 'Europe', 'Americas', 'Africa', 'Oceania'];

const destinations = [
  { id: 'dest-everest', title: 'Mount Everest', region: 'Asia', country: 'Nepal / Tibet', elevation: '8,849 m', difficulty: 'Expert', desc: 'The highest point on Earth, drawing climbers and trekkers from every corner of the globe.', imgId: 'dest-everest-img-4a2b' },
  { id: 'dest-k2', title: 'K2', region: 'Asia', country: 'Pakistan', elevation: '8,611 m', difficulty: 'Expert', desc: 'The savage mountain — technically the hardest of the eight-thousanders to climb.', imgId: 'dest-k2-img-5c3d' },
  { id: 'dest-kangchenjunga', title: 'Kangchenjunga', region: 'Asia', country: 'Nepal / India', elevation: '8,586 m', difficulty: 'Expert', desc: 'The third highest peak, revered as sacred by local communities in Sikkim.', imgId: 'dest-kangchenjunga-img-6d4e' },
  { id: 'dest-matterhorn', title: 'Matterhorn', region: 'Europe', country: 'Switzerland / Italy', elevation: '4,478 m', difficulty: 'Advanced', desc: 'The iconic pyramid-shaped peak that defines the Swiss Alps skyline.', imgId: 'dest-matterhorn-img-7e5f' },
  { id: 'dest-mont-blanc', title: 'Mont Blanc', region: 'Europe', country: 'France / Italy', elevation: '4,808 m', difficulty: 'Advanced', desc: 'The highest peak in the Alps and Western Europe, a classic mountaineering objective.', imgId: 'dest-mont-blanc-img-8f6g' },
  { id: 'dest-aconcagua', title: 'Aconcagua', region: 'Americas', country: 'Argentina', elevation: '6,961 m', difficulty: 'Advanced', desc: 'The highest peak in the Western Hemisphere, a non-technical but demanding climb.', imgId: 'dest-aconcagua-img-9g7h' },
  { id: 'dest-denali', title: 'Denali', region: 'Americas', country: 'USA (Alaska)', elevation: '6,190 m', difficulty: 'Expert', desc: 'North America\'s highest peak, known for extreme cold and unpredictable weather.', imgId: 'dest-denali-img-0h8i' },
  { id: 'dest-kilimanjaro', title: 'Kilimanjaro', region: 'Africa', country: 'Tanzania', elevation: '5,895 m', difficulty: 'Moderate', desc: 'Africa\'s highest peak and the world\'s tallest free-standing mountain.', imgId: 'dest-kilimanjaro-img-1i9j' },
  { id: 'dest-aoraki', title: 'Aoraki / Mt Cook', region: 'Oceania', country: 'New Zealand', elevation: '3,724 m', difficulty: 'Advanced', desc: 'New Zealand\'s highest peak, sacred to the Māori people and a world-class climbing destination.', imgId: 'dest-aoraki-img-2j0k' },
];

const difficultyColor = {
  Moderate: 'bg-green-100 text-green-800',
  Advanced: 'bg-amber-100 text-amber-800',
  Expert: 'bg-red-100 text-red-800',
};

const Destinations = () => {
  const containerRef = useRef(null);
  const [activeRegion, setActiveRegion] = useState('All');

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  const filtered = activeRegion === 'All'
    ? destinations
    : destinations.filter((d) => d.region === activeRegion);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          data-strk-bg-id="dest-hero-bg-3k1l"
          data-strk-bg="[dest-hero-subtitle] [dest-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1400"
        />
        <div className="absolute inset-0 bg-peak/65" />
        <div className="relative z-10 text-center px-4">
          <p id="dest-hero-subtitle" className="text-amber-peak font-semibold text-sm uppercase tracking-widest mb-3">
            Around the World
          </p>
          <h1 id="dest-hero-title" className="font-playfair font-bold text-4xl md:text-6xl text-white">
            Mountain Destinations
          </h1>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="bg-snow py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Region Filter */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setActiveRegion(region)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeRegion === region
                    ? 'bg-peak text-white shadow-md'
                    : 'bg-white text-stone border border-glacier hover:border-alpine hover:text-peak'
                }`}
              >
                {region}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((dest) => (
              <div
                key={dest.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    alt={dest.title}
                    data-strk-img-id={dest.imgId}
                    data-strk-img={`[${dest.id}-desc] [${dest.id}-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${difficultyColor[dest.difficulty]}`}>
                    {dest.difficulty}
                  </span>
                </div>
                <div className="p-5">
                  <h3 id={`${dest.id}-title`} className="font-playfair font-bold text-xl text-peak mb-1">
                    {dest.title}
                  </h3>
                  <div className="flex items-center gap-3 text-stone text-sm mb-3">
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{dest.country}</span>
                    <span className="flex items-center gap-1"><TrendingUp className="w-3.5 h-3.5" />{dest.elevation}</span>
                  </div>
                  <p id={`${dest.id}-desc`} className="text-stone text-sm leading-relaxed">
                    {dest.desc}
                  </p>
                  <div className="mt-3 flex items-center gap-1 text-xs text-alpine font-medium">
                    <Globe className="w-3.5 h-3.5" /> {dest.region}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destinations;
