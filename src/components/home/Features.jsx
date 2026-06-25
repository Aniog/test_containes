import React from 'react';
import { Shield, Zap, Award, Headphones } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Heavy-duty construction with premium materials ensures decades of reliable operation in demanding industrial environments.',
  },
  {
    icon: Zap,
    title: 'Precision Engineering',
    description: 'Computer-controlled axes and advanced sensor systems deliver micron-level accuracy on every bend.',
  },
  {
    icon: Award,
    title: 'Industry Leading',
    description: 'Trusted by manufacturers worldwide. Our machines meet the highest international quality and safety standards.',
  },
  {
    icon: Headphones,
    title: 'Full Support',
    description: 'Dedicated technical support, installation, training, and maintenance services to keep your operations running smoothly.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Why Choose ARTITECT MACHINERY
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We combine German engineering precision with modern manufacturing technology
            to deliver folding machines that exceed expectations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-xl hover:bg-slate-50 transition-colors duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-50 rounded-full mb-5">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-200 pt-12">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">25+</div>
            <div className="text-sm text-slate-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-sm text-slate-600">Machines Installed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">40+</div>
            <div className="text-sm text-slate-600">Countries Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">99%</div>
            <div className="text-sm text-slate-600">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
