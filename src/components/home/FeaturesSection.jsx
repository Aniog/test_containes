import React from 'react';
import { Shield, Zap, Settings, Award, Clock, Headphones } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Heavy-duty construction with premium materials ensures decades of reliable service in demanding industrial environments.',
  },
  {
    icon: Zap,
    title: 'High Performance',
    description: 'Advanced engineering delivers fast cycle times and consistent precision, maximizing your production output.',
  },
  {
    icon: Settings,
    title: 'Precision Engineering',
    description: 'Tight tolerances and repeatable accuracy ensure every fold meets your exact specifications.',
  },
  {
    icon: Award,
    title: 'Quality Certified',
    description: 'All machines meet international quality standards and undergo rigorous testing before delivery.',
  },
  {
    icon: Clock,
    title: 'Quick Setup',
    description: 'Intuitive controls and tool-less adjustments minimize setup time and get you producing faster.',
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    description: 'Dedicated technical support team available to assist with installation, training, and maintenance.',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-4 py-2 rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Engineered for Excellence
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Every Artitect machine is designed with your success in mind. 
            We combine cutting-edge technology with proven reliability.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 md:p-8 rounded-2xl bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-blue-100 group-hover:bg-blue-600 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
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
