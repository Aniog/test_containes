import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const nightItems = [
  {
    titleId: 'night-title-1',
    subtitleId: 'night-sub-1',
    imgId: 'night-img-f4g5h6',
    title: 'Milky Way',
    subtitle: 'Our galaxy stretches across the sky in a river of a billion stars.',
    ratio: '16x9',
    width: 900,
  },
  {
    titleId: 'night-title-2',
    subtitleId: 'night-sub-2',
    imgId: 'night-img-i7j8k9',
    title: 'Full Moon',
    subtitle: 'The luminous full moon casts silver light across the landscape below.',
    ratio: '1x1',
    width: 500,
  },
  {
    titleId: 'night-title-3',
    subtitleId: 'night-sub-3',
    imgId: 'night-img-l1m2n3',
    title: 'Star Trails',
    subtitle: 'Long-exposure photography reveals the Earth\'s rotation through arcing star trails.',
    ratio: '1x1',
    width: 500,
  },
];

const NightSkySection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section id="night-sky" className="bg-[#060d1a] py-20 md:py-28 px-4 md:px-8" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p id="night-label" className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            After Dark
          </p>
          <h2 id="night-heading" className="text-4xl md:text-5xl font-bold text-white mb-4">
            The Night Sky
          </h2>
          <p className="text-sky-300 text-lg max-w-2xl mx-auto">
            When the sun sets, a new sky emerges — one filled with stars, planets, and the mysteries of the cosmos.
          </p>
        </div>

        {/* Featured wide image */}
        <div className="group relative rounded-2xl overflow-hidden shadow-2xl mb-6">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={nightItems[0].title}
            className="w-full h-80 md:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
            data-strk-img-id={nightItems[0].imgId}
            data-strk-img={`[${nightItems[0].subtitleId}] [${nightItems[0].titleId}] [night-heading]`}
            data-strk-img-ratio={nightItems[0].ratio}
            data-strk-img-width={nightItems[0].width}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060d1a]/90 via-[#060d1a]/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <h3 id={nightItems[0].titleId} className="text-white font-bold text-3xl mb-2">{nightItems[0].title}</h3>
            <p id={nightItems[0].subtitleId} className="text-sky-200 text-base max-w-xl">{nightItems[0].subtitle}</p>
          </div>
        </div>

        {/* Two smaller images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {nightItems.slice(1).map((item) => (
            <div key={item.imgId} className="group relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.subtitleId}] [${item.titleId}] [night-heading]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060d1a]/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 id={item.titleId} className="text-white font-bold text-xl mb-1">{item.title}</h3>
                <p id={item.subtitleId} className="text-sky-200 text-sm">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Star facts */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: '⭐', value: '100 Billion+', label: 'Stars in the Milky Way' },
            { icon: '🌙', value: '384,400 km', label: 'Distance to the Moon' },
            { icon: '🔭', value: '13.8 Billion', label: 'Years since the Big Bang' },
          ].map((fact) => (
            <div key={fact.label} className="bg-[#0c1a2e]/60 border border-sky-900/50 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">{fact.icon}</div>
              <div className="text-2xl font-bold text-sky-300 mb-1">{fact.value}</div>
              <div className="text-sky-400 text-sm">{fact.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NightSkySection;
