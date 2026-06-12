import { useEffect, useRef } from 'react';
import { Gauge, ShieldCheck, Wrench, Zap, Globe, HeadphonesIcon } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const features = [
  {
    icon: Gauge,
    title: 'Unmatched Precision',
    description: 'CNC-controlled folding with ±0.1mm repeatability ensures every bend meets exact specifications, every time.',
  },
  {
    icon: ShieldCheck,
    title: 'Industrial Durability',
    description: 'Heavy-gauge steel frames and hardened tooling built to withstand decades of continuous production use.',
  },
  {
    icon: Zap,
    title: 'High Throughput',
    description: 'Optimized cycle times and rapid tool-change systems keep your production line moving at peak efficiency.',
  },
  {
    icon: Wrench,
    title: 'Easy Maintenance',
    description: 'Modular design with accessible service points minimizes downtime and simplifies routine maintenance.',
  },
  {
    icon: Globe,
    title: 'Global Compliance',
    description: 'CE-certified machines meeting international safety and quality standards for worldwide deployment.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Expert Support',
    description: 'Dedicated technical support team with on-site installation, training, and after-sales service worldwide.',
  },
];

const Features = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="features" ref={containerRef} className="py-24 md:py-32 bg-navy relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-steel rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="grid md:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">
                Why ARTITECT
              </span>
            </div>
            <h2
              id="features-heading"
              className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
            >
              Engineering Excellence
              <span className="block text-gold">in Every Machine</span>
            </h2>
          </div>
          <p className="text-white/60 text-lg leading-relaxed md:text-right">
            From the factory floor to global installations, ARTITECT machines are trusted by fabricators who demand the best in precision, reliability, and performance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group bg-surface-dark/60 border border-white/10 rounded-2xl p-8 hover:border-gold/40 hover:bg-surface-dark transition-all duration-300"
              >
                <div className="w-12 h-12 bg-steel/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-steel group-hover:text-gold transition-colors duration-300" />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{feature.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* About / Process strip */}
        <div id="about" className="mt-20 grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/10">
          {/* Image side */}
          <div className="relative h-64 md:h-auto min-h-[280px] bg-surface-dark">
            <img
              alt="ARTITECT factory precision manufacturing"
              data-strk-img-id="about-img-3f7a9b"
              data-strk-img="[features-heading] sheet metal folding machine factory precision manufacturing"
              data-strk-img-ratio="4x3"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-navy/30" />
          </div>
          {/* Text side */}
          <div className="bg-surface-dark p-10 md:p-12 flex flex-col justify-center">
            <div className="w-10 h-1 bg-gold mb-6 rounded-full" />
            <h3 id="about-title" className="text-white text-2xl md:text-3xl font-bold mb-4 leading-tight">
              Built on 25 Years of Fabrication Expertise
            </h3>
            <p id="about-desc" className="text-white/60 leading-relaxed mb-6">
              ARTITECT MACHINERY was founded by engineers with deep roots in sheet metal fabrication. Every machine we build reflects decades of hands-on experience, continuous innovation, and an unwavering commitment to quality.
            </p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="self-start inline-flex items-center gap-2 border-2 border-gold text-gold hover:bg-gold hover:text-navy font-semibold px-6 py-3 rounded-full transition-all duration-200 text-sm"
            >
              Talk to Our Engineers
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
