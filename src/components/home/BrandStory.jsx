import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-[#F5F2ED]">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Image */}
        <div className="relative aspect-[4/5] md:aspect-auto">
          <div
            data-strk-bg-id="brand-story-bg-d4e5f6"
            data-strk-bg="[brand-story-title] [brand-story-subtitle]"
            data-strk-bg-ratio="4x5"
            data-strk-bg-width="1000"
            className="absolute inset-0"
          />
        </div>

        {/* Text */}
        <div className="flex items-center justify-center p-8 md:p-16 lg:p-24">
          <div className="max-w-md">
            <p className="text-xs tracking-[0.3em] uppercase text-[#6B6560] mb-4">Our Story</p>
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
              Where Craft<br />Meets Care
            </h2>
            <p id="brand-story-subtitle" className="text-[#6B6560] leading-relaxed mb-8">
              Every Velmora piece begins as a sketch, shaped by hands that understand the weight of a well-made thing. 
              We believe luxury shouldn't cost the earth — or your values. Our demi-fine collection is crafted with 
              18K gold plating over recycled brass, designed to be worn daily and treasured always.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-[#1A1A1A] hover:text-[#C9A96E] transition-colors group">
              Read Our Story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
