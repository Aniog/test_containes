import { useEffect, useRef } from 'react';
import { Cpu, Shield, Zap, Settings, Award, Globe } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const features = [
  {
    icon: Cpu,
    title: 'CNC Precision Control',
    description: 'Advanced CNC systems with touchscreen HMI for programmable bend sequences and micron-level accuracy.',
  },
  {
    icon: Shield,
    title: 'Industrial Durability',
    description: 'Heavy-duty steel frames and hardened tooling built to withstand continuous production demands.',
  },
  {
    icon: Zap,
    title: 'High-Speed Performance',
    description: 'Servo-electric drives deliver rapid cycle times without compromising bend quality or repeatability.',
  },
  {
    icon: Settings,
    title: 'Easy Setup & Operation',
    description: 'Intuitive controls and quick-change tooling systems minimise setup time and operator training.',
  },
  {
    icon: Award,
    title: 'ISO Certified Quality',
    description: 'Every machine is manufactured and tested to ISO 9001 standards for consistent, reliable output.',
  },
  {
    icon: Globe,
    title: 'Global Support Network',
    description: 'Dedicated after-sales support, spare parts, and technical service available in 40+ countries.',
  },
];

const Features = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="features" ref={containerRef} className="py-24 md:py-32 bg-light-gray">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Two-column layout: text + image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left: Text */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-gold" />
              <span
                className="text-xs font-semibold tracking-[0.3em] text-gold uppercase"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Why Choose Us
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold text-dark-text mb-6 leading-tight"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Engineering Excellence in Every Machine
            </h2>
            <p
              id="features-about-desc"
              className="text-gray-600 text-lg leading-relaxed mb-8"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              For over two decades, ARTITECT MACHINERY has been at the forefront of sheet metal folding technology. Our machines combine robust engineering with intelligent automation to help fabricators achieve more — faster, with less waste.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-navy-deep text-off-white font-semibold rounded-lg hover:bg-navy-mid transition-all duration-200 text-sm"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Talk to an Expert
              </a>
              <a
                href="#products"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-navy-light text-dark-text font-semibold rounded-lg hover:border-navy-deep hover:bg-navy-deep/5 transition-all duration-200 text-sm"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                View All Products
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96 lg:h-[480px] bg-navy-light">
            <img
              alt="ARTITECT MACHINERY sheet metal folding machine in operation"
              data-strk-img-id="features-machine-img-5k2m9p"
              data-strk-img="[features-about-desc] sheet metal folding machine industrial factory"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
            {/* Gold accent badge */}
            <div className="absolute bottom-6 left-6 bg-navy-deep/90 backdrop-blur-sm border border-gold/30 rounded-xl px-5 py-4">
              <div className="text-2xl font-bold text-gold" style={{ fontFamily: 'Montserrat, sans-serif' }}>ISO 9001</div>
              <div className="text-xs text-slate-cool mt-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>Certified Manufacturer</div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-navy-deep rounded-xl flex items-center justify-center mb-5">
                  <Icon size={22} className="text-gold" />
                </div>
                <h3
                  className="text-lg font-bold text-dark-text mb-3"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-gray-500 text-sm leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
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

export default Features;
