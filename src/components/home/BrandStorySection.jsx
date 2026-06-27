import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStorySection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-0 bg-[#fdfaf6]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px] md:min-h-[600px]">
          {/* Image side */}
          <div className="relative overflow-hidden aspect-[4/3] md:aspect-auto bg-[#2c2825]">
            <img
              data-strk-img-id="brand-story-img-6c3d9a"
              data-strk-img="[brand-story-heading] gold jewelry artisan craftsmanship"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#1a1714]/20" />
          </div>

          {/* Text side */}
          <div className="flex items-center bg-[#f0ebe4] px-8 md:px-12 lg:px-16 py-16 md:py-20">
            <div className="max-w-md">
              <p className="font-sans text-xs tracking-[0.25em] uppercase text-[#c9a96e] mb-4">
                Our Story
              </p>
              <h2
                id="brand-story-heading"
                className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-light text-[#2c2825] leading-[1.2] mb-6"
              >
                Made with intention,<br />
                <em className="italic">worn with love</em>
              </h2>
              <div className="w-10 h-px bg-[#c9a96e] mb-6" />
              <p className="font-sans text-sm text-[#7a6f66] leading-relaxed mb-4">
                Velmora was born from a simple belief: that beautiful jewelry shouldn't be reserved for special occasions. We design demi-fine pieces that bridge the gap between fast fashion and fine jewelry — crafted to last, priced to be worn every day.
              </p>
              <p className="font-sans text-sm text-[#7a6f66] leading-relaxed mb-8">
                Every piece is thoughtfully designed in our studio and crafted using 18K gold plating over hypoallergenic bases. We believe in jewelry that tells your story.
              </p>
              <Link
                to="/#about"
                className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.15em] uppercase text-[#c9a96e] hover:gap-3 transition-all duration-300 group"
              >
                Read Our Story
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
