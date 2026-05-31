import { useEffect, useRef } from 'react';
import { Building2, Layers, Zap, Users } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const cities = [
  {
    id: 'luminara',
    name: 'Luminara Prime',
    depth: '4,200m',
    population: '820 Million',
    desc: 'The capital city, a vast dome complex spanning 340 square kilometers. Towers of bioluminescent crystal rise 800 meters from the ocean floor, housing the Grand Council and the Academy of Deep Sciences.',
    feature: 'Capital & Seat of Power',
    titleId: 'city-luminara-title',
    descId: 'city-luminara-desc',
    imgId: 'city-luminara-img-d4e5f6',
  },
  {
    id: 'vortexia',
    name: 'Vortexia',
    depth: '3,800m',
    population: '540 Million',
    desc: 'Built around a massive hydrothermal vent cluster, Vortexia is the industrial and energy heart of Abyssia. Its spiraling architecture channels thermal currents into clean power for the entire civilization.',
    feature: 'Energy & Industry Hub',
    titleId: 'city-vortexia-title',
    descId: 'city-vortexia-desc',
    imgId: 'city-vortexia-img-g7h8i9',
  },
  {
    id: 'pelagara',
    name: 'Pelagara',
    depth: '5,100m',
    population: '310 Million',
    desc: 'The deepest inhabited city, carved into the walls of the Mariana Trench. Pelagara is the cultural and artistic center — its cavern galleries and amphitheaters are carved from living rock and lit by engineered bioluminescence.',
    feature: 'Arts & Culture Center',
    titleId: 'city-pelagara-title',
    descId: 'city-pelagara-desc',
    imgId: 'city-pelagara-img-j1k2l3',
  },
];

const cityFeatures = [
  { icon: Building2, label: 'Dome Architecture', desc: 'Pressure-resistant crystalline domes up to 12km in diameter' },
  { icon: Layers, label: 'Vertical Stratification', desc: 'Cities built in layers — residential, commercial, and industrial zones stacked vertically' },
  { icon: Zap, label: 'Thermal Energy', desc: 'Hydrothermal vents power every city with zero-emission geothermal energy' },
  { icon: Users, label: '2.4 Billion Citizens', desc: 'Spread across 47 major cities and hundreds of smaller settlements' },
];

const CitiesSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="cities" ref={containerRef} className="py-24 px-6 md:px-12 lg:px-24 bg-deep-navy relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-bio-cyan/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-heading text-bio-cyan uppercase tracking-[0.3em] text-xs font-semibold">Infrastructure</span>
          <h2 className="font-display text-4xl md:text-5xl text-pearl mt-3 tracking-wide">Underwater Cities</h2>
          <p className="text-muted-slate mt-4 max-w-2xl mx-auto font-sans leading-relaxed">
            Abyssia's cities are engineering marvels — self-sustaining ecosystems of light, pressure, and life, built over millennia in the crushing dark of the deep ocean.
          </p>
        </div>

        {/* City Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {cities.map((city) => (
            <div
              key={city.id}
              className="group border border-bio-cyan/15 bg-ocean-dark/60 backdrop-blur-md rounded-2xl overflow-hidden hover:border-bio-cyan/40 hover:shadow-[0_0_40px_rgba(0,212,255,0.12)] transition-all duration-500"
            >
              {/* City Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  alt={city.name}
                  data-strk-img-id={city.imgId}
                  data-strk-img={`[${city.descId}] [${city.titleId}] [cities-section-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark via-ocean-dark/40 to-transparent" />
                <div className="absolute top-3 right-3 bg-bio-cyan/10 border border-bio-cyan/30 rounded-full px-3 py-1">
                  <span className="font-heading text-xs text-bio-cyan font-semibold">{city.depth}</span>
                </div>
                <div className="absolute bottom-3 left-4">
                  <span className="font-heading text-xs text-glow-aqua uppercase tracking-widest">{city.feature}</span>
                </div>
              </div>

              {/* City Info */}
              <div className="p-6">
                <h3 id={city.titleId} className="font-display text-xl text-pearl mb-2 tracking-wide">{city.name}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-3.5 h-3.5 text-bio-cyan" />
                  <span className="font-heading text-xs text-muted-slate">{city.population}</span>
                </div>
                <p id={city.descId} className="font-sans text-muted-slate text-sm leading-relaxed">{city.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Grid */}
        <div id="cities-section-title" className="hidden">Abyssian underwater cities deep ocean civilization</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {cityFeatures.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="border border-bio-cyan/10 bg-midnight/40 rounded-xl p-5 text-center hover:border-bio-cyan/25 transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-bio-cyan/10 flex items-center justify-center mx-auto mb-3">
                <Icon className="w-5 h-5 text-bio-cyan" />
              </div>
              <h4 className="font-heading text-sm font-semibold text-pearl mb-1">{label}</h4>
              <p className="font-sans text-xs text-muted-slate leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CitiesSection;
