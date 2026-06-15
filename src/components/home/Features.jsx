import React, { useRef, useEffect } from 'react';
import { Settings, Wrench, Shield, Zap, Trophy, Clock } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const features = [
  {
    icon: Settings,
    title: 'Precision Engineering',
    description: 'Every machine is crafted with micron-level precision for consistent, accurate folds every time.',
  },
  {
    icon: Wrench,
    title: 'Easy Maintenance',
    description: 'Designed for easy access and minimal downtime. Keep your production running smoothly.',
  },
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Heavy-duty construction with premium materials ensures decades of reliable service.',
  },
  {
    icon: Zap,
    title: 'Energy Efficient',
    description: 'Advanced motor technology reduces power consumption without compromising performance.',
  },
  {
    icon: Trophy,
    title: 'Industry Leading',
    description: 'Trusted by professionals worldwide. Our machines set the standard for quality.',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock technical support and rapid response for all your service needs.',
  },
];

const Features = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section id="features" className="section-padding bg-white" ref={containerRef}>
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-copper bg-opacity-10 rounded-full text-copper text-sm font-semibold mb-4">
            WHY CHOOSE US
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-4">
            Engineered for Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every ARTITECT machine is built with precision, durability, and 
            innovation in mind. Here's what sets us apart.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="card group hover:border-steel-blue border-2 border-transparent"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-steel-blue bg-opacity-10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-steel-blue transition-colors duration-300">
                  <Icon 
                    size={32} 
                    className="text-steel-blue group-hover:text-white transition-colors duration-300" 
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-deep-navy mb-3">
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

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-gray-200">
          <div className="text-center">
            <div className="text-5xl font-bold text-steel-blue mb-2">25+</div>
            <div className="text-gray-600 font-medium">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-steel-blue mb-2">500+</div>
            <div className="text-gray-600 font-medium">Machines Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-steel-blue mb-2">50+</div>
            <div className="text-gray-600 font-medium">Countries Served</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-steel-blue mb-2">98%</div>
            <div className="text-gray-600 font-medium">Customer Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
