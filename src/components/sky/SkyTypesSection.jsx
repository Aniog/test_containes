import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const skyTypes = [
  {
    id: 'sky-type-1',
    titleId: 'sky-type-title-1',
    subtitleId: 'sky-type-sub-1',
    title: 'Golden Sunrise',
    subtitle: 'The sky awakens with warm amber and rose tones as the sun crests the horizon.',
    imgId: 'sky-type-img-d4e5f6',
    ratio: '3x2',
    width: 600,
  },
  {
    id: 'sky-type-2',
    titleId: 'sky-type-title-2',
    subtitleId: 'sky-type-sub-2',
    title: 'Blazing Sunset',
    subtitle: 'Fiery oranges and purples paint the sky as the sun dips below the horizon.',
    imgId: 'sky-type-img-g7h8i9',
    ratio: '3x2',
    width: 600,
  },
  {
    id: 'sky-type-3',
    titleId: 'sky-type-title-3',
    subtitleId: 'sky-type-sub-3',
    title: 'Stormy Skies',
    subtitle: 'Dark dramatic clouds gather, charged with electricity and raw power.',
    imgId: 'sky-type-img-j1k2l3',
    ratio: '3x2',
    width: 600,
  },
  {
    id: 'sky-type-4',
    titleId: 'sky-type-title-4',
    subtitleId: 'sky-type-sub-4',
    title: 'Clear Blue Day',
    subtitle: 'A perfect cerulean expanse dotted with fluffy white cumulus clouds.',
    imgId: 'sky-type-img-m4n5o6',
    ratio: '3x2',
    width: 600,
  },
  {
    id: 'sky-type-5',
    titleId: 'sky-type-title-5',
    subtitleId: 'sky-type-sub-5',
    title: 'Twilight Hour',
    subtitle: 'The magical blue hour between day and night, soft and ethereal.',
    imgId: 'sky-type-img-p7q8r9',
    ratio: '3x2',
    width: 600,
  },
  {
    id: 'sky-type-6',
    titleId: 'sky-type-title-6',
    subtitleId: 'sky-type-sub-6',
    title: 'Overcast Mood',
    subtitle: 'A silver blanket of clouds diffuses the light into a soft, even glow.',
    imgId: 'sky-type-img-s1t2u3',
    ratio: '3x2',
    width: 600,
  },
];

const SkyTypesSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section id="sky-types" className="bg-[#0a1628] py-20 md:py-28 px-4 md:px-8" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p id="sky-types-label" className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
            A World Above
          </p>
          <h2 id="sky-types-heading" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Types of Sky
          </h2>
          <p className="text-sky-300 text-lg max-w-2xl mx-auto">
            Every hour of the day brings a different sky — each one a unique masterpiece of light, color, and atmosphere.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skyTypes.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden shadow-xl cursor-pointer"
            >
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.subtitleId}] [${item.titleId}] [sky-types-heading]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a2e]/90 via-[#0c1a2e]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 id={item.titleId} className="text-white font-bold text-xl mb-1">{item.title}</h3>
                <p id={item.subtitleId} className="text-sky-200 text-sm leading-snug">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkyTypesSection;
