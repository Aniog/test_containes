import React from 'react';
import { Settings, Gauge, Layers, Shield, Wrench, Clock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Settings,
      title: 'Precision Engineering',
      description: 'Every machine is crafted with micron-level precision to ensure accurate, consistent folds every time.',
    },
    {
      icon: Gauge,
      title: 'High Performance',
      description: 'Optimized for speed and efficiency without compromising on quality or accuracy.',
    },
    {
      icon: Layers,
      title: 'Versatile Applications',
      description: 'Handle various materials and thicknesses with adjustable settings for maximum flexibility.',
    },
    {
      icon: Shield,
      title: 'Built to Last',
      description: 'Heavy-duty construction using premium materials ensures years of reliable service.',
    },
    {
      icon: Wrench,
      title: 'Easy Maintenance',
      description: 'Designed for simple maintenance with easy access to components and minimal downtime.',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Our expert technical team is always available to assist with any questions or issues.',
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 id="features-title" className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Why Choose ARTITECT
          </h2>
          <p id="features-subtitle" className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine innovative engineering with decades of expertise to deliver
            sheet metal folding machines that exceed expectations
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors duration-300"
              >
                {/* Icon */}
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-lg bg-blue-600 text-white group-hover:bg-blue-700 transition-colors">
                  <Icon className="h-8 w-8" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Engineered for Professionals
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                At ARTITECT MACHINERY, we understand that precision matters. Our sheet metal
                folding machines are designed by engineers who understand the demands of
                modern fabrication. Every component is carefully selected and tested to ensure
                optimal performance.
              </p>
              <ul className="space-y-3">
                {[
                  'ISO 9001:2015 Certified Manufacturing',
                  'CE Certified Safety Standards',
                  '5-Year Comprehensive Warranty',
                  'Custom Configuration Available',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg
                      className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image placeholder */}
            <div className="h-80 rounded-lg bg-slate-800 flex items-center justify-center">
              <Settings className="h-32 w-32 text-white opacity-30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
