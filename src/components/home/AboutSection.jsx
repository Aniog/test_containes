import { useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const milestones = [
  { year: '1999', event: 'Founded in the heart of the industrial belt' },
  { year: '2005', event: 'Launched first CNC-controlled folding machine' },
  { year: '2012', event: 'Expanded to 25 international markets' },
  { year: '2018', event: 'Introduced Industry 4.0 smart machine line' },
  { year: '2024', event: 'Surpassed 500 machines delivered worldwide' },
];

const values = [
  'Precision in every component',
  'Transparency with every client',
  'Innovation-driven engineering',
  'Sustainable manufacturing practices',
  'Long-term partnership approach',
];

const AboutSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section id="about" ref={containerRef} className="bg-steel-900 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold-500 text-sm font-inter font-semibold uppercase tracking-widest mb-3 block">
            Our Story
          </span>
          <h2 className="font-barlow font-bold text-4xl md:text-5xl text-steel-100 tracking-tight">
            Built on a Foundation of Precision
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <img
              alt="Artitect Machinery workshop"
              data-strk-img-id="about-img-main-3k9m2p"
              data-strk-img="[about-desc] [about-title] precision metal fabrication workshop machinery"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-steel-900/60 to-transparent" />
            {/* Floating stat card */}
            <div className="absolute bottom-6 left-6 bg-steel-900/90 backdrop-blur-sm border border-steel-700 rounded-xl p-4">
              <div className="font-barlow font-bold text-3xl text-gold-500">25+</div>
              <div className="font-inter text-xs text-steel-400 mt-0.5">Years of Excellence</div>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h3
              id="about-title"
              className="font-barlow font-bold text-2xl md:text-3xl text-steel-100 mb-5 leading-tight"
            >
              Crafting the Future of Sheet Metal Fabrication
            </h3>
            <p
              id="about-desc"
              className="font-inter text-steel-400 leading-relaxed mb-6"
            >
              Since 1999, ARTITECT MACHINERY has been at the forefront of sheet metal folding technology. What began as a small engineering workshop has grown into a globally recognized manufacturer trusted by fabricators, contractors, and industrial producers across 40+ countries.
            </p>
            <p className="font-inter text-steel-400 leading-relaxed mb-8">
              Our machines are designed by engineers who understand the demands of real-world fabrication. Every fold, every tolerance, every control interface is refined through decades of hands-on experience and continuous innovation.
            </p>

            {/* Values */}
            <div className="space-y-3">
              {values.map((value) => (
                <div key={value} className="flex items-center gap-3">
                  <CheckCircle size={17} className="text-gold-500 shrink-0" />
                  <span className="font-inter text-steel-200 text-sm">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h3 className="font-barlow font-bold text-2xl text-steel-100 text-center mb-10">
            Our Journey
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute top-5 left-0 right-0 h-px bg-steel-700" />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="relative flex flex-col items-center text-center">
                  {/* Dot */}
                  <div className="w-10 h-10 rounded-full bg-steel-800 border-2 border-gold-500 flex items-center justify-center mb-4 relative z-10">
                    <span className="w-2.5 h-2.5 rounded-full bg-gold-500" />
                  </div>
                  <div className="font-barlow font-bold text-gold-500 text-lg mb-1">{milestone.year}</div>
                  <p className="font-inter text-steel-400 text-xs leading-relaxed">{milestone.event}</p>
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
