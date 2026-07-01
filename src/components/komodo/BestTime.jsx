import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Sun, Cloud, Droplets } from 'lucide-react';

const seasons = [
  {
    id: 'dry-season',
    titleId: 'season-title-dry',
    descId: 'season-desc-dry',
    imgId: 'season-img-dry-v7w8x9',
    name: 'Dry Season',
    months: 'April – November',
    icon: Sun,
    iconColor: 'text-coral',
    bgColor: 'bg-coral/10',
    badge: 'Best Time',
    badgeColor: 'bg-coral text-white',
    desc: 'The ideal time to visit. Calm seas make boat trips smooth, visibility for diving is exceptional, and the savanna landscape turns golden. Temperatures hover around 27–32°C.',
    highlights: ['Best diving visibility', 'Calm sea conditions', 'Dragon trekking', 'Pink Beach swimming'],
  },
  {
    id: 'shoulder-season',
    titleId: 'season-title-shoulder',
    descId: 'season-desc-shoulder',
    imgId: 'season-img-shoulder-y1z2a3',
    name: 'Shoulder Season',
    months: 'March & December',
    icon: Cloud,
    iconColor: 'text-ocean-light',
    bgColor: 'bg-ocean/10',
    badge: 'Good Value',
    badgeColor: 'bg-ocean text-white',
    desc: 'Transitional months with mixed conditions. Fewer tourists mean better prices and a more intimate experience. Some rain is possible but rarely disrupts plans.',
    highlights: ['Fewer crowds', 'Lower prices', 'Lush green scenery', 'Good wildlife sightings'],
  },
  {
    id: 'wet-season',
    titleId: 'season-title-wet',
    descId: 'season-desc-wet',
    imgId: 'season-img-wet-b4c5d6',
    name: 'Wet Season',
    months: 'January – February',
    icon: Droplets,
    iconColor: 'text-jungle',
    bgColor: 'bg-jungle/10',
    badge: 'Off-Peak',
    badgeColor: 'bg-jungle text-white',
    desc: 'Rough seas can limit boat access to some islands. However, the landscape is lush and green, and adventurous travelers can find great deals with minimal crowds.',
    highlights: ['Lowest prices', 'Lush vegetation', 'Fewer tourists', 'Unique atmosphere'],
  },
];

const BestTime = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="best-time" ref={containerRef} className="py-20 px-4 md:px-8 bg-mist">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-coral text-sm font-semibold tracking-widest uppercase">When to Go</span>
          <h2 className="font-serif font-bold text-3xl md:text-5xl text-ocean mt-3 mb-5">
            Best Time to Visit
          </h2>
          <p className="text-stone/70 text-lg max-w-xl mx-auto">
            Komodo is a year-round destination, but the season you choose will shape your experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {seasons.map((season) => (
            <div
              key={season.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[3/2] overflow-hidden">
                <img
                  alt={season.name}
                  data-strk-img-id={season.imgId}
                  data-strk-img={`[${season.descId}] [${season.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
                <span className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full ${season.badgeColor}`}>
                  {season.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${season.bgColor}`}>
                    <season.icon className={`w-5 h-5 ${season.iconColor}`} />
                  </div>
                  <div>
                    <h3 id={season.titleId} className="font-serif font-bold text-lg text-stone leading-tight">
                      {season.name}
                    </h3>
                    <p className="text-stone/60 text-xs">{season.months}</p>
                  </div>
                </div>
                <p id={season.descId} className="text-stone/70 text-sm leading-relaxed mb-4">
                  {season.desc}
                </p>
                <ul className="space-y-1.5">
                  {season.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-stone/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-coral flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestTime;
