import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const coordinates = [
  {
    term: 'Right Ascension (RA)',
    symbol: 'α',
    desc: 'The celestial equivalent of longitude, measured eastward from the vernal equinox in hours, minutes, and seconds (0h to 24h).',
    color: '#6366f1',
  },
  {
    term: 'Declination (Dec)',
    symbol: 'δ',
    desc: 'The celestial equivalent of latitude, measured in degrees north (+90°) or south (−90°) of the celestial equator.',
    color: '#6366f1',
  },
  {
    term: 'Celestial Equator',
    symbol: '⊕',
    desc: 'A projection of Earth\'s equator onto the celestial sphere, dividing the sky into northern and southern hemispheres.',
    color: '#2dd4bf',
  },
  {
    term: 'Ecliptic',
    symbol: '☀',
    desc: 'The apparent path of the Sun across the sky over a year, tilted ~23.5° from the celestial equator due to Earth\'s axial tilt.',
    color: '#f5c842',
  },
];

export default function KnowledgeConstellations() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section id="constellations" ref={containerRef} className="py-24 md:py-32 bg-[#0a0e1a]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-[#6366f1]" />
          <p className="text-xs font-mono tracking-[0.3em] uppercase text-[#6366f1]">Section A</p>
        </div>

        <h2 id="const-heading" className="font-serif text-3xl md:text-5xl font-light text-[#f0f4ff] mb-4">
          Constellations &amp; Coordinate Systems
        </h2>
        <p id="const-subheading" className="text-[#8892b0] text-lg leading-relaxed max-w-2xl mb-16">
          Before we can explore the cosmos, we need a map. Astronomers use a
          celestial coordinate system — a grid projected onto the sky — to
          precisely locate every star, galaxy, and nebula.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="relative rounded-2xl overflow-hidden border border-[#1e2a4a]">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Ursa Major constellation with celestial coordinate grid"
              data-strk-img-id="const-img-a1b2"
              data-strk-img="[const-subheading] [const-heading] star map night sky"
              data-strk-img-ratio="4x3"
              data-strk-img-width="700"
              className="w-full h-72 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a]/60 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p className="text-xs text-[#8892b0] font-mono">Ursa Major with RA/Dec coordinate overlay</p>
            </div>
          </div>

          <div className="space-y-4">
            {coordinates.map(({ term, symbol, desc, color }) => (
              <div
                key={term}
                className="flex gap-4 p-5 bg-[#0f1629] border border-[#1e2a4a] rounded-xl hover:border-[#6366f1]/30 transition-all duration-300"
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-lg font-serif"
                  style={{ backgroundColor: `${color}15`, color }}
                >
                  {symbol}
                </div>
                <div>
                  <h4 className="text-sm font-medium text-[#f0f4ff] mb-1">{term}</h4>
                  <p className="text-xs text-[#8892b0] leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            { id: 'const-img-c3d4', titleId: 'const-t1', descId: 'const-d1', title: 'Orion', desc: 'The Hunter — one of the most recognizable winter constellations' },
            { id: 'const-img-e5f6', titleId: 'const-t2', descId: 'const-d2', title: 'Ursa Major', desc: 'The Great Bear — home to the famous Big Dipper asterism' },
            { id: 'const-img-g7h8', titleId: 'const-t3', descId: 'const-d3', title: 'Scorpius', desc: 'The Scorpion — a summer constellation rich in star clusters' },
          ].map(({ id, titleId, descId, title, desc }) => (
            <div key={id} className="relative rounded-xl overflow-hidden border border-[#1e2a4a] aspect-square">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={`${title} constellation`}
                data-strk-img-id={id}
                data-strk-img={`[${descId}] [${titleId}] constellation night sky stars`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="400"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h4 id={titleId} className="text-sm font-medium text-[#f0f4ff]">{title}</h4>
                <p id={descId} className="text-xs text-[#8892b0] mt-0.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
