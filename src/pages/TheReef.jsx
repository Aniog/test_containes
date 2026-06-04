import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const REEF_SECTIONS = [
  {
    id: 'shallow-reef',
    title: 'Shallow Reef Garden',
    subtitle: 'Sun-dappled corals in crystalline waters',
    desc: 'A vibrant ecosystem where hard and soft corals compete for space and sunlight. Parrotfish graze on algae while clownfish dart through anemone tendrils.',
    imgId: 'reef-shallow-a1b2c3',
  },
  {
    id: 'deep-reef',
    title: 'The Deep Reef Wall',
    subtitle: 'Plunging coral walls into the blue abyss',
    desc: 'Vertical gardens of gorgonian sea fans and whip corals stretch into darker waters. Large pelagic fish patrol the edge where the reef meets the open ocean.',
    imgId: 'reef-deep-d4e5f6',
  },
  {
    id: 'coral-forest',
    title: 'Staghorn Forest',
    subtitle: 'Branching corals form underwater cathedrals',
    desc: 'Dense thickets of staghorn coral create a labyrinthine habitat. Their calcium carbonate branches reach toward the surface like antlers, providing shelter for thousands of species.',
    imgId: 'reef-staghorn-g7h8i9',
  },
  {
    id: 'night-reef',
    title: 'Reef at Night',
    subtitle: 'Nocturnal hunters emerge under moonlight',
    desc: 'When darkness falls, the reef transforms. Moray eels slither from crevices, octopuses emerge to hunt, and coral polyps extend their tentacles to feed on passing plankton.',
    imgId: 'reef-night-j0k1l2',
  },
];

export default function TheReef() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* Hero */}
      <section
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #003366 0%, #006699 30%, #0088aa 60%, #000040 100%)',
        }}
      >
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse at 30% 20%, #66FFFF22 0%, transparent 50%), radial-gradient(ellipse at 70% 60%, #00FFFF18 0%, transparent 50%)',
            }}
          />
        </div>

        <div className="relative z-10 text-center px-6">
          <p className="text-cyan/50 text-sm tracking-[0.3em] mb-4">
            EXPLORE
          </p>
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            THE REEF
          </h1>
          <p className="text-lg text-white/50 max-w-lg mx-auto">
            Vibrant coral ecosystems bathed in tropical light. Peer through the
            water&apos;s surface into a world of dazzling color and form.
          </p>
        </div>
      </section>

      {/* Reef Sections */}
      {REEF_SECTIONS.map((section, i) => (
        <section
          key={section.id}
          className={`relative min-h-screen flex items-center px-6 md:px-20 py-20 ${
            i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
          } flex-col`}
          style={{
            background: `linear-gradient(180deg, ${
              ['#006080', '#005570', '#004a60', '#003f50'][i]
            } 0%, ${
              ['#005070', '#004560', '#003a50', '#002f40'][i]
            } 100%)`,
          }}
        >
          {/* Image Column */}
          <div className="flex-1 relative mb-8 md:mb-0 md:px-10">
            <div className="relative rounded-bubble-xl overflow-hidden shadow-2xl shadow-cyan/10 transform transition-transform duration-500 hover:scale-[1.02]">
              <img
                alt={section.title}
                data-strk-img-id={section.imgId}
                data-strk-img={`[reef-${section.id}-desc] [reef-${section.id}-title] [reef-${section.id}-subtitle]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                className="w-full h-auto object-cover"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
              />
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-abyss-900/40 via-transparent to-transparent" />
            </div>
            {/* Floating glass card */}
            <div className="absolute -bottom-4 -right-4 md:-right-8 backdrop-blur-xl bg-white/5 rounded-bubble-lg p-4 border border-white/10 shadow-xl z-10 max-w-[180px]">
              <p className="text-xs text-cyan/60 tracking-wider">DEPTH</p>
              <p className="text-lg font-bold text-white">
                {[5, 30, 15, 20][i]}m
              </p>
            </div>
          </div>

          {/* Text Column — Glassmorphism */}
          <div className="flex-1 md:px-10">
            <div className="backdrop-blur-xl bg-white/[0.03] rounded-bubble-xl p-8 md:p-10 border border-white/10 shadow-2xl">
              <p
                id={`reef-${section.id}-subtitle`}
                className="text-xs text-cyan/50 tracking-[0.2em] mb-3"
              >
                {section.subtitle}
              </p>
              <h2
                id={`reef-${section.id}-title`}
                className="text-3xl md:text-4xl font-black text-white mb-4"
              >
                {section.title}
              </h2>
              <p
                id={`reef-${section.id}-desc`}
                className="text-white/60 leading-relaxed text-base md:text-lg"
              >
                {section.desc}
              </p>

              {/* Mini glass stat cards */}
              <div className="mt-6 flex gap-3 flex-wrap">
                {[
                  { label: 'Biodiversity', value: ['Extreme', 'Very High', 'High', 'Moderate'][i] },
                  { label: 'Coral Cover', value: ['85%', '60%', '75%', '40%'][i] },
                  { label: 'Visibility', value: ['30m', '20m', '25m', '10m'][i] },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="backdrop-blur-md bg-white/5 rounded-bubble px-4 py-2 border border-white/5"
                  >
                    <p className="text-[10px] text-white/30 uppercase tracking-wider">
                      {stat.label}
                    </p>
                    <p className="text-sm font-bold text-cyan">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Bottom callout */}
      <section
        className="min-h-[40vh] flex items-center justify-center text-center px-6"
        style={{ background: 'linear-gradient(180deg, #002f40 0%, #000020 100%)' }}
      >
        <div className="backdrop-blur-xl bg-white/[0.02] rounded-bubble-xl p-10 border border-white/5 max-w-lg">
          <p className="text-cyan/30 text-sm tracking-[0.3em] mb-4">
            THE REEF IS ALIVE
          </p>
          <p className="text-white/30 leading-relaxed">
            Coral reefs cover less than 1% of the ocean floor yet support over
            25% of all marine life. They are the rainforests of the sea —
            vibrant, fragile, and irreplaceable.
          </p>
        </div>
      </section>
    </div>
  );
}