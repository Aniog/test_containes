import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="bg-brand-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative overflow-hidden">
              <img
                alt="Artitect Machinery factory"
                data-strk-img-id="about-factory-5b3c7d"
                data-strk-img="[about-subtitle] [about-title] precision metal manufacturing factory"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-96 object-cover"
              />
            </div>
            {/* Accent box */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-gold/10 border-2 border-brand-gold/30 -z-10" />
            {/* Experience badge */}
            <div className="absolute top-6 -left-6 bg-brand-navy p-6 shadow-xl">
              <div className="font-serif text-4xl font-bold text-brand-gold">25+</div>
              <div className="text-brand-silver text-xs tracking-widest uppercase font-sans mt-1">Years of<br />Excellence</div>
            </div>
          </div>

          {/* Text Side */}
          <div>
            <p className="text-brand-gold text-xs tracking-widest uppercase font-sans font-semibold mb-3">
              About Artitect Machinery
            </p>
            <h2
              id="about-title"
              className="font-serif text-4xl md:text-5xl font-bold text-brand-navy mb-4 leading-tight"
            >
              Crafting the Future of Metal Forming
            </h2>
            <div className="w-16 h-1 bg-brand-gold mb-6" />
            <p
              id="about-subtitle"
              className="text-brand-steel/70 text-base leading-relaxed mb-6 font-sans"
            >
              Founded on a passion for precision engineering, Artitect Machinery has grown into a globally recognized manufacturer of sheet metal folding machines. Our commitment to innovation, quality, and customer success drives everything we do.
            </p>
            <p className="text-brand-steel/70 text-base leading-relaxed mb-8 font-sans">
              From our state-of-the-art manufacturing facility, we design and build every machine to the highest standards — combining advanced CNC technology with robust mechanical engineering to deliver solutions that perform flawlessly in the most demanding environments.
            </p>

            {/* Milestones */}
            <div className="grid grid-cols-2 gap-6 border-t border-brand-light pt-8">
              {[
                { value: '500+', label: 'Machines Installed' },
                { value: '40+', label: 'Countries Served' },
                { value: 'ISO 9001', label: 'Certified Quality' },
                { value: '24/7', label: 'Technical Support' },
              ].map((item) => (
                <div key={item.label}>
                  <div className="font-serif text-2xl font-bold text-brand-navy">{item.value}</div>
                  <div className="text-brand-silver text-xs tracking-wide uppercase font-sans mt-1">{item.label}</div>
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
