import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
        {/* Image */}
        <div className="aspect-[4/5] bg-[#F5F0EB] overflow-hidden">
          <img
            alt="Velmora brand story"
            data-strk-img-id="brand-story-img"
            data-strk-img={`[brand-story-text] gold jewelry craftsmanship workshop editorial warm`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="md:pl-16 lg:pl-24 mt-10 md:mt-0">
          <p className="text-xs tracking-[0.15em] uppercase text-[#C8A96E] mb-4">Our Story</p>
          <h2 className="font-serif text-3xl md:text-4xl italic text-[#1A1514] tracking-wide leading-tight mb-6">
            Jewelry That Tells<br />Your Story
          </h2>
          <p
            id="brand-story-text"
            className="text-[#7A7268] leading-relaxed text-sm md:text-base mb-8 max-w-md"
          >
            Velmora was founded on the belief that beautiful jewelry shouldn't come with an impossible price tag. 
            Each piece is crafted with 18K gold plating and ethically sourced materials, designed in our atelier 
            to bring you the quiet luxury of fine jewelry — made to be worn every day and treasured for a lifetime.
          </p>
          <Link to="#" className="btn-outline">
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
