import { useEffect, useRef } from 'react';
import { Cpu, Shield, Zap, Settings, Globe, HeadphonesIcon } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const features = [
  {
    icon: Cpu,
    title: 'CNC Precision Control',
    description:
      'Advanced CNC systems with intuitive touch-screen interfaces allow operators to program complex bending sequences with ease and repeatability.',
  },
  {
    icon: Shield,
    title: 'Built to Last',
    description:
      'Heavy-duty welded steel frames, precision-ground components, and industrial-grade hydraulics ensure decades of reliable performance.',
  },
  {
    icon: Zap,
    title: 'High-Speed Operation',
    description:
      'Optimised drive systems and rapid back-gauge positioning minimise cycle times, maximising throughput on your production floor.',
  },
  {
    icon: Settings,
    title: 'Easy Tool Changes',
    description:
      'Quick-change tooling systems reduce setup time dramatically. Switch between profiles in minutes, not hours.',
  },
  {
    icon: Globe,
    title: 'Global Compliance',
    description:
      'All machines meet CE, ISO, and regional safety standards. Trusted by fabricators across 80+ countries worldwide.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Expert After-Sales Support',
    description:
      'Dedicated technical support, remote diagnostics, and a global network of service engineers keep your machines running at peak performance.',
  },
];

const FeaturesSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="features" ref={containerRef} className="py-24 bg-brand-navy relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-steel/30 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <p className="text-brand-gold font-heading font-semibold text-xs tracking-[0.3em] uppercase mb-4">
              Why Choose ARTITECT
            </p>
            <h2
              id="features-title"
              className="font-heading font-extrabold text-brand-white text-4xl lg:text-5xl leading-tight"
            >
              Engineering Excellence
              <span className="block text-brand-gold">in Every Machine</span>
            </h2>
          </div>
          <p
            id="features-subtitle"
            className="font-body text-brand-silver text-lg leading-relaxed"
          >
            Every ARTITECT machine is designed with one goal: to give your business a competitive
            edge through superior precision, reliability, and ease of use.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-brand-steel/20 border border-brand-silver/10 rounded-2xl p-8 hover:bg-brand-steel/30 hover:border-brand-gold/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-gold/20 transition-colors">
                  <Icon size={22} className="text-brand-gold" />
                </div>
                <h3 className="font-heading font-bold text-brand-white text-lg mb-3">
                  {feature.title}
                </h3>
                <p className="font-body text-brand-silver text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Banner CTA */}
        <div className="relative rounded-2xl overflow-hidden">
          <div
            className="absolute inset-0"
            data-strk-bg-id="features-banner-bg-5f3e9a"
            data-strk-bg="[features-subtitle] [features-title] industrial sheet metal machinery factory"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1400"
            style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-brand-navy/80" />
          <div className="relative px-10 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-heading font-extrabold text-brand-white text-2xl lg:text-3xl mb-2">
                Ready to upgrade your production line?
              </h3>
              <p className="font-body text-brand-silver text-base">
                Talk to our engineers and find the right machine for your application.
              </p>
            </div>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex-shrink-0 bg-brand-gold text-brand-navy font-heading font-bold text-sm rounded-full px-8 py-4 hover:bg-brand-gold-light transition-colors duration-200 border-none cursor-pointer whitespace-nowrap"
            >
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
