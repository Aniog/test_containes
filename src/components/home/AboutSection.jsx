import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const AboutSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="bg-brand-light py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-sm shadow-2xl">
              <img
                alt="ARTITECT Machinery factory"
                data-strk-img-id="about-factory-img-3a7b9c"
                data-strk-img="[about-desc] [about-title] [about-label]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-80 lg:h-96 object-cover"
              />
            </div>
            {/* Gold accent box */}
            <div className="absolute -bottom-6 -right-6 bg-brand-gold p-6 rounded-sm shadow-xl hidden lg:block">
              <p className="font-playfair font-bold text-brand-navy text-3xl">25+</p>
              <p className="font-inter text-brand-navy text-xs uppercase tracking-widest mt-1">Years of Excellence</p>
            </div>
          </div>

          {/* Text Side */}
          <div>
            <p
              id="about-label"
              className="font-inter text-brand-gold text-xs uppercase tracking-widest mb-3"
            >
              About ARTITECT MACHINERY
            </p>
            <h2
              id="about-title"
              className="font-playfair font-bold text-brand-navy text-4xl md:text-5xl mb-5 leading-tight"
            >
              Crafting Precision Since Day One
            </h2>
            <div className="w-16 h-0.5 bg-brand-gold mb-6" />
            <p
              id="about-desc"
              className="font-inter text-gray-600 text-base leading-relaxed mb-5"
            >
              ARTITECT MACHINERY was founded on a single principle: that every sheet metal
              fabricator deserves equipment that performs flawlessly, day after day. From our
              state-of-the-art manufacturing facility, we design and build double folding machines,
              sheet metal folders, and metal folding machines that are trusted by fabricators worldwide.
            </p>
            <p className="font-inter text-gray-600 text-base leading-relaxed mb-8">
              Our engineering team combines traditional craftsmanship with modern CNC technology,
              resulting in machines that are not only precise and durable, but also intuitive to
              operate. We serve industries ranging from HVAC and construction to automotive and
              aerospace fabrication.
            </p>

            {/* Milestones */}
            <div className="grid grid-cols-2 gap-6 border-t border-gray-200 pt-8">
              {[
                { value: '1999', label: 'Founded' },
                { value: '500+', label: 'Machines Delivered' },
                { value: '40+', label: 'Countries' },
                { value: '98%', label: 'Customer Satisfaction' },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-playfair font-bold text-brand-gold text-3xl">{item.value}</p>
                  <p className="font-inter text-gray-500 text-xs uppercase tracking-widest mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
