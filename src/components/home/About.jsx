import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle } from 'lucide-react';

const milestones = [
  { year: '1998', event: 'Founded in Stuttgart, Germany' },
  { year: '2005', event: 'Launched first CNC double folding machine' },
  { year: '2012', event: 'Expanded to 40+ global markets' },
  { year: '2018', event: 'Introduced Industry 4.0 smart machine platform' },
  { year: '2024', event: '500th machine delivered worldwide' },
];

const values = [
  'Precision engineering in every component',
  'Sustainable manufacturing practices',
  'Customer-first design philosophy',
  'Continuous innovation and R&D investment',
  'Transparent, long-term partnerships',
];

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" className="py-24 bg-[#F5F6F8]" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-[#1C3A5E]">
              <img
                alt="ARTITECT Machinery factory and engineering team"
                data-strk-img-id="about-factory-3k9m2p"
                data-strk-img="[about-subtitle] [about-title] precision metal fabrication factory engineering"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#C9A84C] text-[#0D1B2A] rounded-2xl p-6 shadow-xl">
              <div
                className="text-4xl font-bold"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                25+
              </div>
              <div className="text-xs font-bold tracking-widest uppercase mt-1">
                Years of Excellence
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <span className="text-xs tracking-widest uppercase text-[#C9A84C] font-semibold">
              Our Story
            </span>
            <h2
              id="about-title"
              className="text-4xl md:text-5xl font-bold text-[#0D1B2A] mt-3 mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Crafting Precision Since 1998
            </h2>
            <p
              id="about-subtitle"
              className="text-[#8A9BB0] text-lg leading-relaxed mb-6"
            >
              ARTITECT MACHINERY was founded with a singular vision: to create sheet
              metal folding machines that set the global standard for precision,
              reliability, and ease of use.
            </p>
            <p className="text-[#2E3A4A] leading-relaxed mb-8">
              From our engineering headquarters, we design and manufacture every
              machine with meticulous attention to detail. Our team of over 200
              engineers and technicians combines decades of metalworking expertise
              with cutting-edge technology to deliver machines that fabricators
              around the world trust every day.
            </p>

            {/* Values */}
            <ul className="space-y-3 mb-10">
              {values.map((value) => (
                <li key={value} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C9A84C] flex-shrink-0 mt-0.5" />
                  <span className="text-[#2E3A4A] text-sm">{value}</span>
                </li>
              ))}
            </ul>

            {/* Timeline */}
            <div className="border-t border-[#E8EAED] pt-8">
              <h4
                className="text-sm font-bold text-[#0D1B2A] tracking-widest uppercase mb-5"
              >
                Key Milestones
              </h4>
              <div className="space-y-3">
                {milestones.map((m) => (
                  <div key={m.year} className="flex items-center gap-4">
                    <span className="text-[#C9A84C] font-bold text-sm w-12 flex-shrink-0">
                      {m.year}
                    </span>
                    <span className="w-px h-4 bg-[#E8EAED]" />
                    <span className="text-[#2E3A4A] text-sm">{m.event}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
