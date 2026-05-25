import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const peaks = [
  {
    id: 'peak-everest',
    name: 'Mount Everest',
    nameId: 'peak-name-everest',
    location: 'Nepal / Tibet',
    elevation: '8,849 m',
    difficulty: 'Extreme',
    description: 'The highest point on Earth. Everest demands elite fitness, technical skill, and the ability to survive in the death zone above 8,000m.',
    imgId: 'peak-img-everest-7f3a',
    difficultyColor: 'text-red-400 bg-red-400/10 border-red-400/30',
  },
  {
    id: 'peak-k2',
    name: 'K2',
    nameId: 'peak-name-k2',
    location: 'Pakistan / China',
    elevation: '8,611 m',
    difficulty: 'Extreme',
    description: 'Known as the Savage Mountain, K2 has a fatality rate nearly double that of Everest. Only the most experienced alpinists attempt its brutal ridges.',
    imgId: 'peak-img-k2-8b2c',
    difficultyColor: 'text-red-400 bg-red-400/10 border-red-400/30',
  },
  {
    id: 'peak-matterhorn',
    name: 'Matterhorn',
    nameId: 'peak-name-matterhorn',
    location: 'Switzerland / Italy',
    elevation: '4,478 m',
    difficulty: 'Advanced',
    description: 'The iconic pyramid-shaped peak of the Alps. A technical climb requiring solid rock and ice skills, the Matterhorn is one of the most recognizable mountains in the world.',
    imgId: 'peak-img-matterhorn-5d1e',
    difficultyColor: 'text-amber-400 bg-amber-400/10 border-amber-400/30',
  },
  {
    id: 'peak-denali',
    name: 'Denali',
    nameId: 'peak-name-denali',
    location: 'Alaska, USA',
    elevation: '6,190 m',
    difficulty: 'Advanced',
    description: 'North America\'s highest peak. Denali\'s extreme cold, high winds, and remote location make it one of the most challenging climbs on any continent.',
    imgId: 'peak-img-denali-9c4f',
    difficultyColor: 'text-amber-400 bg-amber-400/10 border-amber-400/30',
  },
  {
    id: 'peak-kilimanjaro',
    name: 'Kilimanjaro',
    nameId: 'peak-name-kilimanjaro',
    location: 'Tanzania',
    elevation: '5,895 m',
    difficulty: 'Moderate',
    description: 'Africa\'s highest peak and the world\'s tallest free-standing mountain. A non-technical climb accessible to fit hikers, yet still demanding due to altitude.',
    imgId: 'peak-img-kilimanjaro-2a7b',
    difficultyColor: 'text-green-400 bg-green-400/10 border-green-400/30',
  },
  {
    id: 'peak-mont-blanc',
    name: 'Mont Blanc',
    nameId: 'peak-name-mont-blanc',
    location: 'France / Italy',
    elevation: '4,808 m',
    difficulty: 'Intermediate',
    description: 'The highest peak in the Alps and Western Europe. A classic mountaineering objective that has inspired climbers since the first ascent in 1786.',
    imgId: 'peak-img-mont-blanc-6e9d',
    difficultyColor: 'text-sky-400 bg-sky-400/10 border-sky-400/30',
  },
];

const PeakCard = ({ peak }) => {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden hover:border-sky-500 transition-colors group flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          alt={peak.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          data-strk-img-id={peak.imgId}
          data-strk-img={`[${peak.nameId}] mountain peak alpine`}
          data-strk-img-ratio="3x2"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-800/80 to-transparent" />
        <span className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full border ${peak.difficultyColor}`}>
          {peak.difficulty}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-2">
          <h3 id={peak.nameId} className="font-bold text-lg text-white">{peak.name}</h3>
          <span className="text-amber-400 font-black text-sm ml-2 shrink-0">{peak.elevation}</span>
        </div>
        <p className="text-sky-400 text-xs font-semibold mb-3">{peak.location}</p>
        <p className="text-slate-400 text-sm leading-relaxed flex-1">{peak.description}</p>
      </div>
    </div>
  );
};

const FeaturedPeaks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="peaks" ref={containerRef} className="py-20 md:py-28 px-6 bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5 border border-sky-500/30">
            The World's Greatest
          </span>
          <h2 className="font-bold text-3xl md:text-4xl text-white mb-4">
            Iconic Peaks to Conquer
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
            From the Himalayas to the Alps, these legendary mountains have defined the history of alpinism.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {peaks.map((peak) => (
            <PeakCard key={peak.id} peak={peak} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPeaks;
