import React from 'react';
import {
  Cog,
  Shield,
  Zap,
  Ruler,
  Wrench,
  BarChart3,
} from 'lucide-react';

const features = [
  {
    icon: Cog,
    title: 'CNC Precision',
    description:
      'Advanced CNC controllers ensure bending accuracy within 0.1mm, delivering consistent results across every workpiece.',
  },
  {
    icon: Shield,
    title: 'Built to Last',
    description:
      'Heavy-duty welded steel frames and premium components guarantee decades of reliable operation in demanding environments.',
  },
  {
    icon: Zap,
    title: 'High Speed',
    description:
      'Servo-driven systems and optimized bending cycles reduce production time by up to 40% compared to conventional machines.',
  },
  {
    icon: Ruler,
    title: 'Versatile Bending',
    description:
      'Handle a wide range of material thicknesses and bending angles with quick-change tooling and programmable setups.',
  },
  {
    icon: Wrench,
    title: 'Easy Maintenance',
    description:
      'Modular design with accessible service points and diagnostic systems keeps downtime to an absolute minimum.',
  },
  {
    icon: BarChart3,
    title: 'Smart Monitoring',
    description:
      'Real-time production analytics and IoT connectivity enable predictive maintenance and process optimization.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold text-xs font-semibold tracking-wider uppercase">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mt-3 mb-4">
            Engineering Excellence in Every Detail
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Every ARTITECT machine is designed with the operator in mind — combining
            cutting-edge technology with intuitive usability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group p-8 rounded-lg border border-slate-200 hover:border-gold/40 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-steel/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-steel/20 transition-colors">
                  <Icon className="w-6 h-6 text-steel" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
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
