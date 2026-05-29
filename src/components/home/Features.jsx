import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Zap, Shield, Settings, Wind, Award, Wrench } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightweight Frames',
    description: 'Aircraft-grade aluminum and carbon fiber construction keeps weight minimal without sacrificing strength.',
  },
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Every component is stress-tested to endure thousands of miles across the toughest terrain.',
  },
  {
    icon: Settings,
    title: 'Precision Gearing',
    description: 'Shimano and SRAM drivetrain options deliver smooth, reliable shifting in any condition.',
  },
  {
    icon: Wind,
    title: 'Aerodynamic Design',
    description: 'Wind-tunnel tested geometry reduces drag so you can ride faster with less effort.',
  },
  {
    icon: Award,
    title: 'Award-Winning',
    description: 'Recognized by cycling publications worldwide for innovation, design, and performance.',
  },
  {
    icon: Wrench,
    title: 'Easy Maintenance',
    description: 'Modular components and clear service guides make upkeep simple for every rider.',
  },
];

const Features = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="features" ref={containerRef} className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#e94560] text-sm font-semibold uppercase tracking-widest">
            Why Choose Velox
          </span>
          <h2 id="features-heading" className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            Engineering Excellence
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto text-lg">
            Every Velox bike is the result of obsessive attention to detail and a passion for the ride.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-[#e94560]/10 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-[#e94560]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
