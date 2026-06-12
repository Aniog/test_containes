import { useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const milestones = [
  { year: '1999', event: 'Founded in Stuttgart, Germany' },
  { year: '2005', event: 'Launched first CNC folding machine series' },
  { year: '2012', event: 'Expanded to 25 international markets' },
  { year: '2018', event: 'Introduced Industry 4.0 smart machine platform' },
  { year: '2024', event: 'Over 500 machines operating worldwide' },
];

const values = [
  'Precision-engineered to the tightest tolerances',
  'Rigorous quality control at every production stage',
  'Continuous R&D investment in new technologies',
  'Dedicated after-sales and technical support',
  'Sustainable manufacturing practices',
];

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="bg-[#EDE9E0] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase">
              Our Story
            </span>
            <div className="w-10 h-px bg-[#C9A84C]" />
          </div>
          <h2
            id="about-heading"
            className="text-4xl md:text-5xl font-bold text-[#0F1C2E] mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Crafting Precision Since 1999
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <img
                alt="ARTITECT MACHINERY factory and engineering team"
                data-strk-img-id="about-factory-4f7a2b"
                data-strk-img="[about-desc] [about-heading]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#0F1C2E] text-white rounded-2xl p-6 shadow-xl hidden md:block">
              <div className="text-4xl font-bold text-[#C9A84C]">25+</div>
              <div className="text-sm text-white/70 mt-1 uppercase tracking-wide">Years of Excellence</div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <p
              id="about-desc"
              className="text-gray-600 text-lg leading-relaxed mb-6"
            >
              ARTITECT MACHINERY was founded with a singular vision: to build the world's
              most precise and reliable sheet metal folding machines. From our origins in
              Stuttgart, Germany, we have grown into a globally trusted manufacturer serving
              fabricators, manufacturers, and metalworking professionals across 40+ countries.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our engineering team combines decades of hands-on experience with cutting-edge
              technology to produce machines that set the standard for accuracy, durability,
              and ease of use. Every ARTITECT machine is a testament to our commitment to
              craftsmanship and innovation.
            </p>

            {/* Values */}
            <ul className="space-y-3 mb-10">
              {values.map((value) => (
                <li key={value} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C9A84C] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-20">
          <h3 className="text-center text-2xl font-bold text-[#0F1C2E] mb-10">
            Our Journey
          </h3>
          <div className="relative">
            {/* Line */}
            <div className="hidden md:block absolute top-5 left-0 right-0 h-px bg-[#C9A84C]/30" />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {milestones.map((m, i) => (
                <div key={m.year} className="relative flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-[#C9A84C] text-[#0F1C2E] font-bold text-xs flex items-center justify-center z-10 mb-3">
                    {i + 1}
                  </div>
                  <div className="text-[#C9A84C] font-bold text-sm mb-1">{m.year}</div>
                  <div className="text-gray-600 text-xs leading-relaxed">{m.event}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
