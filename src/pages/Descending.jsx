import { useEffect, useRef, useState } from 'react';
import { ArrowDown, Waves, Fish, Anchor } from 'lucide-react';

const DEPTHS = [
  {
    zone: 'EPIPELAGIC',
    label: 'Sunlight Zone',
    depth: '0 — 200m',
    color: 'from-abyss-500 via-abyss-600 to-abyss-700',
    textColor: 'text-white',
    description:
      'The surface layer where sunlight penetrates. Warm, rich with phytoplankton, and teeming with the ocean\'s most familiar life.',
    icon: Waves,
  },
  {
    zone: 'MESOPELAGIC',
    label: 'Twilight Zone',
    depth: '200 — 1,000m',
    color: 'from-abyss-600 via-abyss-700 to-abyss-800',
    textColor: 'text-cyan-200',
    description:
      'The twilight zone. Faint blue light fades into darkness. Creatures here begin to develop bioluminescence to survive.',
    icon: Fish,
  },
  {
    zone: 'BATHYPELAGIC',
    label: 'Midnight Zone',
    depth: '1,000 — 4,000m',
    color: 'from-abyss-700 via-abyss-800 to-abyss-900',
    textColor: 'text-cyan-300',
    description:
      'Total darkness. Temperatures near freezing. Only the glow of bioluminescent organisms pierces the eternal night.',
    icon: Anchor,
  },
  {
    zone: 'ABYSSOPELAGIC',
    label: 'The Abyss',
    depth: '4,000m — 6,000m',
    color: 'from-abyss-800 to-abyss-900',
    textColor: 'text-cyan',
    description:
      'The abyssal plain. Three-quarters of the ocean floor lies here. A realm of extreme pressure and extraordinary adaptation.',
    icon: Anchor,
  },
];

export default function Descending() {
  const [activeDepth, setActiveDepth] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.index);
            if (!isNaN(idx)) setActiveDepth(idx);
          }
        }
      },
      { threshold: 0.4 }
    );

    const refs = sectionRefs.current;
    for (const ref of refs) {
      if (ref) observer.observe(ref);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #0000a0 0%, #000060 40%, #000040 100%)',
        }}
      >
        <div className="relative z-10">
          <p className="text-cyan/60 text-sm tracking-[0.3em] mb-4 animate-pulse-glow">
            WELCOME TO THE DEEP
          </p>
          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-6 text-white"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            ABYSSOS
          </h1>
          <p className="text-lg md:text-xl text-white/50 max-w-xl mx-auto mb-12 leading-relaxed">
            A vertical descent through the ocean layers. Scroll down to journey
            from sunlit shallows into the crushing darkness of the deep.
          </p>
          <div className="animate-float">
            <ArrowDown className="w-8 h-8 text-cyan/50 mx-auto" />
          </div>
        </div>
      </section>

      {/* Depth Sections */}
      {DEPTHS.map((depth, i) => {
        const Icon = depth.icon;
        return (
          <section
            key={depth.zone}
            ref={(el) => (sectionRefs.current[i] = el)}
            data-index={i}
            className={`relative min-h-screen flex items-center px-6 md:px-20 transition-all duration-1000 ${
              activeDepth === i ? 'opacity-100' : 'opacity-60'
            }`}
            style={{
              background: `linear-gradient(180deg, ${
                [
                  '#000040',
                  '#000030',
                  '#000020',
                  '#000010',
                ][i]
              } 0%, ${
                [
                  '#000020',
                  '#000015',
                  '#000010',
                  '#000005',
                ][i]
              } 100%)`,
            }}
          >
            {/* Depth indicator line */}
            <div className="absolute left-8 md:left-20 top-0 bottom-0 w-px flex flex-col items-center">
              <div className="w-0.5 h-full bg-gradient-to-b from-cyan/40 to-cyan/0" />
              <div
                className={`absolute transition-all duration-700 rounded-full border-2 border-cyan ${
                  activeDepth === i ? 'scale-125 bg-cyan/30' : 'bg-transparent'
                }`}
                style={{
                  width: 16,
                  height: 16,
                  top: `${20 + i * 25}%`,
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
            </div>

            <div className="max-w-3xl ml-16 md:ml-32">
              <div className="flex items-center gap-4 mb-4">
                <Icon className={`w-6 h-6 ${depth.textColor}`} />
                <span className="text-xs tracking-[0.2em] text-cyan/50">
                  {depth.depth}
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black mb-3 text-white">
                {depth.zone}
              </h2>
              <p className="text-lg text-cyan/40 mb-4">{depth.label}</p>
              <p className="text-base md:text-lg text-white/50 leading-relaxed max-w-xl">
                {depth.description}
              </p>

              {/* Depth stats */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { label: 'Temperature', value: ['25°C', '10°C', '4°C', '2°C'][i] },
                  { label: 'Pressure', value: ['1 atm', '100 atm', '400 atm', '600 atm'][i] },
                  { label: 'Light', value: ['100%', '1%', '0%', '0%'][i] },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white/5 backdrop-blur-sm rounded-bubble p-4 text-center border border-white/5"
                  >
                    <p className="text-xs text-white/30 mb-1">{stat.label}</p>
                    <p className="text-lg font-bold text-cyan">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Ambient graphic */}
            <div className="absolute right-10 md:right-20 top-1/2 -translate-y-1/2 hidden lg:block">
              <div
                className="w-48 h-48 md:w-64 md:h-64 rounded-full animate-liquid opacity-20"
                style={{
                  background: `radial-gradient(circle, #00FFFF22, #00008044, transparent)`,
                }}
              />
            </div>
          </section>
        );
      })}

      {/* Footer callout */}
      <section
        className="min-h-[50vh] flex flex-col items-center justify-center text-center px-6"
        style={{ background: '#000010' }}
      >
        <p className="text-cyan/30 text-sm tracking-[0.3em] mb-4">
          YOU HAVE REACHED
        </p>
        <h2 className="text-3xl md:text-5xl font-black text-cyan/20 mb-6">
          THE HADAL DEPTHS
        </h2>
        <p className="text-white/20 max-w-md leading-relaxed">
          Beyond the abyss lies the hadal zone — the deepest trenches on Earth.
          Fewer people have been here than have walked on the Moon.
        </p>
      </section>
    </div>
  );
}