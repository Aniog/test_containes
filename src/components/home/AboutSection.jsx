import { useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function AboutSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" className="py-20 md:py-28 bg-brand-navy relative overflow-hidden" ref={containerRef}>
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 border border-brand-gold/5 rounded-full" />
      <div className="absolute -bottom-20 -left-20 w-60 h-60 border border-brand-gold/5 rotate-45" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <div className="lg:w-1/2">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                data-strk-img-id="about-factory-9f3b7e"
                data-strk-img="[about-title] [about-subtitle] modern metal fabrication facility industrial machinery"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'%3E%3Crect fill='%231B2A4A' width='4' height='3'/%3E%3C/svg%3E"
                alt="ARTITECT MACHINERY manufacturing facility"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content side */}
          <div className="lg:w-1/2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-brand-gold" />
              <span className="text-brand-gold tracking-[0.3em] text-sm uppercase font-medium">
                About Us
              </span>
            </div>
            <h2
              id="about-title"
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6"
            >
              Crafting the Future of
              <br />
              <span className="text-brand-gold">Metal Forming</span>
            </h2>
            <p
              id="about-subtitle"
              className="text-white/60 text-base md:text-lg leading-relaxed mb-6"
            >
              Founded in 2003, ARTITECT MACHINERY began with a simple vision:
              build folding machines that outperform every competitor in
              precision, durability, and value. Today, our equipment operates
              in over 60 countries across five continents.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-8">
              Every machine we ship reflects our commitment to engineering
              excellence — from the selection of raw materials to final
              calibration. We don't just build machines; we build partnerships
              that help our customers succeed.
            </p>

            {/* Testimonial */}
            <div className="border-l-2 border-brand-gold pl-6">
              <Quote size={24} className="text-brand-gold mb-3" />
              <blockquote className="text-white/80 text-base md:text-lg italic leading-relaxed mb-3">
                "The precision and reliability of ARTITECT's folding machines
                transformed our production line. We saw a 40% increase in
                output within the first quarter."
              </blockquote>
              <cite className="text-brand-gold text-sm not-italic font-medium">
                — Thomas Richter, Operations Director, EuroSteel GmbH
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}