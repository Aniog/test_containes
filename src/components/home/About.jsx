import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-24 md:py-32 bg-surfaceMid">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                alt="ARTITECT Machinery factory floor"
                data-strk-img-id="about-img-factory-4k9m2p"
                data-strk-img="[about-desc] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-80 lg:h-96 object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-navy text-white rounded-xl p-5 shadow-xl hidden md:block">
              <div className="text-3xl font-bold text-gold">25+</div>
              <div className="text-xs text-white/60 mt-1 tracking-wide">Years of Excellence</div>
            </div>
            {/* Gold accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-gold/30 rounded-xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-steel">About ARTITECT</span>
            <h2 id="about-title" className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-6">
              Crafting Precision Since Day One
            </h2>
            <p id="about-desc" className="text-bodyText text-base leading-relaxed mb-5">
              ARTITECT MACHINERY was founded on a single principle: that every sheet metal fabricator deserves access to machines that are as precise as they are reliable. Over more than two decades, we have grown into a trusted global supplier of double folding machines, sheet metal folders, and metal folding systems.
            </p>
            <p className="text-bodyText text-base leading-relaxed mb-8">
              Our engineering team combines deep industry knowledge with the latest manufacturing technologies to produce machines that exceed expectations — in performance, longevity, and ease of use. From small workshops to large-scale production facilities, ARTITECT machines are at work around the world.
            </p>

            {/* Milestones */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '2000', label: 'Founded' },
                { value: '500+', label: 'Machines Installed' },
                { value: '40+', label: 'Countries' },
                { value: '98%', label: 'Customer Satisfaction' },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-xl p-4 border border-surfaceMid shadow-sm">
                  <div className="text-2xl font-bold text-steel">{item.value}</div>
                  <div className="text-sm text-mutedText mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
