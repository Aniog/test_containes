import React from 'react';
import {
  Shield,
  Cog,
  Gauge,
  Wrench,
  HeadphonesIcon,
  Award,
} from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Built to Last',
    description:
      'Heavy-duty steel construction ensures decades of reliable operation even in the most demanding environments.',
  },
  {
    icon: Gauge,
    title: 'Pinpoint Accuracy',
    description:
      'Advanced CNC controls and precision components deliver consistent folds with tolerances down to 0.1mm.',
  },
  {
    icon: Cog,
    title: 'Smart Automation',
    description:
      'Programmable bending sequences and automatic tool changeovers minimize setup time and maximize throughput.',
  },
  {
    icon: Wrench,
    title: 'Easy Maintenance',
    description:
      'Modular design with quick-access panels and self-diagnostic systems keeps downtime to an absolute minimum.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Expert Support',
    description:
      'Dedicated technical team available 24/7 with remote diagnostics, on-site service, and training programs.',
  },
  {
    icon: Award,
    title: 'Industry Certified',
    description:
      'ISO 9001 and CE certified. Trusted by over 2,000 workshops across 50 countries worldwide.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-navy-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold font-semibold text-sm tracking-widest uppercase">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            Engineering Excellence
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Every ARTITECT machine is designed with one goal: to give you the
            competitive edge in metal fabrication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group bg-navy-medium border border-navy-light rounded-lg p-8 hover:border-gold/40 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gold/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '25+', label: 'Years Experience' },
            { value: '2000+', label: 'Machines Delivered' },
            { value: '50+', label: 'Countries Served' },
            { value: '99.8%', label: 'Customer Satisfaction' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-extrabold text-gold mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
