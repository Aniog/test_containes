import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function BrandStory() {
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-velmora-espresso">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
        {/* Image */}
        <div className="relative min-h-[350px] md:min-h-full">
          <img
            alt="Velmora brand story"
            data-strk-img-id="brand-story-img-c3a7b1"
            data-strk-img="[brand-story-title]"
            data-strk-img-ratio="4x5"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="w-full h-full object-cover absolute inset-0"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center px-8 lg:px-16 py-16 md:py-0">
          <span className="text-xs tracking-widest uppercase text-velmora-gold mb-4">Our Story</span>
          <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl text-white font-medium leading-tight">
            Jewelry that becomes part of your story.
          </h2>
          <p className="mt-5 text-white/60 leading-relaxed text-sm md:text-base max-w-md">
            At Velmora, we believe demi-fine jewelry should be effortless — pieces that move with you from morning coffee to evening cocktails. Each design is crafted from 18K gold-plated sterling silver, made for everyday wear and timeless appeal.
          </p>
          <button
            onClick={() => navigate('/about')}
            className="mt-8 inline-flex items-center gap-2 text-velmora-gold hover:text-velmora-gold-dark text-xs font-medium tracking-widest uppercase transition-colors group"
          >
            Read More
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
