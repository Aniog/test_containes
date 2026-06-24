import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Eye, Microscope, Globe } from 'lucide-react';

const stats = [
  { value: '10³⁰', label: 'Microbes on Earth', icon: Globe },
  { value: '0.001mm', label: 'Smallest Bacterium', icon: Microscope },
  { value: '99%', label: 'Life is Microbial', icon: Eye },
];

const IntroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      id="intro"
      ref={containerRef}
      className="py-28 px-6"
      style={{ background: 'linear-gradient(180deg, #030b18 0%, #060f20 50%, #030b18 100%)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px flex-1 max-w-12 bg-cyan-500/40" />
          <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">What is MicroCosmos</span>
          <div className="h-px flex-1 max-w-12 bg-cyan-500/40" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <h2
              id="intro-title-mc"
              className="font-space text-4xl md:text-5xl font-bold text-sky-50 mb-6 leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              A Universe{' '}
              <span className="gradient-text">Invisible</span>{' '}
              to the Eye
            </h2>
            <p id="intro-desc-mc" className="text-slate-400 text-lg leading-relaxed mb-6">
              The microcosmos is a vast, teeming world of life that exists at scales
              too small for the human eye to perceive. From the bacteria in a drop of
              pond water to the tardigrades surviving in the vacuum of space, microscopic
              life is everywhere — and it shapes our entire world.
            </p>
            <p className="text-slate-500 text-base leading-relaxed">
              Scientists estimate that microbial life makes up over 99% of all living
              organisms on Earth. These invisible architects recycle nutrients, produce
              oxygen, and form the foundation of every food chain on the planet.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-teal-500/5 blur-xl" />
            <div className="relative rounded-2xl overflow-hidden border border-cyan-500/20 glow-cyan">
              <img
                alt="Microscopic life under a microscope"
                data-strk-img-id="intro-img-mc-9a4c1d"
                data-strk-img="[intro-desc-mc] [intro-title-mc]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030b18]/60 to-transparent" />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20">
          {stats.map(({ value, label, icon: Icon }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center p-8 rounded-2xl border border-cyan-500/20 bg-[#0a1628] glow-cyan transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {value}
              </div>
              <div className="text-slate-400 text-sm">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
