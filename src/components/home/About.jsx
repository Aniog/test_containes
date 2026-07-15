import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle } from 'lucide-react';

const highlights = [
  'Founded in 1999 with a mission to redefine sheet metal forming',
  'ISO 9001:2015 certified manufacturing facility',
  'In-house R&D team of 60+ engineers',
  'Machines operating in aerospace, automotive, and construction industries',
  'Custom engineering solutions for unique production requirements',
];

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-24 md:py-32 bg-chalk">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                alt="ARTITECT Machinery manufacturing facility"
                data-strk-img-id="about-img-4m5n6o"
                data-strk-img="[about-desc] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-steel rounded-2xl px-7 py-5 shadow-xl">
              <div className="font-playfair font-bold text-3xl text-gold">25+</div>
              <div className="font-inter text-xs text-silver uppercase tracking-widest mt-1">Years of Excellence</div>
            </div>
          </div>

          {/* Text Side */}
          <div>
            <p className="font-inter text-xs text-gold tracking-[0.35em] uppercase mb-4">About ARTITECT</p>
            <h2 id="about-title" className="font-playfair font-bold text-4xl md:text-5xl text-steel mb-6 leading-tight">
              Crafting Precision Since 1999
            </h2>
            <p id="about-desc" className="font-inter text-base text-charcoal/70 leading-relaxed mb-8">
              ARTITECT MACHINERY was founded on a single principle: that precision and reliability should never be compromised. From our state-of-the-art manufacturing facility, we design and build sheet metal folding machines that set the global standard for quality, performance, and longevity.
            </p>
            <p className="font-inter text-base text-charcoal/70 leading-relaxed mb-8">
              Our engineering team works closely with customers across industries to develop solutions that solve real production challenges — from compact workshop folders to large-scale automated folding lines.
            </p>

            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-gold flex-shrink-0 mt-0.5" />
                  <span className="font-inter text-sm text-charcoal">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
