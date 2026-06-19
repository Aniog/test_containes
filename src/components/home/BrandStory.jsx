import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-2">
          {/* Image */}
          <div className="aspect-[4/5] md:aspect-auto bg-velvet-100 overflow-hidden">
            <div
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-title] [brand-subtitle]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              className="w-full h-full"
            />
          </div>
          {/* Text */}
          <div className="flex flex-col justify-center px-6 md:px-14 lg:px-20 py-16 md:py-20">
            <p className="text-xs tracking-[0.15em] uppercase text-gold-600 mb-6 font-medium">
              Our Story
            </p>
            <h2
              id="brand-title"
              className="serif-heading text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight"
            >
              Jewelry that becomes part of your story
            </h2>
            <p
              id="brand-subtitle"
              className="text-velvet-500 leading-relaxed mb-3"
            >
              Velmora was born from the belief that fine jewelry should be lived in — not locked away. Every piece is crafted in 18K gold plate with the same attention to detail as luxury houses, priced for the woman building her own collection.
            </p>
            <p className="text-velvet-500 leading-relaxed mb-8">
              We design for quiet confidence. For the ear stack that signals your mood. For the necklace that becomes your signature. Demi-fine, made meaningful.
            </p>
            <div>
              <Link to="/about" className="btn-outline text-xs">
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
