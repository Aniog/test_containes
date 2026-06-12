import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const milestones = [
  { year: '2005', event: 'ARTITECT MACHINERY founded in Germany' },
  { year: '2010', event: 'Launched first CNC-controlled folding machine series' },
  { year: '2015', event: 'Expanded to 40+ countries with global distribution' },
  { year: '2020', event: 'Introduced Industry 4.0 smart machine connectivity' },
  { year: '2024', event: '500+ machines delivered worldwide' },
];

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-24 md:py-32 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                alt="ARTITECT MACHINERY workshop"
                data-strk-img-id="about-workshop-img-4f8a2d"
                data-strk-img="[about-desc] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Gold accent card */}
            <div className="absolute -bottom-6 -right-6 bg-brand-gold rounded-2xl p-6 shadow-xl hidden md:block">
              <div className="text-brand-navy font-extrabold text-3xl">20+</div>
              <div className="text-brand-navy font-semibold text-sm mt-1">Years of<br />Excellence</div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <p className="text-brand-gold text-sm font-semibold tracking-widest uppercase mb-3">
              Our Story
            </p>
            <h2 id="about-title" className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight mb-5">
              Crafting Precision Since 2005
            </h2>
            <p id="about-desc" className="text-brand-silver leading-relaxed mb-6">
              ARTITECT MACHINERY was founded with a single mission: to build the world's
              most reliable and precise sheet metal folding machines. From our roots in
              precision engineering, we have grown into a globally trusted manufacturer
              serving fabricators, manufacturers, and metalworkers across 40+ countries.
            </p>
            <p className="text-brand-silver leading-relaxed mb-10">
              Every machine that leaves our facility undergoes rigorous quality testing
              to ensure it meets the exacting standards our customers depend on. We
              combine traditional craftsmanship with cutting-edge technology to deliver
              machines that perform flawlessly for decades.
            </p>

            {/* Timeline */}
            <div className="space-y-4">
              {milestones.map((m) => (
                <div key={m.year} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 text-brand-gold font-bold text-sm pt-0.5">
                    {m.year}
                  </div>
                  <div className="flex-shrink-0 w-px bg-brand-silver/30 self-stretch mx-1" />
                  <p className="text-brand-steel text-sm leading-relaxed">{m.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
