import { useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const milestones = [
  { year: '1999', event: 'Founded in Stuttgart, Germany' },
  { year: '2005', event: 'Launched first CNC folding machine line' },
  { year: '2012', event: 'Expanded to 40+ global markets' },
  { year: '2018', event: 'Introduced servo-electric drive technology' },
  { year: '2024', event: '500th machine delivered worldwide' },
];

const values = [
  'Precision engineering at every stage',
  'Sustainable manufacturing practices',
  'Customer-first design philosophy',
  'Continuous innovation and R&D investment',
];

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-24 md:py-32 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <div className="text-center mb-16">
          <span className="text-brand-gold text-xs font-semibold tracking-widest uppercase">
            Our Story
          </span>
          <h2 className="font-heading font-bold text-brand-navy text-4xl md:text-5xl mt-3">
            Built on a Legacy of Excellence
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <img
                alt="ARTITECT Machinery factory"
                data-strk-img-id="about-factory-img-v1w2x3"
                data-strk-img="[about-desc] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-brand-navy rounded-2xl p-6 shadow-xl border border-brand-gold/20">
              <div className="font-heading font-bold text-brand-gold text-4xl">25+</div>
              <div className="text-brand-silver text-xs tracking-widest uppercase mt-1">
                Years of Innovation
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <h3
              id="about-title"
              className="font-heading font-bold text-brand-navy text-2xl md:text-3xl mb-4"
            >
              Precision Machinery, Trusted Worldwide
            </h3>
            <p
              id="about-desc"
              className="text-brand-steel/80 text-base leading-relaxed mb-6"
            >
              Since 1999, ARTITECT MACHINERY has been at the forefront of sheet metal
              folding technology. Founded by a team of mechanical engineers with a shared
              passion for precision, we have grown from a regional manufacturer into a
              globally recognized brand trusted by fabricators, aerospace companies, and
              construction firms across six continents.
            </p>
            <p className="text-brand-steel/80 text-base leading-relaxed mb-8">
              Every machine that leaves our factory undergoes rigorous quality testing,
              ensuring that when it arrives at your facility, it performs exactly as
              promised — from day one and for decades to come.
            </p>

            {/* Values */}
            <ul className="space-y-3 mb-10">
              {values.map((value) => (
                <li key={value} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                  <span className="text-brand-steel text-sm">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-24">
          <h3 className="font-heading font-bold text-brand-navy text-2xl text-center mb-12">
            Our Journey
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-5 left-0 right-0 h-0.5 bg-brand-silver/30 hidden md:block" />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {milestones.map((m, i) => (
                <div key={m.year} className="relative flex flex-col items-center text-center">
                  {/* Dot */}
                  <div className="w-10 h-10 rounded-full bg-brand-navy border-2 border-brand-gold flex items-center justify-center z-10 mb-4">
                    <span className="text-brand-gold text-xs font-bold">{i + 1}</span>
                  </div>
                  <div className="font-heading font-bold text-brand-gold text-lg">{m.year}</div>
                  <div className="text-brand-steel text-sm mt-1 leading-snug">{m.event}</div>
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
