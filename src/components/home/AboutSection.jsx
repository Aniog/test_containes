import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const AboutSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="bg-brand-navy py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-full h-full border-2 border-brand-gold/30 z-0" />
          <img
            alt="ARTITECT Machinery factory"
            data-strk-img-id="about-img-artitect-b2c3d4"
            data-strk-img="[about-desc] [about-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="relative z-10 w-full object-cover"
          />
          {/* Badge */}
          <div className="absolute bottom-6 right-6 z-20 bg-brand-gold p-5 text-center shadow-xl">
            <div className="font-heading font-800 text-brand-navy text-3xl leading-none">25+</div>
            <div className="font-body text-brand-navy text-xs uppercase tracking-widest mt-1">Years of<br/>Excellence</div>
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="font-body text-brand-gold uppercase tracking-[0.3em] text-sm font-semibold mb-4">About Us</p>
          <h2 id="about-title" className="font-heading font-800 text-brand-white text-4xl md:text-5xl leading-tight mb-6">
            Engineering Excellence Since 1999
          </h2>
          <div className="w-16 h-1 bg-brand-gold mb-8" />
          <p id="about-desc" className="font-body text-brand-silver text-lg leading-relaxed mb-6">
            ARTITECT MACHINERY was founded with a single mission: to build the world's most precise and reliable sheet metal folding machines. Over 25 years, we have grown from a specialist workshop into a globally recognised manufacturer trusted by fabricators, contractors, and OEMs across 40+ countries.
          </p>
          <p className="font-body text-brand-silver leading-relaxed mb-10">
            Every machine that leaves our facility undergoes rigorous quality control, precision calibration, and full operational testing. We combine traditional craftsmanship with cutting-edge CNC technology to deliver machines that perform flawlessly — day after day, year after year.
          </p>

          <div className="grid grid-cols-2 gap-6">
            {[
              { value: '500+', label: 'Machines Delivered' },
              { value: '40+', label: 'Countries Served' },
              { value: '100%', label: 'Quality Tested' },
              { value: '24/7', label: 'Technical Support' },
            ].map((item) => (
              <div key={item.label} className="border-l-2 border-brand-gold pl-4">
                <div className="font-heading font-800 text-brand-gold text-2xl">{item.value}</div>
                <div className="font-body text-brand-silver text-sm uppercase tracking-widest mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
