import React from 'react';
import { Cog, Shield, Wrench, Clock, Award, Globe } from 'lucide-react';

const features = [
  {
    icon: Cog,
    title: 'Precision Engineering',
    desc: 'Every machine is built with micron-level accuracy, ensuring consistent folds across thousands of cycles.',
  },
  {
    icon: Shield,
    title: 'Built to Last',
    desc: 'Heavy-duty steel frames and premium components deliver decades of reliable service in demanding environments.',
  },
  {
    icon: Wrench,
    title: 'Easy Maintenance',
    desc: 'Modular design and accessible components make routine maintenance simple, minimizing downtime.',
  },
  {
    icon: Clock,
    title: 'High Productivity',
    desc: 'Advanced CNC controls and rapid cycle times maximize your throughput and reduce production costs.',
  },
  {
    icon: Award,
    title: 'Quality Certified',
    desc: 'ISO 9001 certified manufacturing with rigorous quality control at every stage of production.',
  },
  {
    icon: Globe,
    title: 'Global Support',
    desc: 'Worldwide service network with technical support, spare parts, and training available in 40+ countries.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold font-medium text-sm tracking-[0.2em] uppercase mb-4">
            Why Choose Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
            Engineering Excellence in Every Detail
          </h2>
          <p className="text-warm-text leading-relaxed">
            With over 25 years of expertise, ARTITECT MACHINERY delivers metal folding 
            solutions that set the industry standard for precision and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-8 rounded-lg border border-warm-border hover:border-gold/30 hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gold-50 rounded-lg flex items-center justify-center mb-5 group-hover:bg-gold/10 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-lg font-semibold text-navy mb-3">{feature.title}</h3>
              <p className="text-warm-text text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
