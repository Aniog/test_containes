import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '25+', label: 'Years Experience' },
  { value: '5,000+', label: 'Machines Delivered' },
  { value: '40+', label: 'Countries Served' },
  { value: '99.5%', label: 'Customer Satisfaction' },
];

const AboutPreview = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img
                alt="ARTITECT MACHINERY workshop"
                data-strk-img-id="about-preview-img-f8d2a4"
                data-strk-img="[about-preview-desc] [about-preview-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gold text-white p-6 rounded-lg shadow-lg hidden md:block">
              <p className="text-3xl font-bold">25+</p>
              <p className="text-sm font-medium">Years of Excellence</p>
            </div>
          </div>

          <div>
            <p className="text-gold font-medium text-sm tracking-[0.2em] uppercase mb-4">
              About ARTITECT
            </p>
            <h2
              id="about-preview-title"
              className="text-3xl sm:text-4xl font-bold text-navy mb-6"
            >
              Crafting the Future of Metal Fabrication
            </h2>
            <p
              id="about-preview-desc"
              className="text-warm-text leading-relaxed mb-6"
            >
              Since 1998, ARTITECT MACHINERY has been at the forefront of metal folding 
              technology. Our commitment to innovation, quality, and customer success has 
              made us a trusted partner for manufacturers across the globe.
            </p>
            <p className="text-warm-text leading-relaxed mb-8">
              Every machine that leaves our facility embodies decades of engineering expertise 
              and a relentless pursuit of perfection. From design to after-sales support, 
              we ensure your success at every step.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-navy">{stat.value}</p>
                  <p className="text-xs text-warm-muted mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-semibold px-8 py-3.5 rounded-md transition-colors duration-200"
            >
              Learn More <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
