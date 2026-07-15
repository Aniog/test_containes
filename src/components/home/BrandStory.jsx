import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} id="about" className="py-16 lg:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-story-text] [brand-story-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora Fine Jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <h2
              id="brand-story-title"
              className="text-3xl sm:text-4xl font-serif font-semibold text-neutral-900 mb-6"
            >
              Our Story
            </h2>
            <p
              id="brand-story-text"
              className="text-neutral-600 mb-6 leading-relaxed"
            >
              Velmora was born from a simple belief: every woman deserves to feel extraordinary. 
              We create demi-fine jewelry that bridges the gap between luxury and accessibility, 
              offering pieces that are crafted with the same attention to detail as high-end 
              jewelry, but at prices that allow you to build a collection you love.
            </p>
            <p className="text-neutral-600 mb-8 leading-relaxed">
              Each piece in our collection is designed to be treasured — timeless enough to wear 
              every day, yet special enough to mark life's most precious moments. We use only 
              the finest materials, including 18K gold plating and hypoallergenic metals, 
              ensuring that every piece is as kind to your skin as it is beautiful.
            </p>
            <Link
              to="/shop"
              className="inline-block bg-brand-500 hover:bg-brand-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
            >
              Explore Our Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}