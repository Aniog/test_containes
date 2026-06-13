import React from 'react';
import {
  Cpu,
  Shield,
  Wrench,
  Zap,
  Gauge,
  Headphones,
} from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: 'CNC Precision Control',
    description:
      'Advanced CNC controllers with intuitive touch-screen interfaces ensure micron-level accuracy on every bend.',
  },
  {
    icon: Shield,
    title: 'Built to Last',
    description:
      'Heavy-duty welded steel frames and premium components guarantee decades of reliable operation in demanding environments.',
  },
  {
    icon: Wrench,
    title: 'Quick Tool Change',
    description:
      'Patented quick-change tooling systems reduce setup time by up to 80%, keeping your production running at full speed.',
  },
  {
    icon: Zap,
    title: 'Energy Efficient',
    description:
      'Intelligent servo-driven systems consume up to 50% less energy than conventional hydraulic folding machines.',
  },
  {
    icon: Gauge,
    title: 'Versatile Capacity',
    description:
      'From thin gauge sheet metal to heavy plate, our machines handle a wide range of material types and thicknesses.',
  },
  {
    icon: Headphones,
    title: 'Global Support',
    description:
      '24/7 technical support and a worldwide network of certified service engineers keep your operations running smoothly.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-28 lg:py-32 bg-navy-medium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-5">
            Engineering Excellence
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Every ARTITECT machine is designed with one goal: to deliver
            unmatched precision and reliability for your metal folding needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group bg-card-dark border border-navy-light rounded-xl p-6 md:p-8 hover:border-gold/40 transition-all duration-300 hover:shadow-xl hover:shadow-gold/5"
              >
                <div className="w-14 h-14 bg-gold/10 border border-gold/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
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
