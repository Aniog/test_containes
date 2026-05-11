import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const habitats = [
  {
    id: 'habitat-1',
    titleId: 'habitat-title-1',
    subtitleId: 'habitat-subtitle-1',
    title: 'Tropical Rainforest',
    subtitle: 'Lush canopies teeming with life',
    description: 'Home to over half of the world\'s species, tropical rainforests are the most biodiverse ecosystems on Earth.',
    color: 'from-emerald-800/80 to-emerald-900/60',
    accent: 'bg-emerald-400',
  },
  {
    id: 'habitat-2',
    titleId: 'habitat-title-2',
    subtitleId: 'habitat-subtitle-2',
    title: 'African Savanna',
    subtitle: 'Vast grasslands of the wild',
    description: 'The iconic open plains where lions, elephants, and zebras roam freely under the golden African sun.',
    color: 'from-amber-800/80 to-amber-900/60',
    accent: 'bg-amber-400',
  },
  {
    id: 'habitat-3',
    titleId: 'habitat-title-3',
    subtitleId: 'habitat-subtitle-3',
    title: 'Deep Ocean',
    subtitle: 'Mysteries of the deep blue',
    description: 'The ocean\'s depths harbor creatures of extraordinary beauty and strangeness, many still undiscovered.',
    color: 'from-blue-800/80 to-blue-900/60',
    accent: 'bg-blue-400',
  },
  {
    id: 'habitat-4',
    titleId: 'habitat-title-4',
    subtitleId: 'habitat-subtitle-4',
    title: 'Arctic Tundra',
    subtitle: 'Frozen wilderness at the poles',
    description: 'Polar bears, arctic foxes, and snowy owls thrive in one of Earth\'s most extreme environments.',
    color: 'from-slate-700/80 to-slate-800/60',
    accent: 'bg-slate-300',
  },
];

export default function HabitatsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="habitats" ref={containerRef} className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-amber-600 uppercase tracking-[0.3em] text-xs font-semibold mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
            Where Animals Live
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Explore Habitats
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto text-base leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            Every corner of our planet hosts unique ecosystems, each shaped by climate, geography, and millions of years of evolution.
          </p>
        </div>

        {/* Habitat cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {habitats.map((habitat) => (
            <div
              key={habitat.id}
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300"
              style={{ minHeight: '380px' }}
            >
              {/* Background image */}
              <div
                className={`absolute inset-0 z-0`}
                data-strk-bg-id={`habitat-bg-${habitat.id}`}
                data-strk-bg={`[${habitat.subtitleId}] [${habitat.titleId}]`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="500"
              />
              {/* Gradient overlay */}
              <div className={`absolute inset-0 z-10 bg-gradient-to-t ${habitat.color} group-hover:opacity-90 transition-opacity duration-300`} />

              {/* Content */}
              <div className="relative z-20 h-full flex flex-col justify-end p-6" style={{ minHeight: '380px' }}>
                <div className={`w-8 h-1 ${habitat.accent} rounded-full mb-3`} />
                <h3
                  id={habitat.titleId}
                  className="text-white text-xl font-bold mb-1"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {habitat.title}
                </h3>
                <p
                  id={habitat.subtitleId}
                  className="text-white/70 text-xs uppercase tracking-wider mb-3"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {habitat.subtitle}
                </p>
                <p className="text-white/80 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {habitat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
