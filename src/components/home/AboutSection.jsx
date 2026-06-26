import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const AboutSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
              <img
                alt="About Artitect Machinery"
                data-strk-img-id="about-img-d4e5f6"
                data-strk-img="[about-title] [about-subtitle]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent text-white p-6 rounded-xl shadow-lg hidden md:block">
              <p className="text-3xl font-bold">25+</p>
              <p className="text-sm text-amber-100">Years of Excellence</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 id="about-title" className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
              About Artitect Machinery
            </h2>
            <p id="about-subtitle" className="mt-4 text-lg text-muted leading-relaxed">
              Since 1998, Artitect Machinery has been at the forefront of sheet metal folding technology. Our commitment to precision engineering and customer satisfaction has made us a trusted partner for manufacturers worldwide.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              From small workshops to large-scale industrial operations, our machines deliver consistent, high-quality results. We combine traditional craftsmanship with modern automation to create folding solutions that exceed expectations.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                'State-of-the-art manufacturing facility',
                'Rigorous quality testing protocols',
                'Global distribution and service network',
                'Continuous innovation and R&D investment',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                  </div>
                  <span className="text-primary">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-accent font-medium hover:text-accent-hover transition-colors"
            >
              Learn More About Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
