import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Shield, Cog, Award, HeadphonesIcon, Factory, BarChart3 } from 'lucide-react';

const FEATURES = [
  {
    icon: Shield,
    title: 'Uncompromising Quality',
    description: 'Every machine undergoes rigorous testing and certification to meet international quality standards before delivery.',
  },
  {
    icon: Cog,
    title: 'German Engineering',
    description: 'Designed with precision German engineering principles for maximum reliability, accuracy, and long service life.',
  },
  {
    icon: Award,
    title: 'Industry Leadership',
    description: 'Over 20 years of expertise in metal folding technology, trusted by leading manufacturers worldwide.',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description: 'Dedicated technical support team available around the clock, with remote diagnostics and on-site service options.',
  },
  {
    icon: Factory,
    title: 'End-to-End Solutions',
    description: 'From consultation and installation to training and maintenance, we provide complete lifecycle support.',
  },
  {
    icon: BarChart3,
    title: 'Smart Manufacturing',
    description: 'Industry 4.0 ready with IoT connectivity, predictive maintenance, and real-time production analytics.',
  },
];

export default function FeaturesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      id="features"
      ref={containerRef}
      className="relative py-20 md:py-28 bg-brand-navy overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          data-strk-bg-id="features-bg-a9b8c7"
          data-strk-bg="[features-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-brand-gold text-sm font-semibold tracking-[0.2em] uppercase">
            Why Choose Us
          </span>
          <h2
            id="features-title"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4"
          >
            Built for Performance. Backed by Expertise.
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto rounded-full" />
          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            We combine advanced manufacturing with deep industry knowledge to deliver
            machinery that exceeds expectations.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 hover:border-brand-gold/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-full bg-brand-gold/10 flex items-center justify-center mb-5 group-hover:bg-brand-gold/20 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}