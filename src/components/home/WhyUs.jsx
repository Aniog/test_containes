import { useEffect, useRef } from 'react';
import { Shield, Zap, Settings, Award, Globe, Headphones } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const features = [
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Heavy-gauge steel frames and precision-ground components ensure decades of reliable service in demanding environments.',
  },
  {
    icon: Zap,
    title: 'High Throughput',
    description: 'Optimised cycle times and fast tool-change systems keep your production line moving at maximum efficiency.',
  },
  {
    icon: Settings,
    title: 'CNC Precision',
    description: 'Advanced CNC controls with intuitive HMI interfaces deliver repeatable accuracy to ±0.1mm across every bend.',
  },
  {
    icon: Award,
    title: 'ISO Certified',
    description: 'All ARTITECT machines are manufactured under ISO 9001 quality management standards for consistent excellence.',
  },
  {
    icon: Globe,
    title: 'Global Support',
    description: 'With service partners in over 40 countries, expert technical support is always within reach wherever you operate.',
  },
  {
    icon: Headphones,
    title: 'Lifetime Service',
    description: 'From installation and training to spare parts and remote diagnostics, we support your machine for its entire lifespan.',
  },
];

const WhyUs = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="why-us" ref={containerRef} className="py-20 md:py-28 bg-gradient-to-br from-brand-navy to-brand-steel">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-brand-accent text-xs font-semibold tracking-[0.25em] uppercase">
            Why Choose ARTITECT
          </span>
          <h2 className="font-serif text-white text-3xl md:text-5xl font-bold mt-3 mb-4">
            The ARTITECT Advantage
          </h2>
          <div className="w-16 h-1 bg-brand-accent rounded-full mx-auto mb-5" />
          <p className="text-white/65 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Every machine we build reflects our commitment to engineering excellence, operator safety, and long-term value for your business.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white/8 border border-white/12 rounded-xl p-6 hover:bg-white/14 hover:border-brand-accent/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-brand-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-accent/30 transition-colors">
                  <Icon className="w-6 h-6 text-brand-accent" />
                </div>
                <h3 className="font-sans text-white text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* About / Story Row */}
        <div id="about" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden h-80 md:h-96 shadow-2xl">
            <img
              data-strk-img-id="about-img-factory-4k9m2p"
              data-strk-img="[about-desc] [about-title] [about-section-label]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="ARTITECT Machinery factory floor"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 to-transparent" />
            {/* Badge */}
            <div className="absolute bottom-6 left-6 bg-brand-accent text-white px-5 py-3 rounded-xl shadow-lg">
              <div className="font-serif text-2xl font-bold">25+</div>
              <div className="text-xs font-medium tracking-wide">Years of Expertise</div>
            </div>
          </div>

          {/* Text */}
          <div>
            <span id="about-section-label" className="text-brand-accent text-xs font-semibold tracking-[0.25em] uppercase">
              Our Story
            </span>
            <h2 id="about-title" className="font-serif text-white text-3xl md:text-4xl font-bold mt-3 mb-5">
              Crafting Precision Since Day One
            </h2>
            <p id="about-desc" className="text-white/70 text-base leading-relaxed mb-5">
              Founded on a passion for precision engineering, ARTITECT MACHINERY has grown from a specialist workshop into a globally recognised manufacturer of sheet metal folding solutions. Our machines are trusted by fabricators, HVAC contractors, and architectural metalworkers across six continents.
            </p>
            <p className="text-white/70 text-base leading-relaxed mb-8">
              We combine traditional craftsmanship with cutting-edge CNC technology to produce machines that are not only accurate and durable, but genuinely enjoyable to operate. Every detail — from the ergonomic controls to the precision-ground tooling — reflects our relentless pursuit of quality.
            </p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-brand-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-accent-light transition-colors duration-200"
            >
              Talk to Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
