import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const AboutSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-24 md:py-32 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                alt="ARTITECT Machinery factory floor"
                data-strk-img-id="about-img-main-4f8b2c"
                data-strk-img="[about-desc] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-80 lg:h-96 object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-brand-gold rounded-2xl p-6 shadow-xl">
              <div className="font-heading text-brand-navy text-4xl font-bold">25+</div>
              <div className="font-body text-brand-navy/80 text-sm font-medium mt-1">
                Years of<br />Excellence
              </div>
            </div>
          </div>

          {/* Text side */}
          <div>
            <div className="inline-flex items-center gap-2 mb-5">
              <div className="w-8 h-px bg-brand-gold" />
              <span className="font-body text-brand-gold text-xs font-semibold tracking-[0.25em] uppercase">
                Our Story
              </span>
            </div>
            <h2
              id="about-title"
              className="font-heading text-brand-dark-text text-4xl md:text-5xl font-bold mb-6 leading-tight"
            >
              Crafting Precision Since Day One
            </h2>
            <p
              id="about-desc"
              className="font-body text-brand-gray text-base leading-relaxed mb-5"
            >
              ARTITECT MACHINERY was founded on a single principle: that every fold should be
              perfect. For over two decades, we have been designing and manufacturing sheet metal
              folding machines that set the standard for precision, reliability, and innovation.
            </p>
            <p className="font-body text-brand-gray text-base leading-relaxed mb-8">
              Our engineering team combines deep metallurgical expertise with cutting-edge
              automation technology to produce machines that empower fabricators worldwide.
              From small workshops to Fortune 500 manufacturers, ARTITECT machines are trusted
              on production floors across 40+ countries.
            </p>

            {/* Milestones */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-200">
              {[
                { value: '500+', label: 'Machines Installed' },
                { value: '40+', label: 'Countries Served' },
                { value: '98%', label: 'Customer Satisfaction' },
                { value: '24/7', label: 'Technical Support' },
              ].map((item) => (
                <div key={item.label}>
                  <div className="font-heading text-brand-gold text-3xl font-bold">{item.value}</div>
                  <div className="font-body text-brand-gray text-sm mt-1">{item.label}</div>
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
