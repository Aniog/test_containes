import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Shield, Zap, Settings, Award, Globe, Headphones } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Built to Last',
    description:
      'Every ARTITECT machine is constructed with premium-grade steel and precision-machined components, ensuring decades of reliable operation.',
  },
  {
    icon: Zap,
    title: 'High-Speed Performance',
    description:
      'Advanced servo-electric and hydraulic drive systems deliver fast cycle times without compromising on fold accuracy or repeatability.',
  },
  {
    icon: Settings,
    title: 'Easy to Operate',
    description:
      'Intuitive CNC controls and user-friendly interfaces minimize training time and allow operators to set up complex jobs in minutes.',
  },
  {
    icon: Award,
    title: 'ISO Certified Quality',
    description:
      'All machines are manufactured under strict ISO 9001 quality management standards, with full traceability from raw material to delivery.',
  },
  {
    icon: Globe,
    title: 'Global Support Network',
    description:
      'With service partners in over 40 countries, ARTITECT ensures fast response times and local expertise wherever you operate.',
  },
  {
    icon: Headphones,
    title: 'Lifetime Technical Support',
    description:
      'Our engineering team provides comprehensive after-sales support, including remote diagnostics, spare parts, and on-site service.',
  },
];

const FeaturesSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="features" ref={containerRef} className="bg-brand-navy py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="font-inter text-brand-gold text-xs uppercase tracking-widest mb-3">
            Why Choose ARTITECT
          </p>
          <h2 className="font-playfair font-bold text-brand-white text-4xl md:text-5xl mb-4">
            Engineering Excellence
            <span className="block text-brand-gold">in Every Machine</span>
          </h2>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto mb-5" />
          <p className="font-inter text-brand-silver text-base max-w-2xl mx-auto leading-relaxed">
            ARTITECT MACHINERY combines decades of engineering expertise with cutting-edge
            technology to deliver folding machines that set the industry standard.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-brand-steel/40 border border-brand-steel hover:border-brand-gold/50 rounded-sm p-8 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-brand-gold/10 border border-brand-gold/30 rounded-sm flex items-center justify-center mb-5 group-hover:bg-brand-gold/20 transition-colors duration-300">
                  <Icon size={22} className="text-brand-gold" />
                </div>
                <h3 className="font-playfair font-bold text-brand-white text-xl mb-3">
                  {feature.title}
                </h3>
                <p className="font-inter text-brand-silver text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
