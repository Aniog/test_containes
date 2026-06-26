import React from 'react';
import { Shield, Zap, Settings, Award, Headphones, Wrench } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Precision Engineering',
    description: 'Every machine is built with micron-level accuracy using premium-grade components and rigorous quality control.',
  },
  {
    icon: Zap,
    title: 'High Performance',
    description: 'Powerful motors and advanced drive systems deliver consistent speed and torque for maximum productivity.',
  },
  {
    icon: Settings,
    title: 'Smart Controls',
    description: 'Intuitive CNC controls with programmable sequences, real-time monitoring, and easy-to-use interfaces.',
  },
  {
    icon: Award,
    title: 'Industry Leading',
    description: 'Award-winning designs recognized globally for innovation, reliability, and exceptional build quality.',
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    description: 'Dedicated technical support team with decades of experience ready to assist you 24/7.',
  },
  {
    icon: Wrench,
    title: 'Easy Maintenance',
    description: 'Modular design for quick access to components, minimizing downtime and maintenance costs.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-amber-500 font-semibold text-sm tracking-wider uppercase">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
            Built for Excellence
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Our machines combine cutting-edge technology with robust engineering to deliver unmatched performance in sheet metal fabrication.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:border-amber-500/30 hover:bg-slate-800 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
                <feature.icon size={28} className="text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-20 pt-12 border-t border-slate-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {['ISO 9001 Certified', 'CE Marked', '25 Year Warranty', 'Global Service Network'].map((badge, index) => (
              <div key={index} className="text-center">
                <div className="text-slate-500 font-semibold text-sm tracking-wide">
                  {badge}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
