import React from 'react';
import { Shield, Cog, Clock, Award, Wrench, Globe } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Unmatched Precision',
    description: 'Our folding machines deliver bend accuracy of ±0.1mm, ensuring every fold meets exacting specifications.',
  },
  {
    icon: Cog,
    title: 'Advanced CNC Control',
    description: 'Intelligent CNC systems with programmable back gauges and automated folding sequences for maximum efficiency.',
  },
  {
    icon: Clock,
    title: 'High Productivity',
    description: 'Fast cycle times and quick setup procedures keep your production line running at peak performance.',
  },
  {
    icon: Award,
    title: 'Certified Quality',
    description: 'ISO 9001 certified manufacturing with rigorous quality control at every stage of production.',
  },
  {
    icon: Wrench,
    title: 'Easy Maintenance',
    description: 'Designed for minimal downtime with accessible components and comprehensive service support.',
  },
  {
    icon: Globe,
    title: 'Global Support',
    description: 'Worldwide service network with technical support, spare parts availability, and on-site assistance.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-amber font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4">
            Engineered for Excellence
          </h2>
          <p className="text-slate-400 leading-relaxed">
            Every ARTITECT machine is built with a relentless focus on precision, durability, and operator experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-navy-light/50 border border-slate-700/50 rounded-xl p-6 md:p-8 hover:border-steel/50 hover:bg-navy-light transition-all duration-300"
            >
              <div className="w-12 h-12 bg-steel/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-steel/20 transition-colors">
                <feature.icon className="w-6 h-6 text-steel" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
