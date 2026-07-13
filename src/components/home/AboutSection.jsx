import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle } from 'lucide-react';

const milestones = [
  { year: '2000', event: 'Founded in Stuttgart, Germany' },
  { year: '2008', event: 'Launched first CNC double folding machine' },
  { year: '2014', event: 'Expanded to 40+ export markets' },
  { year: '2019', event: 'Introduced servo-driven automation series' },
  { year: '2024', event: '500th machine milestone achieved' },
];

const values = [
  'Precision-first engineering philosophy',
  'Rigorous quality control at every stage',
  'Sustainable manufacturing practices',
  'Customer-centric design and support',
];

const AboutSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="bg-brand-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-brand-accent" />
            <span className="font-inter font-semibold text-brand-accent text-xs tracking-[0.25em] uppercase">
              Our Story
            </span>
            <div className="h-px w-10 bg-brand-accent" />
          </div>
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-brand-navy mb-4">
            A Legacy of Precision
          </h2>
          <p className="font-inter text-brand-mid text-lg max-w-2xl mx-auto leading-relaxed">
            For over two decades, ARTITECT MACHINERY has been at the forefront of
            sheet metal folding technology, trusted by fabricators worldwide.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96 lg:h-[500px] bg-brand-light">
            <img
              alt="ARTITECT Machinery manufacturing facility"
              data-strk-img-id="about-facility-4k9m2p"
              data-strk-img="[about-desc] [about-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 bg-brand-navy/90 backdrop-blur-sm rounded-xl px-5 py-4">
              <div className="font-playfair font-bold text-2xl text-brand-accent">25+</div>
              <div className="font-inter text-xs text-white/70 mt-0.5">Years of Excellence</div>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h3
              id="about-title"
              className="font-playfair font-bold text-3xl text-brand-navy mb-5"
            >
              Crafting the Future of Metal Fabrication
            </h3>
            <p
              id="about-desc"
              className="font-inter text-brand-mid text-base leading-relaxed mb-6"
            >
              ARTITECT MACHINERY was founded with a singular vision: to create sheet
              metal folding machines that combine the elegance of precision engineering
              with the robustness demanded by modern industry. Our machines are designed,
              manufactured, and tested in-house, ensuring every unit that leaves our
              facility meets the highest standards.
            </p>
            <p className="font-inter text-brand-mid text-base leading-relaxed mb-8">
              From small fabrication workshops to large-scale industrial plants, our
              diverse product range — including double folding machines, sheet metal
              folders, and metal folding machines — serves customers across HVAC,
              automotive, construction, and aerospace sectors.
            </p>

            {/* Values */}
            <ul className="space-y-3">
              {values.map((v) => (
                <li key={v} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-brand-accent flex-shrink-0 mt-0.5" />
                  <span className="font-inter text-sm text-brand-dark">{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-brand-light rounded-2xl p-10">
          <h3 className="font-playfair font-bold text-2xl text-brand-navy text-center mb-10">
            Our Journey
          </h3>
          <div className="relative">
            {/* Line */}
            <div className="hidden md:block absolute top-5 left-0 right-0 h-px bg-brand-mid/30" />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {milestones.map((m, i) => (
                <div key={m.year} className="flex flex-col items-center text-center relative">
                  <div className="w-10 h-10 rounded-full bg-brand-navy flex items-center justify-center mb-3 z-10 flex-shrink-0">
                    <span className="font-inter font-bold text-xs text-brand-accent">{i + 1}</span>
                  </div>
                  <div className="font-playfair font-bold text-lg text-brand-accent mb-1">{m.year}</div>
                  <div className="font-inter text-xs text-brand-mid leading-relaxed">{m.event}</div>
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
