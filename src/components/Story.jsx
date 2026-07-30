import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const milestones = [
  { year: '1961', event: 'Sprite is born in West Germany as "Fanta Klare Zitrone".' },
  { year: '1963', event: 'Sprite launches in the United States, taking on 7UP directly.' },
  { year: '1974', event: '"Taste its Tingling Tartness" campaign makes Sprite a household name.' },
  { year: '1994', event: '"Obey Your Thirst" campaign launches — one of the most iconic in history.' },
  { year: '2019', event: 'Sprite transitions to clear bottles to improve recyclability.' },
  { year: '2022', event: 'Sprite Zero Sugar becomes the fastest-growing diet soda in the US.' },
];

export default function Story() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="story" className="py-24 bg-sprite-light" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <p className="text-sprite-green font-bold uppercase tracking-widest text-sm mb-3 font-poppins">
              Since 1961
            </p>
            <h2
              id="story-title"
              className="text-5xl md:text-6xl font-black text-gray-900 uppercase font-poppins leading-tight mb-6"
            >
              Our Story
            </h2>
            <p
              id="story-subtitle"
              className="text-gray-600 text-lg leading-relaxed font-poppins mb-6"
            >
              Sprite was born from a simple idea: create a soda so crisp and clean it could
              cut through anything. What started in West Germany became a global phenomenon —
              the world's best-selling lemon-lime soda.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed font-poppins">
              For over 60 years, Sprite has stood for authenticity, refreshment, and the
              courage to be yourself. From the streets of New York to the beaches of Brazil,
              Sprite is the drink of those who keep it real.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-sprite-green/20 to-sprite-lime/20 rounded-3xl blur-xl" />
            <img
              data-strk-img-id="story-img-v4w5x6"
              data-strk-img="[story-subtitle] [story-title] refreshing lemon lime drink"
              data-strk-img-ratio="4x3"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Sprite story"
              className="relative rounded-3xl w-full object-cover shadow-2xl"
            />
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h3 className="text-3xl font-black text-gray-900 uppercase font-poppins text-center mb-12">
            Key Milestones
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-sprite-green/30 hidden md:block" />
            <div className="flex flex-col gap-8">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`flex flex-col md:flex-row items-center gap-4 md:gap-8 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-100 inline-block max-w-sm">
                      <p className="text-gray-700 font-medium font-poppins text-sm">{m.event}</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-sprite-green flex items-center justify-center shadow-lg z-10">
                    <span className="text-white font-black text-xs font-poppins">{m.year}</span>
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
