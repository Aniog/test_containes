import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function AboutSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} id="about" className="py-20 px-6 bg-[#FFF8F0]">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Our wood-fired oven"
            className="w-full h-80 object-cover rounded-2xl shadow-lg"
            data-strk-img-id="about-img-d4e5f6"
            data-strk-img="[about-title] [about-desc]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="600"
          />
          <div className="absolute -bottom-4 -right-4 bg-[#C0392B] text-white rounded-2xl px-6 py-4 shadow-lg">
            <p className="text-3xl font-extrabold">25+</p>
            <p className="text-sm font-medium">Years of Craft</p>
          </div>
        </div>

        {/* Text */}
        <div>
          <p className="text-[#E67E22] font-semibold uppercase tracking-widest text-sm mb-3">Our Story</p>
          <h2 id="about-title" className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-5">
            Born in Naples,<br />Made for You
          </h2>
          <p id="about-desc" className="text-[#6B5B4E] text-lg leading-relaxed mb-5">
            Since 1999, we've been crafting pizzas the old-fashioned way — slow-fermented dough, San Marzano tomatoes, and a wood-fired oven that never goes cold. Every pie is a love letter to the streets of Naples.
          </p>
          <p className="text-[#6B5B4E] text-lg leading-relaxed">
            We source our ingredients locally whenever possible, and our recipes have been passed down through three generations of the Rossi family.
          </p>
        </div>
      </div>
    </section>
  );
}
