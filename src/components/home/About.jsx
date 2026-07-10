import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const milestones = [
  { year: '1999', event: 'Artitect Machinery founded with a focus on precision sheet metal equipment.' },
  { year: '2005', event: 'Launched the first CNC-controlled double folding machine series.' },
  { year: '2012', event: 'Expanded global distribution to 25+ countries across Europe and Asia.' },
  { year: '2018', event: 'Introduced Industry 4.0 smart connectivity across the full product range.' },
  { year: '2024', event: 'Celebrating 500+ machines delivered worldwide with zero compromise on quality.' },
];

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="bg-navy py-24 md:py-32 border-t border-border-steel">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-sm aspect-[4/3]">
              <img
                alt="Artitect Machinery factory floor"
                data-strk-img-id="about-img-3f8a2b"
                data-strk-img="[about-subtitle] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Gold accent border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/30 rounded-sm -z-10" />
          </div>

          {/* Right: Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-gold" />
              <span className="text-xs font-semibold tracking-widest uppercase text-gold">Our Story</span>
            </div>
            <h2 id="about-title" className="text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight mb-4">
              25 Years of Folding Excellence
            </h2>
            <p id="about-subtitle" className="text-text-secondary leading-relaxed mb-6">
              Founded in 1999, Artitect Machinery has grown from a specialist fabrication equipment supplier into a globally recognised manufacturer of precision sheet metal folding machines.
            </p>
            <p className="text-text-secondary leading-relaxed mb-10">
              Our engineering team combines decades of hands-on experience with cutting-edge manufacturing technology to produce machines that set the benchmark for accuracy, durability, and ease of use. Every Artitect machine leaves our facility fully tested and ready for immediate production.
            </p>

            {/* Timeline */}
            <div className="space-y-5">
              {milestones.map((m, i) => (
                <div key={m.year} className="flex gap-4 items-start">
                  <div className="shrink-0 w-14 text-right">
                    <span className="text-xs font-bold text-gold tracking-wide">{m.year}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full bg-gold mt-1 shrink-0" />
                    {i < milestones.length - 1 && <div className="w-px flex-1 bg-border-steel mt-1" style={{ minHeight: '24px' }} />}
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed pb-2">{m.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
