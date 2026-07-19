import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-velvet-200 overflow-hidden">
            <img
              alt="Velmora craftsmanship"
              data-strk-img-id="brand-story-img"
              data-strk-img="jewelry artisan crafting gold necklace hands close up warm workshop"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="bg-velvet-100 p-10 md:p-16 lg:p-20">
            <p className="text-xs tracking-super uppercase text-sand-600 font-medium mb-4">Our Story</p>
            <h2 className="font-serif text-3xl md:text-4xl text-velvet-900 font-light mb-6 leading-tight">
              Jewelry That Tells<br />Your Story
            </h2>
            <p className="text-velvet-600 leading-relaxed mb-6 text-sm">
              Velmora was born from a simple belief: that every woman deserves jewelry that
              makes her feel extraordinary, without the extraordinary price tag. Our pieces
              are crafted in small batches using 18K gold plating and ethically sourced materials.
            </p>
            <p className="text-velvet-600 leading-relaxed mb-8 text-sm">
              From our studio to your jewelry box — each piece is designed to be worn, loved,
              and passed down. This is demi-fine, done differently.
            </p>
            <Link to="#" className="btn-outline">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
