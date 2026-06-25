import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Zap, Trophy, Globe, Flag } from 'lucide-react';

const facts = [
  {
    icon: Zap,
    title: 'Extreme Speed',
    desc: 'F1 cars reach over 370 km/h (230 mph), generating up to 5G of lateral force through corners.',
  },
  {
    icon: Trophy,
    title: 'World Championship',
    desc: 'The FIA Formula One World Championship has been contested since 1950, crowning both Drivers and Constructors champions.',
  },
  {
    icon: Globe,
    title: 'Global Spectacle',
    desc: 'Races span five continents, attracting over 1.5 billion viewers worldwide each season.',
  },
  {
    icon: Flag,
    title: 'Engineering Marvel',
    desc: 'Each car contains over 80,000 components and costs upwards of $15 million to build.',
  },
];

const AboutF1 = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="bg-[#0a0a0a] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <span className="text-[#e10600] font-bold uppercase tracking-[0.3em] text-sm">
            What is F1
          </span>
          <h2
            id="about-title"
            className="text-4xl md:text-6xl font-black uppercase text-white mt-3 leading-tight"
          >
            The Ultimate
            <br />
            <span className="text-[#e10600]">Racing Championship</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: image */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-16 h-16 border-t-4 border-l-4 border-[#e10600]" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-4 border-r-4 border-[#e10600]" />
            <img
              alt="Formula 1 racing action"
              data-strk-img-id="about-img-f1-action-d4e5f6"
              data-strk-img="[about-desc] [about-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-80 object-cover"
            />
          </div>

          {/* Right: text */}
          <div>
            <p
              id="about-desc"
              className="text-gray-300 text-lg leading-relaxed mb-8"
            >
              Formula One is the highest class of international single-seater auto racing sanctioned by the
              Fédération Internationale de l'Automobile (FIA). Since its inaugural season in 1950, it has
              evolved into the most technologically advanced and commercially successful motorsport in the world.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Teams invest hundreds of millions of dollars each year pushing the boundaries of aerodynamics,
              hybrid power units, and data analytics — all in pursuit of fractions of a second.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-[#e10600] font-bold uppercase tracking-widest text-xs">Est. 1950</span>
              <div className="h-px flex-1 bg-white/10" />
            </div>
          </div>
        </div>

        {/* Fact cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {facts.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-[#1a1a1a] border border-white/10 p-6 hover:border-[#e10600]/50 transition-colors group"
            >
              <div className="w-10 h-10 bg-[#e10600]/10 flex items-center justify-center mb-4 group-hover:bg-[#e10600]/20 transition-colors">
                <Icon size={20} className="text-[#e10600]" />
              </div>
              <h3 className="text-white font-bold uppercase tracking-wide text-sm mb-2">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutF1;
