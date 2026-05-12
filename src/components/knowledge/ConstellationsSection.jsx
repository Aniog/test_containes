import { useEffect, useRef } from 'react';
import { Compass, Globe, Grid } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const coordinateFacts = [
  {
    icon: Globe,
    term: 'Right Ascension (RA)',
    definition:
      'The celestial equivalent of longitude, measured eastward in hours (0h–24h) from the vernal equinox. One hour of RA equals 15° of arc.',
  },
  {
    icon: Grid,
    term: 'Declination (Dec)',
    definition:
      'The celestial equivalent of latitude, measured in degrees from the celestial equator (+90° at the north pole, −90° at the south).',
  },
  {
    icon: Compass,
    term: 'The Celestial Sphere',
    definition:
      'An imaginary sphere of infinite radius surrounding Earth, onto which all celestial objects are projected for the purpose of mapping the sky.',
  },
];

export default function ConstellationsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section id="constellations" ref={containerRef} className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <span className="text-xs font-medium tracking-widest uppercase text-amber">Section A</span>
          <div className="section-divider mt-3 mb-5 mx-0 w-12" style={{ margin: '12px 0 20px' }} />
          <h2
            id="const-title"
            className="font-serif font-light text-3xl md:text-4xl text-star tracking-wide mb-4"
          >
            Constellations & Coordinate Systems
          </h2>
          <p
            id="const-subtitle"
            className="text-muted text-base leading-relaxed max-w-2xl"
          >
            For millennia, humans have organized the night sky into patterns. Today, astronomers use a precise mathematical framework — the celestial coordinate system — to locate any object in the universe.
          </p>
        </div>

        {/* Two-column layout: image + text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 items-center mb-16">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden border border-subtle aspect-[4/3] bg-surface">
            <img
              alt="Ursa Major constellation with celestial coordinate grid lines showing Right Ascension and Declination"
              className="w-full h-full object-cover"
              data-strk-img-id="const-img-d4e5f6"
              data-strk-img="[const-subtitle] [const-title] constellation coordinate grid celestial sphere"
              data-strk-img-ratio="4x3"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cosmos/60 to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-xs text-muted italic">
                Ursa Major with celestial coordinate grid overlay — RA and Dec lines visible
              </p>
            </div>
          </div>

          {/* Concept cards */}
          <div className="space-y-5">
            {coordinateFacts.map((fact) => {
              const Icon = fact.icon;
              return (
                <div
                  key={fact.term}
                  className="bg-nebula rounded-xl border border-subtle p-6 hover:border-amber/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-surface flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-amber" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-star mb-1.5">{fact.term}</h4>
                      <p className="text-sm text-muted leading-relaxed">{fact.definition}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Constellation families callout */}
        <div className="bg-surface rounded-2xl border border-subtle p-8 md:p-10">
          <h3 className="font-serif text-xl font-light text-star mb-4">
            The 88 Official Constellations
          </h3>
          <p className="text-muted text-sm leading-relaxed mb-6">
            The International Astronomical Union (IAU) officially recognizes 88 constellations that together cover the entire celestial sphere. Each constellation defines a precise region of sky — not just a pattern of stars — making them essential reference frames for locating objects.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Orion', 'Ursa Major', 'Scorpius', 'Cassiopeia', 'Leo', 'Cygnus', 'Aquila', 'Centaurus'].map((name) => (
              <div key={name} className="text-center py-3 px-4 bg-nebula rounded-xl border border-subtle">
                <span className="text-sm text-star font-medium">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
