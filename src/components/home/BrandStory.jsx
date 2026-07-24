import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream-200">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative overflow-hidden aspect-[4/5] lg:aspect-[3/4]">
            <img
              data-strk-img-id="brand-story-main-image"
              data-strk-img="artisan gold jewelry workshop crafting elegant hands making jewelry"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan crafting jewelry"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:py-8">
            <div className="hairline mb-6" />
            <h2 className="heading-section text-charcoal-800 mb-6" id="brand-story-title">
              Our Story
            </h2>
            <p className="text-charcoal-500 leading-relaxed mb-5" id="brand-story-desc">
              Velmora was born from a simple belief: every woman deserves jewelry that feels as special as she is. We create demi-fine pieces that bridge the gap between costume and fine jewelry — premium quality without the luxury markup.
            </p>
            <p className="text-charcoal-500 leading-relaxed mb-8">
              Each piece is crafted with 18K gold plating over surgical-grade steel, designed to be worn every day and treasured for years. Because the best jewelry isn&apos;t locked in a box — it&apos;s part of your story.
            </p>
            <Link to="/about" className="btn-outline">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
